import React from 'react';
import { motion } from 'framer-motion';
import { PillsSection, PillsHeader, PillsTitle, PillsSubtitle, PillsRow, SkillPill, ViewAllLink } from './HomeStyles';
import { technologies } from '../../data/home';
import { useNavigate } from 'react-router-dom';

// Flatten a subset of key technologies for a concise preview.
const corePills = [
  ...technologies.frontend.slice(0, 4),
  ...technologies.backend.slice(0, 2),
  ...technologies.tools.slice(0, 2)
];

const SkillsPills = () => {
  const navigate = useNavigate();
  return (
    <PillsSection data-aos="fade-up" data-aos-delay="200">
      <PillsHeader>
        <PillsTitle>Core Stack Snapshot</PillsTitle>
        <PillsSubtitle>Some of the technologies I build with daily</PillsSubtitle>
      </PillsHeader>
      <PillsRow as={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, staggerChildren: 0.05 }}>
        {corePills.map((tech) => (
          <SkillPill key={tech.name} color={tech.color} whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }}>
            <span className="icon">{tech.icon}</span>
            <span className="label">{tech.name}</span>
          </SkillPill>
        ))}
        <ViewAllLink onClick={() => navigate('/skills')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          View all skills →
        </ViewAllLink>
      </PillsRow>
    </PillsSection>
  );
};

export default SkillsPills;
