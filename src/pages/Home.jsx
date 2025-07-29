import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaJs, FaNode, FaGit, FaFigma, FaDocker, FaPython, FaAws, FaJava } from 'react-icons/fa';
import { HiOutlineMail, HiCode, HiDesktopComputer, HiCog } from 'react-icons/hi';
import { SiTypescript, SiTailwindcss, SiMongodb, SiFirebase, SiPostgresql, SiRedis, SiExpress, SiNextdotjs, SiVercel, SiNetlify, SiVscodium, SiPostman, SiGithub, SiLinux } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import { RiDatabase2Line } from 'react-icons/ri';

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

const HeroGreeting = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.secondary};

  .wave {
    animation: wave 2s ease-in-out infinite;
    transform-origin: 70% 70%;
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
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  .name {
    background: ${({ theme }) => theme.colors.gradientPrimary};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
  }

  .role {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  .accent {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 800;
  }
`;

const HeroSubtitle = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: 1.375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  .icon {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
  }
`;

const HeroDescription = styled(motion.div)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  .highlight {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
  }

  .passion {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 600;
  }
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
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

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
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

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

const TechSection = styled.div`
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

const TechHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const TechTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TechSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  font-weight: 500;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: rgba(99, 102, 241, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xs};
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Tab = styled(motion.button)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.875rem;
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

  &:hover {
    color: ${({ $active, theme }) => 
      $active ? 'white' : theme.colors.text};
  }

  .icon {
    font-size: 1rem;
  }
`;

const TechGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  min-height: 200px;
`;

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all 0.3s ease;
  cursor: default;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    background: rgba(255, 255, 255, 0.05);
    box-shadow: ${({ theme }) => theme.shadows.glow};
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
    opacity: 0.05;
  }

  .icon {
    width: 36px;
    height: 36px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }

  &:hover .icon {
    transform: scale(1.2);
    filter: drop-shadow(0 0 12px ${({ color }) => color || '#6366f1'});
  }

  span {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    position: relative;
    z-index: 1;
  }
`;

const PersonalitySection = styled(motion.div)`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.cardBackground}80, 
    ${({ theme }) => theme.colors.secondary}60
  );
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
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
      ${({ theme }) => theme.colors.primary}20,
      transparent,
      ${({ theme }) => theme.colors.accent}20,
      transparent
    );
    animation: rotate 20s linear infinite;
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
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PersonalityText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  font-size: 0.95rem;

  .emoji {
    font-size: 1.2em;
    margin: 0 0.25rem;
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
  width: 52px;
  height: 52px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.375rem;
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
    transform: translateY(-3px);
    border-color: ${({ hoverColor }) => hoverColor || '#6366f1'};
    color: white;
    box-shadow: 0 8px 25px ${({ hoverColor }) => hoverColor || '#6366f1'}40;

    &::before {
      left: 0;
    }
  }

  svg {
    position: relative;
    z-index: 1;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  opacity: 0.08;
  filter: blur(40px);
  z-index: -1;

  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: 10%;
    right: 5%;
    animation: float 8s ease-in-out infinite;
  }

  &:nth-child(2) {
    width: 200px;
    height: 200px;
    bottom: 20%;
    left: 10%;
    animation: float 6s ease-in-out infinite reverse;
  }

  &:nth-child(3) {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 40%;
    animation: float 10s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-20px) rotate(120deg); }
    66% { transform: translateY(10px) rotate(240deg); }
  }
`;

const Home = () => {
  const [activeTab, setActiveTab] = useState('frontend');

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

  return (
    <HomeContainer>
      <FloatingElement />
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
              <span className="wave">👋</span> Hey there, I'm
            </HeroGreeting>
            
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="name">Haseeb Ahmad</span><br />
              <span className="role">Full Stack</span> <span className="accent">Developer</span>
            </HeroTitle>
            
            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <BiCodeAlt className="icon" />
              <span>Crafting Digital Experiences</span>
            </HeroSubtitle>
            
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm a <span className="highlight">passionate developer</span> who loves turning ideas into 
              beautiful, functional digital experiences. With expertise in both frontend and backend 
              technologies, I create <span className="passion">seamless web applications</span> that 
              users love and businesses rely on. ✨
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
                <BiCodeAlt />
                View My Work
              </PrimaryButton>
              <SecondaryButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiOutlineMail />
                Get In Touch
              </SecondaryButton>
            </ButtonGroup>
          </LeftContent>

          <RightContent
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TechSection>
              <TechHeader>
                <TechTitle>My Tech Arsenal</TechTitle>
                <TechSubtitle>Technologies I love working with</TechSubtitle>
              </TechHeader>

              <TabContainer>
                {tabs.map((tab) => (
                  <Tab
                    key={tab.id}
                    $active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
                  transition={{ duration: 0.3 }}
                >
                  {technologies[activeTab].map((tech, index) => (
                    <TechItem
                      key={tech.name}
                      color={tech.color}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
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

            <PersonalitySection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <PersonalityTitle>When I'm not coding... 🎯</PersonalityTitle>
              <PersonalityText>
                You'll find me exploring new tech trends <span className="emoji">📱</span>, 
                contributing to open source <span className="emoji">🌟</span>, 
                or probably debugging something at 2 AM with a cup of coffee 
                <span className="emoji">☕</span> (classic developer life, right? 😄)
              </PersonalityText>
            </PersonalitySection>
          </RightContent>
        </ContentWrapper>
      </HeroSection>

      <SocialLinks
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <SocialIcon 
          href="https://github.com/Haseebahmad22" 
          target="_blank" 
          rel="noopener noreferrer"
          hoverColor="#181717"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
        </SocialIcon>
        <SocialIcon 
          href="https://linkedin.com/in/haseeb-ahmad" 
          target="_blank" 
          rel="noopener noreferrer"
          hoverColor="#0077B5"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon 
          href="https://twitter.com/haseebahmad22" 
          target="_blank" 
          rel="noopener noreferrer"
          hoverColor="#1DA1F2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaTwitter />
        </SocialIcon>
        <SocialIcon 
          href="mailto:haseeb.ahmad@example.com"
          hoverColor="#EA4335"
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