import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
// Child components
import ModernHero from '../components/home/ModernHero';
import HeroVisual from '../components/home/HeroVisual';
import Portrait from '../components/home/Portrait';
// TechTabs moved to Skills page. Replaced here with Portrait + SkillsPills preview.
import TechStrip from '../components/home/TechStrip';
// New sections
// Removed SkillsPreview in favor of a single horizontal technology strip
import ProjectsShowcase from '../components/home/sections/ProjectsShowcase';
import ExperienceTimeline from '../components/home/sections/ExperienceTimeline';
import ContactCTA from '../components/home/sections/ContactCTA';
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
  // Removed activeTab/gridRef logic (TechTabs relocated to Skills page)
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

  // (TechTabs label fitting logic removed)

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
  const { stats, typewriterStrings } = require('../data/home');

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
          <ModernHero
            stats={stats}
            typewriterStrings={typewriterStrings}
            onViewWork={handleScrollToProjects}
            onDownloadResume={downloadResume}
            onContact={handleContactClick}
          />
          <RightContent
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.4 }}
          >
            <div style={{ position:'relative', width:'100%', display:'flex', alignItems:'center', justifyContent:'center', transform:'translateY(-120px)' }}>
              {/* Visual background behind portrait */}
              <HeroVisual style={{ position:'absolute', inset:0, height:'100%', pointerEvents:'none', zIndex:1 }} />
              <div style={{ position:'relative', zIndex:2 }}>
                <Portrait />
              </div>
            </div>
          </RightContent>
        </ContentWrapper>
      </HeroSection>

      {/* Full-width Technology Strip */}
      <TechStrip />

      {/* Multi-Section Scroll Experience */}
      <ProjectsShowcase />
      <ExperienceTimeline />
      <ContactCTA />
    </HomeContainer>
  );
};

export default Home;