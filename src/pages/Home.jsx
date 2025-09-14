import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaJs, FaNode, FaGit, FaFigma, FaDocker, FaPython, FaAws, FaJava, FaDownload, FaPlay } from 'react-icons/fa';
import { HiOutlineMail, HiCode, HiDesktopComputer, HiCog, HiEye, HiStar, HiHeart } from 'react-icons/hi';
import { SiTypescript, SiTailwindcss, SiMongodb, SiFirebase, SiPostgresql, SiRedis, SiExpress, SiNextdotjs, SiVercel, SiNetlify, SiVscodium, SiPostman, SiGithub, SiLinux } from 'react-icons/si';
import { BiCodeAlt, BiRocket, BiTrendingUp } from 'react-icons/bi';
import { RiDatabase2Line } from 'react-icons/ri';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { ReactTyped } from 'react-typed';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { media, touch, typography } from '../utils/responsive';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeContainer = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 2;
  overflow: hidden;
  
  /* Mobile viewport fix */
  min-height: calc(var(--vh, 1vh) * 100);
  
  ${media.mobile} {
    padding-top: 60px; /* Account for fixed header */
  }
`;

// Enhanced Hero Section with mobile-first design
const HeroSection = styled.section`
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  background: linear-gradient(135deg, 
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );

  ${media.laptop} {
    padding: 1.5rem;
  }

  ${media.tablet} {
    padding: 1rem;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 100px; /* More space for mobile header */
  }

  ${media.mobile} {
    padding: 0.75rem;
    padding-top: 80px;
    min-height: calc(100vh - 60px);
    align-items: center;
  }

  /* Landscape mobile phones */
  ${media.landscape} {
    ${media.mobile} {
      min-height: 100vh;
      padding-top: 1rem;
      align-items: center;
    }
  }
`;

// Particles Container with mobile optimization
const ParticlesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  ${media.mobile} {
    opacity: 0.3; /* Reduce particle intensity on mobile */
  }
  
  ${media.reducedMotion} {
    display: none; /* Hide particles for users who prefer reduced motion */
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  z-index: 2;
  position: relative;

  ${media.laptop} {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    max-width: 800px;
  }

  ${media.tablet} {
    gap: 2rem;
    max-width: 100%;
  }

  ${media.mobile} {
    gap: 1.5rem;
    padding: 0;
  }
`;

const LeftContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 3;

  ${media.tablet} {
    align-items: center;
    text-align: center;
  }

  ${media.mobile} {
    gap: 1.5rem;
  }
`;

// Enhanced greeting with mobile optimization
const HeroGreeting = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
  color: var(--accent-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;

  ${media.tablet} {
    justify-content: center;
    font-size: 1.2rem;
  }

  ${media.mobile} {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }

  .wave {
    animation: wave 2s ease-in-out infinite;
    transform-origin: 70% 70%;
    font-size: 1.8rem;
    
    ${media.mobile} {
      font-size: 1.4rem;
    }
  }

  .sparkle {
    margin-left: 0.5rem;
    color: var(--accent-secondary);
    animation: sparkle 2s ease-in-out infinite;
  }

  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    10%, 30% { transform: rotate(-10deg); }
    20% { transform: rotate(12deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(-6deg); }
    70% { transform: rotate(8deg); }
    80% { transform: rotate(-4deg); }
    90% { transform: rotate(6deg); }
  }

  @keyframes sparkle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.2); }
  }

  /* Reduce animations on mobile for performance */
  ${media.mobile} {
    .wave, .sparkle {
      animation-duration: 3s;
    }
  }

  ${media.reducedMotion} {
    .wave, .sparkle {
      animation: none;
    }
  }
`;

