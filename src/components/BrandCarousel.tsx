type Item = { name: string; logoSrc?: string; alt?: string };

export default function BrandCarousel({
  title = "Join other tech leaders:",
  items,
}: {
  title?: string;
  items: Item[];
}) {
  return (
    <section className="relative overflow-hidden bg-[#f6f7f9]">
      {/* Title */}
      <h3 className="text-center text-slate-600 py-5 font-semibold tracking-tight text-[22px]">
        {title}
      </h3>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f6f7f9] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f6f7f9] to-transparent" />

      {/* Track */}
      <div className="mt-4 flex [animation:marquee_30s_linear_infinite] will-change-transform ">
        {/* Duplicate content for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <ul key={i} className="flex items-center shrink-0">
            {items.map((it, idx) => (
              <li
                key={`${it.name}-${idx}`}
                className="whitespace-nowrap mx-8 shring-0"
              >
                {it.logoSrc ? (
                  <img
                    src={it.logoSrc}
                    alt={it.alt ?? it.name}
                    className="h-15 opacity-60 hover:opacity-90 transition-opacity object-contain w-auto block"
                  />
                ) : (
                  <span className="text-slate-400/90 font-semibold text-2xl md:text-xl">
                    {it.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Reduced motion: stop animating */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .\\[animation\\:marquee_30s_linear_infinite\\] {
            animation: none !important;
          }
        }
        @keyframes marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
