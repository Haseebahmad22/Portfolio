import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaJs, FaNode, FaGit, FaFigma } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiTypescript, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';

const HomeContainer = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 2;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['3xl']};
    text-align: center;
  }
`;

const LeftContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const HeroGreeting = styled(motion.p)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  .gradient-text {
    background: ${({ theme }) => theme.colors.gradientPrimary};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing['2xl']};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glowHover};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.6s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing['2xl']};
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const RightContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const SkillsSection = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
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
    opacity: 0.02;
    pointer-events: none;
  }
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    background: rgba(99, 102, 241, 0.1);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  svg {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.colors.accent};
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
    filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.accent});
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-align: center;
  }
`;

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
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.25rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  opacity: 0.1;
  filter: blur(40px);
  z-index: -1;

  &:nth-child(1) {
    top: 10%;
    right: 10%;
    animation: float 6s ease-in-out infinite;
  }

  &:nth-child(2) {
    bottom: 20%;
    left: 5%;
    animation: float 8s ease-in-out infinite reverse;
  }
`;

const Home = () => {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Git', icon: <FaGit /> },
  ];

  return (
    <HomeContainer>
      <FloatingElement />
      <FloatingElement />
      
      <HeroSection>
        <ContentWrapper>
          <LeftContent>
            <HeroGreeting
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              👋 Hello, I'm
            </HeroGreeting>
            
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="gradient-text">Frontend</span><br />
              Developer
            </HeroTitle>
            
            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Crafting Digital Experiences
            </HeroSubtitle>
            
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I create beautiful, functional, and user-centered digital experiences. 
              Specializing in modern web technologies and responsive design with 
              a passion for clean code and pixel-perfect implementations.
            </HeroDescription>
            
            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <PrimaryButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </PrimaryButton>
              <SecondaryButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </SecondaryButton>
            </ButtonGroup>
          </LeftContent>

          <RightContent
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <SkillsSection>
              <SkillsTitle>Technologies I Work With</SkillsTitle>
              <SkillsGrid>
                {skills.map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </SkillItem>
                ))}
              </SkillsGrid>
            </SkillsSection>
          </RightContent>
        </ContentWrapper>
      </HeroSection>

      <SocialLinks
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <SocialIcon 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
        </SocialIcon>
        <SocialIcon 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaTwitter />
        </SocialIcon>
        <SocialIcon 
          href="mailto:example@email.com"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiOutlineMail />
        </SocialIcon>
      </SocialLinks>
    </HomeContainer>
  );
};

export default Home;