import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: #e0e0e0;
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const AboutHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: #00a8ff;
  margin-bottom: 1rem;
`;

const AboutSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #b0b0b0;
  font-weight: 400;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const SkillsSection = styled.div`
  h3 {
    color: #00a8ff;
    margin-bottom: 1rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.div`
  background-color: #101025;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  border: 1px solid rgba(0, 168, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 168, 255, 0.3);
    transform: translateY(-3px);
  }
`;

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'HTML/CSS', 
    'TypeScript', 'Git', 'Styled Components', 'Framer Motion'
  ];

  return (
    <AboutContainer>
      <AboutSection>
        <AboutHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AboutTitle>About Me</AboutTitle>
          <AboutSubtitle>My journey as a developer</AboutSubtitle>
        </AboutHeader>

        <AboutContent>
          <AboutText>
            <p>
              Hello! I'm a passionate web developer with experience in building modern,
              responsive web applications. I specialize in frontend development using React,
              but I also enjoy working across the full stack.
            </p>
            <p>
              My approach combines clean code principles with attention to design details,
              resulting in applications that are both functional and visually appealing.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or enjoying outdoor activities.
            </p>
          </AboutText>

          <SkillsSection>
            <h3>My Skills</h3>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillItem key={index}>
                  {skill}
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillsSection>
        </AboutContent>
      </AboutSection>
    </AboutContainer>
  );
};

export default About;