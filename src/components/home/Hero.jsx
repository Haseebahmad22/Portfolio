import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiCodeAlt } from 'react-icons/bi';
import { FaPlay, FaDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ReactTyped } from 'react-typed';
import CountUp from 'react-countup';
import {
  LeftContent,
  HeroGreeting,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  BadgeRow,
  Badge,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  GhostButton,
  StatsSection,
  StatItem
} from './HomeStyles';

const Hero = ({ stats, statsInView, statsRef, typewriterStrings, onViewWork, onDownloadResume, onContact }) => {
  return (
    <LeftContent>
      <HeroGreeting
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="wave">👋</span> Hey there, I'm
        <span className="sparkle">✨</span>
      </HeroGreeting>

      <HeroTitle
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span className="name">Haseeb Ahmad</span>
        <div className="role-container">
          <span className="role">Full Stack</span>
          <span className="role" style={{ color: '#6366f1' }}>Developer</span>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          >
            🚀
          </motion.div>
        </div>
      </HeroTitle>

      <HeroSubtitle
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <BiCodeAlt className="icon" />
        <ReactTyped
          strings={typewriterStrings}
          typeSpeed={80}
          backSpeed={60}
          backDelay={2000}
          loop
          className="typed-text"
        />
      </HeroSubtitle>

      <HeroDescription
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        I'm a <span className="highlight">passionate developer</span> who transforms ideas into
        extraordinary digital experiences. Specializing in modern web technologies, I create
        <span className="passion"> stunning, scalable applications</span> that captivate users
        and drive business success. Let's build something incredible together! ✨
      </HeroDescription>

      <BadgeRow
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <Badge title="Open to opportunities">🟢 Open to Work</Badge>
        <Badge title="Remote friendly">🌍 Remote Friendly</Badge>
        <Badge title="Based in Pakistan">📍 Pakistan</Badge>
      </BadgeRow>

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
        <PrimaryButton whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} onClick={onViewWork}>
          <FaPlay className="icon" />
          View My Work
        </PrimaryButton>
        <SecondaryButton whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} onClick={onDownloadResume}>
          <FaDownload className="icon" />
          Download Resume
        </SecondaryButton>
        <GhostButton whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} onClick={onContact}>
          <HiOutlineMail className="icon" />
          Contact Me
        </GhostButton>
      </ButtonGroup>
    </LeftContent>
  );
};

export default Hero;