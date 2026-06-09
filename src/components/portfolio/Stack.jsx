import React from 'react';
import {
  SiReact, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiFramer, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase,
  SiPython, SiFastapi, SiDjango, SiRedis, SiMysql,
  SiCplusplus,
  SiGit, SiDocker, SiFigma, SiKubernetes,
  SiTerraform, SiJest, SiCypress, SiGithubactions,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';
import { Reveal, SectionLabel } from './Reveal';

const groups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'Framer Motion', Icon: SiFramer, color: '#E879F9' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#8CC84B' },
      { name: 'Express', Icon: SiExpress, color: '#FFFFFF' },
      { name: 'Python', Icon: SiPython, color: '#FFD43B' },
      { name: 'FastAPI', Icon: SiFastapi, color: '#05998B' },
      { name: 'Django', Icon: SiDjango, color: '#0C4B33' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
      { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
      { name: 'SQL', Icon: SiMysql, color: '#00758F' },
      { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
      { name: 'C#', Icon: TbBrandCSharp, color: '#9B4F96' },
    ],
  },
  {
    title: 'Tools & DevOps',
    items: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
      { name: 'AWS', Icon: FaAws, color: '#FF9900' },
      { name: 'Terraform', Icon: SiTerraform, color: '#7B42BC' },
      { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
      { name: 'Jest', Icon: SiJest, color: '#C21325' },
      { name: 'Cypress', Icon: SiCypress, color: '#FFFFFF' },
    ],
  },
];

export function Stack() {
  return (
    <section id="stack" className="section-pad border-t border-hairline">
      <div className="container-px mx-auto max-w-6xl">
        <SectionLabel index="02" label="Toolkit" />

        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-balance text-4xl leading-[1.05] tracking-tight md:text-5xl">
              The tools I reach for.
            </h2>
            <p className="max-w-sm text-[14px] text-muted-foreground">
              25+ technologies across the stack — these are the ones I use
              most days, organised by where they live.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-px overflow-hidden rounded-xl border border-hairline bg-hairline">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.05}>
              <div className="bg-background p-7 md:p-9">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-sm tracking-wide text-foreground">{g.title}</h3>
                  <span className="font-mono text-[10.5px] tracking-[0.2em] text-muted-foreground">
                    {String(gi + 1).padStart(2, '0')} / {String(groups.length).padStart(2, '0')}
                  </span>
                </div>

                <ul className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {g.items.map(({ name, Icon, color }) => (
                    <li
                      key={name}
                      className="group relative flex items-center gap-3 rounded-lg border border-hairline bg-surface/40 px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-surface"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-background/60 ring-1 ring-hairline transition-colors"
                        style={{ color }}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="truncate text-[12.5px] text-foreground/85 transition-colors group-hover:text-foreground">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
