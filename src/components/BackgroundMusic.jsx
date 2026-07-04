import { useEffect, useRef } from "react";
import galaxy from "../assets/sounds/galaxy.mp3";

function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(galaxy);

    audio.loop = true;
    audio.volume = 0.2; // 20% volume

    audioRef.current = audio;

    const startMusic = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      window.removeEventListener("click", startMusic);
    };
  }, []);

  return null;
}

export default BackgroundMusic;