// Enhanced title with responsive typography
const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  ${media.mobile} {
    font-size: clamp(2rem, 10vw, 3rem);
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .name {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    display: block;
  }

  .role-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    
    ${media.tablet} {
      justify-content: center;
    }

    ${media.mobile} {
      justify-content: center;
      gap: 0.5rem;
    }
  }

  .role {
    color: var(--text-primary);
    font-weight: 700;
  }

  .typed-cursor {
    color: var(--accent-primary);
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  ${media.reducedMotion} {
    .typed-cursor {
      animation: none;
      opacity: 1;
    }
  }
`;

// Enhanced subtitle with mobile optimization
const HeroSubtitle = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  min-height: 2rem;

  ${media.tablet} {
    justify-content: center;
    font-size: 1.3rem;
  }

  ${media.mobile} {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    min-height: auto;
  }

  .icon {
    color: var(--accent-primary);
    font-size: 1.8rem;
    
    ${media.mobile} {
      font-size: 1.4rem;
    }
  }

  .typed-text {
    color: var(--accent-primary);
    font-weight: 700;
  }
`;

const HeroDescription = styled(motion.div)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 650px;
  margin-bottom: 2rem;

  ${media.tablet} {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  ${media.mobile} {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    max-width: 100%;
  }

  .highlight {
    color: var(--accent-primary);
    font-weight: 600;
    background: rgba(79, 172, 254, 0.1);
    padding: 0.2rem 0.5rem;
    border-radius: 0.25rem;
  }

  .passion {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }
`;

// Enhanced button group with mobile-first design
const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 2rem;

  ${media.tablet} {
    justify-content: center;
    gap: 1rem;
  }

  ${media.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    
    button {
      width: 100%;
      max-width: 280px;
    }
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--gradient-accent);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s var(--transition-smooth);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 8px 32px rgba(79, 172, 254, 0.3);
  min-height: ${touch.minTarget};

  ${media.mobile} {
    font-size: 1rem;
    padding: 0.875rem 1.5rem;
  }

  ${media.touch} {
    min-height: 48px;
    padding: 0.75rem 1.5rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(79, 172, 254, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: 0.8s;
  }

  &:hover::before {
    left: 100%;
  }

  .icon {
    transition: transform 0.3s ease;
  }

  &:hover .icon {
    transform: scale(1.2);
  }

  ${media.reducedMotion} {
    &::before {
      display: none;
    }
    
    &:hover {
      transform: none;
    }
    
    .icon {
      transition: none;
    }
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: transparent;
  color: var(--accent-primary);
  border: 2px solid var(--accent-primary);
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s var(--transition-smooth);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: ${touch.minTarget};

  ${media.mobile} {
    font-size: 1rem;
    padding: 0.875rem 1.5rem;
  }

  ${media.touch} {
    min-height: 48px;
    padding: 0.75rem 1.5rem;
  }

  &:hover {
    transform: translateY(-3px);
    background: var(--accent-primary);
    color: white;
    box-shadow: 0 8px 32px rgba(79, 172, 254, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }

  .icon {
    transition: transform 0.3s ease;
  }

  &:hover .icon {
    transform: scale(1.1);
  }

  ${media.reducedMotion} {
    &:hover {
      transform: none;
    }
    
    .icon {
      transition: none;
    }
  }
`;

// Enhanced stats section with mobile optimization
const StatsSection = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  
  ${media.tablet} {
    justify-content: center;
    gap: 1.5rem;
  }

  ${media.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  
  ${media.tablet} {
    flex: 1;
  }

  ${media.mobile} {
    min-width: 120px;
  }
  
  .number {
    font-size: 2.5rem;
    font-weight: 900;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    line-height: 1;
  }
  
  .label {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
    margin-top: 0.5rem;
  }
`;

const RightContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
  z-index: 3;
`;

// Enhanced tech section with better visuals
const TechSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: ${({ theme }) => theme.spacing['2xl']};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    opacity: 0.03;
    pointer-events: none;
  }
`;

const TechHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const TechTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TechSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  font-weight: 500;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: rgba(99, 102, 241, 0.08);
  border-radius: 16px;
  padding: 8px;
  gap: 8px;
`;

const Tab = styled(motion.button)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border: none;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  background: ${({ $active, theme }) => 
    $active ? theme.colors.gradientPrimary : 'transparent'};
  color: ${({ $active, theme }) => 
    $active ? 'white' : theme.colors.textSecondary};
  box-shadow: ${({ $active }) => 
    $active ? '0 8px 32px rgba(99, 102, 241, 0.3)' : 'none'};

  &:hover {
    color: ${({ $active, theme }) => 
      $active ? 'white' : theme.colors.text};
    transform: translateY(-2px);
  }

  .icon {
    font-size: 1.1rem;
  }
`;

const TechGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  min-height: 240px;
`;

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  cursor: default;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-12px) scale(1.05);
    border-color: ${({ color }) => color || '#6366f1'};
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ color }) => color || '#6366f1'};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.1;
  }

  .icon {
    width: 42px;
    height: 42px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }

  &:hover .icon {
    transform: scale(1.3) rotate(10deg);
    filter: drop-shadow(0 0 20px ${({ color }) => color || '#6366f1'});
  }

  span {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    position: relative;
    z-index: 1;
  }
