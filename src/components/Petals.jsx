// Gentle floating petals/sparkles — one calm ambient layer, not per-section noise.
export default function Petals({ count = 10 }) {
  const items = Array.from({ length: count });
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {items.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const dur = 10 + Math.random() * 10;
        const size = 6 + Math.random() * 10;
        const petal = Math.random() > 0.5;
        return (
          <span
            key={i}
            className="float-petal absolute bottom-0"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              borderRadius: petal ? '60% 0 60% 0' : '50%',
              background: petal ? 'rgba(243,198,210,0.55)' : 'rgba(231,194,125,0.6)',
              animation: `floatUp ${dur}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
