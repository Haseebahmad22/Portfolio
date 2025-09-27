import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SocialLinks, SocialIcon } from './HomeStyles';

const SocialLinksBar = () => (
  <SocialLinks
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.6 }}
  >
    <SocialIcon
      href="https://github.com/Haseebahmad22"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub profile"
      hoverColor="#181717"
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaGithub />
    </SocialIcon>
    <SocialIcon
      href="https://linkedin.com/in/haseeb-ahmad"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn profile"
      hoverColor="#0077B5"
      whileHover={{ scale: 1.15, rotate: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaLinkedin />
    </SocialIcon>
    <SocialIcon
      href="https://twitter.com/haseebahmad22"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter profile"
      hoverColor="#1DA1F2"
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaTwitter />
    </SocialIcon>
    <SocialIcon
      href="/contact"
      aria-label="Jump to contact section"
      hoverColor="#EA4335"
      whileHover={{ scale: 1.15, rotate: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <HiOutlineMail />
    </SocialIcon>
  </SocialLinks>
);

export default SocialLinksBar;