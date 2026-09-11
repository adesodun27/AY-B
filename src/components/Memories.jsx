import { memories, name } from '../data/content';

// Screen 3 — scattered polaroids. Slight rotations, no drag (drag fights mobile scroll).
export default function Memories() {
  const rotations = ['-5deg', '4deg', '-3deg', '6deg', '-6deg'];
  return (
    <section className="relative z-10 flex min-h-[100dvh] snap-start flex-col items-center justify-center px-6 py-16">
      <h2 className="mb-10 text-center font-display text-4xl text-cream">
        little moments with you
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        {memories.map((m, i) => (
          <figure
            key={i}
            className="w-40 rotate-0 bg-cream p-2 pb-8 shadow-xl"
            style={{ transform: `rotate(${rotations[i % rotations.length]})`, boxShadow: '0 12px 34px rgba(0,0,0,0.45)' }}
          >
            <img
              src={m.src}
              alt={m.caption || name}
              loading="lazy"
              className="h-40 w-full object-cover"
              onError={(e) => { e.currentTarget.style.opacity = 0.15; }}
            />
            {m.caption && (
              <figcaption className="mt-2 text-center font-hand text-ink text-base leading-tight">
                {m.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
