import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiCommand,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTarget,
  FiZap
} from 'react-icons/fi';
import PortfolioTopRail from '../components/portfolio/PortfolioTopRail';
import {
  designLenses,
  mapSkillsToBands,
  profileImageSrc,
  revealDelayBySection,
  sectionIds,
  workJourney
} from '../components/portfolio/portfolioContent';
import projectsData from '../data/projectsData';
import { skillsData } from '../data/skills';

function SinglePagePortfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeLensId, setActiveLensId] = useState(designLenses[0].id);
  const [visibleSections, setVisibleSections] = useState(() => new Set(['hero']));
  const [isNavCompact, setIsNavCompact] = useState(false);

  const spotlightProjects = useMemo(() => projectsData.slice(0, 4), []);
  const skillBands = useMemo(() => mapSkillsToBands(skillsData), []);

  const activeLens = useMemo(
    () => designLenses.find((lens) => lens.id === activeLensId) || designLenses[0],
    [activeLensId]
  );

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.IntersectionObserver !== 'function') {
      setVisibleSections(new Set(sectionIds));
      return undefined;
    }

    document.body.classList.add('reveal-enabled');
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
              setVisibleSections((previous) => {
                if (previous.has(id)) {
                  return previous;
                }

                const next = new Set(previous);
                next.add(id);
                return next;
              });
            }
          });
        },
        {
          rootMargin: '-20% 0px -35% 0px',
          threshold: 0.05
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      document.body.classList.remove('reveal-enabled');
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsNavCompact(window.scrollY > 28);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({ left: 0, top: window.scrollY, behavior: 'auto' });
    });
  }, []);

  const getSectionClassName = (id, extraClasses = '') => {
    const classNames = ['ds-section', extraClasses, 'reveal-section'];

    if (visibleSections.has(id)) {
      classNames.push('is-visible');
    }

    return classNames.filter(Boolean).join(' ');
  };

  const getSectionStyle = (id) => ({
    '--reveal-delay': revealDelayBySection[id] || '0ms'
  });

  const activeIndex = Math.max(0, sectionIds.indexOf(activeSection));
  const progressPercent = ((activeIndex + 1) / sectionIds.length) * 100;

  return (
    <PageWrap>
      <PortfolioTopRail
        isNavCompact={isNavCompact}
        progressPercent={progressPercent}
        sectionIds={sectionIds}
        activeSection={activeSection}
      />

      <main>
        <section
          id="hero"
          className={getSectionClassName('hero', 'hero-section ds-bg-grid ds-bg-noise ds-bg-aura')}
          style={getSectionStyle('hero')}
        >
          <span className="ds-aura is-soft hero-aura-left" aria-hidden="true" />
          <span className="ds-aura is-strong hero-aura-right" aria-hidden="true" />

          <div className="ds-shell hero-shell">
            <HeroLead>
              <HeroMarker>
                <FiCommand /> Engineering as product craft
              </HeroMarker>

              <HeroStatement>
                <span>Built for teams that value</span>
                <strong>taste, velocity, and architecture.</strong>
                <em>This portfolio is structured like a product experience, not a template.</em>
              </HeroStatement>

              <HeroDataTape>
                <li>
                  <label>Mode</label>
                  <p>Designing full-stack products with long-term maintainability.</p>
                </li>
                <li>
                  <label>Focus</label>
                  <p>Frontend architecture, backend clarity, and user-impactful outcomes.</p>
                </li>
                <li>
                  <label>Availability</label>
                  <p>Open to software engineering roles and selective product collaborations.</p>
                </li>
              </HeroDataTape>
            </HeroLead>

            <HeroConsole className="ds-glass-panel">
              <ConsoleFrame>
                <header>
                  <span>
                    <FiLayers /> Build Console
                  </span>
                  <small>Live capability map</small>
                </header>

                <div>
                  <article>
                    <h3>Frontend Systems</h3>
                    <p>Component architecture, responsive behavior, and visual consistency.</p>
                  </article>
                  <article>
                    <h3>Backend Reliability</h3>
                    <p>API design, data flow integrity, and maintainable service structure.</p>
                  </article>
                  <article>
                    <h3>Product Delivery</h3>
                    <p>Fast iteration with clear scope boundaries and release confidence.</p>
                  </article>
                </div>
              </ConsoleFrame>

              <ConsoleActions>
                <a href="#projects">
                  <FiArrowRight /> Enter project spotlight
                </a>
                <a href="#profile">
                  <FiTarget /> Open profile feature
                </a>
                <a href="mailto:haseebahmad.dev@gmail.com">
                  <FiMail /> Send direct message
                </a>
              </ConsoleActions>
            </HeroConsole>
          </div>
        </section>

        <section
          id="profile"
          className={getSectionClassName('profile', 'profile-section ds-bg-aura')}
          style={getSectionStyle('profile')}
        >
          <span className="ds-aura is-soft profile-aura-main" aria-hidden="true" />
          <span className="ds-aura is-strong profile-aura-side" aria-hidden="true" />

          <div className="ds-shell profile-shell">
            <ProfileCopy>
              <h2>Profile Feature</h2>
              <p>
                A visual identity module designed as a signature UI component. This is not a plain
                avatar block, but a layered system with glass framing, gradient depth, and metadata
                overlays to present the engineer as a premium product profile.
              </p>

              <ProfileMetrics>
                <li>
                  <strong>50+</strong>
                  <span>Shipped builds</span>
                </li>
                <li>
                  <strong>3+</strong>
                  <span>Years in production workflows</span>
                </li>
                <li>
                  <strong>25+</strong>
                  <span>Technologies across web + ML</span>
                </li>
              </ProfileMetrics>
            </ProfileCopy>

            <ProfileFeature>
              <FrameLayer className="back ds-glass-panel" aria-hidden="true" />
              <FrameLayer className="middle ds-glass-panel" aria-hidden="true" />

              <ProfileCore className="ds-glass-panel ds-glow-ring">
                <ProfileImageShell>
                  <img src={profileImageSrc} alt="Portrait of Haseeb Ahmad" loading="lazy" />
                  <ProfileImageMask aria-hidden="true" />
                </ProfileImageShell>

                <ProfileOverlayTop>
                  <span>
                    <FiZap /> High-agency engineer
                  </span>
                </ProfileOverlayTop>

                <ProfileOverlayBottom>
                  <article>
                    <small>Role Focus</small>
                    <p>Frontend / Full Stack Software Engineer</p>
                  </article>
                  <article>
                    <small>Preferred Stack</small>
                    <p>React, Node.js, Python, Tailwind, FastAPI</p>
                  </article>
                </ProfileOverlayBottom>
              </ProfileCore>
            </ProfileFeature>
          </div>
        </section>

        <section
          id="about"
          className={getSectionClassName('about', 'about-section')}
          style={getSectionStyle('about')}
        >
          <div className="ds-shell about-shell">
            <AboutLead className="ds-card ds-card-spacious">
              <h2>About</h2>
              <p>
                I engineer software from a product perspective: every interface, data model, and
                architectural decision should create clarity for users and momentum for teams.
              </p>
            </AboutLead>

            <AboutStack>
              <AboutPanel className="ds-card ds-card-compact">
                <small>Approach</small>
                <h3>Systems first, features second.</h3>
                <p>I shape reusable foundations before adding complexity.</p>
              </AboutPanel>

              <AboutPanel className="ds-card ds-card-compact offset">
                <small>Execution</small>
                <h3>Fast iteration with engineering discipline.</h3>
                <p>I optimize for speed without sacrificing maintainability or UX quality.</p>
              </AboutPanel>
            </AboutStack>
          </div>
        </section>

        <section
          id="signature"
          className={getSectionClassName('signature', 'signature-section ds-bg-grid')}
          style={getSectionStyle('signature')}
        >
          <div className="ds-shell signature-shell">
            <SignatureRail>
              <h2>Signature Section: Build Lens Console</h2>
              <p>
                A perspective switcher that reveals how I evaluate the same engineering challenge
                through product, systems, and delivery lenses.
              </p>

              <LensSwitches>
                {designLenses.map((lens) => (
                  <button
                    key={lens.id}
                    type="button"
                    className={activeLensId === lens.id ? 'active' : ''}
                    onClick={() => setActiveLensId(lens.id)}
                  >
                    {lens.label}
                  </button>
                ))}
              </LensSwitches>
            </SignatureRail>

            <SignatureBoard className="ds-card ds-card-default">
              <LayerA>
                <small>Perspective</small>
                <h3>{activeLens.heading}</h3>
                <p>{activeLens.body}</p>
              </LayerA>

              <LayerB>
                <small>Working principles</small>
                <ul>
                  {activeLens.traits.map((trait) => (
                    <li key={trait}>{trait}</li>
                  ))}
                </ul>
              </LayerB>

              <LayerC>
                <FiZap /> {activeLens.marker}
              </LayerC>
            </SignatureBoard>
          </div>
        </section>

        <section
          id="projects"
          className={getSectionClassName('projects', 'projects-section ds-bg-noise')}
          style={getSectionStyle('projects')}
        >
          <div className="projects-shell">
            <ProjectsHeader className="ds-shell">
              <h2>Project Spotlight</h2>
              <p>
                A horizontal gallery of real builds. Scroll through implementation highlights,
                technology decisions, and evidence-backed project outcomes.
              </p>
            </ProjectsHeader>

            <ProjectRail>
              {spotlightProjects.map((project, index) => (
                <ProjectPanel key={project.id} className={`panel-${index + 1}`}>
                  <ProjectPanelInner className="ds-card ds-card-spacious">
                    <ProjectMeta>
                      <small>{project.category}</small>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </ProjectMeta>

                    <ProjectSignals>
                      <h4>What makes it real</h4>
                      <ul>
                        {project.keyFeatures.slice(0, 4).map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </ProjectSignals>

                    <ProjectFoot>
                      <TechWrap>
                        {project.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </TechWrap>

                      <ProjectLinks>
                        {project.githubUrl && project.githubUrl !== '#' ? (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer">
                            <FiGithub /> Source
                          </a>
                        ) : null}
                        {project.liveUrl && project.liveUrl !== '#' ? (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            <FiArrowUpRight /> Live
                          </a>
                        ) : null}
                      </ProjectLinks>
                    </ProjectFoot>
                  </ProjectPanelInner>
                </ProjectPanel>
              ))}
            </ProjectRail>
          </div>
        </section>

        <section
          id="skills"
          className={getSectionClassName('skills', 'skills-section')}
          style={getSectionStyle('skills')}
        >
          <div className="ds-shell skills-shell">
            <SkillsIntro>
              <h2>Skills / Tech Stack</h2>
              <p>
                Capability bands instead of icon clutter. Each band reflects practical strength
                built through real project delivery.
              </p>
            </SkillsIntro>

            <SkillBands>
              {skillBands.map((band, index) => (
                <SkillBand key={band.id} className={`band-${index + 1}`}>
                  <header>
                    <h3>{band.title}</h3>
                    <strong>{band.score}%</strong>
                  </header>

                  <BandMeter>
                    <span style={{ width: `${band.score}%` }} />
                  </BandMeter>

                  <div>
                    {band.chips.map((chip) => (
                      <small key={chip}>{chip}</small>
                    ))}
                  </div>
                </SkillBand>
              ))}
            </SkillBands>
          </div>
        </section>

        <section
          id="experience"
          className={getSectionClassName('experience', 'experience-section')}
          style={getSectionStyle('experience')}
        >
          <div className="ds-shell experience-shell">
            <ExperienceLead>
              <h2>Work Journey</h2>
              <p>
                Progress shaped through real delivery cycles, evolving from implementation depth to
                product-level engineering ownership.
              </p>
            </ExperienceLead>

            <JourneyTrack>
              {workJourney.map((point) => (
                <JourneyNode key={point.year}>
                  <aside>{point.year}</aside>
                  <article className="ds-card ds-card-compact">
                    <h3>{point.role}</h3>
                    <p>{point.note}</p>
                  </article>
                </JourneyNode>
              ))}
            </JourneyTrack>
          </div>
        </section>

        <section
          id="contact"
          className={getSectionClassName('contact', 'contact-section ds-bg-aura')}
          style={getSectionStyle('contact')}
        >
          <span className="ds-aura is-soft contact-aura" aria-hidden="true" />

          <div className="ds-shell contact-shell">
            <ContactPanel className="ds-card ds-card-spacious">
              <small>Contact / Call to action</small>
              <h2>Let&apos;s build work that feels intentional.</h2>
              <p>
                Open to software engineering opportunities where product thinking and strong technical
                execution are both core to the role.
              </p>

              <div>
                <a className="ds-button ds-button-primary" href="mailto:haseebahmad.dev@gmail.com">
                  <FiMail /> Reach out directly
                </a>
                <a
                  className="ds-button ds-button-secondary"
                  href="https://github.com/Haseebahmad22"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  className="ds-button ds-button-ghost"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin /> LinkedIn
                </a>
              </div>
            </ContactPanel>

            <ContactMeta className="ds-card ds-card-default">
              <h3>Availability</h3>
              <p>Remote-first, quality-driven teams and high-impact product engineering work.</p>
              <ul>
                <li>
                  <FiMapPin /> Pakistan, open to global remote roles
                </li>
                <li>
                  <FiCode /> Frontend or full stack engineering positions
                </li>
                <li>
                  <FiArrowRight /> Product teams with strong standards
                </li>
              </ul>
            </ContactMeta>
          </div>
        </section>
      </main>
    </PageWrap>
  );
}

const PageWrap = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;

  main {
    display: grid;
    gap: clamp(0.6rem, 1.7vw, 1.15rem);
    width: 100%;
    justify-items: stretch;
  }

  section {
    scroll-margin-top: 6rem;
    width: 100%;
  }

  .reveal-section {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    filter: blur(0);
  }

  body.reveal-enabled & .reveal-section {
    opacity: 0;
    transform: translate3d(0, 22px, 0);
    filter: blur(8px);
    transition: opacity 620ms cubic-bezier(0.2, 0.8, 0.2, 1),
      transform 620ms cubic-bezier(0.2, 0.8, 0.2, 1),
      filter 620ms cubic-bezier(0.2, 0.8, 0.2, 1);
    transition-delay: var(--reveal-delay, 0ms);
    will-change: opacity, transform, filter;
  }

  body.reveal-enabled & .reveal-section.is-visible {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    filter: blur(0);
  }

  .hero-shell {
    display: grid;
    gap: clamp(1.2rem, 4vw, 3rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: end;
  }

  .profile-shell,
  .about-shell,
  .signature-shell,
  .skills-shell,
  .experience-shell,
  .contact-shell {
    display: grid;
    gap: clamp(1rem, 3.5vw, 2.6rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: start;
  }

  .projects-shell {
    overflow: hidden;
  }

  .hero-aura-left {
    top: -7rem;
    left: -4rem;
  }

  .hero-aura-right {
    right: -6rem;
    top: 6rem;
  }

  .profile-aura-main {
    left: 4%;
    top: 2rem;
  }

  .profile-aura-side {
    right: -4rem;
    top: 30%;
  }

  .contact-aura {
    right: 8%;
    top: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal-section,
    .reveal-section.is-visible {
      opacity: 1;
      transform: none;
      filter: none;
      transition: none;
    }
  }

  @media (max-width: 900px) {
    .hero-shell,
    .profile-shell,
    .about-shell,
    .signature-shell,
    .skills-shell,
    .experience-shell,
    .contact-shell {
      grid-template-columns: 1fr;
    }

    .hero-shell {
      align-items: start;
    }
  }
`;

const HeroLead = styled.div`
  display: grid;
  gap: 1rem;
  position: relative;
  z-index: 2;
`;

const HeroMarker = styled.span`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid rgba(var(--color-border-strong), 0.85);
  border-radius: 999px;
  padding: 0.38rem 0.66rem;
  color: rgb(var(--color-text-secondary));
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const HeroStatement = styled.div`
  display: grid;
  gap: 0.55rem;

  span {
    font-size: clamp(1.14rem, 2vw, 1.7rem);
    color: rgb(var(--color-text-secondary));
  }

  strong {
    font-family: 'Sora', 'Inter', sans-serif;
    font-size: clamp(2.2rem, 5.5vw, 4.8rem);
    line-height: 0.93;
    letter-spacing: -0.047em;
    color: rgb(var(--color-text-primary));
    max-width: 10.5ch;
  }

  em {
    font-style: normal;
    color: rgb(var(--color-accent-soft));
    font-size: clamp(1.02rem, 1.6vw, 1.22rem);
    max-width: 36ch;
  }
`;

const HeroDataTape = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.58rem;

  li {
    border: 1px solid rgba(var(--color-border-subtle), 0.95);
    border-radius: var(--radius-sm);
    background: rgba(var(--color-surface-base), 0.55);
    padding: 0.82rem;
    display: grid;
    gap: 0.25rem;
  }

  label {
    color: rgb(var(--color-text-muted));
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.67rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 0.89rem;
    max-width: 56ch;
  }
`;

const HeroConsole = styled.aside`
  position: relative;
  border: 1px solid rgba(var(--color-border-strong), 0.8);
  border-radius: var(--radius-xl);
  padding: clamp(0.9rem, 1.7vw, 1.3rem);
  display: grid;
  gap: 0.85rem;

  &::before {
    content: '';
    position: absolute;
    inset: -18% auto auto -18%;
    width: 58%;
    aspect-ratio: 1;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(var(--color-accent-soft), 0.18), rgba(var(--color-accent-soft), 0));
    filter: blur(18px);
    z-index: -1;
  }
`;

const ConsoleFrame = styled.div`
  border: 1px solid rgba(var(--color-border-subtle), 0.9);
  border-radius: var(--radius-md);
  background: rgba(var(--color-surface-base), 0.68);
  padding: 0.82rem;
  display: grid;
  gap: 0.72rem;

  header {
    display: flex;
    justify-content: space-between;
    gap: 0.6rem;
    align-items: center;
  }

  header span {
    display: inline-flex;
    align-items: center;
    gap: 0.38rem;
    color: rgb(var(--color-text-primary));
    font-size: 0.82rem;
    font-weight: 600;
  }

  header small {
    color: rgb(var(--color-text-muted));
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  > div {
    display: grid;
    gap: 0.55rem;
  }

  article {
    border: 1px solid rgba(var(--color-border-subtle), 0.95);
    border-radius: var(--radius-sm);
    background: rgba(var(--color-surface-overlay), 0.28);
    padding: 0.72rem;
    display: grid;
    gap: 0.24rem;
  }

  h3 {
    margin: 0;
    font-size: 0.95rem;
  }

  p {
    margin: 0;
    font-size: 0.84rem;
    color: rgb(var(--color-text-secondary));
  }
`;

const ConsoleActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.34rem;
    border-radius: 999px;
    border: 1px solid rgba(var(--color-border-strong), 0.88);
    background: rgba(var(--color-surface-overlay), 0.34);
    color: rgb(var(--color-text-primary));
    font-size: 0.78rem;
    padding: 0.4rem 0.63rem;
    transition: border-color var(--transition-standard), color var(--transition-standard),
      transform var(--transition-quick), background-color var(--transition-standard);
  }

  a:hover {
    border-color: rgba(var(--color-accent-soft), 0.82);
    color: rgb(var(--color-accent-strong));
    transform: translateY(-1px);
    background: rgba(var(--color-surface-overlay), 0.52);
  }
`;

const ProfileCopy = styled.div`
  display: grid;
  align-content: start;
  gap: 0.85rem;

  h2 {
    font-size: clamp(1.9rem, 4.6vw, 3.55rem);
    max-width: 10ch;
  }

  p {
    max-width: 52ch;
  }
`;

const ProfileMetrics = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.55rem;
  width: min(100%, 30rem);

  li {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    border: 1px solid rgba(var(--color-border-subtle), 0.95);
    background: rgba(var(--color-surface-base), 0.56);
    border-radius: var(--radius-sm);
    padding: 0.66rem 0.72rem;
  }

  strong {
    font-size: 1rem;
    color: rgb(var(--color-accent-strong));
    min-width: 3rem;
  }

  span {
    color: rgb(var(--color-text-secondary));
    font-size: 0.89rem;
  }
`;

const ProfileFeature = styled.div`
  position: relative;
  min-height: clamp(24rem, 58vw, 36rem);
`;

const FrameLayer = styled.div`
  position: absolute;
  border-radius: var(--radius-xl);

  &.back {
    inset: 10% 8% 8% 14%;
    transform: rotate(-8deg);
    opacity: 0.62;
    border-color: rgba(var(--color-accent-soft), 0.38);
  }

  &.middle {
    inset: 6% 10% 10% 8%;
    transform: rotate(5deg);
    opacity: 0.58;
  }
`;

const ProfileCore = styled.div`
  position: absolute;
  inset: 8% 6% 6% 10%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: grid;

  @media (max-width: 900px) {
    inset: 5% 4% 4% 4%;
  }
`;

const ProfileImageShell = styled.div`
  position: absolute;
  inset: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.94) contrast(1.02);
  }
`;

const ProfileImageMask = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(155deg, rgba(var(--color-surface-canvas), 0.04), rgba(var(--color-surface-canvas), 0.36)),
    radial-gradient(circle at 84% 16%, rgba(var(--color-accent-soft), 0.28), rgba(var(--color-accent-soft), 0));
`;

const ProfileOverlayTop = styled.div`
  position: absolute;
  top: 0.78rem;
  left: 0.78rem;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    border-radius: 999px;
    border: 1px solid rgba(var(--color-accent-soft), 0.56);
    background: rgba(var(--color-accent-tint), 0.46);
    color: rgb(var(--color-accent-strong));
    font-size: 0.72rem;
    font-weight: 600;
    padding: 0.35rem 0.54rem;
  }
`;

const ProfileOverlayBottom = styled.div`
  position: absolute;
  left: 0.78rem;
  right: 0.78rem;
  bottom: 0.78rem;
  display: grid;
  gap: 0.54rem;

  article {
    border-radius: var(--radius-sm);
    border: 1px solid rgba(var(--color-border-strong), 0.85);
    background: rgba(var(--color-surface-base), 0.72);
    backdrop-filter: blur(9px);
    padding: 0.58rem 0.66rem;
    display: grid;
    gap: 0.2rem;
  }

  small {
    color: rgb(var(--color-text-muted));
    font-size: 0.66rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 0.82rem;
    color: rgb(var(--color-text-primary));
  }
`;

const AboutLead = styled.article`
  display: grid;
  gap: 0.9rem;

  h2 {
    margin: 0;
    font-size: clamp(1.7rem, 4vw, 2.9rem);
  }

  p {
    margin: 0;
    font-size: clamp(1rem, 1.45vw, 1.15rem);
  }
`;

const AboutStack = styled.div`
  display: grid;
  gap: 0.9rem;
`;

const AboutPanel = styled.article`
  display: grid;
  gap: 0.45rem;

  &.offset {
    margin-left: clamp(0.5rem, 2vw, 1.25rem);
  }

  small {
    color: rgb(var(--color-text-muted));
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.68rem;
    font-weight: 600;
  }

  h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  @media (max-width: 900px) {
    &.offset {
      margin-left: 0;
    }
  }
`;

const SignatureRail = styled.div`
  display: grid;
  align-content: start;
  gap: 0.9rem;

  h2 {
    margin: 0;
    max-width: 14ch;
    font-size: clamp(1.55rem, 3.6vw, 2.7rem);
  }

  p {
    margin: 0;
    max-width: 42ch;
  }
`;

const LensSwitches = styled.div`
  display: grid;
  gap: 0.48rem;
  width: min(100%, 16rem);

  button {
    text-align: left;
    border-radius: var(--radius-sm);
    border: 1px solid rgba(var(--color-border-subtle), 0.95);
    background: rgba(var(--color-surface-base), 0.62);
    color: rgb(var(--color-text-secondary));
    padding: 0.62rem 0.78rem;
    font-size: 0.84rem;
    font-weight: 600;
  }

  button:hover,
  button.active {
    color: rgb(var(--color-text-primary));
    border-color: rgba(var(--color-accent-soft), 0.68);
    background: rgba(var(--color-accent-tint), 0.34);
  }
`;

const SignatureBoard = styled.article`
  position: relative;
  min-height: 22rem;
  overflow: hidden;
`;

const LayerA = styled.div`
  position: relative;
  z-index: 5;
  width: min(100%, 31rem);
  display: grid;
  gap: 0.6rem;

  small {
    color: rgb(var(--color-text-muted));
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h3 {
    margin: 0;
    font-size: clamp(1.35rem, 2.8vw, 2rem);
    max-width: 24ch;
  }

  p {
    margin: 0;
    max-width: 45ch;
    font-size: 0.95rem;
  }
`;

const LayerB = styled.div`
  position: absolute;
  z-index: 4;
  top: 7.2rem;
  right: 1rem;
  width: min(100%, 24rem);
  border: 1px solid rgba(var(--color-border-strong), 0.85);
  border-radius: var(--radius-md);
  background: rgba(var(--color-surface-base), 0.82);
  padding: 0.9rem;
  display: grid;
  gap: 0.58rem;

  small {
    color: rgb(var(--color-accent-soft));
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
  }

  ul {
    margin: 0;
    padding-left: 1rem;
    display: grid;
    gap: 0.43rem;
    color: rgb(var(--color-text-secondary));
    font-size: 0.88rem;
  }

  @media (max-width: 900px) {
    position: relative;
    top: auto;
    right: auto;
    margin-top: 1rem;
    width: 100%;
  }
`;

const LayerC = styled.div`
  position: absolute;
  z-index: 6;
  left: clamp(1rem, 35%, 15rem);
  bottom: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid rgba(var(--color-accent-soft), 0.55);
  background: rgba(var(--color-accent-tint), 0.46);
  color: rgb(var(--color-accent-strong));
  border-radius: 999px;
  padding: 0.44rem 0.62rem;
  font-size: 0.78rem;
  font-weight: 600;

  @media (max-width: 900px) {
    position: relative;
    left: auto;
    bottom: auto;
    margin-top: 0.95rem;
    width: fit-content;
  }
`;

const ProjectsHeader = styled.header`
  display: grid;
  gap: 0.8rem;

  h2 {
    margin: 0;
    font-size: clamp(1.9rem, 4.6vw, 3.5rem);
  }

  p {
    margin: 0;
    max-width: 56ch;
  }
`;

const ProjectRail = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.05rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: clamp(1rem, 5vw, 3rem);
  padding: 0 clamp(1rem, 5vw, 3rem) 0.25rem;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(var(--color-border-strong), 0.9);
  }
