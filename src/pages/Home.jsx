import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
// Child components
import Hero from '../components/home/Hero';
import TechTabs from '../components/home/TechTabs';
import Personality from '../components/home/Personality';
import SocialLinksBar from '../components/home/SocialLinksBar';
import { useInView } from 'react-intersection-observer';
import { media, touch, typography } from '../utils/responsive';
import {
  HomeContainer,
  HeroSection,
  ParticlesWrapper,
  ContentWrapper,
  RightContent,
  FloatingElement
} from '../components/home/HomeStyles';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('frontend');
  const gridRef = useRef(null);
  const [particlesReady, setParticlesReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Mobile viewport height fix
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
    
    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  // Detect mobile and touch devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimize animations for mobile
  useEffect(() => {
    const prefersReducedMotionMatch = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPrefersReducedMotion(prefersReducedMotionMatch);
    
    AOS.init({
      duration: isMobile ? 600 : 1000,
      once: true,
      easing: 'ease-out-cubic',
      disable: prefersReducedMotionMatch || (isMobile && window.innerWidth < 480),
      offset: isMobile ? 50 : 120,
    });
  }, [isMobile]);

  // Watch reduced-motion changes
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setPrefersReducedMotion(e.matches);
    if (m.addEventListener) m.addEventListener('change', handler);
    else if (m.addListener) m.addListener(handler);
    setPrefersReducedMotion(m.matches);
    return () => {
      if (m.removeEventListener) m.removeEventListener('change', handler);
      else if (m.removeListener) m.removeListener(handler);
    };
  }, []);

  // Performance optimization for particles on mobile
  const shouldShowParticles = !prefersReducedMotion && (!isMobile || window.innerWidth > 480);

  // Initialize particles
  const particlesLoaded = async (container) => {
    console.log(container);
  };

  const particlesInit = async (engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  };

  // Fit tech labels inside their cards uniformly
  const fitLabels = () => {
    if (!gridRef.current) return;
  const SAFE = 2; // px breathing room to avoid clipping edges
  const MIN_SCALE = 0.8; // raised minimum scale per feedback
    const run = () => {
      const cards = gridRef.current?.querySelectorAll('[data-tech-card="true"]') || [];
      cards.forEach((card) => {
        const wrap = card.querySelector('.labelWrap');
        const label = card.querySelector('.label');
        if (!wrap || !label) return;

        // Do not reset transform to avoid flicker on exiting items; 
        // scrollWidth uses natural content width, unaffected by transforms.
        label.style.transformOrigin = 'center';

        const wrapWidth = Math.floor(wrap.getBoundingClientRect().width) - SAFE;
        const labelWidth = Math.ceil(label.scrollWidth);
        if (wrapWidth > 0 && labelWidth > 0) {
          const needed = wrapWidth / labelWidth;
          const scale = Math.min(1, Math.max(MIN_SCALE, needed * 0.98));
          label.style.transform = `scale(${scale})`;
        }
      });
    };
    // Allow layout/animations to settle; run twice for reliability
    requestAnimationFrame(() => setTimeout(run, 0));
    setTimeout(run, 200);
  };

  // Recompute on tab change, resize, and after animations
  useEffect(() => {
    const onResize = () => fitLabels();
    window.addEventListener('resize', onResize);
    const id = setTimeout(fitLabels, 500); // wait for exit/enter animations

    // Observe grid size/content changes
    let ro;
    if ('ResizeObserver' in window && gridRef.current) {
      ro = new ResizeObserver(() => fitLabels());
      ro.observe(gridRef.current);
    }

    // Run once after page load (fonts/layout ready)
    window.addEventListener('load', fitLabels);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', fitLabels);
      if (ro) ro.disconnect();
      clearTimeout(id);
    };
  }, [activeTab, isMobile]);

  // Intersection observer for counting animations
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Enhanced particle configuration with mobile optimization
  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: isMobile ? 30 : 60, // Reduce FPS on mobile for better performance
    interactivity: {
      events: {
        onClick: {
          enable: !isMobile, // Disable click interaction on mobile
          mode: "push",
        },
        onHover: {
          enable: !isTouch, // Disable hover on touch devices
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#6366f1",
      },
      links: {
        color: "#6366f1",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  // Imported data (technologies, tabs, stats, typewriterStrings)
  const { technologies, tabs, stats, typewriterStrings } = require('../data/home');

  const handleScrollToProjects = () => navigate('/projects');
  const handleContactClick = () => navigate('/contact');
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Haseeb_Ahmad_Resume.pdf';
    link.click();
  };
  return (
    <HomeContainer>
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />

      {shouldShowParticles && (
        <ParticlesWrapper>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
          />
        </ParticlesWrapper>
      )}

      <HeroSection>
        <ContentWrapper>
          <Hero
            stats={stats}
            statsRef={statsRef}
            statsInView={statsInView}
            typewriterStrings={typewriterStrings}
            onViewWork={handleScrollToProjects}
            onDownloadResume={downloadResume}
            onContact={handleContactClick}
          />
          <RightContent
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.6 }}
          >
            <TechTabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              technologies={technologies}
              gridRef={gridRef}
              fitLabels={fitLabels}
            />
            <Personality />
          </RightContent>
        </ContentWrapper>
      </HeroSection>

      <SocialLinksBar />
    </HomeContainer>
  );
};

export default Home;