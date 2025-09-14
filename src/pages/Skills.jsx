import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  RadialBarChart, 
  RadialBar, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line
} from 'recharts';
import { 
  FaReact, 
  FaJs, 
  FaNode, 
  FaPython, 
  FaGit, 
  FaAws, 
  FaDocker,
  FaFigma,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiFirebase, 
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer
} from 'react-icons/si';
import { 
  HiCode, 
  HiDesktopComputer, 
  HiCog, 
  HiSparkles,
  HiTrendingUp,
  HiLightningBolt
} from 'react-icons/hi';
import { BiCodeAlt, BiTrendingUp, BiRocket } from 'react-icons/bi';
import { media, touch, typography } from '../utils/responsive';
import CountUp from 'react-countup';

const SkillsContainer = styled.div`
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

const SkillsSection = styled.section`
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

const SkillsHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  ${media.tablet} {
    margin-bottom: 3rem;
  }

  ${media.mobile} {
    margin-bottom: 2rem;
  }
`;

const SkillsTitle = styled.h1`
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
    width: 80px;
    height: 3px;
    background: var(--gradient-accent);
    border-radius: 2px;

    ${media.mobile} {
      width: 60px;
      height: 2px;
    }
  }
`;

const SkillsSubtitle = styled.h2`
  font-size: clamp(1.2rem, 4vw, 1.6rem);
  color: var(--text-secondary);
  font-weight: 400;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  ${media.mobile} {
    font-size: ${typography.mobile.body.large};
    line-height: 1.5;
    padding: 0 0.5rem;
  }
`;

// Category Filter Tabs
const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  ${media.tablet} {
    gap: 1rem;
    margin-bottom: 2rem;
  }

  ${media.mobile} {
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
  }
`;

const CategoryTab = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${({ $active }) => 
    $active ? 'var(--gradient-accent)' : 'var(--bg-glass)'};
  color: ${({ $active }) => 
    $active ? 'white' : 'var(--text-secondary)'};
  border: 1px solid ${({ $active }) => 
    $active ? 'transparent' : 'var(--border-primary)'};
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  backdrop-filter: blur(20px);

  ${media.mobile} {
    padding: 0.75rem 1.5rem;
    font-size: ${typography.mobile.body.small};
    gap: 0.5rem;
    ${touch.target}
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px var(--shadow-primary);
    border-color: var(--accent-primary);

    ${media.mobile} {
      transform: translateY(-1px);
    }
  }

  svg {
    font-size: 1.2rem;

    ${media.mobile} {
      font-size: 1rem;
    }
  }
`;

// Main Skills Grid
const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: ${({ theme }) => theme.spacing['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

// Skills Cards Container
const SkillsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: ${({ theme }) => theme.spacing['2xl']};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 25px 50px rgba(99, 102, 241, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
  }
`;

const SkillCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
`;

const SkillsList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(8px);
  }
`;

const SkillInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  svg {
    font-size: 1.5rem;
    color: ${({ color }) => color || '#6366f1'};
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`;

const SkillLevel = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillProgress = styled.div`
  width: 80px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ level }) => level}%;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    border-radius: 4px;
    transition: width 1s ease-in-out;
  }
`;

const SkillPercentage = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  min-width: 35px;
`;

// Charts Container
const ChartsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const ChartCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    text-align: center;
  }
`;

// Stats Overview
const StatsOverview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  color: white;
  font-size: 1.5rem;
`;

const StatNumber = styled.h3`
  font-size: 2.2rem;
  font-weight: 900;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1;
`;

