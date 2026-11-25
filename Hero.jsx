import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      {/* Background: glow + city image (put your image at public/hero-city.jpg) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(168,85,247,0.18),transparent_50%)]" />
        <div
          className="absolute inset-y-0 right-0 w-full bg-cover bg-right bg-no-repeat opacity-90 lg:w-[62%]"
          style={{
            backgroundImage: "url('/hero-city.jpg')",
            maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)",
          }}
        />
        {/* Glowing orbit ring */}
        <div className="absolute right-[8%] top-[35%] hidden h-[180px] w-[620px] -rotate-[8deg] rounded-[50%] border border-brand-violet/50 shadow-[0_0_30px_rgba(168,85,247,0.5)] lg:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-10 lg:px-10 lg:pt-16">
        <div className="max-w-[640px]">
          <h1 className="text-5xl leading-[1.1] tracking-tight sm:text-6xl">
            <span className="font-light">Building </span>
            <span className="font-semibold">Digital</span>
            <br />
            <span className="font-semibold">Experiences.</span>
            <br />
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
              Creating Real-World
              <br />
              Opportunities.
            </span>
          </h1>

          <p className="mt-8 max-w-[480px] border-l-2 border-brand-violet/70 pl-4 text-[15px] leading-relaxed text-white/80">
            EliteInova brings technology, meaningful connections and property
            opportunities together through innovative digital platforms.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#ecosystem"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-7 py-3.5 text-sm font-medium shadow-[0_0_28px_rgba(62,200,255,0.45)] transition hover:brightness-110"
            >
              Explore Our Ecosystem <ArrowRight size={16} />
            </a>
            <a
              href="#brands"
              className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm backdrop-blur-md transition hover:bg-white/10"
            >
              Discover Our Brands
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                <Play size={11} fill="currentColor" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}