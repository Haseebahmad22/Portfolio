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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    gap: 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  height: fit-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.colors.accent}40;
  }
`;

const ProjectMedia = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
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

const MediaOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: all 0.4s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const MediaActions = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
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
  bottom: 16px;
  left: 16px;
  display: flex;
  gap: 6px;
  z-index: 3;
  background: rgba(0, 0, 0, 0.8);
  padding: 8px 12px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SlideDot = styled(motion.div)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.accent : 'rgba(255, 255, 255, 0.4)'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: scale(1.2);
  }
`;

const SlideCounter = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 3;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${ProjectCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PlayButton = styled(motion.div)`
  width: 56px;
  height: 56px;
  background: ${({ theme }) => theme.colors.accent};
  backdrop-filter: blur(20px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  z-index: 4;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }

  svg {
    margin-left: 2px; /* Optical alignment for play icon */
  }
`;

const ViewButton = styled(motion.div)`
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ProjectTechBadge = styled.span`
  padding: 4px 8px;
  background: ${({ theme }) => theme.colors.accent}15;
  color: ${({ theme }) => theme.colors.accent};
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem;
  }
`;

const ModalContent = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.4);
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.5rem 1.5rem 1rem;
  }
`;

const ModalBody = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 0;
  flex: 1;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const MediaSection = styled.div`
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const MediaTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.cardBackground};
`;

const MediaTab = styled(motion.button)`
  flex: 1;
  padding: 1rem 1.5rem;
  background: ${({ $active, theme }) => $active ? theme.colors.background : 'transparent'};
  border: none;
  color: ${({ $active, theme }) => $active ? theme.colors.accent : theme.colors.textSecondary};
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 2px solid ${({ $active, theme }) => $active ? theme.colors.accent : 'transparent'};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.background};
  }
`;

const MediaContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 400px;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 300px;
    padding: 1.5rem;
  }
`;

const MediaImage = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const MediaVideo = styled.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ImageNavigation = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  background: rgba(0, 0, 0, 0.8);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ImageDot = styled(motion.button)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${({ $active, theme }) => $active ? theme.colors.accent : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: scale(1.2);
  }
`;

const ImageArrow = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  font-size: 1.1rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-50%) scale(1.05);
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }
`;

const DetailsSection = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.cardBackground};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.5rem;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 0, 0, 0.1);
    color: #ff4444;
    transform: scale(1.1);
  }
`;

const ModalTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
  }
`;

const ModalDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
`;

const InfoSection = styled.div`
  margin: 0;
`;

const SectionTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
`;

const FeatureItem = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    top: 0.5rem;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechBadge = styled.span`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.accent}15;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent}25;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent}25;
    transform: translateY(-2px);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const ActionButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid ${({ $primary, theme }) => $primary ? theme.colors.accent : theme.colors.border};
  border-radius: 50px;
  color: ${({ $primary, theme }) => $primary ? 'white' : theme.colors.text};
  background: ${({ $primary, theme }) => $primary ? theme.colors.accent : 'transparent'};
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    ${({ $primary, theme }) => $primary ? `
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    ` : `
      background: ${theme.colors.accent};
      color: white;
      border-color: ${theme.colors.accent};
    `}
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showingVideo, setShowingVideo] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Reset modal state when project changes
  useEffect(() => {
    if (selectedProject) {
      setModalImageIndex(0);
      setShowingVideo(false);
    }
  }, [selectedProject]);

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
            onClick={() => setSelectedProject(project)}
          >
            <ProjectMedia>
              <ProjectImage 
                src={project.images[0]} 
                alt={project.title}
              />
            </ProjectMedia>

            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechStack>
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <ProjectTechBadge key={techIndex}>{tech}</ProjectTechBadge>
                ))}
                {project.technologies.length > 3 && (
                  <ProjectTechBadge>+{project.technologies.length - 3}</ProjectTechBadge>
                )}
              </TechStack>
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
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX />
              </CloseButton>
              
              <ModalHeader>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <ModalDescription>{selectedProject.description}</ModalDescription>
              </ModalHeader>

              <ModalBody>
                <MediaSection>
                  <MediaTabs>
                    <MediaTab
                      $active={!showingVideo}
                      onClick={() => setShowingVideo(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Screenshots
                    </MediaTab>
                    <MediaTab
                      $active={showingVideo}
                      onClick={() => setShowingVideo(true)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Demo Video
                    </MediaTab>
                  </MediaTabs>

                  <MediaContainer>
                    {!showingVideo ? (
                      selectedProject.images.length === 1 ? (
                        <MediaImage
                          src={selectedProject.images[0]}
                          alt={selectedProject.title}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                      ) : (
                        <>
                          <AnimatePresence mode="wait">
                            <MediaImage
                              key={modalImageIndex}
                              src={selectedProject.images[modalImageIndex]}
                              alt={`${selectedProject.title} - Image ${modalImageIndex + 1}`}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                            />
                          </AnimatePresence>

                          {selectedProject.images.length > 1 && (
                            <>
                              <ImageArrow
                                className="left"
                                onClick={handleModalPrevImage}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <FiChevronLeft />
                              </ImageArrow>

                              <ImageArrow
                                className="right"
                                onClick={handleModalNextImage}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <FiChevronRight />
                              </ImageArrow>

                              <ImageNavigation>
                                {selectedProject.images.map((_, index) => (
                                  <ImageDot
                                    key={index}
                                    $active={index === modalImageIndex}
                                    onClick={() => goToModalSlide(index)}
                                    whileHover={{ scale: 1.3 }}
                                    whileTap={{ scale: 0.8 }}
                                  />
                                ))}
                              </ImageNavigation>
                            </>
                          )}
                        </>
                      )
                    ) : (
                      <MediaVideo
                        src={selectedProject.video}
                        controls
                        autoPlay
                        muted
                        loop
                      />
                    )}
                  </MediaContainer>
                </MediaSection>
                
                <DetailsSection>
                  <InfoSection>
                    <SectionTitle>Key Features</SectionTitle>
                    <FeatureGrid>
                      {selectedProject.features.map((feature, index) => (
                        <FeatureItem key={index}>{feature}</FeatureItem>
                      ))}
                    </FeatureGrid>
                  </InfoSection>

                  <InfoSection>
                    <SectionTitle>Technologies Used</SectionTitle>
                    <TechGrid>
                      {selectedProject.technologies.map((tech, techIndex) => (
                        <TechBadge key={techIndex}>{tech}</TechBadge>
                      ))}
                    </TechGrid>
                  </InfoSection>

                  <ActionButtons>
                    <ActionButton
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiGithub />
                      View Source
                    </ActionButton>
                    <ActionButton
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      $primary
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiExternalLink />
                      Live Demo
                    </ActionButton>
                  </ActionButtons>
                </DetailsSection>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default Projects;