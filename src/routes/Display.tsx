import React, { useEffect, useRef } from "react";
import { useGameStore } from "../store/useGameStore";
import StrikeOverlay from "../components/StrikeOverlay";
import SpecificOverlay from "../components/SpecificOverlay";

export default function Display() {
  const questions = useGameStore((s) => s.questions);
  const qIndex = useGameStore((s) => s.qIndex);
  const showRound = useGameStore((s) => s.showRound);
  const currentRound = useGameStore((s) => s.currentRound);
  const strikes = useGameStore((s) => s.strikes);
  const timer = useGameStore((s) => s.timer);
  const running = useGameStore((s) => s.running);

  const prevAnswers = useRef<any[]>([]);
  const prevStrikes = useRef(0);
  const strikeEvent = useGameStore((s) => s.strikeEvent);
  const prevStrikeEvent = useRef(0);
  const prevTimer = useRef(timer);

  const q = questions[qIndex];

  // 🎹 KEY CONTROLS
  useEffect(() => {
    document.body.style.cursor = "none";

    const handleKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (key === "w") useGameStore.getState().addStrike();
      if (key === "r") useGameStore.getState().revealAllSequential();
      if (key === "b") useGameStore.getState().triggerSpecific();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // 🔊 ANSWER SOUND (click + R reveal)
  useEffect(() => {
  if (!q) return;

  const prev = prevAnswers.current;

  for (let i = 0; i < q.answers.length; i++) {
    const curr = q.answers[i];
    const old = prev[i];

    if (curr?.revealed && !old?.revealed) {
      const audio = new Audio(
        "https://www.myinstants.com/media/sounds/click.mp3"
      );
      audio.currentTime = 0;
      audio.play().catch(() => {});
      break; // 🔥 ONE SOUND PER CHANGE
    }
  }

  prevAnswers.current = q.answers.map((a) => ({ ...a }));
});

  // 🔊 STRIKE SOUND

useEffect(() => {
  if (strikeEvent > prevStrikeEvent.current) {
    const audio = new Audio(
      "https://www.orangefreesounds.com/wp-content/uploads/2014/10/Family-feud-buzzer.mp3"
    );
    audio.play().catch(() => {});
    
  }

  prevStrikeEvent.current = strikeEvent;
}, [strikeEvent]);

// 🔊 TIMER END SOUND
useEffect(() => {
  // 🔥 trigger only when timer goes from >0 → 0
  if (prevTimer.current > 0 && timer === 1) {
    const audio = new Audio(
      "https://www.myinstants.com/media/sounds/wwe-bell.mp3"
    );
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  prevTimer.current = timer;
}, [timer]);

  // ✅ NOW SAFE TO RETURN

  if (showRound) {
    return <div className="roundScreen">ROUND {currentRound}</div>;
  }

  if (!questions.length || !q) {
    return <div>Loading...</div>;
  }

  return (
    <div className="display">
      {running && timer > 0 && (
        <div className={`timerDisplay ${timer <= 10 ? "danger" : ""}`}>
          ⏱ {timer}s
        </div>
      )}

      <h1>{q.question}</h1>

      <div className="board">
        {q.answers.map((a, i) => (
          <div
            key={i}
            className={`card 
              ${a.revealed && a.revealType === "flip" ? "flip" : ""} 
              ${a.revealed && a.revealType === "fade" ? "fade" : ""}
            `}
          >
            <div className="inner">
              <div className="front">
                {a.revealed && a.revealType === "fade"
                  ? `${a.text} (${a.points})`
                  : `#${i + 1}`}
              </div>
              <div className="back">
                {a.text} ({a.points})
              </div>
            </div>
          </div>
        ))}
      </div>

      <StrikeOverlay />
      <SpecificOverlay />
    </div>
  );
}