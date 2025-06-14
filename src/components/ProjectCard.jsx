import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: #101025;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 168, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 168, 255, 0.2);
    border-color: rgba(0, 168, 255, 0.3);
  }
`;

const CardImage = styled.div`
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, #0a0a1a);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #00a8ff;
`;

const CardDescription = styled.p`
  color: #b0b0b0;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechItem = styled.span`
  background-color: rgba(0, 168, 255, 0.1);
  color: #00a8ff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const CardButton = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  flex: 1;

  &:first-child {
    background-color: #00a8ff;
    color: #0a0a1a;
    border: 1px solid #00a8ff;

    &:hover {
      background-color: transparent;
      color: #00a8ff;
      box-shadow: 0 0 10px rgba(0, 168, 255, 0.5);
    }
  }

  &:last-child {
    background-color: transparent;
    color: #00a8ff;
    border: 1px solid #00a8ff;

    &:hover {
      background-color: #00a8ff;
      color: #0a0a1a;
      box-shadow: 0 0 10px rgba(0, 168, 255, 0.5);
    }
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <CardImage imageUrl={project.imageUrl} />
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <TechList>
          {project.technologies.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechList>
        <ButtonGroup>
          <CardButton href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </CardButton>
          <CardButton href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            View Code
          </CardButton>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;