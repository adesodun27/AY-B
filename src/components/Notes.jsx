import { messages } from "../data/content";
import RevealLine from "./RevealLine";

// Screen — a few handwritten notes from her friends ("soft chaos").
const tints = ["#FBF6EE", "#F7E9EE", "#F3EEDD"]; // cream, blush-paper, warm-paper
const rot = ["-2deg", "2.5deg", "-1.5deg", "2deg"];

export default function Notes() {
  if (!messages || messages.length === 0) return null;

  return (
    <section className="relative z-10 flex min-h-[100dvh] snap-start flex-col items-center justify-start gap-8 px-5 py-24">
      <RevealLine className="text-center font-display text-4xl text-cream">
        a few words from soft chaos 🤍
      </RevealLine>

      {messages.map((m, i) => (
        <RevealLine key={i} delay={0.05 * i} className="w-full max-w-md">
          <div
            className="relative mx-auto rounded-sm px-6 py-7 text-ink shadow-xl"
            style={{
              background: tints[i % tints.length],
              transform: `rotate(${rot[i % rot.length]})`,
              boxShadow: "0 14px 40px rgba(0,0,0,0.45)",
            }}
          >
            <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-2 rounded-sm bg-blush/60" />
            <p className="font-hand text-2xl leading-snug">{m.text}</p>
            <p className="mt-4 text-right font-hand text-xl text-ink/70">
              — {m.from}
            </p>
          </div>
        </RevealLine>
      ))}
    </section>
  );
}
