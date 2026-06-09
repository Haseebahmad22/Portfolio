import { useEffect, useState } from "react";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("work");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-hairline" : ""
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-emerald opacity-60 blur-[2px]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          <span className="font-mono text-xs tracking-widest text-foreground/80 group-hover:text-foreground transition-colors">
            HASEEB.AHMAD
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-hairline bg-surface/60 px-1.5 py-1 backdrop-blur">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative rounded-full px-3.5 py-1.5 text-[12.5px] tracking-wide transition-colors ${
                active === l.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === l.id && (
                <span className="absolute inset-0 rounded-full bg-surface-elevated ring-1 ring-hairline" />
              )}
              <span className="relative">{l.label}</span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3.5 py-1.5 text-[12.5px] text-foreground/90 backdrop-blur transition-all hover:bg-surface-elevated hover:border-foreground/20"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-emerald animate-ping opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
          </span>
          Available
        </a>
      </div>
    </header>
  );
}
