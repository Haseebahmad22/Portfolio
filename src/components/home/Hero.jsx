import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay, FaDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ReactTyped } from 'react-typed';
import CountUp from 'react-countup';
import {
  LeftContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  GhostButton,
  StatsSection,
  StatItem
} from './HomeStyles';

// Additional minimalist meta line (kept local to avoid broad style changes)
const MetaLine = styled(motion.div)`
  font-size:0.75rem; letter-spacing:0.15em; font-weight:600; text-transform:uppercase; color:var(--accent-primary);
  opacity:0.9; margin-bottom:0.75rem; display:flex; gap:0.75rem; flex-wrap:wrap;
`;

const CompactDescription = styled(HeroDescription)`
  font-size:1.05rem; line-height:1.6; margin-bottom:1.75rem;
`;

const Hero = ({ stats, statsInView, statsRef, typewriterStrings, onViewWork, onDownloadResume, onContact }) => {
  return (
    <LeftContent>
      <MetaLine
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <span>FULL-STACK ENGINEER</span>
      </MetaLine>

      <HeroTitle
        as={motion.h1}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.3 }}
      >
        <span className="name">Haseeb Ahmad</span>
        <div className="role-container">
          <span className="role" style={{ color: 'var(--text-primary)' }}>Building reliable</span>
          <span className="role" style={{ color: '#6366f1' }}>web & cloud solutions</span>
        </div>
      </HeroTitle>

      {typewriterStrings && typewriterStrings.length > 0 && (
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text-secondary)' }}
        >
          <ReactTyped
            strings={typewriterStrings}
            typeSpeed={65}
            backSpeed={45}
            backDelay={1800}
            loop
            className="typed-text"
          />
        </HeroSubtitle>
      )}

      <CompactDescription
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.65 }}
      >
        I design and ship <span className="highlight">scalable, maintainable</span> products across the
        stack—clean APIs, resilient architectures, and thoughtful interfaces. Focused on code quality,
        performance, and delivering measurable business value.
      </CompactDescription>

      <MetaLine
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, delay: 0.75, ease: 'easeOut' }}
        style={{ gap: '0.5rem', fontSize: '0.7rem', opacity: 0.75, letterSpacing: '0.12em' }}
      >
        <span>Open to Work</span>
        <span>• Remote</span>
        <span>• Pakistan</span>
      </MetaLine>

      <StatsSection
        ref={statsRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
          >
            <div className="number">
              {statsInView && (
                <CountUp
                  end={stat.number}
                  duration={2}
                  suffix={stat.suffix}
                />
              )}
            </div>
            <div className="label">{stat.label}</div>
          </StatItem>
        ))}
      </StatsSection>

      <ButtonGroup
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <PrimaryButton whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} onClick={onViewWork}>
          <FaPlay className="icon" /> Projects
        </PrimaryButton>
        <SecondaryButton whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} onClick={onDownloadResume}>
          <FaDownload className="icon" /> Resume
        </SecondaryButton>
        <GhostButton whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} onClick={onContact}>
          <HiOutlineMail className="icon" /> Contact
        </GhostButton>
      </ButtonGroup>
    </LeftContent>
  );
};

export default Hero;