import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiPlay } from 'react-icons/fi';
import { FaReact, FaNode, FaJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'GameExplorer',
    description: 'GameExplorer is a comprehensive gaming platform where players can explore an extensive database of games, read and write reviews, watch trailers, and browse screenshots. Designed for gamers by gamers.',
    features: [
      'Extensive Game Database',
      'User Reviews & Ratings',
      'Trailers & Screenshots',
      'Advanced Search',
      'User authentication',
      'Responsive design'
    ],
    technologies: ['React', 'Express', 'SQL', 'Tailwind CSS', 'Next.js'],
    githubUrl: 'https://github.com/AmarWaqar-TSKLI/GameStore2.0',
    liveUrl: 'https://gamestore-rw.vercel.app/',
    image: '/g1.png',
    video: '/gameexplorer.mp4'
  },
  {
    id: 2,
    title: 'Rentinel',
    description: 'Rentinel is a full-stack property management platform designed to streamline rental operations for Admins, Property Owners, and Tenants with automated billing and real-time tracking.',
    features: [
      'Multi-role dashboards',
      'Online payment processing',
      'Lease and property tracking',
      'Real-time notifications',
      'Secure authentication',
      'Financial analytics'
    ],
    technologies: ['React', 'Java', 'Spring Boot', 'SQL', 'JWT'],
    githubUrl: 'https://github.com/Haseebahmad22/Rentinel',
    liveUrl: '#',
    image: '/r1.png',
    video: '/rentinel.mp4'
  },
  {
    id: 3,
    title: 'Journez',
    description: 'A travel planning platform that helps users discover destinations, plan itineraries, and share their travel experiences with a community of fellow travelers.',
    features: [
      'Destination discovery',
      'Itinerary planning',
      'Community sharing',
      'Photo galleries',
      'Travel reviews',
      'Mobile responsive'
    ],
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Node.js'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/j1.jpg',
    video: '/journez.mp4'
  },
  {
    id: 4,
    title: 'QuestRunner',
    description: 'An innovative task management application with gamification elements that makes productivity fun through quests, achievements, and progress tracking.',
    features: [
      'Gamified tasks',
      'Achievement system',
      'Progress tracking',
      'Team collaboration',
      'Custom rewards',
      'Analytics dashboard'
    ],
    technologies: ['React', 'Express', 'MongoDB', 'TypeScript'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/q1.png',
    video: '/questrunner.mp4'
  }
];

const ProjectsContainer = styled.div`
  max-width: 1400px;
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
  margin: 0 auto;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.shadows.glowHover};
  }

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

const ProjectMedia = styled.div`
  height: 300px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const PlayButton = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(99, 102, 241, 0.1);
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.75rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    background: rgba(99, 102, 241, 0.05);
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalVideo = styled.video`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius['2xl']} ${({ theme }) => theme.borderRadius['2xl']} 0 0;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const ModalDetails = styled.div`
  padding: 2rem;
`;

const FeaturesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
  margin: 1.5rem 0;
  list-style: none;
`;

const FeatureItem = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
  }
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <ProjectsContainer>
      <PageHeader
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <PageTitle>My Projects</PageTitle>
        <PageSubtitle>
          A showcase of my recent work and side projects. Each project represents 
          a unique challenge and learning experience in my development journey.
        </PageSubtitle>
      </PageHeader>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedProject(project)}
          >
            <ProjectMedia>
              <ProjectImage src={project.image} alt={project.title} />
              <PlayButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPlay />
              </PlayButton>
            </ProjectMedia>

            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechStack>
                {project.technologies.map((tech, techIndex) => (
                  <TechBadge key={techIndex}>{tech}</TechBadge>
                ))}
              </TechStack>

              <ProjectLinks>
                <ProjectLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub />
                  Code
                </ProjectLink>
                <ProjectLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink />
                  Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX />
              </CloseButton>
              
              <ModalVideo
                src={selectedProject.video}
                controls
                autoPlay
                muted
                loop
              />
              
              <ModalDetails>
                <ProjectTitle>{selectedProject.title}</ProjectTitle>
                <ProjectDescription>{selectedProject.description}</ProjectDescription>
                
                <h4 style={{ color: '#F8FAFC', marginBottom: '1rem' }}>Key Features:</h4>
                <FeaturesList>
                  {selectedProject.features.map((feature, index) => (
                    <FeatureItem key={index}>{feature}</FeatureItem>
                  ))}
                </FeaturesList>

                <TechStack>
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <TechBadge key={techIndex}>{tech}</TechBadge>
                  ))}
                </TechStack>

                <ProjectLinks>
                  <ProjectLink
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                    View Code
                  </ProjectLink>
                  <ProjectLink
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                    Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ModalDetails>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default Projects;

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