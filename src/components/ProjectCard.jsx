import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.smooth};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.smooth};
    z-index: 0;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary};

    &::before {
      opacity: 0.05;
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const CardImage = styled.div`
  height: 220px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg, 
      transparent 0%, 
      rgba(10, 10, 26, 0.8) 100%
    );
  }
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.6;
  font-size: ${({ theme }) => theme.typography.sizes.base};
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const TechItem = styled.span`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}20, 
    ${({ theme }) => theme.colors.accent}20
  );
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  backdrop-filter: blur(10px);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const CardButton = styled.a`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.smooth};
  text-align: center;
  flex: 1;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    transition: left ${({ theme }) => theme.transitions.smooth};
    z-index: 0;
  }

  &:first-child {
    background: ${({ theme }) => theme.colors.gradientPrimary};
    color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.glow};
    }
  }

  &:last-child {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.background};
      box-shadow: ${({ theme }) => theme.shadows.glow};

      &::before {
        left: 0;
      }
    }
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
            <span>Live Demo</span>
          </CardButton>
          <CardButton href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            <span>View Code</span>
          </CardButton>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;