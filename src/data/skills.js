// Skills page static data extracted for modularization
// Separating data from presentation improves maintainability
import React from 'react';
import { 
  FaReact, FaJs, FaNode, FaPython, FaGit, FaAws, FaDocker, FaFigma, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiFirebase, SiPostgresql, SiExpress, SiNextdotjs, SiTailwindcss, SiFramer 
} from 'react-icons/si';
import { 
  HiSparkles, HiDesktopComputer, HiCog, HiCode, HiTrendingUp, HiLightningBolt 
} from 'react-icons/hi';
import { BiRocket } from 'react-icons/bi';

// Core skills data grouped by category
export const skillsData = {
  frontend: [
    { name: 'React', icon: <FaReact />, level: 95, color: '#61DAFB', experience: '3+ years' },
    { name: 'JavaScript', icon: <FaJs />, level: 90, color: '#F7DF1E', experience: '3+ years' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#3178C6', experience: '2+ years' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 88, color: '#000000', experience: '2+ years' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92, color: '#06B6D4', experience: '2+ years' },
    { name: 'Framer Motion', icon: <SiFramer />, level: 85, color: '#0055FF', experience: '1+ years' }
  ],
  backend: [
    { name: 'Node.js', icon: <FaNode />, level: 88, color: '#339933', experience: '3+ years' },
    { name: 'Express.js', icon: <SiExpress />, level: 85, color: '#000000', experience: '2+ years' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47A248', experience: '2+ years' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75, color: '#4169E1', experience: '1+ years' },
    { name: 'Firebase', icon: <SiFirebase />, level: 82, color: '#FFCA28', experience: '2+ years' },
    { name: 'Python', icon: <FaPython />, level: 78, color: '#3776AB', experience: '2+ years' }
  ],
  tools: [
    { name: 'Git', icon: <FaGit />, level: 90, color: '#F05032', experience: '3+ years' },
    { name: 'Docker', icon: <FaDocker />, level: 70, color: '#2496ED', experience: '1+ years' },
    { name: 'AWS', icon: <FaAws />, level: 65, color: '#FF9900', experience: '1+ years' },
    { name: 'Figma', icon: <FaFigma />, level: 85, color: '#F24E1E', experience: '2+ years' }
  ]
};

// Categories for filtering UI
export const categories = [
  { id: 'all', label: 'All Skills', icon: <HiSparkles /> },
  { id: 'frontend', label: 'Frontend', icon: <HiDesktopComputer /> },
  { id: 'backend', label: 'Backend', icon: <FaDatabase /> },
  { id: 'tools', label: 'Tools & DevOps', icon: <HiCog /> }
];

// Stats overview data
export const stats = [
  { icon: <HiCode />, number: 25, suffix: '+', label: 'Technologies', description: 'Mastered various tools' },
  { icon: <BiRocket />, number: 3, suffix: '+', label: 'Years Experience', description: 'Continuous learning' },
  { icon: <HiTrendingUp />, number: 50, suffix: '+', label: 'Projects Built', description: 'Various complexities' },
  { icon: <HiLightningBolt />, number: 95, suffix: '%', label: 'Problem Solving', description: 'Success rate' }
];

// Derived chart datasets (keep simple & recompute if needed)
export const frontendChartData = skillsData.frontend.map(skill => ({ name: skill.name, value: skill.level, color: skill.color }));
export const backendChartData = skillsData.backend.map(skill => ({ name: skill.name, value: skill.level, color: skill.color }));
export const experienceData = [
  { name: '2022', projects: 8, skills: 12 },
  { name: '2023', projects: 18, skills: 18 },
  { name: '2024', projects: 24, skills: 25 }
];

export default { skillsData, categories, stats, frontendChartData, backendChartData, experienceData };
