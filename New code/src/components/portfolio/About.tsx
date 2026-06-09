import { Reveal, SectionLabel } from "./Reveal";

const strengths = [
  { k: "01", t: "Frontend Engineering", d: "React, Next.js, TypeScript and Tailwind — interfaces that feel quick and considered." },
  { k: "02", t: "Backend Systems", d: "Node, Express, FastAPI and Django services with clean domain boundaries." },
  { k: "03", t: "APIs & Databases", d: "REST APIs, PostgreSQL, MongoDB, Redis and Firebase — modeled for the long term." },
  { k: "04", t: "Motion & Polish", d: "Framer Motion and a designer's eye for typography, spacing and feel." },
  { k: "05", t: "DevOps & Cloud", d: "Docker, AWS, CI/CD and Kubernetes — quiet, repeatable releases." },
  { k: "06", t: "Quality & Testing", d: "Jest, Cypress and a QA background. Software that breaks loudly, recovers gracefully." },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-px mx-auto max-w-6xl">
        <SectionLabel index="01" label="About" />

        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <h2 className="font-display text-balance text-4xl leading-[1.05] tracking-tight md:text-5xl">
              I build thoughtful, durable web products with an eye on the
              <em className="font-display italic text-accent"> details</em>.
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground max-w-xl">
              <p>
                I'm Haseeb — a full-stack developer based in Lahore. I work
                end-to-end across the stack: data models, APIs, interfaces and
                the small interactions that make a product feel finished.
              </p>
              <p>
                My background covers product engineering and software quality,
                so I tend to ship in small, reversible increments and care
                about the edges most teams skip. I prefer fewer abstractions,
                sharper primitives, and honest measurements.
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.1}>
            <div className="rounded-xl border border-hairline bg-surface/60 p-6">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
                Currently
              </div>
              <div className="mt-3 text-[15px] leading-relaxed">
                Full-stack web developer at iTeachGemini in Lahore, alongside
                my BSSE at FAST NUCES. Open to freelance and collaboration on
                ambitious web products.
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-hairline pt-5">
                {[
                  ["Based", "Lahore, PK"],
                  ["Timezone", "PKT"],
                  ["Status", "Open"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{k}</div>
                    <div className="mt-1.5 text-sm">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.05}>
              <div className="group h-full bg-background p-7 transition-colors hover:bg-surface">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">{s.k}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground/15 transition-colors group-hover:bg-accent" />
                </div>
                <h3 className="mt-8 text-lg tracking-tight">{s.t}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
