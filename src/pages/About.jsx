import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaHeart, FaLightbulb, FaCoffee, FaGamepad, FaMusic, FaCamera } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiCalendar } from 'react-icons/hi';
import { BiRocket, BiTrendingUp, BiCodeAlt } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import projectsData from '../data/projectsData';
import { projects as baseProjects } from '../data/projects';
import { media, touch, typography } from '../utils/responsive';

const AboutContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background: linear-gradient(135deg, 
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );
  overflow: hidden;
  
  ${media.mobile} {
    min-height: auto;
  }
`;

const AboutSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  position: relative;
  z-index: 2;

  ${media.laptop} {
    padding: 6rem 1.5rem 3rem;
  }

  ${media.tablet} {
    padding: 5rem 1rem 2rem;
  }

  ${media.mobile} {
    padding: 4rem 1rem 2rem;
  }
`;

const AboutHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  ${media.tablet} {
    margin-bottom: 3rem;
  }

  ${media.mobile} {
    margin-bottom: 2rem;
  }
`;

const AboutTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;

  ${media.mobile} {
    font-size: clamp(2rem, 10vw, 3rem);
    margin-bottom: 1rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--gradient-accent);
    border-radius: 2px;

    ${media.mobile} {
      width: 40px;
      height: 2px;
    }
  }
`;

const AboutSubtitle = styled.h2`
  font-size: clamp(1.2rem, 4vw, 1.6rem);
  color: var(--text-secondary);
  font-weight: 400;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  ${media.mobile} {
    font-size: ${typography.mobile.body};
    line-height: 1.5;
    padding: 0 0.5rem;
  }
`;

// Enhanced main content grid
const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  margin-bottom: 4rem;

  ${media.laptop} {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  ${media.mobile} {
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

// Profile card design
const ProfileCard = styled(motion.div)`
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-primary);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  height: fit-content;
  position: sticky;
  top: 2rem;

  ${media.laptop} {
    position: static;
  }

  ${media.mobile} {
    padding: 1.5rem;
    border-radius: 20px;
    margin: 0 -0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-accent);
    opacity: 0.05;
    pointer-events: none;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: var(--gradient-accent);
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  position: relative;
  overflow: hidden;

  ${media.mobile} {
    width: 150px;
    height: 150px;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, var(--accent-primary), var(--accent-secondary), var(--accent-primary));
    animation: rotate 10s linear infinite;
    z-index: -1;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
  box-shadow: 0 20px 40px var(--shadow-primary);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: var(--gradient-accent);
    z-index: -1;
    filter: blur(20px);
    opacity: 0.7;
  }
`;

const ProfileName = styled.h3`
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.5rem;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  ${media.mobile} {
    font-size: ${typography.mobile.h4};
    margin-bottom: 0.25rem;
  }
`;

const ProfileRole = styled.p`
  font-size: clamp(1rem, 3vw, 1.1rem);
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 500;

  ${media.mobile} {
    font-size: ${typography.mobile.body};
    margin-bottom: 1rem;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${media.mobile} {
    gap: 0.75rem;
  }
`;

const ProfileDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-secondary);

  ${media.mobile} {
      font-size: ${typography.mobile.body};
    gap: 0.5rem;
    padding: 0.4rem 0;
    ${touch.target}
  }

  &:last-child {
    border-bottom: none;
  }

  svg {
    color: var(--accent-primary);
    font-size: 1.1rem;
    flex-shrink: 0;

    ${media.mobile} {
      font-size: 1rem;
    }
  }
`;

// Story content
const StoryContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.mobile} {
    gap: 1.5rem;
  }
`;

const StorySection = styled(motion.div)`
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-primary);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  ${media.mobile} {
    padding: 1.5rem;
    border-radius: 15px;
    margin: 0 -0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--gradient-accent);
  }
`;

const SectionTitle = styled.h3`
  font-size: clamp(1.3rem, 4vw, 1.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  ${media.mobile} {
    font-size: ${typography.mobile.h5};
    margin-bottom: 1rem;
    gap: 0.5rem;
  }

  svg {
    color: var(--accent-primary);
    font-size: 1.3rem;

    ${media.mobile} {
      font-size: 1.1rem;
    }
  }
`;

const StoryText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${media.mobile} {
    gap: 1rem;
  }

  p {
    font-size: clamp(1rem, 3vw, 1.1rem);
    line-height: 1.8;
    color: var(--text-secondary);
    margin: 0;

    ${media.mobile} {
      font-size: ${typography.mobile.body};
      line-height: 1.6;
    }
  }

  .highlight {
    color: var(--accent-primary);
    font-weight: 600;
    background: var(--accent-primary)20;
    padding: 0.2rem 0.5rem;
    border-radius: 0.25rem;

    ${media.mobile} {
      padding: 0.15rem 0.4rem;
      font-size: ${typography.mobile.small};
    }
  }

  .passion {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }
`;

// Skills and interests section
const SkillsInterestsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  ${media.mobile} {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

// Removed unused SkillsCard

const SkillsTitle = styled.h3`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  ${media.mobile} {
    font-size: ${typography.mobile.h5};
    margin-bottom: 1.5rem;
    gap: 0.5rem;
  }

  svg {
    color: var(--accent-primary);
  }
`;

// Removed deprecated SkillsGrid and SkillItem components

// Interests card
const InterestsCard = styled(motion.div)`
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-primary);
  border-radius: 24px;
  padding: 2rem;
  height: fit-content;

  ${media.mobile} {
    padding: 1.5rem;
    border-radius: 20px;
    margin: 0 -0.5rem;
  }