`;

// Enhanced personality section
const PersonalitySection = styled(motion.div)`
  background: linear-gradient(135deg, 
    rgba(99, 102, 241, 0.1),
    rgba(168, 85, 247, 0.05)
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg at 50% 50%,
      rgba(99, 102, 241, 0.2),
      transparent,
      rgba(168, 85, 247, 0.2),
      transparent
    );
    animation: rotate 30s linear infinite;
    z-index: 0;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const PersonalityTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PersonalityText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  font-size: 1rem;

  .emoji {
    font-size: 1.3em;
    margin: 0 0.3rem;
  }
`;

// Enhanced social links
const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ hoverColor }) => hoverColor || '#6366f1'};
    transition: left 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.1);
    border-color: ${({ hoverColor }) => hoverColor || '#6366f1'};
    color: white;
    box-shadow: 0 15px 35px ${({ hoverColor }) => hoverColor || '#6366f1'}40;

    &::before {
      left: 0;
    }
  }

  svg {
    position: relative;
    z-index: 1;
  }
`;

// Floating elements for visual interest
const FloatingElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  opacity: 0.1;
  filter: blur(60px);
  z-index: 0;

  &:nth-child(1) {
    width: 400px;
    height: 400px;
    top: 5%;
    right: 0%;
    animation: float 12s ease-in-out infinite;
  }

  &:nth-child(2) {
    width: 300px;
    height: 300px;
    bottom: 10%;
    left: 5%;
    animation: float 8s ease-in-out infinite reverse;
  }

  &:nth-child(3) {
    width: 200px;
    height: 200px;
    top: 50%;
    right: 30%;
    animation: float 15s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-30px) rotate(120deg); }
    66% { transform: translateY(15px) rotate(240deg); }
  }
