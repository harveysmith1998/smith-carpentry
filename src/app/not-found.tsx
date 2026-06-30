import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal-950 text-center px-4">
      <div>
        <div className="text-8xl font-display font-bold gradient-text mb-4">404</div>
        <h1 className="text-3xl font-display font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-white/50 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
