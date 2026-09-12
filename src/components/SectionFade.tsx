export default function SectionFade({ from }: { from: "white" | "black" }) {
  const color = from === "white" ? "255,255,255" : "0,0,0";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-[260px] md:h-[420px] z-0"
      style={{
        background: `linear-gradient(to bottom,
          rgba(${color},1) 0%,
          rgba(${color},0.85) 18%,
          rgba(${color},0.55) 40%,
          rgba(${color},0.25) 65%,
          rgba(${color},0.08) 85%,
          rgba(${color},0) 100%)`,
      }}
    />
  );
}