`;

const ProjectPanel = styled.article`
  position: relative;
  min-width: min(86vw, 64rem);
  max-width: 64rem;
  scroll-snap-align: start;
  padding-bottom: 1rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0.8rem 0.8rem 0 0.8rem;
    border-radius: var(--radius-lg);
    background: rgba(var(--color-surface-overlay), 0.2);
    border: 1px solid rgba(var(--color-border-subtle), 0.45);
    z-index: 1;
  }

  &.panel-2 {
    margin-top: 1.4rem;
  }

  &.panel-3 {
    margin-top: 2.6rem;
  }

  &.panel-4 {
    margin-top: 1rem;
  }

  @media (max-width: 760px) {
    min-width: 92vw;

    &.panel-2,
    &.panel-3,
    &.panel-4 {
      margin-top: 0;
    }
  }
`;

const ProjectPanelInner = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  gap: 1rem;
`;

const ProjectMeta = styled.div`
  display: grid;
  gap: 0.45rem;

  small {
    color: rgb(var(--color-accent-soft));
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.7rem;
    font-weight: 600;
  }

  h3 {
    margin: 0;
    font-size: clamp(1.4rem, 3.2vw, 2.4rem);
  }

  p {
    margin: 0;
    max-width: 58ch;
    font-size: 0.96rem;
  }
`;

