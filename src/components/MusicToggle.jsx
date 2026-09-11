import { useEffect, useRef, useState } from 'react';
import { musicSrc } from '../data/content';

// Tap-to-play only — mobile browsers block autoplay, so this is a button by design.
export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (musicSrc) audioRef.current = new Audio(musicSrc);
    return () => { audioRef.current?.pause(); };
  }, []);

  if (!musicSrc) return null;

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.loop = true; a.volume = 0.6; a.play().then(() => setPlaying(true)).catch(() => {}); }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play a song for you"}
      className="fixed top-4 right-4 z-40 grid h-11 w-11 place-items-center rounded-full bg-wine2/70 backdrop-blur text-lg text-cream/90 border border-blush/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-gold"
    >
      <span className={playing ? "animate-pulse" : ""}>
        {playing ? "♪" : "🎧"}
      </span>
    </button>
  );
}
