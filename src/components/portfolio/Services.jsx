import React from 'react';
import { Reveal, SectionLabel } from './Reveal';

const services = [
  { t: 'Full-Stack Web Development', d: 'End-to-end product engineering from architecture through launch.' },
  { t: 'API Development', d: 'REST and GraphQL services with clear contracts and observability built in.' },
  { t: 'SaaS & Dashboards', d: 'Multi-tenant applications, internal tools, and admin platforms that scale.' },
  { t: 'Database Design', d: 'Schema modeling, migrations, and query work for Postgres and analytical stores.' },
  { t: 'Performance Optimization', d: 'Profiling, caching, and edge work to bring latency into the budget.' },
  { t: 'Deployment & DevOps', d: 'Infrastructure-as-code, CI/CD, and quiet, boring releases.' },
];

export function Services() {
  return (
    <section id="services" className="section-pad border-t border-hairline">
      <div className="container-px mx-auto max-w-6xl">
        <SectionLabel index="05" label="Engagements" />

        <Reveal>
          <h2 className="max-w-2xl font-display text-balance text-4xl leading-[1.05] tracking-tight md:text-5xl">
            How I work with teams.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="group flex h-full items-start gap-6 bg-background p-7 transition-colors hover:bg-surface">
                <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground pt-1">
                  /{String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg tracking-tight transition-colors group-hover:text-accent">{s.t}</h3>
                  <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
                    {s.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
