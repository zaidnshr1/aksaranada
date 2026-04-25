"use client";

const ITEMS = [
  "Vokal",
  "✦",
  "Gitar Elektrik",
  "✦",
  "Gitar Klasik",
  "✦",
  "Bass",
  "✦",
  "Piano",
  "✦",
  "Keyboard",
  "✦",
  "Produksi Musik",
  "✦",
  "Band Management",
  "✦",
  "Online & Onsite",
  "✦",
  "Semua Usia",
  "✦",
  "Jakarta · Bekasi · Bandung",
  "✦",
];

// Duplicate for seamless loop
const ALL = [...ITEMS, ...ITEMS];

export default function MarqueeBar({
  inverted = false,
}: {
  inverted?: boolean;
}) {
  return (
    <div
      className={`py-4 border-y overflow-hidden ${
        inverted
          ? "bg-obsidian border-white/8"
          : "bg-ivory-darker border-border-soft"
      }`}
    >
      <div className="marquee-track">
        {ALL.map((item, i) => (
          <span
            key={i}
            className={`flex-shrink-0 px-5 eyebrow text-[0.65rem] ${
              item === "✦"
                ? "text-maroon px-3"
                : inverted
                  ? "text-white/40"
                  : "text-obsidian-muted"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
