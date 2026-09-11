import { useEffect, useMemo, useState } from 'react';
import { gallery } from '../data/content';

const SET_SIZE = 4;
const MS_PER_SET = 3800; // how long each set of 4 stays before advancing

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Screen 5 — auto-advancing photo montage: sets of 4 zoom in, then the next set.
export default function Gallery({ onReplay }) {
  const shuffled = useMemo(() => shuffle(gallery), []);
  const sets = useMemo(() => {
    const out = [];
    for (let i = 0; i < shuffled.length; i += SET_SIZE) out.push(shuffled.slice(i, i + SET_SIZE));
    return out;
  }, [shuffled]);

  const [i, setI] = useState(0);
  const done = i >= sets.length;

  useEffect(() => {
    if (done) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(() => setI((n) => n + 1), reduce ? MS_PER_SET + 1500 : MS_PER_SET);
    return () => clearTimeout(t);
  }, [i, done]);

  if (done) {
    return (
      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
        <p className="font-hand text-3xl text-cream rise">that's the end of your little gift 🎁</p>
        <button
          onClick={onReplay}
          className="mt-10 rounded-full bg-blush px-8 py-4 font-hand text-2xl text-wine shadow-xl transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold"
        >
          replay my little gift ↻
        </button>
      </div>
    );
  }

  const current = sets[i];

  return (
    <div
      className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-4"
      onClick={() => setI((n) => n + 1)}
      role="button"
      aria-label="Next photos"
    >
      <div key={i} className="grid w-full max-w-md grid-cols-2 gap-3">
        {current.map((src, k) => (
          <div key={k} className="relative overflow-hidden rounded-md bg-wine2 shadow-xl" style={{ aspectRatio: '1 / 1' }}>
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              style={{ animation: `kenburns ${MS_PER_SET + 400}ms ease-out both`, animationDirection: k % 2 ? 'alternate' : 'normal' }}
              onError={(e) => { e.currentTarget.style.opacity = 0.15; }}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-2">
        {sets.map((_, d) => (
          <span key={d} className={`h-2 w-2 rounded-full ${d === i ? 'bg-gold' : 'bg-cream/25'}`} />
        ))}
      </div>
      <p className="mt-4 font-hand text-cream/40 text-base">tap to skip →</p>
    </div>
  );
}