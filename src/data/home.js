// Home page static data extracted for modularization
// This keeps large React elements and arrays out of the page component
import React from 'react';
import { FaReact, FaJs, FaNode, FaGit, FaFigma, FaDocker, FaPython, FaAws, FaJava } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiFirebase, SiPostgresql, SiRedis, SiExpress, SiNextdotjs, SiVercel, SiNetlify, SiVscodium, SiPostman, SiGithub, SiCplusplus, SiDotnet } from 'react-icons/si';
import { HiDesktopComputer, HiCog } from 'react-icons/hi';
import { RiDatabase2Line } from 'react-icons/ri';

// Technologies grouped by category
export const technologies = {
  frontend: [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNode />, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
    { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'C#', icon: <SiDotnet />, color: '#512BD4' },
  ],
  tools: [
    { name: 'Git', icon: <FaGit />, color: '#F05032' },
    { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
    { name: 'VS Code', icon: <SiVscodium />, color: '#007ACC' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
    { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
    { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
  ]
};

// Tabs meta used for switching technology category
export const tabs = [
  { id: 'frontend', label: 'Frontend', icon: <HiDesktopComputer /> },
  { id: 'backend', label: 'Backend', icon: <RiDatabase2Line /> },
  { id: 'tools', label: 'Tools & Others', icon: <HiCog /> },
];

// High level stats shown in hero section
export const stats = [
  { number: 120, label: 'K Lines of Code', suffix: '+' },
  { number: 2, label: 'Years Experience', suffix: '+' },
  { number: 25, label: 'Technologies', suffix: '+' },
  { number: 100, label: 'Happy Clients', suffix: '%' },
];

// Phrases for typewriter animation
export const typewriterStrings = [
  'Building Amazing Web Apps',
  'Creating Digital Experiences',
  'Full Stack Development',
  'Modern UI/UX Design',
  'Scalable Solutions'
];

// Named export object to satisfy eslint import/no-anonymous-default-export
export const homeData = { technologies, tabs, stats, typewriterStrings };
export default homeData;
