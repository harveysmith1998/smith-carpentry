"use client";

const clips = [
  { src: "/videos/media-wall.mov", label: "Media Wall" },
  { src: "/videos/wardrobe.mov",   label: "Wardrobes" },
  { src: "/videos/garden-room.mov", label: "Garden Room" },
];

export default function VideoSection() {
  return (
    <section className="bg-black">
      {/* Hero video */}
      <div className="relative w-full overflow-hidden" style={{ height: "60vh", minHeight: "340px" }}>
        <video
          src="/videos/kitchen.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-brand text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Work in Action</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight max-w-xl">
            Craftsmanship You Can See
          </h2>
        </div>
      </div>

      {/* Secondary videos */}
      <div className="grid grid-cols-3 gap-0.5">
        {clips.map((clip) => (
          <div key={clip.src} className="relative overflow-hidden" style={{ aspectRatio: "9/16" }}>
            <video
              src={clip.src}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-xs font-bold text-center tracking-wide">{clip.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
