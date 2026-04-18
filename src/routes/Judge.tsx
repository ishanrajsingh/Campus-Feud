import React from "react";
import { useGameStore } from "../store/useGameStore";

export default function Judge() {
  const {
    questions,
    qIndex,
    setQuestion,
    showRoundScreen,
  } = useGameStore();

  const revealAnswer = useGameStore((s) => s.revealAnswer);
  const addStrike = useGameStore((s) => s.addStrike);
  const beSpecific = useGameStore((s) => s.triggerSpecific);

  const setTimer = useGameStore((s) => s.setTimer);
  const setRunning = useGameStore((s) => s.setRunning);
  const timer = useGameStore((s) => s.timer);

  // 🔥 NEW: CLEAR FUNCTION
  const clearAllData = useGameStore((s) => s.clearAllData);

  const q = questions[qIndex];

  const roundBtn = {
  padding: "10px 14px",
  marginRight: "8px",
  marginBottom: "8px",
  fontWeight: "bold",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  background: "linear-gradient(145deg, gold, orange)",
};

  return (
    <div style={{ padding: 20 }}>
      <h2>Judge Panel</h2>

      <h3>Game Flow</h3>

      {/* ROUND 1 */}
<div style={{ marginBottom: "10px" }}>
  <button style={roundBtn} onClick={() => showRoundScreen(1)}>
    ROUND 1
  </button>

  {Array.from({ length: 35 }, (_, i) => i).map((i) => (
    <button
      key={i}
      style={roundBtn}
      onClick={() => setQuestion(i)}
      title={questions[i]?.question}
    >
      Q{i + 1}
    </button>
  ))}
</div>

{/* ROUND 2 */}
<div style={{ marginBottom: "10px" }}>
  <button style={roundBtn} onClick={() => showRoundScreen(2)}>
    ROUND 2
  </button>

  {Array.from({ length: 3 }, (_, i) => i + 35).map((i) => (
    <button
      key={i}
      style={roundBtn}
      onClick={() => setQuestion(i)}
      title={questions[i]?.question}
    >
      Q{i + 1}
    </button>
  ))}
</div>

{/* ROUND 3 */}
<div style={{ marginBottom: "10px" }}>
  <button style={roundBtn} onClick={() => showRoundScreen(3)}>
    ROUND 3
  </button>

  <button
    style={roundBtn}
    onClick={() => setQuestion(38)}
    title={questions[38]?.question}
  >
    Q39
  </button>
</div>

      <hr />

      <h3
  style={{
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#ffd700"
  }}
>
  Q{qIndex + 1}: {q.question}
</h3>

      <div style={{ marginTop: 10 }}>
  {q.answers.map((a, i) => (
    <button
      key={i}
      onClick={() => revealAnswer(qIndex, i)}
      style={{
        display: "block",
        width: "100%",
        marginBottom: "10px",
        padding: "14px 18px",
        fontSize: "18px",
        fontWeight: "600",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        background: a.revealed
          ? "linear-gradient(145deg, #00c853, #64dd17)"
          : "linear-gradient(145deg, #1e2a38, #2c3e50)",
        color: a.revealed ? "black" : "white",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      {i + 1}. {a.text} ({a.points})
    </button>
  ))}
</div>

      <br /><br />

      <div style={{ marginTop: 10 }}>
  <button
    onClick={addStrike}
    style={{
      padding: "12px 18px",
      marginRight: "10px",
      fontSize: "16px",
      background: "red",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    ❌ Strike
  </button>

  <button
    onClick={beSpecific}
    style={{
      padding: "12px 18px",
      fontSize: "16px",
      background: "gold",
      color: "black",
      border: "none",
      borderRadius: "8px",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    🎯 Be Specific
  </button>
</div>


      <hr />

      {/* ⏱ TIMER */}
      <h3>Timer</h3>

      <div style={{ marginTop: 10 }}>
  <button style={{ marginRight: 8 }} onClick={() => { setTimer(30); setRunning(true); }}>
    ▶ Start
  </button>
  <button style={{ marginRight: 8 }} onClick={() => setRunning(false)}>
    ⏸ Stop
  </button>
  <button onClick={() => setTimer(30)}>
    🔄 Reset
  </button>
</div>

      <p>{timer}s</p>

      <hr />

      {/* 🔥 CLEAR ALL DATA BUTTON */}
      <h3>Danger Zone</h3>

      <button
        style={{
          marginTop: 10,
          padding: "14px 20px",
          background: "linear-gradient(145deg, red, darkred)",
          color: "white",
          fontWeight: "bold",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 0 10px red",
        }}
        onClick={async () => {
          const confirmClear = window.confirm(
            "⚠️ This will DELETE all game data (Firebase + all devices).\nContinue?"
          );

          if (confirmClear) {
            await clearAllData();
          }
        }}
      >
        🧨 Clear All Game Data
      </button>
    </div>
  );
}