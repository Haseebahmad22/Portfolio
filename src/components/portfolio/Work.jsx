import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Github, X } from 'lucide-react';
import { Reveal, SectionLabel } from './Reveal';

const projects = [
  {
    num: '01',
    name: 'GameExplorer',
    year: '2025',
    role: 'Full Stack',
    description:
      'A gaming platform with an extensive game database, reviews, trailers and screenshots. Advanced search, authentication, and a fully responsive interface — built for gamers.',
    result: 'Live, full-stack release with auth, reviews and search',
    stack: ['React', 'Next.js', 'Express', 'SQL', 'Tailwind'],
    image: '/g1.png',
    assets: ['/g1.png', '/gameexplorer.mp4'],
    github: 'https://github.com/AmarWaqar-TSKLI/GameStore2.0',
    live: 'https://game-store2-0.vercel.app/',
  },
  {
    num: '02',
    name: 'Rentinel',
    year: '2025',
    role: 'Full Stack',
    description:
      'Property management platform with role-based dashboards for admins, owners and tenants. Online payments, lease tracking, real-time notifications and financial analytics.',
    result: 'Multi-role platform with billing and real-time tracking',
    stack: ['React', 'Java', 'Spring Boot', 'SQL', 'JWT'],
    image: '/r1.png',
    assets: ['/r1.png', '/r2.png', '/r3.png', '/rentinel.mp4'],
    github: 'https://github.com/Haseebahmad22/Rentinel',
  },
  {
    num: '03',
    name: 'XplainML',
    year: '2024',
    role: 'ML Engineer',
    description:
      'An interpretable ML toolkit for tabular data. Trains baseline and gradient-boosted models, then produces global and local explanations through an interactive dashboard.',
    result: 'End-to-end pipeline with SHAP / LIME explanations',
    stack: ['Python', 'FastAPI', 'scikit-learn', 'SHAP', 'React'],
    image: '/x1.png',
    assets: ['/x1.png', '/x2.png', '/x3.png'],
    github: 'https://github.com/Haseebahmad22/Xplainml',
  },
  {
    num: '04',
    name: 'Zarqais',
    year: '2024',
    role: 'Frontend',
    description:
      'A polished commercial site with product catalog, filtering and search, cart and checkout, and product detail pages — implemented end-to-end with a strong responsive layout.',
    result: 'Production site live at zarqais.com',
    stack: ['Next.js', 'React', 'Tailwind', 'HTML'],
    image: '/t1.png',
    assets: ['/t1.png', '/t2.png', '/t3.png', '/t4.png'],
    github: 'https://github.com/Haseebahmad22/Zarqais',
    live: 'https://www.zarqais.com',
  },
  {
    num: '05',
    name: 'CodeScribe',
    year: '2024',
    role: 'Full Stack',
    description:
      'AI-powered documentation assistant that auto-generates docstrings, module docs and interactive documentation from source code.',
    result: 'AI docstring & comment generation pipeline',
    stack: ['Python', 'FastAPI', 'LLM Adapters', 'React', 'TypeScript'],
    image: '/cd1.png',
    assets: ['/cd1.png', '/cd2.png', '/cd3.png'],
    github: 'https://github.com/Haseebahmad22/codescribe',
  },
  {
    num: '06',
    name: 'Journez',
    year: '2025',
    role: 'Product',
    description: 'Travel stories and short video highlights.',
    result: 'Marketing site with video highlights',
    stack: ['React', 'Vite', 'VideoJS'],
    image: '/j1.jpg',
    assets: ['/j1.jpg', '/j2.jpg', '/j3.jpg', '/j4.jpg', '/j5.jpg', '/j6.jpg', '/journez.mp4'],
    github: '#',
  },
  {
    num: '07',
    name: 'QuestRunner',
    year: '2024',
    role: 'Game',
    description: 'A casual mobile runner with quest mechanics.',
    result: 'Playable demo with analytics',
    stack: ['Unity', 'C#', 'React'],
    image: '/q1.png',
    assets: ['/q1.png', '/q2.png', '/q3.png', '/q4.png', '/q5.png', '/questrunner.mp4'],
    github: '#',
  },
  {
    num: '08',
    name: 'VoltMaster',
    year: '2025',
    role: 'Full Stack',
    description: 'A dashboard for monitoring electrical devices and performance.',
    result: 'Instrumented dashboard with live telemetry',
    stack: ['React', 'WebSocket', 'D3'],
    image: '/v1.jpg',
    assets: ['/v1.jpg', '/v2.jpg', '/v3.jpg', '/voltmaster.mp4'],
    github: 'https://github.com/Haseebahmad22/VoltMaster-Power-Management-Software',
  },
];

