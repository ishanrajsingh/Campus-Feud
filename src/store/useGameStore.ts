import { create } from "zustand";
import { questions as initialQuestions } from "../data/questions";
import { ref, set as firebaseSet, onValue, remove, get } from "firebase/database";
import { db } from "../firebase";

export type Answer = {
  text: string;
  points: number;
  revealed: boolean;
  revealType: "flip" | "fade" | null;
};

export type Question = {
  question: string;
  answers: Answer[];
};

export type Team = {
  name: string;
  score: number;
};

type GameState = {
  qIndex: number;
  questions: Question[];
  strikes: number;
  timer: number;
  running: boolean;
  teams: Team[];
  showRound: boolean;
  currentRound: number | null;

  addTeam: (name: string) => void;
  updateScore: (i: number, delta: number) => void;
  removeTeam: (i: number) => void;
  editTeamName: (i: number, name: string) => void;

  setQuestion: (i: number) => void;
  showRoundScreen: (round: number) => void;

  revealAnswer: (qi: number, ai: number) => void;
  revealAllSequential: () => Promise<void>;
  nextQ: () => void;
  prevQ: () => void;
  addStrike: () => void;
  resetStrike: () => void;

  setTimer: (t: number) => void;
  setRunning: (r: boolean) => void;

  resetGame: () => void;
  clearAllData: () => Promise<void>;

  sync: () => void;
  strikeEvent: number;
  specificTrigger: number;
  triggerSpecific: () => void;
  resetSpecific: () => void;
};

let timerInterval: ReturnType<typeof setInterval> | null = null;

// ✅ sanitize (removes undefined)
const sanitize = (obj: any) => JSON.parse(JSON.stringify(obj));

// ✅ serialize only data (no functions)
const getSerializableState = (state: GameState) =>
  sanitize({
    qIndex: state.qIndex,
    questions: state.questions,
    strikes: state.strikes,
    timer: state.timer,
    running: state.running,
    teams: state.teams,
    showRound: state.showRound,
    currentRound: state.currentRound,
    specificTrigger: state.specificTrigger,
    strikeEvent: state.strikeEvent,
  });

// ✅ deep clone questions
const cloneInitialQuestions = () =>
  initialQuestions.map((q) => ({
    ...q,
    answers: q.answers.map((a) => ({
      ...a,
      revealed: false,
      revealType: null,
    })),
  }));

// ✅ ONLY DATA (NOT FULL GameState)
type StoreData = Omit<
  GameState,
  | "addTeam"
  | "updateScore"
  | "removeTeam"
  | "editTeamName"
  | "setQuestion"
  | "showRoundScreen"
  | "revealAnswer"
  | "revealAllSequential"
  | "nextQ"
  | "prevQ"
  | "addStrike"
  | "resetStrike"
  | "setTimer"
  | "setRunning"
  | "resetGame"
  | "clearAllData"
  | "sync"
  | "triggerSpecific"
  | "resetSpecific"
>;

const defaultState: StoreData = {
  qIndex: 0,
  questions: cloneInitialQuestions(),
  strikes: 0,
  timer: 30,
  running: false,
  teams: [],
  showRound: false,
  currentRound: null,
  specificTrigger: 0,
  strikeEvent: 0,
};

export const useGameStore = create<GameState>((set, getState) => ({
  ...defaultState,

  sync: () => {
    const clean = getSerializableState(getState());
    firebaseSet(ref(db, "gameState"), clean);
  },

  addTeam: (name) => {
    set((s) => ({ teams: [...s.teams, { name, score: 0 }] }));
    getState().sync();
  },

  updateScore: (i, delta) => {
    set((s) => {
      const teams = [...s.teams];
      if (teams[i]) teams[i].score = Math.max(0, teams[i].score + delta);
      return { teams };
    });
    getState().sync();
  },

  removeTeam: (i) => {
    set((s) => ({ teams: s.teams.filter((_, idx) => idx !== i) }));
    getState().sync();
  },

  editTeamName: (i, name) => {
    set((s) => {
      const teams = [...s.teams];
      if (teams[i]) teams[i].name = name;
      return { teams };
    });
    getState().sync();
  },

  setQuestion: (i) => {
    set({ qIndex: i, showRound: false });
    getState().sync();
  },

  showRoundScreen: (round) => {
    set({ currentRound: round, showRound: true });
    getState().sync();
  },

  revealAnswer: (qi, ai) => {
    const s = getState();
    const questions = [...s.questions];

    if (!questions[qi]?.answers[ai]) return;

    questions[qi].answers[ai].revealed = true;
    questions[qi].answers[ai].revealType = "flip";

    set({ questions });
    getState().sync();
  },

  revealAllSequential: async () => {
    const s = getState();
    const q = s.questions[s.qIndex];
    if (!q) return;

    for (let i = 0; i < q.answers.length; i++) {
      if (!q.answers[i].revealed) {
        const questions = [...s.questions];

        questions[s.qIndex].answers[i].revealed = true;
        questions[s.qIndex].answers[i].revealType = "fade";

        set({ questions });

        await new Promise((r) => setTimeout(r, 1500));
      }
    }

    getState().sync();
  },

  nextQ: () => {
    set((s) => ({
      qIndex: Math.min(s.questions.length - 1, s.qIndex + 1),
      showRound: false,
    }));
    getState().sync();
  },

  prevQ: () => {
    set((s) => ({
      qIndex: Math.max(0, s.qIndex - 1),
      showRound: false,
    }));
    getState().sync();
  },

  addStrike: () => {
    set((s) => ({
      strikes: s.strikes + 1,
      strikeEvent: s.strikeEvent + 1, // 🔥 trigger event
    }));
    getState().sync();
},

  resetStrike: () => {
    set({ strikes: 0 });
    getState().sync();
  },

  setRunning: (r) => {
    set({ running: r });

    if (timerInterval) clearInterval(timerInterval);

    if (r) {
      timerInterval = setInterval(() => {
        const s = getState();

        if (s.timer > 0) {
          const newTimer = s.timer - 1;
          set({ timer: newTimer, running: newTimer !== 0 });
        }

        firebaseSet(ref(db, "gameState"), getSerializableState(getState()));
      }, 1000);
    }

    getState().sync();
  },

  setTimer: (t) => {
    set({ timer: t });
    if (timerInterval) clearInterval(timerInterval);
    getState().sync();
  },

  // ✅ FIXED TS ERROR HERE
  resetGame: () => {
    set(() => defaultState);
    getState().sync();
  },

  clearAllData: async () => {
    await remove(ref(db, "gameState"));

    set(() => defaultState);

    firebaseSet(ref(db, "gameState"), getSerializableState(defaultState as any));
  },
  triggerSpecific: () => {
    set((s) => ({
      specificTrigger: s.specificTrigger + 1,
    }));
    getState().sync();
},

  resetSpecific: () => {
    set({ specificTrigger: 0 });
    getState().sync();
  },

}));

// ✅ INIT DB
setTimeout(async () => {
  const snapshot = await get(ref(db, "gameState"));

  if (!snapshot.exists()) {
    await firebaseSet(ref(db, "gameState"), getSerializableState(defaultState as any));
  }
}, 500);

// ✅ LISTENER
onValue(ref(db, "gameState"), (snapshot) => {
  const data = snapshot.val();
  if (!data) return;

  useGameStore.setState((prev) => ({
    ...prev,
    ...data,
  }));
});