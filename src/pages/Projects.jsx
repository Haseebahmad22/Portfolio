// Projects page orchestrator now using modularized components & data
import { useState, useEffect } from 'react';
import { LayoutGroup } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects as baseProjects, categories } from '../data/projects';
import projectsData from '../data/projectsData';
import { ProjectsHeader, ProjectFilters } from '../components/projects/ProjectsHeader';
import { GridView, ShowcaseView, ListView } from '../components/projects/ProjectViews';
import { ProjectModal } from '../components/projects/ProjectModal';
import { ProjectsWrapper, ViewToggleBar, ViewButton } from '../components/projects/ProjectStyles';

// NOTE: This file was refactored to act purely as an orchestrator/container.
// Styling, data, and view presentation live in dedicated modules under components/projects & data/.
// Future enhancements (search, pagination, server data) can hook in here without bloating the UI layers.


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null); // passed to modal
  const [showVideo, setShowVideo] = useState(false); // modal tab state
  const [slide, setSlide] = useState(0); // modal carousel index
  const [viewMode, setViewMode] = useState('showcase');
  const { ref, inView } = useInView({ threshold:0.15, triggerOnce:true });

  // Map minimal projectsData entries into full project objects expected by views
  const mappedExtras = (projectsData || []).map((p, idx) => ({
    id: p.id || `extra-${idx}`,
    title: p.title,
    description: p.description,
    longDescription: p.description,
    category: p.category || 'Frontend',
    featured: false,
    difficulty: 'Intermediate',
    duration: '—',
    status: 'Complete',
    features: p.keyFeatures || [],
    technologies: p.tech || [],
    githubUrl: p.githubUrl || '#',
    // Preserve liveUrl only; rendering layer will decide visibility (whitelist)
    liveUrl: p.liveUrl || '#',
    images: p.images && p.images.length ? p.images : ['/placeholders/generic.svg'],
    video: '',
    stats: { views: 0, stars: 0, commits: 0 }
  }));

  const projects = [...baseProjects, ...mappedExtras];

  // Filter projects based on active category
  const filtered = projects.filter(p => {
    if(activeCategory==='All') return true;
    if(activeCategory==='Featured') return p.featured;
    return p.category===activeCategory;
  });

  // Stats for header component
  const stats = {
    total: projects.length,
    featured: projects.filter(p=>p.featured).length,
    tech: [...new Set(projects.flatMap(p=>p.technologies))].length
  };

  // Reset modal internals when project changes
  useEffect(()=>{ if(selectedProject){ setSlide(0); setShowVideo(false);} },[selectedProject]);

  return (
    <ProjectsWrapper>
      <ProjectsHeader stats={stats} inViewRef={ref} inView={inView} />
      <ProjectFilters categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      <ViewToggleBar>
        {['showcase','grid','list'].map(mode => (
          <ViewButton key={mode} $active={viewMode===mode} aria-pressed={viewMode===mode} onClick={()=>setViewMode(mode)}>
            {mode.charAt(0).toUpperCase()+mode.slice(1)}
          </ViewButton>
        ))}
      </ViewToggleBar>

      <LayoutGroup>
        {viewMode==='showcase' && <ShowcaseView projects={filtered} onSelect={setSelectedProject} />}
        {viewMode==='grid' && <GridView projects={filtered} onSelect={setSelectedProject} />}
        {viewMode==='list' && <ListView projects={filtered} onSelect={setSelectedProject} />}
      </LayoutGroup>

      <ProjectModal
        project={selectedProject}
        onClose={()=>setSelectedProject(null)}
        showVideo={showVideo}
        setShowVideo={setShowVideo}
        slide={slide}
        setSlide={setSlide}
      />
    </ProjectsWrapper>
  );
};

export default Projects;