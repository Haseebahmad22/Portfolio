import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid radial-fade opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.5] mix-blend-overlay" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(ellipse, oklch(0.78 0.05 175 / 35%), transparent 70%)" }}
      />

      <div className="container-px relative mx-auto max-w-6xl">
        {/* Status row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground"
        >
          <span>LAHORE — REMOTE</span>
          <span className="h-px flex-1 bg-hairline max-w-[80px]" />
          <span>v.2026</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-balance text-[clamp(2.75rem,7.5vw,6.25rem)] leading-[0.98] tracking-[-0.02em]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Haseeb Ahmad —
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block text-muted-foreground"
          >
            full-stack web developer
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            building <em className="font-display italic text-accent">thoughtful</em> products.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 grid gap-10 md:grid-cols-12 md:items-end"
        >
          <p className="md:col-span-6 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground">
            BSSE undergrad at FAST NUCES Lahore and full-stack developer at
            iTeachGemini. I design, build, and ship web products end-to-end —
            from data models and APIs to the interfaces people actually use.
          </p>

          <div className="md:col-span-6 flex flex-wrap items-center gap-3 md:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-foreground/90"
            >
              View selected work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-5 py-3 text-sm text-foreground/90 backdrop-blur transition-all hover:border-foreground/30 hover:bg-surface-elevated"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 gap-y-6 border-t border-hairline pt-8 md:grid-cols-4 md:gap-0"
        >
          {[
            ["3+", "Years building"],
            ["50+", "Projects shipped"],
            ["25+", "Technologies"],
            ["95%", "Problems solved"],
          ].map(([value, label]) => (
            <div key={label} className="md:border-l md:border-hairline md:pl-6 md:first:border-l-0 md:first:pl-0">
              <div className="font-display text-3xl tracking-tight">{value}</div>
              <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          SCROLL
        </motion.div>
      </div>
    </section>
  );
}