const ProjectSignals = styled.div`
  border: 1px solid rgba(var(--color-border-subtle), 0.9);
  border-radius: var(--radius-md);
  background: rgba(var(--color-surface-base), 0.65);
  padding: 0.9rem;
  display: grid;
  gap: 0.6rem;

  h4 {
    margin: 0;
    color: rgb(var(--color-text-muted));
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.72rem;
  }

  ul {
    margin: 0;
    padding-left: 1rem;
    display: grid;
    gap: 0.42rem;
    color: rgb(var(--color-text-secondary));
    font-size: 0.89rem;
  }
`;

const ProjectFoot = styled.div`
  display: grid;
  gap: 0.8rem;
`;

const TechWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    border-radius: 999px;
    border: 1px solid rgba(var(--color-border-strong), 0.92);
    background: rgba(var(--color-surface-overlay), 0.48);
    color: rgb(var(--color-text-secondary));
    padding: 0.35rem 0.54rem;
    font-size: 0.76rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.56rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    border-radius: 999px;
    border: 1px solid rgba(var(--color-border-strong), 0.88);
    color: rgb(var(--color-text-primary));
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
    transition: border-color var(--transition-standard), color var(--transition-standard),
      transform var(--transition-quick), background-color var(--transition-standard);
  }

  a:hover {
    border-color: rgba(var(--color-accent-soft), 0.78);
    color: rgb(var(--color-accent-strong));
    transform: translateY(-1px);
    background: rgba(var(--color-surface-overlay), 0.42);
  }
