import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaHeart, FaGlobe } from 'react-icons/fa';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  position: relative;
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['4xl']};
`;

const AboutHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const AboutTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const AboutSubtitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['3xl']};
  }
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  .highlight {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
  }
`;

const SkillsCard = styled(motion.div)`
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
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SkillItem = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    background: rgba(99, 102, 241, 0.1);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

const StatCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
`;

const StatNumber = styled.h4`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatLabel = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  font-weight: 500;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradientSecondary};
  opacity: 0.1;
  filter: blur(30px);
  z-index: -1;

  &:nth-child(1) {
    top: 20%;
    right: 5%;
    animation: float 8s ease-in-out infinite;
  }

  &:nth-child(2) {
    bottom: 30%;
    left: 10%;
    animation: float 6s ease-in-out infinite reverse;
  }
`;

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'TypeScript', 
    'HTML/CSS', 'Git', 'Styled Components', 'Framer Motion',
    'MongoDB', 'Firebase', 'Tailwind CSS', 'Express'
  ];

  const stats = [
    { icon: <FaCode />, number: '20+', label: 'Projects Completed' },
    { icon: <FaGraduationCap />, number: '3+', label: 'Years Learning' },
    { icon: <FaHeart />, number: '100%', label: 'Passion Driven' },
    { icon: <FaGlobe />, number: '24/7', label: 'Available Online' }
  ];

  return (
    <AboutContainer>
      <FloatingElement />
      <FloatingElement />
      
      <AboutSection>
        <AboutHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AboutTitle>About Me</AboutTitle>
          <AboutSubtitle>
            Passionate developer crafting digital experiences with creativity and precision
          </AboutSubtitle>
        </AboutHeader>

        <ContentWrapper>
          <AboutContent
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AboutText>
              <p>
                Hello! I'm a <span className="highlight">passionate frontend developer</span> with 
                a love for creating beautiful, functional, and user-centered digital experiences. 
                My journey in web development started with curiosity and has evolved into a 
                deep commitment to crafting exceptional user interfaces.
              </p>
              <p>
                I specialize in <span className="highlight">modern web technologies</span> like 
                React, JavaScript, and TypeScript, with a strong foundation in responsive design 
                and user experience principles. I believe that great software is not just about 
                functionality—it's about creating delightful experiences that users love.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or enjoying outdoor activities. I'm always eager to learn 
                new skills and take on challenging projects that push the boundaries of what's possible.
              </p>
            </AboutText>
          </AboutContent>

          <SkillsCard
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SkillsTitle>
              <FaCode />
              Technical Skills
            </SkillsTitle>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillItem
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span>{skill}</span>
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillsCard>
        </ContentWrapper>

        <StatsSection>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsSection>
      </AboutSection>
    </AboutContainer>
  );
};

export default About;