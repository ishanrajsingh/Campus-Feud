import { useEffect } from "react";
import { useGameStore } from "../store/useGameStore";

export default function Timer() {
  const { timer, running, setTimer, setRunning } = useGameStore();

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      useGameStore.setState((s: any) => {
        if (s.timer <= 1) {
          return { timer: 0, running: false };
        }
        return { timer: s.timer - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="timerBox">
      <h2>⏱ {timer}s</h2>

      <div className="timerControls">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTimer(30)}>Reset</button>
      </div>
    </div>
  );
}