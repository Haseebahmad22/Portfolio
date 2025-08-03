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

const TechBadge = styled.span`
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
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 400px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 90vw;
  }
`;

const ModalImageSection = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.background};
`;

const ModalDetailsSection = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const ModalImageContainer = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
  }
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
  height: 100%;
  object-fit: cover;
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

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem 0;
  line-height: 1.2;
`;

const ModalSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const ModalSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
`;

const FeatureItem = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
  }
`;

const ModalTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const ModalTechBadge = styled.span`
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.accent}15;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent}30;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const ModalLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ModalLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 16px 20px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.background};

  &:hover {
    color: white;
    background: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  &:first-child:hover {
    background: #24292e;
    border-color: #24292e;
  }
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Reset modal image index when project changes
  useEffect(() => {
    if (selectedProject) {
      setModalImageIndex(0);
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
                  <TechBadge key={techIndex}>{tech}</TechBadge>
                ))}
                {project.technologies.length > 3 && (
                  <TechBadge>+{project.technologies.length - 3}</TechBadge>
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
              
              <ModalImageSection>
                <ModalImageSlideshow />
              </ModalImageSection>
              
              <ModalDetailsSection>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <ModalSubtitle>{selectedProject.description}</ModalSubtitle>
                
                <ModalSection>
                  <SectionTitle>Key Features</SectionTitle>
                  <FeaturesList>
                    {selectedProject.features.map((feature, index) => (
                      <FeatureItem key={index}>{feature}</FeatureItem>
                    ))}
                  </FeaturesList>
                </ModalSection>

                <ModalSection>
                  <SectionTitle>Technology Stack</SectionTitle>
                  <ModalTechStack>
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <ModalTechBadge key={techIndex}>{tech}</ModalTechBadge>
                    ))}
                  </ModalTechStack>
                </ModalSection>

                <ModalSection>
                  <SectionTitle>Links</SectionTitle>
                  <ModalLinks>
                    <ModalLink
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                      View Source Code
                    </ModalLink>
                    <ModalLink
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink />
                      Live Demo
                    </ModalLink>
                  </ModalLinks>
                </ModalSection>
              </ModalDetailsSection>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default Projects;