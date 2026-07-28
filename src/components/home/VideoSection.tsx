"use client";

export default function VideoSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ height: "60vh", minHeight: "340px" }}>
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
    </section>
  );
}
