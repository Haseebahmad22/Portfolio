// Skills page static data extracted for modularization
// Separating data from presentation improves maintainability
import React from 'react';
import { 
  FaReact, FaJs, FaNode, FaPython, FaGit, FaAws, FaDocker, FaFigma, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiFirebase, SiPostgresql, SiExpress, SiNextdotjs, SiTailwindcss, SiFramer, SiCplusplus, SiDotnet 
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
    { name: 'Framer Motion', icon: <SiFramer />, level: 85, color: '#0055FF', experience: '1+ years' },
    { name: 'HTML5', icon: <HiCode />, level: 98, color: '#E34F26', experience: '4+ years' },
    { name: 'CSS3', icon: <HiCode />, level: 96, color: '#2965F1', experience: '4+ years' },
    // Removed: Sass, Redux, GraphQL per request
  ],
  backend: [
    { name: 'Node.js', icon: <FaNode />, level: 88, color: '#339933', experience: '3+ years' },
    { name: 'Express', icon: <SiExpress />, level: 85, color: '#000000', experience: '2+ years' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47A248', experience: '2+ years' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75, color: '#4169E1', experience: '1+ years' },
    { name: 'Firebase', icon: <SiFirebase />, level: 82, color: '#FFCA28', experience: '2+ years' },
    { name: 'Python', icon: <FaPython />, level: 78, color: '#3776AB', experience: '2+ years' },
    { name: 'FastAPI', icon: <FaPython />, level: 72, color: '#009688', experience: '1+ years' },
    { name: 'Django', icon: <FaPython />, level: 65, color: '#092E20', experience: '1+ years' },
    { name: 'Redis', icon: <HiCode />, level: 60, color: '#DC382D', experience: '1+ years' },
    { name: 'SQL', icon: <FaDatabase />, level: 78, color: '#0050A0', experience: '2+ years' },
    // Added languages
    { name: 'C++', icon: <SiCplusplus />, level: 60, color: '#00599C', experience: '1+ years' },
    { name: 'C#', icon: <SiDotnet />, level: 58, color: '#512BD4', experience: '1+ years' }
  ],
  tools: [
    { name: 'Git', icon: <FaGit />, level: 90, color: '#F05032', experience: '3+ years' },
    { name: 'Docker', icon: <FaDocker />, level: 70, color: '#2496ED', experience: '1+ years' },
    { name: 'AWS', icon: <FaAws />, level: 65, color: '#FF9900', experience: '1+ years' },
    { name: 'Figma', icon: <FaFigma />, level: 85, color: '#F24E1E', experience: '2+ years' },
    { name: 'Kubernetes', icon: <HiCode />, level: 50, color: '#326CE5', experience: '6 months' },
    { name: 'CI/CD', icon: <HiCode />, level: 68, color: '#22C55E', experience: '1+ years' },
    { name: 'Terraform', icon: <HiCode />, level: 45, color: '#623CE4', experience: '6 months' },
    { name: 'Jest', icon: <HiCode />, level: 75, color: '#C21325', experience: '1+ years' },
    { name: 'Cypress', icon: <HiCode />, level: 60, color: '#17202C', experience: '6 months' }
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

// Named export object to satisfy eslint import/no-anonymous-default-export
export const skillsBundle = { skillsData, categories, stats, frontendChartData, backendChartData, experienceData };
export default skillsBundle;
