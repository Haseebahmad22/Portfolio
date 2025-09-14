import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaDribbble,
  FaDiscord,
  FaHeart,
  FaCoffee
} from 'react-icons/fa';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiArrowUp,
  FiExternalLink
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '../context/NavigationContext';

const FooterContainer = styled(motion.footer)`
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--gradient-accent);
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterSection = styled(motion.div)`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

const BrandSection = styled(FooterSection)`
  .logo {
    font-size: 1.8rem;
    font-weight: 800;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
      justify-content: center;
    }
    
    .logo-icon {
      width: 40px;
      height: 40px;
      background: var(--gradient-accent);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
    }
  }
  
  .description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    max-width: 400px;
    
    @media (max-width: 768px) {
      margin: 0 auto 1.5rem;
    }
  }
  
  .availability {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      justify-content: center;
    }
    
    .status-dot {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s var(--transition-smooth);
  padding: 0.5rem;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  &:hover {
    color: var(--accent-primary);
    background: var(--glass-bg);
    transform: translateX(5px);
    
    @media (max-width: 768px) {
      transform: translateY(-2px);
    }
  }
  
  .icon {
    width: 18px;
    height: 18px;
    color: var(--accent-primary);
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const QuickLink = styled(motion.button)`
  background: none;
  border: none;
  color: var(--text-secondary);
  text-align: left;
  cursor: pointer;
  transition: all 0.3s var(--transition-smooth);
  padding: 0.5rem;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    text-align: center;
  }
  
  &:hover {
    color: var(--accent-primary);
    background: var(--glass-bg);
    transform: translateX(5px);
    
    @media (max-width: 768px) {
      transform: translateY(-2px);
    }
  }
`;

const SocialSection = styled(FooterSection)`
  .social-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(6, 1fr);
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s var(--transition-smooth);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: var(--accent-primary);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(79, 172, 254, 0.4);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-top: 1px solid var(--border-color);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .heart {
    color: #ef4444;
    animation: heartbeat 2s infinite;
  }
  
  .coffee {
    color: #8b5cf6;
  }
  
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const BackToTop = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s var(--transition-smooth);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: var(--accent-primary);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(79, 172, 254, 0.4);
  }
`;

const Footer = () => {
  const { isDarkMode } = useTheme();
  const { scrollToSection } = useNavigation();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: FaDribbble, url: 'https://dribbble.com', label: 'Dribbble' },
    { icon: FaDiscord, url: 'https://discord.com', label: 'Discord' },
  ];

  const quickLinks = [
    { label: 'Home', action: () => scrollToSection('home') },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Skills', action: () => scrollToSection('skills') },
    { label: 'Projects', action: () => scrollToSection('projects') },
    { label: 'Experience', action: () => scrollToSection('experience') },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <FooterContent>
        <FooterGrid>
          <BrandSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="logo">
              <div className="logo-icon">H</div>
              Haseeb Ahmad
            </div>
            <p className="description">
              Full-stack developer passionate about creating exceptional digital experiences. 
              Specializing in modern web technologies and innovative solutions.
            </p>
            <div className="availability">
              <div className="status-dot"></div>
              Available for freelance work
            </div>
          </BrandSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>
              <FiMail />
              Contact
            </h3>
            <ContactInfo>
              <ContactItem
                href="mailto:haseebahmad.dev@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiMail className="icon" />
                haseebahmad.dev@gmail.com
              </ContactItem>
              <ContactItem
                href="tel:+923001234567"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiPhone className="icon" />
                +92 (300) 123-4567
              </ContactItem>
              <ContactItem
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiMapPin className="icon" />
                Lahore, Pakistan
              </ContactItem>
            </ContactInfo>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <QuickLinks>
              {quickLinks.map((link, index) => (
                <QuickLink
                  key={link.label}
                  onClick={link.action}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {link.label}
                </QuickLink>
              ))}
            </QuickLinks>
          </FooterSection>

          <SocialSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Connect</h3>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} />
                </SocialIcon>
              ))}
            </div>
          </SocialSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            <span>© {new Date().getFullYear()} Haseeb Ahmad.</span>
            <span>Made with</span>
            <FaHeart className="heart" />
            <span>and lots of</span>
            <FaCoffee className="coffee" />
          </Copyright>
          
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowUp />
            Back to Top
          </BackToTop>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
