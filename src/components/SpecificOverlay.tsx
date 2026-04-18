import { useEffect, useState } from "react";
import { useGameStore } from "../store/useGameStore";

export default function SpecificOverlay() {
  const trigger = useGameStore((s) => s.specificTrigger);
  const reset = useGameStore((s) => s.resetSpecific);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (trigger) {
      setShow(true);

      // 🔊 SOUND
      const audio = new Audio(
            "https://www.myinstants.com/media/sounds/ding-sound-effect.mp3"
            );
            audio.currentTime = 0;
            audio.play().catch(() => {});

      setTimeout(() => {
        setShow(false);
        reset();
      }, 3000);
    }
  }, [trigger,reset]);

  if (!show) return null;

  return <div className="specificOverlay">BE SPECIFIC</div>;
}