`;

const InterestsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${media.mobile} {
    gap: 1rem;
  }
`;

const InterestItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  transition: all 0.3s ease;

  ${media.mobile} {
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 10px;
    ${touch.target}
  }

  &:hover {
    background: var(--bg-tertiary);
    transform: translateX(8px);

    ${media.mobile} {
      transform: translateX(4px);
    }
  }

  svg {
    color: var(--accent-primary);
    font-size: 1.3rem;
    flex-shrink: 0;

    ${media.mobile} {
      font-size: 1.1rem;
    }
  }

  span {
    color: var(--text-secondary);
    font-weight: 500;
    font-size: clamp(0.9rem, 2.5vw, 1rem);

    ${media.mobile} {
      font-size: ${typography.mobile.small};
    }
  }
`;

// Enhanced stats section
const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  ${media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  ${media.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const StatCard = styled(motion.div)`
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-primary);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${media.mobile} {
    padding: 1.5rem;
    border-radius: 15px;
    ${touch.target}
  }

  &:hover {
    transform: translateY(-10px);
    border-color: var(--accent-primary);
    box-shadow: 0 25px 50px var(--shadow-primary);

    ${media.mobile} {
      transform: translateY(-5px);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-accent);
  }
`;

const StatIcon = styled.div`
  width: 80px;
  height: 80px;
  background: var(--gradient-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
  box-shadow: 0 15px 30px var(--shadow-primary);

  ${media.mobile} {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const StatNumber = styled.h4`
  font-size: clamp(2rem, 6vw, 2.5rem);
  font-weight: 900;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.5rem;
  line-height: 1;

  ${media.mobile} {
    font-size: ${typography.mobile.h4};
    margin-bottom: 0.25rem;
  }
`;

const StatLabel = styled.p`
  color: var(--text-secondary);
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  font-weight: 600;
  margin: 0;

  ${media.mobile} {
    font-size: ${typography.mobile.small};
  }
`;

// Enhanced floating elements
const FloatingElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: var(--gradient-accent);
  opacity: 0.08;
  filter: blur(60px);
  z-index: 1;

  ${media.mobile} {
    display: none; /* Hide floating elements on mobile for performance */
  }

  &:nth-child(1) {
    width: 400px;
    height: 400px;
    top: 10%;
    right: -5%;
    animation: float 15s ease-in-out infinite;

    ${media.laptop} {
      width: 300px;
      height: 300px;
    }
  }

  &:nth-child(2) {
    width: 300px;
    height: 300px;
    bottom: 20%;
    left: -10%;
    animation: float 12s ease-in-out infinite reverse;

    ${media.laptop} {
      width: 200px;
      height: 200px;
    }
  }

  &:nth-child(3) {
    width: 250px;
    height: 250px;
    top: 60%;
    right: 30%;
    animation: float 18s ease-in-out infinite;

    ${media.laptop} {
      width: 150px;
      height: 150px;
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-40px) rotate(120deg); }
    66% { transform: translateY(20px) rotate(240deg); }
  }
`;

// Skills chart container
// Removed unused SkillsChartContainer and ChartCard (charts deprecated)

const About = () => {
  // Simplified: only observe stats section and skills/interests reveal
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { inView: skillsInView } = useInView({ threshold: 0.2, triggerOnce: true });

  // Calculate dynamic project count to stay consistent with Projects page
  const totalProjects = (baseProjects?.length || 0) + (projectsData?.length || 0);

  // Personal interests
  const interests = [
    { icon: <FaCode />, name: 'Coding & Development' },
    { icon: <FaGamepad />, name: 'Gaming' },
    { icon: <FaMusic />, name: 'Music Production' },
    { icon: <FaCamera />, name: 'Photography' },
    { icon: <FaCoffee />, name: 'Coffee Enthusiast' },
    { icon: <BiRocket />, name: 'Space & Tech' }
  ];

  // Enhanced stats (projects count kept consistent with Projects page)
  const stats = [
    { 
      icon: <FaCode />, 
      number: totalProjects, 
      suffix: '+',
      label: 'Projects Completed',
      description: 'Full-stack applications built'
    },
    { 
      icon: <FaGraduationCap />, 
      number: 3, 
      suffix: '+',
      label: 'Years Experience',
      description: 'Continuous learning journey'
    },
    { 
      icon: <BsStarFill />, 
      number: 25, 
      suffix: '+',
      label: 'Technologies',
      description: 'Mastered and working with'
    },
    { 
      icon: <BiTrendingUp />, 
      number: 100, 
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Happy clients and users'
    }
  ];

  return (
    <AboutContainer>
      {/* Enhanced Floating Elements */}
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
      
      <AboutSection>
        {/* Enhanced Header */}
        <AboutHeader
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AboutTitle>About Me</AboutTitle>
          <AboutSubtitle>
            A passionate developer crafting digital experiences with creativity, precision, and endless curiosity
          </AboutSubtitle>
        </AboutHeader>

        {/* Main Content Grid */}
        <MainContent>
          {/* Story Content */}
          <StoryContent
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* My Journey */}
            <StorySection
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <SectionTitle>
                <BiRocket />
                My Journey
              </SectionTitle>
              <StoryText>
                <p>
                  Hello! I'm a <span className="highlight">passionate full-stack developer</span> with 
                  an insatiable curiosity for creating digital experiences that matter. My journey began 
                  with a simple "Hello, World!" and has evolved into a <span className="passion">love affair with code</span> 
                  that transforms ideas into reality.
                </p>
                <p>
                  From frontend magic with <span className="highlight">React and TypeScript</span> to 
                  backend architecture with <span className="highlight">Node.js and databases</span>, 
                  I thrive in the full spectrum of web development. I believe great software isn't just 
                  about functionality—it's about crafting experiences that users genuinely love.
                </p>
              </StoryText>
            </StorySection>

            {/* Philosophy */}
            <StorySection
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <SectionTitle>
                <FaLightbulb />
                My Philosophy
              </SectionTitle>
              <StoryText>
                <p>
                  I approach development with a <span className="highlight">user-first mindset</span>, 
                  always asking "How can this be better?" Whether it's optimizing performance, 
                  improving accessibility, or adding that perfect animation, I believe in the 
                  <span className="passion"> power of details</span> to create extraordinary experiences.
                </p>
                <p>
                  Continuous learning is my superpower. The tech world evolves rapidly, and I 
                  embrace every new challenge as an opportunity to grow. From exploring cutting-edge 
                  frameworks to contributing to open source, I'm always pushing boundaries.
                </p>
              </StoryText>
            </StorySection>

            {/* Beyond Code */}
            <StorySection
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <SectionTitle>
                <FaHeart />
                Beyond Code
              </SectionTitle>
              <StoryText>
                <p>
                  When I'm not crafting digital solutions, you'll find me exploring new technologies, 
                  experimenting with <span className="highlight">music production</span>, or capturing 
                  moments through photography. I believe diverse interests fuel creativity and bring 
                  fresh perspectives to problem-solving.
                </p>
                <p>
                  I'm also passionate about <span className="highlight">knowledge sharing</span> and 
                  mentoring fellow developers. There's something magical about helping others discover 
                  their potential and watching ideas come to life through code.
                </p>
              </StoryText>
            </StorySection>
          </StoryContent>

          {/* Enhanced Profile Card */}
          <ProfileCard
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ProfileImage
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/profile.png"
                alt="Profile"
                loading="lazy"
                decoding="async"
                onError={(e)=>{
                  if(!e.currentTarget.dataset.fallbackTried){
                    e.currentTarget.dataset.fallbackTried='1';
                    e.currentTarget.src='/porfile.png';
                  } else if(!e.currentTarget.dataset.placeholder){
                    e.currentTarget.dataset.placeholder='1';
                    e.currentTarget.src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0%' stop-color='%236366f1'/><stop offset='50%' stop-color='%23a855f7'/><stop offset='100%' stop-color='%23ec4899'/></linearGradient></defs><rect width='600' height='600' fill='url(%23g)'/></svg>";
                  }
                }}
              />
            </ProfileImage>
            <ProfileName>Haseeb Ahmad</ProfileName>
            <ProfileRole>Full Stack Developer</ProfileRole>
            
            <ProfileDetails>
              <ProfileDetail>
                <HiLocationMarker />
                <span>Pakistan</span>
              </ProfileDetail>
              <ProfileDetail>
                <HiMail />
                <span>haseeb.ahmad@example.com</span>
              </ProfileDetail>
              <ProfileDetail>
                <HiCalendar />
                <span>Available for Projects</span>
              </ProfileDetail>
              <ProfileDetail>
                <BiCodeAlt />
                <span>3+ Years Experience</span>
              </ProfileDetail>
            </ProfileDetails>
          </ProfileCard>
        </MainContent>

        {/* Interests only (Tech Arsenal removed as requested) */}
        <SkillsInterestsGrid>
          <InterestsCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SkillsTitle>
              <FaHeart />
              Interests & Hobbies
            </SkillsTitle>
            
            <InterestsList>
              {interests.map((interest, index) => (
                <InterestItem
                  key={interest.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: skillsInView ? 1 : 0, 
                    x: skillsInView ? 0 : -20 
                  }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {interest.icon}
                  <span>{interest.name}</span>
                </InterestItem>
              ))}
            </InterestsList>
          </InterestsCard>
  </SkillsInterestsGrid>

        {/* Enhanced Stats Section */}
        <StatsSection ref={statsRef}>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ 
                opacity: statsInView ? 1 : 0, 
                y: statsInView ? 0 : 50,
                scale: statsInView ? 1 : 0.8
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber>
                {statsInView && (
                  <CountUp
                    end={stat.number}
                    duration={2}
                    suffix={stat.suffix}
                  />
                )}
              </StatNumber>
              <StatLabel>{stat.label}</StatLabel>
              <p style={{ 
                fontSize: '0.9rem', 
                color: '#9CA3AF', 
                marginTop: '0.5rem',
                margin: 0 
              }}>
                {stat.description}
              </p>
            </StatCard>
          ))}
        </StatsSection>
      </AboutSection>
    </AboutContainer>
  );
};

export default About;