`;

const SkillsIntro = styled.div`
  display: grid;
  gap: 0.75rem;

  h2 {
    margin: 0;
    font-size: clamp(1.7rem, 4vw, 2.9rem);
  }

  p {
    margin: 0;
    max-width: 54ch;
  }
`;

const SkillBands = styled.div`
  display: grid;
  gap: 0.78rem;
`;

const SkillBand = styled.article`
  position: relative;
  border: 1px solid rgba(var(--color-border-subtle), 0.92);
  background: rgba(var(--color-surface-base), 0.56);
  border-radius: var(--radius-md);
  padding: 1rem;
  display: grid;
  gap: 0.7rem;

  &.band-2 {
    margin-left: clamp(0.4rem, 1.4vw, 0.95rem);
  }

  &.band-3 {
    margin-left: clamp(0.8rem, 2.2vw, 1.65rem);
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: 0.6rem;
    align-items: baseline;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  strong {
    color: rgb(var(--color-accent-strong));
    font-size: 0.9rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.44rem;
  }

  small {
    border-radius: 999px;
    border: 1px solid rgba(var(--color-border-strong), 0.9);
    padding: 0.3rem 0.5rem;
    color: rgb(var(--color-text-secondary));
    font-size: 0.74rem;
  }

  @media (max-width: 900px) {
    &.band-2,
    &.band-3 {
      margin-left: 0;
    }
  }
`;

const BandMeter = styled.div`
  height: 0.46rem;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(var(--color-surface-overlay), 0.52);

  span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      rgba(var(--color-accent-soft), 0.74),
      rgba(var(--color-accent-primary), 0.96)
    );
  }
