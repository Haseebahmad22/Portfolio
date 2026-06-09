import React from 'react';
import { Reveal, SectionLabel } from './Reveal';

const items = [
  {
    year: 'Apr 2026 — Now',
    role: 'Full-Stack Web Developer',
    company: 'iTeachGemini · Lahore',
    notes:
      'Joined permanently after the internship. Owning web product features end-to-end across the stack.',
  },
  {
    year: 'Mar — Apr 2026',
    role: 'Web Developer Intern',
    company: 'iTeachGemini · Lahore',
    notes:
      "Shipped frontend and backend work on the company's web platform. Converted to a full-time role at the end of the internship.",
  },
  {
    year: 'Jan — Mar 2026',
    role: 'SQA Intern',
    company: 'iTeachGemini · Lahore',
    notes:
      'Manual and exploratory testing on web releases. Wrote test cases, reproduced and triaged bugs, and worked closely with engineering.',
  },
  {
    year: '2023 — 2027',
    role: 'BS Software Engineering',
    company: 'FAST NUCES · Lahore',
    notes:
      'Undergraduate in Software Engineering — coursework across systems, data, web and machine learning.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-hairline">
      <div className="container-px mx-auto max-w-6xl">
        <SectionLabel index="04" label="Journey" />

        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h2 className="font-display text-balance text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Studying, testing, shipping — in that order.
            </h2>
            <p className="mt-6 max-w-xs text-[14px] text-muted-foreground">
              A quick walk through how I went from QA to engineering, while
              still in school.
            </p>
          </Reveal>

          <ol className="md:col-span-8 relative border-l border-hairline">
            {items.map((it, i) => (
              <Reveal key={it.year} delay={i * 0.05}>
                <li className="relative pl-8 pb-12 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-foreground/30 bg-background" />
                  <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                    {it.year}
                  </div>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-xl tracking-tight text-foreground">{it.role}</h3>
                    <span className="text-sm text-muted-foreground">— {it.company}</span>
                  </div>
                  <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                    {it.notes}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
