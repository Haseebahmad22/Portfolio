// Central mapping of technology names to icon components (future reuse across pages)
// You can import individual icon sets here and expose a simple lookup.
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiDocker, SiPostgresql } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';

export const techIconMap = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  node: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgres: SiPostgresql,
  tailwind: SiTailwindcss,
  docker: SiDocker,
  html5: FaHtml5,
  css3: FaCss3Alt,
  git: FaGitAlt,
};

export function getTechIcon(key) {
  return techIconMap[key.toLowerCase()] || null;
}
