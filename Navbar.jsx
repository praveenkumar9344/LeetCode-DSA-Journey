import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Our Brands", href: "#brands", dropdown: true },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
      <a href="#"><Logo /></a>

      {/* Desktop glass pill */}
      <nav className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md lg:flex">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setActive(l.label)}
            className={`flex items-center gap-1 rounded-full px-5 py-2 text-sm transition ${
              active === l.label
                ? "border border-brand-cyan/60 bg-brand-cyan/10 text-white shadow-[0_0_18px_rgba(62,200,255,0.35)]"
                : "text-white/80 hover:text-white"
            }`}
          >
            {l.label}
            {l.dropdown && <ChevronDown size={14} />}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3 text-sm font-medium shadow-[0_0_25px_rgba(99,102,241,0.5)] transition hover:brightness-110 lg:flex"
      >
        Connect With Us <ArrowRight size={16} />
      </a>

      {/* Mobile toggle */}
      <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="absolute left-4 right-4 top-full flex flex-col gap-1 rounded-2xl border border-white/10 bg-navy-900/95 p-4 backdrop-blur-lg lg:hidden">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="rounded-lg px-4 py-3 hover:bg-white/10">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}