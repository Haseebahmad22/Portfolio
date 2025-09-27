import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { media, typography } from '../utils/responsive';

const LoadingScreen = ({ isLoading, onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    'Initializing Portfolio...',
    'Loading Components...',
    'Setting Up Animations...',
    'Preparing Experience...',
    'Almost Ready...'
  ];

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update current step based on progress
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
        setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadComplete?.(), 500);
          return 100;
        }
        return Math.min(newProgress, 95);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading, loadingSteps.length, onLoadComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <LoadingContainer
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <BackgroundAnimation />
          
          <LoadingContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <LogoContainer
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Logo>
                <LogoText>HA</LogoText>
                <LogoDot />
              </Logo>
            </LogoContainer>

            <LoadingText
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {loadingSteps[currentStep]}
            </LoadingText>

            <ProgressBarContainer>
              <ProgressBar
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <ProgressGlow 
                style={{ left: `${progress}%` }}
                animate={{ 
                  boxShadow: [
                    '0 0 10px var(--accent-primary)',
                    '0 0 30px var(--accent-primary)',
                    '0 0 10px var(--accent-primary)'
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </ProgressBarContainer>

            <ProgressText>{Math.round(progress)}%</ProgressText>

            <LoadingDots>
              {[0, 1, 2].map(i => (
                <Dot 
                  key={i}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3] 
                  }}
                  transition={{ 
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2 
                  }}
                />
              ))}
            </LoadingDots>
          </LoadingContent>

          <TechIcons>
            {['⚛️', '🎨', '⚡', '🚀', '💎'].map((icon, i) => (
              <TechIcon
                key={i}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                {icon}
              </TechIcon>
            ))}
          </TechIcons>
        </LoadingContainer>
      )}
    </AnimatePresence>
  );
};

// Styled Components
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle at 20% 20%, var(--accent-primary)20 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, var(--accent-secondary)20 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, var(--accent-primary)10 0%, transparent 50%);
  animation: ${float} 20s ease-in-out infinite;
  filter: blur(60px);
`;

const LoadingContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  z-index: 2;

  ${media.mobile} {
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

const LogoContainer = styled(motion.div)`
  margin-bottom: 1rem;
`;

const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: var(--gradient-accent);
  border-radius: 50%;
  box-shadow: 
    0 0 50px var(--accent-primary)40,
    inset 0 0 30px rgba(255, 255, 255, 0.1);

  ${media.mobile} {
    width: 80px;
    height: 80px;
  }
`;

const LogoText = styled.span`
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);

  ${media.mobile} {
    font-size: 2rem;
  }
`;

const LogoDot = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 12px;
  height: 12px;
  background: #00ff88;
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;

  ${media.mobile} {
    width: 10px;
    height: 10px;
    bottom: 12px;
    right: 12px;
  }
`;

const LoadingText = styled(motion.h2)`
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: 0.5px;

  ${media.mobile} {
    font-size: ${typography.mobile.body};
  }
`;

const ProgressBarContainer = styled.div`
  position: relative;
  width: 300px;
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;

  ${media.mobile} {
    width: 250px;
    height: 3px;
  }
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: var(--gradient-accent);
  border-radius: 2px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%
    );
    animation: ${float} 1.5s ease-in-out infinite;
  }
`;

const ProgressGlow = styled(motion.div)`
  position: absolute;
  top: -2px;
  width: 6px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;
  transform: translateX(-50%);
  filter: blur(2px);
`;

const ProgressText = styled.div`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 700;
  color: var(--accent-primary);
  margin-top: 0.5rem;

  ${media.mobile} {
    font-size: ${typography.mobile.body};
  }
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled(motion.div)`
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;

  ${media.mobile} {
    width: 6px;
    height: 6px;
  }
`;

const TechIcons = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;

  ${media.mobile} {
    gap: 1.5rem;
    bottom: 1.5rem;
  }
`;

const TechIcon = styled(motion.div)`
  font-size: 2rem;
  opacity: 0.6;

  ${media.mobile} {
    font-size: 1.5rem;
  }
`;

export default LoadingScreen;