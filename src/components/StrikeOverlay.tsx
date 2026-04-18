import { useEffect, useState } from "react";
import { useGameStore } from "../store/useGameStore";

export default function StrikeOverlay() {
  const strikes = useGameStore((s) => s.strikes);
  const resetStrike = useGameStore((s) => s.resetStrike);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (strikes > 0) {
      setShow(true);

      setTimeout(() => {
        setShow(false);
        resetStrike();
      }, 3000);
    }
  }, [strikes]);

  if (!show) return null;

  return <div className="strikeFull">❌</div>;
}