const StatLabel = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  margin: 0;
`;

// Floating Elements
const FloatingElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  opacity: 0.1;
  filter: blur(60px);
  z-index: 1;

  &:nth-child(1) {
    width: 400px;
    height: 400px;
    top: 10%;
    right: -5%;
    animation: float 18s ease-in-out infinite;
  }

  &:nth-child(2) {
    width: 300px;
    height: 300px;
    bottom: 20%;
    left: -10%;
    animation: float 15s ease-in-out infinite reverse;
  }

  &:nth-child(3) {
    width: 250px;
    height: 250px;
    top: 50%;
    right: 40%;
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-30px) rotate(120deg); }
    66% { transform: translateY(15px) rotate(240deg); }
  }
`;

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  
  // Intersection observers
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced skills data with detailed information
  const skillsData = {
    frontend: [
      { name: 'React', icon: <FaReact />, level: 95, color: '#61DAFB', experience: '3+ years' },
      { name: 'JavaScript', icon: <FaJs />, level: 90, color: '#F7DF1E', experience: '3+ years' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#3178C6', experience: '2+ years' },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 88, color: '#000000', experience: '2+ years' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92, color: '#06B6D4', experience: '2+ years' },
      { name: 'Framer Motion', icon: <SiFramer />, level: 85, color: '#0055FF', experience: '1+ years' }
    ],
    backend: [
      { name: 'Node.js', icon: <FaNode />, level: 88, color: '#339933', experience: '3+ years' },
      { name: 'Express.js', icon: <SiExpress />, level: 85, color: '#000000', experience: '2+ years' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47A248', experience: '2+ years' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75, color: '#4169E1', experience: '1+ years' },
      { name: 'Firebase', icon: <SiFirebase />, level: 82, color: '#FFCA28', experience: '2+ years' },
      { name: 'Python', icon: <FaPython />, level: 78, color: '#3776AB', experience: '2+ years' }
    ],
    tools: [
      { name: 'Git', icon: <FaGit />, level: 90, color: '#F05032', experience: '3+ years' },
      { name: 'Docker', icon: <FaDocker />, level: 70, color: '#2496ED', experience: '1+ years' },
      { name: 'AWS', icon: <FaAws />, level: 65, color: '#FF9900', experience: '1+ years' },
      { name: 'Figma', icon: <FaFigma />, level: 85, color: '#F24E1E', experience: '2+ years' }
    ]
  };

  // Categories for filtering
  const categories = [
    { id: 'all', label: 'All Skills', icon: <HiSparkles /> },
    { id: 'frontend', label: 'Frontend', icon: <HiDesktopComputer /> },
    { id: 'backend', label: 'Backend', icon: <FaDatabase /> },
    { id: 'tools', label: 'Tools & DevOps', icon: <HiCog /> }
  ];

  // Stats data
  const stats = [
    { 
      icon: <HiCode />, 
      number: 25, 
      suffix: '+',
      label: 'Technologies',
      description: 'Mastered various tools'
    },
    { 
      icon: <BiRocket />, 
      number: 3, 
      suffix: '+',
      label: 'Years Experience',
      description: 'Continuous learning'
    },
    { 
      icon: <HiTrendingUp />, 
      number: 50, 
      suffix: '+',
      label: 'Projects Built',
      description: 'Various complexities'
    },
    { 
      icon: <HiLightningBolt />, 
      number: 95, 
      suffix: '%',
      label: 'Problem Solving',
      description: 'Success rate'
    }
  ];

  // Chart data for visualization
  const frontendChartData = skillsData.frontend.map(skill => ({
    name: skill.name,
    value: skill.level,
    color: skill.color
  }));

  const backendChartData = skillsData.backend.map(skill => ({
    name: skill.name,
    value: skill.level,
    color: skill.color
  }));

  const experienceData = [
    { name: '2022', projects: 8, skills: 12 },
    { name: '2023', projects: 18, skills: 18 },
    { name: '2024', projects: 24, skills: 25 }
  ];

  // Get filtered skills
  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [...skillsData.frontend, ...skillsData.backend, ...skillsData.tools];
    }
    return skillsData[activeCategory] || [];
  };

  // Get skills by category for cards
  const getSkillsByCategory = () => {
    return [
      { category: 'Frontend', icon: <HiDesktopComputer />, skills: skillsData.frontend },
      { category: 'Backend', icon: <FaDatabase />, skills: skillsData.backend },
      { category: 'Tools & DevOps', icon: <HiCog />, skills: skillsData.tools }
    ];
  };

  return (
    <SkillsContainer>
      {/* Floating Elements */}
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
      
      <SkillsSection>
        {/* Header */}
        <SkillsHeader
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SkillsTitle>Technical Skills</SkillsTitle>
          <SkillsSubtitle>
            A comprehensive overview of my technical expertise, tools mastery, and continuous learning journey
          </SkillsSubtitle>
        </SkillsHeader>

        {/* Stats Overview */}
        <StatsOverview ref={statsRef}>
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
              whileHover={{ scale: 1.05, y: -5 }}
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
        </StatsOverview>

        {/* Category Filter Tabs */}
        <CategoryTabs>
          {categories.map((category) => (
            <CategoryTab
              key={category.id}
              $active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.label}
            </CategoryTab>
          ))}
        </CategoryTabs>

        {/* Main Skills Grid */}
        <SkillsGrid>
          {/* Skills Cards */}
          <SkillsCards ref={skillsRef}>
            {activeCategory === 'all' ? (
              getSkillsByCategory().map((categoryData, index) => (
                <SkillCard
                  key={categoryData.category}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: skillsInView ? 1 : 0, 
                    y: skillsInView ? 0 : 50 
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <SkillCardHeader>
                    {categoryData.icon}
                    <h3>{categoryData.category}</h3>
                  </SkillCardHeader>
                  
                  <SkillsList>
                    {categoryData.skills.map((skill, skillIndex) => (
                      <SkillItem
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: skillsInView ? 1 : 0, 
                          x: skillsInView ? 0 : -20 
                        }}
                        transition={{ duration: 0.4, delay: 0.2 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <SkillInfo color={skill.color}>
                          {skill.icon}
                          <span>{skill.name}</span>
                        </SkillInfo>
                        <SkillLevel>
                          <SkillProgress level={skillsInView ? skill.level : 0} />
                          <SkillPercentage>{skill.level}%</SkillPercentage>
                        </SkillLevel>
                      </SkillItem>
                    ))}
                  </SkillsList>
                </SkillCard>
              ))
            ) : (
              <SkillCard
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <SkillCardHeader>
                  {categories.find(cat => cat.id === activeCategory)?.icon}
                  <h3>{categories.find(cat => cat.id === activeCategory)?.label}</h3>
                </SkillCardHeader>
                
                <SkillsList>
                  {getFilteredSkills().map((skill, index) => (
                    <SkillItem
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <SkillInfo color={skill.color}>
                        {skill.icon}
                        <span>{skill.name}</span>
                      </SkillInfo>
                      <SkillLevel>
                        <SkillProgress level={skill.level} />
                        <SkillPercentage>{skill.level}%</SkillPercentage>
                      </SkillLevel>
                    </SkillItem>
                  ))}
                </SkillsList>
              </SkillCard>
            )}
          </SkillsCards>

          {/* Charts Container */}
          <ChartsContainer>
            {/* Frontend Skills Chart */}
            <ChartCard
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: skillsInView ? 1 : 0, 
                x: skillsInView ? 0 : 50 
              }}
              transition={{ duration: 0.8 }}
            >
              <h3>Frontend Proficiency</h3>
              <ResponsiveContainer width="100%" height={200}>
                <RadialBarChart data={frontendChartData}>
                  <RadialBar
                    dataKey="value"
                    cornerRadius={10}
                    fill="#6366f1"
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Backend Skills Chart */}
            <ChartCard
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: skillsInView ? 1 : 0, 
                x: skillsInView ? 0 : 50 
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>Backend Distribution</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={backendChartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    innerRadius={30}
                  >
                    {backendChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Experience Growth Chart */}
            <ChartCard
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: skillsInView ? 1 : 0, 
                x: skillsInView ? 0 : 50 
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>Growth Timeline</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={experienceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="projects" 
                    stroke="#6366f1" 
                    strokeWidth={3}
                    dot={{ fill: '#6366f1', strokeWidth: 2, r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="skills" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </ChartsContainer>
        </SkillsGrid>
      </SkillsSection>
    </SkillsContainer>
  );
};

export default Skills;