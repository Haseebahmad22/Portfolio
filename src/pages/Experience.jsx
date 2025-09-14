import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward, FiTrendingUp, FiStar, FiBriefcase, FiCode, FiUsers } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { media, touch, typography } from '../utils/responsive';

const experienceData = [
  {
    id: 1,
    type: 'work',
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    startDate: 'Jan 2023',
    endDate: 'Present',
    duration: '1 year 8 months',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
    achievements: [
      'Led a team of 5 developers on a major e-commerce platform',
      'Improved application performance by 40% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Architected microservices handling 100k+ daily requests'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB'],
    icon: <FiBriefcase />,
    featured: true
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Digital Innovation Lab',
    location: 'New York, NY',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    duration: '1 year 7 months',
    description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces.',
    achievements: [
      'Built 12+ responsive web applications from scratch',
      'Reduced bug reports by 35% through comprehensive testing',
      'Introduced React best practices to the development team',
      'Mentored 3 junior developers'
    ],
    technologies: ['React', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Git'],
    icon: <FiCode />,
    featured: false
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    location: 'California, USA',
    startDate: 'Sep 2017',
    endDate: 'May 2021',
    duration: '4 years',
    description: 'Graduated Magna Cum Laude with a focus on software engineering and data structures. Active member of the Computer Science Club.',
    achievements: [
      'GPA: 3.8/4.0 - Magna Cum Laude',
      'President of Computer Science Club (2020-2021)',
      'Winner of Annual Hackathon 2020',
      'Dean\'s List for 6 consecutive semesters'
    ],
    technologies: ['Java', 'Python', 'C++', 'SQL', 'Algorithm Design', 'Data Structures'],
    icon: <FaGraduationCap />,
    featured: true
  },
  {
    id: 4,
    type: 'certification',
    title: 'AWS Certified Solutions Architect',
    company: 'Amazon Web Services',
    location: 'Online',
    startDate: 'Mar 2022',
    endDate: 'Mar 2025',
    duration: 'Valid for 3 years',
    description: 'Professional certification demonstrating expertise in designing distributed systems on AWS platform.',
    achievements: [
      'Passed with 85% score on first attempt',
      'Validated skills in AWS architecture design',
      'Expertise in security and compliance',
      'Cost optimization strategies'
    ],
    technologies: ['AWS', 'EC2', 'S3', 'Lambda', 'CloudFormation', 'VPC'],
    icon: <FiAward />,
    featured: false
  },
  {
    id: 5,
    type: 'project',
    title: 'Open Source Contributor',
    company: 'Various Projects',
    location: 'Remote',
    startDate: 'Jan 2020',
    endDate: 'Present',
    duration: 'Ongoing',
    description: 'Active contributor to open source projects with 50+ contributions across different repositories.',
    achievements: [
      '500+ GitHub contributions in the last year',
      'Maintainer of 3 popular npm packages',
      '2000+ stars across personal repositories',
      'Contributed to React ecosystem projects'
    ],
    technologies: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Open Source'],
    icon: <FiUsers />,
    featured: true
  }
];

const filterOptions = ['All', 'Work', 'Education', 'Certification', 'Project'];

const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  position: relative;
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const PageSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 2rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  
  .number {
    font-size: 2rem;
    font-weight: 800;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 0.25rem;
  }
  
  .label {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
  }
`;

const FilterSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ $active, theme }) => $active ? theme.colors.accent : theme.colors.border};
  border-radius: 50px;
  background: ${({ $active, theme }) => $active ? theme.colors.accent : 'transparent'};
  color: ${({ $active, theme }) => $active ? 'white' : theme.colors.text};
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    ${({ $active, theme }) => !$active && `
      background: ${theme.colors.accent}15;
      color: ${theme.colors.accent};
    `}
    transform: translateY(-2px);
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.primary}
  );
  transform: translateX(-50%);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: 30px;
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  margin-bottom: 4rem;
  position: relative;
  
  ${({ $index }) => $index % 2 === 0 ? 'flex-direction: row;' : 'flex-direction: row-reverse;'}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    margin-left: 60px;
  }
`;

const TimelineContent = styled(motion.div)`
  flex: 1;
  ${({ $index }) => $index % 2 === 0 ? 'padding-right: 3rem;' : 'padding-left: 3rem;'}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-right: 0;
    padding-left: 2rem;
  }
`;

const TimelineCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.colors.accent}60;
  }
  
  ${({ $featured, theme }) => $featured && `
    border: 2px solid ${theme.colors.accent}40;
    background: linear-gradient(135deg, ${theme.colors.cardBackground}, ${theme.colors.accent}05);
  `}
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 2rem;
  width: 60px;
  height: 60px;
  background: ${({ theme, $type }) => {
    switch($type) {
      case 'work': return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      case 'education': return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
      case 'certification': return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
      case 'project': return 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
      default: return theme.colors.accent;
    }
  }};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transform: translateX(-50%);
  z-index: 3;
  border: 4px solid ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: -30px;
    transform: translateX(-50%);
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const CardCompany = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.75rem;
`;

const CardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  
  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const AchievementItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
  
  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
    font-size: 1rem;
    margin-top: 0.1rem;
    flex-shrink: 0;
  }
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechBadge = styled.span`
  padding: 0.4rem 0.8rem;
  background: ${({ theme }) => theme.colors.accent}15;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent}25;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.accent}25;
    transform: translateY(-1px);
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: -10px;
  right: 20px;
  background: linear-gradient(135deg, #ff6b6b, #ff8e53);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
`;

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Filter experience data based on active filter
  const filteredExperience = activeFilter === 'All' 
    ? experienceData 
    : experienceData.filter(item => 
        item.type.toLowerCase() === activeFilter.toLowerCase()
      );

  // Calculate statistics
  const workExperience = experienceData.filter(item => item.type === 'work').length;
  const education = experienceData.filter(item => item.type === 'education').length;
  const certifications = experienceData.filter(item => item.type === 'certification').length;

  return (
    <ExperienceContainer>
      <PageHeader
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <PageTitle>Experience & Education</PageTitle>
        <PageSubtitle>
          My professional journey, educational background, and key achievements 
          that have shaped my career in software development.
        </PageSubtitle>
        
        <StatsContainer ref={ref}>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="number">
              {inView && <CountUp end={workExperience} duration={2} />}+
            </div>
            <div className="label">Work Experience</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="number">
              {inView && <CountUp end={education} duration={2} />}
            </div>
            <div className="label">Education</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="number">
              {inView && <CountUp end={certifications} duration={2} />}+
            </div>
            <div className="label">Certifications</div>
          </StatItem>
        </StatsContainer>
      </PageHeader>

      <FilterSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <FilterButtons>
          {filterOptions.map((filter) => (
            <FilterButton
              key={filter}
              $active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterButtons>
      </FilterSection>

      <TimelineContainer>
        <TimelineLine />
        <AnimatePresence mode="wait">
          {filteredExperience.map((item, index) => (
            <TimelineItem
              key={item.id}
              $index={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TimelineIcon $type={item.type}>
                {item.icon}
              </TimelineIcon>
              
              <TimelineContent $index={index}>
                <TimelineCard
                  $featured={item.featured}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {item.featured && (
                    <FeaturedBadge>
                      <FiStar />
                      Featured
                    </FeaturedBadge>
                  )}
                  
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardCompany>{item.company}</CardCompany>
                    
                    <CardMeta>
                      <MetaItem>
                        <FiCalendar />
                        {item.startDate} - {item.endDate}
                      </MetaItem>
                      <MetaItem>
                        <FiMapPin />
                        {item.location}
                      </MetaItem>
                      <MetaItem>
                        <FiTrendingUp />
                        {item.duration}
                      </MetaItem>
                    </CardMeta>
                  </CardHeader>
                  
                  <CardDescription>{item.description}</CardDescription>
                  
                  <AchievementsList>
                    {item.achievements.map((achievement, achIndex) => (
                      <AchievementItem
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                      >
                        {achievement}
                      </AchievementItem>
                    ))}
                  </AchievementsList>
                  
                  <TechnologiesContainer>
                    {item.technologies.map((tech, techIndex) => (
                      <TechBadge key={techIndex}>{tech}</TechBadge>
                    ))}
                  </TechnologiesContainer>
                </TimelineCard>
              </TimelineContent>
            </TimelineItem>
          ))}
        </AnimatePresence>
      </TimelineContainer>
    </ExperienceContainer>
  );
};

export default Experience;