`;

// Scroll indicator
const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  z-index: 3;

  .arrow {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Home = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [particlesReady, setParticlesReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  
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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    AOS.init({
      duration: isMobile ? 600 : 1000,
      once: true,
      easing: 'ease-out-cubic',
      disable: prefersReducedMotion || (isMobile && window.innerWidth < 480),
      offset: isMobile ? 50 : 120,
    });
  }, [isMobile]);

  // Performance optimization for particles on mobile
  const shouldShowParticles = !isMobile || window.innerWidth > 480;

  // Initialize particles
  const particlesLoaded = async (container) => {
    console.log(container);
  };

  const particlesInit = async (engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  };

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

  // Technologies data with enhanced categories
  const technologies = {
    frontend: [
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNode />, color: '#339933' },
      { name: 'Express', icon: <SiExpress />, color: '#000000' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
      { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
      { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    ],
    tools: [
      { name: 'Git', icon: <FaGit />, color: '#F05032' },
      { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
      { name: 'VS Code', icon: <SiVscodium />, color: '#007ACC' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
      { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
      { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
      { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
    ]
  };

  const tabs = [
    { id: 'frontend', label: 'Frontend', icon: <HiDesktopComputer /> },
    { id: 'backend', label: 'Backend', icon: <RiDatabase2Line /> },
    { id: 'tools', label: 'Tools & Others', icon: <HiCog /> },
  ];

  // Stats data
  const stats = [
    { number: 50, label: 'Projects Built', suffix: '+' },
    { number: 2, label: 'Years Experience', suffix: '+' },
    { number: 25, label: 'Technologies', suffix: '+' },
    { number: 100, label: 'Happy Clients', suffix: '%' },
  ];

  // Typewriter strings
  const typewriterStrings = [
    'Building Amazing Web Apps',
    'Creating Digital Experiences',
    'Full Stack Development',
    'Modern UI/UX Design',
    'Scalable Solutions'
  ];

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to add your resume PDF to the public folder
    link.download = 'Haseeb_Ahmad_Resume.pdf';
    link.click();
  };

  return (
    <HomeContainer>
      {/* Enhanced Floating Elements */}
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
      
      {/* Advanced Particle System - Optimized for Mobile */}
      {particlesReady && shouldShowParticles && (
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
          <LeftContent>
            {/* Enhanced Greeting with sparkles */}
            <HeroGreeting
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="wave">👋</span> Hey there, I'm
              <span className="sparkle">✨</span>
            </HeroGreeting>
            
            {/* Enhanced Title with better animations */}
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="name">Haseeb Ahmad</span>
              <div className="role-container">
                <span className="role">Full Stack</span> 
                <span className="role" style={{ color: '#6366f1' }}>Developer</span>
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    delay: 1
                  }}
                >
                  🚀
                </motion.div>
              </div>
            </HeroTitle>
            
            {/* Enhanced Subtitle with typewriter effect */}
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <BiCodeAlt className="icon" />
              <ReactTyped
                strings={typewriterStrings}
                typeSpeed={80}
                backSpeed={60}
                backDelay={2000}
                loop
                className="typed-text"
              />
            </HeroSubtitle>
            
            {/* Enhanced Description */}
            <HeroDescription
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I'm a <span className="highlight">passionate developer</span> who transforms ideas into 
              extraordinary digital experiences. Specializing in modern web technologies, I create 
              <span className="passion"> stunning, scalable applications</span> that captivate users 
              and drive business success. Let's build something incredible together! ✨
            </HeroDescription>

            {/* Enhanced Stats Section */}
            <StatsSection
              ref={statsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {stats.map((stat, index) => (
                <StatItem
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <div className="number">
                    {statsInView && (
                      <CountUp
                        end={stat.number}
                        duration={2}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <div className="label">{stat.label}</div>
                </StatItem>
              ))}
            </StatsSection>
            
            {/* Enhanced Button Group */}
            <ButtonGroup
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <PrimaryButton
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToProjects}
              >
                <FaPlay className="icon" />
                View My Work
              </PrimaryButton>
              <SecondaryButton
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadResume}
              >
                <FaDownload className="icon" />
                Download Resume
              </SecondaryButton>
            </ButtonGroup>
          </LeftContent>

          <RightContent
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.6 }}
          >
            {/* Enhanced Tech Section */}
            <TechSection data-aos="fade-left" data-aos-delay="200">
              <TechHeader>
                <TechTitle>My Tech Arsenal ⚡</TechTitle>
                <TechSubtitle>Technologies I master and love working with</TechSubtitle>
              </TechHeader>

              <TabContainer>
                {tabs.map((tab) => (
                  <Tab
                    key={tab.id}
                    $active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="icon">{tab.icon}</span>
                    {tab.label}
                  </Tab>
                ))}
              </TabContainer>

              <AnimatePresence mode="wait">
                <TechGrid
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {technologies[activeTab].map((tech, index) => (
                    <TechItem
                      key={tech.name}
                      color={tech.color}
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span 
                        className="icon" 
                        style={{ color: tech.color }}
                      >
                        {tech.icon}
                      </span>
                      <span>{tech.name}</span>
                    </TechItem>
                  ))}
                </TechGrid>
              </AnimatePresence>
            </TechSection>

            {/* Enhanced Personality Section */}
            <PersonalitySection
              data-aos="fade-left" 
              data-aos-delay="400"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <PersonalityTitle>Beyond the Code 🎯</PersonalityTitle>
              <PersonalityText>
                When I'm not crafting digital magic <span className="emoji">🎨</span>, 
                you'll find me exploring cutting-edge tech <span className="emoji">�</span>, 
                contributing to open source projects <span className="emoji">🌟</span>, 
                or perfecting my craft with a steaming cup of coffee at 2 AM 
                <span className="emoji">☕</span> (the developer's way! 😄)
              </PersonalityText>
            </PersonalitySection>
          </RightContent>
        </ContentWrapper>

        {/* Scroll Indicator */}
        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <span>Scroll to explore</span>
          <BsArrowDown className="arrow" />
        </ScrollIndicator>
      </HeroSection>

      {/* Enhanced Social Links */}
      <SocialLinks
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <SocialIcon 
          href="https://github.com/Haseebahmad22" 
          target="_blank" 
          rel="noopener noreferrer"
          hoverColor="#181717"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
        </SocialIcon>
        <SocialIcon 
          href="https://linkedin.com/in/haseeb-ahmad" 
          target="_blank" 
          rel="noopener noreferrer"
          hoverColor="#0077B5"
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon 
          href="https://twitter.com/haseebahmad22" 
          target="_blank" 
          rel="noopener noreferrer"
          hoverColor="#1DA1F2"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaTwitter />
        </SocialIcon>
        <SocialIcon 
          href="mailto:haseeb.ahmad@example.com"
          hoverColor="#EA4335"
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContactClick}
        >
          <HiOutlineMail />
        </SocialIcon>
      </SocialLinks>
    </HomeContainer>
  );
};

export default Home;