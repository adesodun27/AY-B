import { useState } from 'react';
import { name } from '../data/content';

// Screen 1 — the gift box. Tap to open, then hand off to the flow.
export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const open = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 900); // let the flap animation breathe
  };

  return (
    <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <p className="font-hand text-blushSoft text-2xl mb-10 rise" style={{ animationDelay: '0.1s' }}>
        for someone very special…
      </p>

      <button
        onClick={open}
        aria-label="Open your gift"
        className="group relative focus:outline-none"
      >
        {/* envelope body */}
        <div
          className="relative h-40 w-64 rounded-md bg-blush shadow-2xl transition-transform duration-500 group-active:scale-95"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}
        >
          {/* flap */}
          <div
            className="absolute left-0 top-0 h-0 w-0 origin-top transition-transform duration-700"
            style={{
              borderLeft: '128px solid transparent',
              borderRight: '128px solid transparent',
              borderTop: '90px solid #F3C6D2',
              transform: opening ? 'rotateX(180deg)' : 'rotateX(0deg)',
              transformStyle: 'preserve-3d',
              zIndex: opening ? 0 : 5,
            }}
          />
          {/* wax seal */}
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-wine2 text-gold text-xl transition-opacity duration-300 ${opening ? 'opacity-0' : 'opacity-100'}`}
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.4)', zIndex: 6 }}>
            🤍
          </div>
        </div>
      </button>

      <p className="mt-12 font-hand text-cream/80 text-xl rise" style={{ animationDelay: '0.4s' }}>
        I made a little something for you, {name}.
      </p>
      <p className="mt-1 font-hand text-cream/50 text-lg rise" style={{ animationDelay: '0.6s' }}>
        don't rush. tap to open 🤍
      </p>
    </div>
  );
}
