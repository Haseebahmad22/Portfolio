import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCategory = styled.div`
  background-color: #101025;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 168, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 168, 255, 0.2);
    border-color: rgba(0, 168, 255, 0.3);
  }

  h3 {
    color: #00a8ff;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg {
      width: 24px;
      height: 24px;
      fill: #00a8ff;
    }
  }
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled(motion.li)`
  background-color: rgba(0, 168, 255, 0.1);
  color: #00a8ff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    fill: #00a8ff;
  }
`;

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2L1 12l3 3 1.27-1.27L12 6.16l6.73 6.57L20 15l3-3L12 2zm-1 15.5l-5-5 1.41-1.41L11 14.67V8h2v6.67l3.59-3.58L18 12.5l-5 5-1-1z"/>
        </svg>
      ),
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'Redux', 'Styled Components', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
      ),
      skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Tools',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"/>
        </svg>
      ),
      skills: ['Git', 'Webpack', 'VS Code', 'Figma', 'Jira', 'Docker', 'Postman']
    }
  ];

  return (
    <SkillsContainer>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here are the technologies and tools I work with regularly.
      </motion.p>

      <SkillsGrid>
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <SkillCategory>
              <h3>
                {category.icon}
                {category.category}
              </h3>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          </motion.div>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;