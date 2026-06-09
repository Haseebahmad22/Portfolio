import { Reveal, SectionLabel } from "./Reveal";

const stats = [
  ["25+", "Technologies"],
  ["50+", "Projects built"],
  ["3+", "Years building"],
  ["95%", "Problems solved"],
];

const highlights = [
  {
    t: "Quality-first mindset",
    d: "I started in QA before moving into engineering. That habit of breaking things on purpose still shapes how I write and ship code.",
  },
  {
    t: "Across the stack",
    d: "From React and Next.js on the front to Node, FastAPI, Postgres and Mongo on the back — I'm comfortable owning a feature end-to-end.",
  },
  {
    t: "Range of domains",
    d: "Gaming platforms, property management, ML tooling and commerce. Different problems, same engineering principles.",
  },
];

export function Trust() {
  return (
    <section className="section-pad border-t border-hairline">
      <div className="container-px mx-auto max-w-6xl">
        <SectionLabel index="06" label="Signal" />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-6">
            {highlights.map((h, i) => (
              <Reveal key={h.t} delay={i * 0.05}>
                <figure className="rounded-xl border border-hairline bg-surface/50 p-7">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} — {h.t}
                  </div>
                  <p className="mt-4 font-display text-balance text-xl leading-snug text-foreground/90 md:text-2xl">
                    {h.d}
                  </p>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="md:col-span-5" delay={0.1}>
            <div className="h-full rounded-xl border border-hairline bg-surface/50 p-7">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
                By the numbers
              </div>
              <div className="mt-6 grid grid-cols-2 gap-y-8">
                {stats.map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl tracking-tight">{v}</div>
                    <div className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-hairline pt-5 text-[13px] text-muted-foreground">
                Currently building web products at{" "}
                <span className="text-foreground">iTeachGemini</span> while
                finishing my BSSE at FAST NUCES.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
