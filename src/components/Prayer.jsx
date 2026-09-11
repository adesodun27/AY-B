
import { useState } from 'react';
import {
  letter,
  prayer,
  signoff,
  letterFrom,
  finalSurprise,
  name,
} from "../data/content";
import RevealLine from './RevealLine';

// Screen 4 — the emotional centre: letter, then the A4 prayer, then the final surprise.
export default function Prayer({ onFinish }) {
  const [opened, setOpened] = useState(false);
  

  return (
    <section className="relative z-10 flex min-h-[100dvh] snap-start flex-col items-center justify-start gap-16 px-5 py-24">
      {/* THE LETTER */}
      <div
        className="mx-auto w-full max-w-md rounded-sm bg-cream px-6 py-8 text-ink shadow-2xl"
        style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.5)" }}
      >
        <RevealLine className="mb-4 font-hand text-3xl">
          Dear {name},
        </RevealLine>
        {letter.map((p, i) => (
          <RevealLine
            key={i}
            delay={0.05 * i}
            className="mb-4 font-body text-xl leading-relaxed"
          >
            {p}
          </RevealLine>
        ))}
        <RevealLine delay={0.1} className="mt-6 text-right font-hand text-2xl">
          With love,
          <br />
          {letterFrom} 💕
        </RevealLine>
      </div>

      {/* THE A4 PRAYER */}
      <div
        className="mx-auto w-full max-w-md rounded-sm bg-cream px-7 py-12 text-ink shadow-2xl"
        style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.55)" }}
      >
        <RevealLine className="mb-6 text-center font-display text-3xl">
          A Prayer For You 🤍
        </RevealLine>
        <div className="flex flex-col gap-4">
          {prayer.map((line, i) => (
            <RevealLine
              key={i}
              delay={0.05 * i}
              className="font-hand text-2xl leading-snug"
            >
              {line}
            </RevealLine>
          ))}
        </div>
        <RevealLine
          delay={0.2}
          className="mt-8 text-center font-display text-2xl"
        >
          Happy Birthday, beautiful.
        </RevealLine>
      </div>

      {/* THE FINAL SURPRISE */}
      <div className="flex flex-col items-center text-center">
        {!opened ? (
          <button
            onClick={() => setOpened(true)}
            className="rounded-full bg-blush px-8 py-4 font-hand text-2xl text-wine shadow-xl transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold"
          >
            wait… there's one more thing 💌
          </button>
        ) : (
          <RevealLine className="mx-auto max-w-sm">
            <p className="font-hand text-3xl leading-relaxed text-cream">
              {finalSurprise}
            </p>
            <p className="mt-8 font-display text-xl text-blushSoft">
              — {signoff} 🤍
            </p>
            <button
              onClick={onFinish}
              className="mt-12 rounded-full border border-blush/40 bg-wine2/60 px-7 py-3 font-hand text-xl text-cream backdrop-blur transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              one last thing… 📸
            </button>
          </RevealLine>
        )}
      </div>
    </section>
  );
}
