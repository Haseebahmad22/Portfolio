import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #00a8ff, transparent);
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with cart functionality and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: 'https://via.placeholder.com/400x225/101025/00a8ff?text=E-commerce',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks with drag-and-drop functionality.',
      technologies: ['React', 'Firebase', 'Material UI'],
      imageUrl: 'https://via.placeholder.com/400x225/101025/00a8ff?text=Task+App',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with 5-day forecast and location search.',
      technologies: ['JavaScript', 'OpenWeather API'],
      imageUrl: 'https://via.placeholder.com/400x225/101025/00a8ff?text=Weather+App',
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <ProjectsContainer>
      <SectionTitle>My Projects</SectionTitle>
      <p>Here are some of my recent works. Each project was built to solve specific problems and improve user experiences.</p>
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;