export function Work() {
  return (
    <section id="work" className="section-pad border-t border-hairline">
      <div className="container-px mx-auto max-w-6xl">
        <SectionLabel index="03" label="Selected Work" />

        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-balance text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Work I'd put my name on.
            </h2>
            <p className="max-w-sm text-[14px] text-muted-foreground">
              A small, deliberate selection. Each one shipped, measured, and
              used in the wild.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 space-y-28">
          {projects.map((p, i) => (
            <ProjectRow key={p.num} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, reverse }) {
  const primaryHref = project.live || project.github;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxAsset, setLightboxAsset] = useState(null);
  const [lightboxIsVideo, setLightboxIsVideo] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    function onKey(e) {
      if (e.key === 'Escape') setLightboxOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  function openLightbox(a) {
    setLightboxAsset(a);
    setLightboxIsVideo(a.endsWith('.mp4'));
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
    setTimeout(() => setLightboxAsset(null), 200);
  }

  return (
    <Reveal>
      <article className="grid gap-10 md:grid-cols-12 md:items-center">
        <div className={`md:col-span-7 ${reverse ? 'md:order-2' : ''}`}>
          <a
            href={primaryHref}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative block overflow-hidden rounded-xl border border-hairline bg-surface"
          >
            <div className="aspect-[16/10.4] overflow-hidden">
              <img
                src={project.image}
                alt={`${project.name} interface`}
                width={1280}
                height={832}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-primary-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </a>
        </div>

        <div className={`md:col-span-5 ${reverse ? 'md:order-1' : ''}`}>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
            <span>{project.num}</span>
            <span className="h-px w-6 bg-hairline" />
            <span>{project.year}</span>
            <span className="h-px w-6 bg-hairline" />
            <span>{project.role}</span>
          </div>

          <h3 className="mt-5 font-display text-3xl tracking-tight md:text-4xl">{project.name}</h3>

          <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-6 rounded-lg border border-hairline bg-surface/60 px-4 py-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Outcome
            </div>
            <div className="mt-1 text-[14px] text-foreground">— {project.result}</div>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-hairline px-2.5 py-0.5 text-[11.5px] text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>

          {project.assets && (
            <div className="mt-6 grid grid-cols-3 gap-3">
              {project.assets.map((a) =>
                a.endsWith('.mp4') ? (
                  <button
                    key={a}
                    onClick={() => openLightbox(a)}
                    className="h-24 w-full overflow-hidden rounded-md bg-black"
                    aria-label={`Open video ${project.name}`}
                  >
                    <video src={a} muted loop playsInline className="h-full w-full object-cover" />
                  </button>
                ) : (
                  <button
                    key={a}
                    onClick={() => openLightbox(a)}
                    className="h-24 w-full overflow-hidden rounded-md"
                    aria-label={`Open image ${project.name}`}
                  >
                    <img src={a} alt={`${project.name} asset`} className="h-full w-full rounded-md object-cover" />
                  </button>
                )
              )}
            </div>
          )}

          {lightboxOpen && lightboxAsset && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={closeLightbox}
              />

              <div className="relative max-h-[90vh] max-w-[90vw] mx-4">
                <button
                  onClick={closeLightbox}
                  className="absolute right-0 top-0 z-[60] m-2 rounded-full bg-white/90 p-2 text-black"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                {lightboxIsVideo ? (
                  <video
                    src={lightboxAsset}
                    controls
                    autoPlay
                    className="max-h-[90vh] w-auto max-w-[90vw] rounded-md bg-black"
                  />
                ) : (
                  <img
                    src={lightboxAsset}
                    alt="Expanded asset"
                    className="max-h-[90vh] w-auto max-w-[90vw] rounded-md object-contain bg-black"
                  />
                )}
              </div>
            </div>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.live && (
              <>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 text-[13px] text-foreground transition-colors hover:text-accent"
                >
                  Live site
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span className="text-muted-foreground/40">·</span>
              </>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
              Source
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
