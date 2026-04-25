"use client";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="flex flex-col items-center gap-6">
        <div className="w-32 h-px bg-ivory-deeper relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-maroon"
            style={{
              animation:
                "loadingBar 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
            }}
          />
        </div>
        <span className="font-serif italic text-obsidian-muted text-sm">
          Memuat…
        </span>
      </div>
    </div>
  );
}
