import { marqueeTechnologies } from "../../data/skills";

const TechStackSection = () => {
  return (
    <div className="w-full py-5 border-y border-[var(--border)] bg-[var(--surface-soft)]/60 overflow-hidden relative">
      <div className="max-w-[1140px] mx-auto relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--surface-soft)] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--surface-soft)] to-transparent z-10" />

        <div className="flex w-max animate-marquee items-center gap-3">
          {[...marqueeTechnologies, ...marqueeTechnologies].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="px-4 py-2 rounded-full bg-card border border-[var(--border)] flex items-center gap-2.5 text-xs font-medium text-foreground/85 shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-4 h-4 object-contain"
                loading="lazy"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