`;

const ExperienceLead = styled.div`
  display: grid;
  align-content: start;
  gap: 0.75rem;

  h2 {
    margin: 0;
    max-width: 10ch;
    font-size: clamp(1.7rem, 4vw, 2.8rem);
  }

  p {
    margin: 0;
    max-width: 38ch;
  }
`;

const JourneyTrack = styled.div`
  display: grid;
  gap: 0.9rem;
`;

const JourneyNode = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.65rem;
  align-items: start;

  aside {
    min-width: 3rem;
    text-align: center;
    border: 1px solid rgba(var(--color-border-strong), 0.9);
    background: rgba(var(--color-surface-base), 0.6);
    color: rgb(var(--color-text-secondary));
    border-radius: 999px;
    padding: 0.28rem 0.5rem;
    font-size: 0.74rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin-top: 0.5rem;
  }

  article {
    display: grid;
    gap: 0.46rem;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0;
    font-size: 0.91rem;
  }
`;

const ContactPanel = styled.article`
  display: grid;
  gap: 0.85rem;

  small {
    color: rgb(var(--color-text-muted));
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.68rem;
    font-weight: 600;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.75rem, 4.4vw, 3rem);
    max-width: 14ch;
  }

  p {
    margin: 0;
    max-width: 48ch;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }
`;

const ContactMeta = styled.aside`
  display: grid;
  align-content: start;
  gap: 0.8rem;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    font-size: 0.93rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.5rem;
  }

  li {
    display: inline-flex;
    align-items: center;
    gap: 0.44rem;
    font-size: 0.88rem;
    color: rgb(var(--color-text-secondary));
  }
`;

export default SinglePagePortfolio;
