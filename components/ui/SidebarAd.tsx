import { ALL_ADS } from "@/lib/ads";

export default function SidebarAd({
  adId,
  defaultSlot,
}: {
  adId?: string;
  defaultSlot: number;
}) {
  const ad = adId ? ALL_ADS[adId as keyof typeof ALL_ADS] : null;

  if (ad) {
    return (
      <a href={ad.link} target="_blank" className="block group">
        <div className="relative overflow-hidden border border-border-soft">
          <img
            src={ad.image}
            alt={ad.title}
            className="w-full h-auto transition-transform group-hover:scale-105"
          />
        </div>
        <p className="eyebrow text-[0.55rem] text-maroon mt-3 tracking-widest text-right uppercase opacity-70 group-hover:opacity-100 transition-opacity">
          {ad.title} — Sponsor
        </p>
      </a>
    );
  }

  // jika adId tidak diisi di MDX
  return (
    <div className="border border-dashed border-maroon/25 bg-maroon/3 p-6 text-center min-h-[260px] flex flex-col items-center justify-center gap-3">
      <span className="eyebrow text-[0.6rem] text-maroon/40">
        SLOT IKLAN #{defaultSlot}
      </span>
      <p className="text-warm-gray text-xs leading-relaxed">
        Ruang iklan tersedia di sini. Hubungi kami untuk pemasangan.
      </p>
      <a
        href="mailto:info@aksaranada.com"
        className="eyebrow text-[0.6rem] text-maroon border-b border-maroon/40"
      >
        Pasang Iklan →
      </a>
    </div>
  );
}
