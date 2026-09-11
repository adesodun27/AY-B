import { name } from '../data/content';

// Screen 2 — her photo + the birthday line.
export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[100dvh] snap-start flex-col items-center justify-center px-6 text-center">
      <div className="rise" style={{ animationDelay: '0.1s' }}>
        <div className="relative mx-auto h-64 w-56 rotate-[-3deg] rounded-sm bg-cream p-3 pb-10 shadow-2xl"
          style={{ boxShadow: '0 18px 50px rgba(0,0,0,0.5)' }}>
          <img
            src="/photos/main-ayo2.png"
            alt={name}
            className="h-full w-full object-cover"
            onError={(e) => { e.currentTarget.style.opacity = 0.15; }}
          />
          <span className="absolute bottom-2 left-0 right-0 font-hand text-ink text-lg">the birthday girl 🎀</span>
        </div>
      </div>

      <h1 className="mt-10 font-display text-5xl font-medium text-cream rise" style={{ animationDelay: '0.35s' }}>
        Happy Birthday,
      </h1>
      <p className="font-hand text-blushSoft text-6xl leading-tight rise" style={{ animationDelay: '0.5s' }}>
        {name}
      </p>

      <p className="mt-8 max-w-xs font-body text-cream/70 text-xl italic rise" style={{ animationDelay: '0.7s' }}>
        before you continue… promise you'll smile at least once.
      </p>

      <div className="absolute bottom-8 font-hand text-cream/50 text-lg animate-bounce rise" style={{ animationDelay: '1s' }}>
        scroll ↓
      </div>
    </section>
  );
}
