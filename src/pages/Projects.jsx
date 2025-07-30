import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiPlay, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
    images: ['/g1.png'],
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
    images: ['/r1.png', '/r2.png', '/r3.png'],
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
    images: ['/j1.jpg', '/j2.jpg', '/j3.jpg', '/j4.jpg', '/j5.jpg', '/j6.jpg'],
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
    images: ['/q1.png', '/q2.png', '/q3.png', '/q4.png', '/q5.png'],
    video: '/questrunner.mp4'
  },
  {
    id: 5,
    title: 'VoltMaster',
    description: 'An advanced electrical management system for monitoring and controlling power distribution with real-time analytics and safety features.',
    features: [
      'Real-time monitoring',
      'Power analytics',
      'Safety alerts',
      'Remote control',
      'Energy optimization',
      'Maintenance scheduling'
    ],
    technologies: ['React', 'Node.js', 'IoT', 'MongoDB', 'Socket.io'],
    githubUrl: '#',
    liveUrl: '#',
    images: ['/v1.jpg', '/v2.jpg', '/v3.jpg'],
    video: '/voltmaster.mp4'
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
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
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
  height: fit-content;

  &:hover {
    transform: translateY(-4px);
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
  height: 250px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.02);
  }
`;

const MediaOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const SlideNavigation = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  padding: 4px 8px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;

const SlideDot = styled(motion.button)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  background: ${({ $active, theme }) => $active ? theme.colors.accent : 'rgba(255, 255, 255, 0.6)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const PlayButton = styled(motion.div)`
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  z-index: 4;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin-bottom: 1.25rem;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FeaturesList = styled.div`
  margin-bottom: 1.25rem;
`;

const FeatureTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.25rem;
`;

const FeatureItem = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.25rem 0;
  position: relative;
  padding-left: 1rem;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
`;

const TechBadge = styled.span`
  padding: 0.2rem 0.6rem;
  background: rgba(99, 102, 241, 0.1);
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.7rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  flex: 1;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    background: rgba(99, 102, 241, 0.05);
    transform: translateY(-1px);
  }

  svg {
    width: 14px;
    height: 14px;
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

const ModalImageContainer = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius['2xl']} ${({ theme }) => theme.borderRadius['2xl']} 0 0;
`;

const ModalSlideshow = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ModalSlideImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ModalSlideNav = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 3;
`;

const ModalSlideDot = styled(motion.button)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${({ $active, theme }) => $active ? theme.colors.primary : 'rgba(255, 255, 255, 0.7)'};
  background: ${({ $active, theme }) => $active ? theme.colors.primary : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
    transform: scale(1.2);
  }
`;

const ModalSlideArrow = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  font-size: 1.2rem;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }
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

const ModalFeaturesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
  margin: 1.5rem 0;
  list-style: none;
`;

const ModalFeatureItem = styled.li`
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
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Initialize image indices for all projects
  useEffect(() => {
    const initialIndices = {};
    projects.forEach(project => {
      initialIndices[project.id] = 0;
    });
    setCurrentImageIndex(initialIndices);
  }, []);

  // Reset modal image index when project changes
  useEffect(() => {
    if (selectedProject) {
      setModalImageIndex(0);
    }
  }, [selectedProject]);

  const goToSlide = (projectId, index, e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: index
    }));
  };

  const handleModalPrevImage = () => {
    setModalImageIndex(prev => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const handleModalNextImage = () => {
    setModalImageIndex(prev => 
      (prev + 1) % selectedProject.images.length
    );
  };

  const goToModalSlide = (index) => {
    setModalImageIndex(index);
  };

  const ImageSlideshow = ({ project }) => {
    const currentIndex = currentImageIndex[project.id] || 0;
    
    return (
      <SlideshowContainer>
        <SlideImage
          src={project.images[currentIndex] || project.images[0]}
          alt={`${project.title} - Image ${currentIndex + 1}`}
        />
        
        {project.images.length > 1 && (
          <SlideNavigation>
            {project.images.map((_, index) => (
              <SlideDot
                key={index}
                $active={index === currentIndex}
                onClick={(e) => goToSlide(project.id, index, e)}
              />
            ))}
          </SlideNavigation>
        )}
      </SlideshowContainer>
    );
  };

  const ModalImageSlideshow = () => {
    if (!selectedProject || selectedProject.images.length === 0) return null;

    if (selectedProject.images.length === 1) {
      return (
        <ModalImageContainer>
          <ModalSlideImage
            src={selectedProject.images[0]}
            alt={selectedProject.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </ModalImageContainer>
      );
    }

    return (
      <ModalImageContainer>
        <ModalSlideshow>
          <AnimatePresence mode="wait">
            <ModalSlideImage
              key={modalImageIndex}
              src={selectedProject.images[modalImageIndex]}
              alt={`${selectedProject.title} - Image ${modalImageIndex + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          <ModalSlideArrow
            className="left"
            onClick={handleModalPrevImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft />
          </ModalSlideArrow>

          <ModalSlideArrow
            className="right"
            onClick={handleModalNextImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight />
          </ModalSlideArrow>

          <ModalSlideNav>
            {selectedProject.images.map((_, index) => (
              <ModalSlideDot
                key={index}
                $active={index === modalImageIndex}
                onClick={() => goToModalSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </ModalSlideNav>
        </ModalSlideshow>
      </ModalImageContainer>
    );
  };

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
            whileHover={{ scale: 1.01 }}
            onClick={() => setSelectedProject(project)}
          >
            <ProjectMedia>
              <ImageSlideshow project={project} />
              <MediaOverlay>
                <PlayButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPlay />
                </PlayButton>
              </MediaOverlay>
            </ProjectMedia>

            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <FeaturesList>
                <FeatureTitle>Key Features</FeatureTitle>
                <FeatureGrid>
                  {project.features.slice(0, 4).map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                  ))}
                </FeatureGrid>
              </FeaturesList>
              
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub />
                  Code
                </ProjectLink>
                <ProjectLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
              
              <ModalImageSlideshow />
              
              <ModalDetails>
                <ProjectTitle>{selectedProject.title}</ProjectTitle>
                <ProjectDescription>{selectedProject.description}</ProjectDescription>
                
                <h4 style={{ color: '#F8FAFC', marginBottom: '1rem' }}>Key Features:</h4>
                <ModalFeaturesList>
                  {selectedProject.features.map((feature, index) => (
                    <ModalFeatureItem key={index}>{feature}</ModalFeatureItem>
                  ))}
                </ModalFeaturesList>

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