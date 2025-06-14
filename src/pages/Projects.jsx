import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';

// Project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'TaskNest',
    description: 'A productivity platform that enables users to organize notes and tasks in a minimalist dashboard with real-time collaboration features.',
    features: [
      'Real-time updates with websockets',
      'Markdown note support',
      'Drag-and-drop task management',
      'Dark/light theme toggle',
      'User authentication',
      'Responsive design'
    ],
    technologies: ['React', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Node.js', 'WebSockets'],
    githubUrl: '#',
    liveUrl: '#',
    media: [
      { type: 'image', url: '/tasknest1.jpg', alt: 'TaskNest Dashboard' },
      { type: 'video', url: '/tasknest-demo.mp4', thumbnail: '/tasknest-thumb.jpg' },
      { type: 'image', url: '/tasknest2.jpg', alt: 'TaskNest Mobile View' }
    ]
  },
  // Add more projects here
];

const ProjectsContainer = styled.div`
  max-width: 1400px;
  margin: 6rem auto 4rem;
  padding: 0 2rem;
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-size: clamp(3rem, 6vw, 4.5rem);
  background: linear-gradient(90deg, #00a8ff, #0066ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.05em;
`;

const PageSubtitle = styled.p`
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  color: #b0b0b0;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: #101025;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 168, 255, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 168, 255, 0.25);
    border-color: rgba(0, 168, 255, 0.4);
  }
`;

const ProjectMedia = styled.div`
  height: 280px;
  position: relative;
  overflow: hidden;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.thumbnail});
  background-size: cover;
  background-position: center;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(0, 168, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  ${ProjectCard}:hover & {
    background: rgba(0, 168, 255, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #00a8ff;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: #b0b0b0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

const TechItem = styled(motion.span)`
  background-color: rgba(0, 168, 255, 0.15);
  color: #00a8ff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #00a8ff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  background: rgba(0, 168, 255, 0.1);
  border: 1px solid rgba(0, 168, 255, 0.2);

  &:hover {
    background: rgba(0, 168, 255, 0.3);
    color: white;
    transform: translateY(-2px);
  }
`;

// Modal styles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  backdrop-filter: blur(8px);
`;

const ModalContent = styled(motion.div)`
  background-color: #101025;
  border-radius: 16px;
  max-width: 1200px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(0, 168, 255, 0.3);
  box-shadow: 0 20px 50px rgba(0, 168, 255, 0.2);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem;
  position: sticky;
  top: 0;
  background-color: #101025;
  z-index: 1;
  border-bottom: 1px solid rgba(0, 168, 255, 0.1);
`;

const ModalTitle = styled.h2`
  font-size: 2.5rem;
  color: #00a8ff;
  font-weight: 700;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #b0b0b0;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;

  &:hover {
    color: #00a8ff;
    transform: rotate(90deg);
  }
`;

const ModalBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 0 2rem 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectDetails = styled.div``;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  color: #00a8ff;
  margin: 2rem 0 1rem;
  font-weight: 600;
`;

const ProjectDescriptionModal = styled.p`
  font-size: 1.2rem;
  color: #b0b0b0;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ProjectFeatures = styled.ul`
  margin: 1.5rem 0 2.5rem;
  padding-left: 1.5rem;
`;

const ProjectFeature = styled(motion.li)`
  font-size: 1.2rem;
  color: #b0b0b0;
  margin-bottom: 1rem;
  padding-left: 1rem;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '';
    position: absolute;
    left: -0.5rem;
    top: 0.7rem;
    width: 8px;
    height: 8px;
    background-color: #00a8ff;
    border-radius: 50%;
  }
`;

const ProjectMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MediaItem = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 168, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const MediaImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const MediaVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ProjectsContainer>
      <PageHeader
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle>My Projects</PageTitle>
        <PageSubtitle>
          Here are some of my featured works. Click on any project to explore detailed information,
          key features, and media demonstrations.
        </PageSubtitle>
      </PageHeader>

      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => openModal(project)}
            whileHover={{ y: -10 }}
          >
            <ProjectMedia>
              {project.media[0].type === 'image' ? (
                <ProjectImage image={project.media[0].url} />
              ) : (
                <VideoThumbnail thumbnail={project.media[0].thumbnail}>
                  <PlayButton>
                    <FaPlay />
                  </PlayButton>
                </VideoThumbnail>
              )}
            </ProjectMedia>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechList>
                {project.technologies.map((tech, index) => (
                  <TechItem
                    key={index}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 168, 255, 0.25)' }}
                  >
                    {tech}
                  </TechItem>
                ))}
              </TechList>
              <ProjectLinks>
                <ProjectLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiGithub /> View Code
                </ProjectLink>
                <ProjectLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiExternalLink /> Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <CloseButton onClick={closeModal}>
                  <FiX />
                </CloseButton>
              </ModalHeader>
              <ModalBody>
                <ProjectDetails>
                  <SectionTitle>Project Overview</SectionTitle>
                  <ProjectDescriptionModal>
                    {selectedProject.description}
                  </ProjectDescriptionModal>
                  
                  <SectionTitle>Key Features</SectionTitle>
                  <ProjectFeatures>
                    {selectedProject.features.map((feature, index) => (
                      <ProjectFeature
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature}
                      </ProjectFeature>
                    ))}
                  </ProjectFeatures>
                  
                  <SectionTitle>Technologies Used</SectionTitle>
                  <TechList>
                    {selectedProject.technologies.map((tech, index) => (
                      <TechItem
                        key={index}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 168, 255, 0.25)' }}
                      >
                        {tech}
                      </TechItem>
                    ))}
                  </TechList>
                  
                  <ProjectLinks style={{ marginTop: '2rem' }}>
                    <ProjectLink
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FiGithub /> View Code
                    </ProjectLink>
                    <ProjectLink
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FiExternalLink /> Live Demo
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectDetails>
                
                <ProjectMediaContainer>
                  <SectionTitle>Project Media</SectionTitle>
                  {selectedProject.media.map((media, index) => (
                    <MediaItem key={index}>
                      {media.type === 'image' ? (
                        <MediaImage src={media.url} alt={media.alt || `${selectedProject.title} screenshot`} />
                      ) : (
                        <MediaVideo controls poster={media.thumbnail}>
                          <source src={media.url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </MediaVideo>
                      )}
                    </MediaItem>
                  ))}
                </ProjectMediaContainer>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default Projects;