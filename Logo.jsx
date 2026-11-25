// Replace with your real logo: <img src="/logo.png" className="h-12" />
export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#3ec8ff" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path d="M6 8h30l-6 8H14v6h18l-6 8H14v6h22l-6 8H6z" fill="url(#lg)" />
      </svg>
      <div className="leading-tight">
        <p className="text-xl font-semibold tracking-tight">EliteInova</p>
        <p className="text-sm text-white/80">Pvt Tech Ltd.</p>
      </div>
    </div>
  );
}
