import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiSun, 
  FiMoon, 
  FiDownload, 
  FiHome, 
  FiUser, 
  FiCode, 
  FiBriefcase, 
  FiBookOpen, 
  FiMail,
  FiSettings
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '../context/NavigationContext';

const HeaderContainer = styled(motion.header)`
  background: ${({ $isScrolled, $isDarkMode }) => 
    $isScrolled 
      ? $isDarkMode 
        ? 'rgba(10, 10, 10, 0.95)' 
        : 'rgba(255, 255, 255, 0.95)'
      : 'transparent'
  };
  backdrop-filter: ${({ $isScrolled }) => $isScrolled ? 'blur(20px)' : 'none'};
  padding: ${({ $isScrolled }) => $isScrolled ? '0.75rem 2rem' : '1rem 2rem'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: ${({ $isScrolled, theme }) => 
    $isScrolled ? `1px solid ${theme.colors.border}` : 'none'
  };
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $isScrolled }) => 
    $isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
  };
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  cursor: pointer;
  letter-spacing: -0.5px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    filter: brightness(1.2);
  }

  .logo-icon {
    width: 32px;
    height: 32px;
    background: var(--gradient-accent);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: var(--gradient-accent);
  border-radius: 2px;
  transform-origin: left;
`;

const NavItems = styled.ul`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(motion.li)`
  position: relative;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  
  &:hover {
    color: var(--text-primary);
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    transform: translateY(-1px);
  }
  
  &.active {
    color: var(--text-primary);
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 2px;
      background: var(--gradient-accent);
      border-radius: 2px;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ActionButton = styled(motion.button)`
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  padding: 0.6rem;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: var(--accent-primary);
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
  }
  
  &.theme-toggle {
    width: 40px;
    justify-content: center;
  }
  
  &.download-btn {
    background: var(--gradient-accent);
    color: white;
    border: none;
    
    &:hover {
      transform: translateY(-1px) scale(1.02);
      box-shadow: 0 8px 25px rgba(79, 172, 254, 0.4);
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  padding: 0.6rem;
  border-radius: 12px;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent-primary);
    color: white;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 280px;
  background: var(--bg-secondary);
  backdrop-filter: blur(20px);
  border-left: 1px solid var(--border-color);
  padding: 2rem;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const MobileNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover, &.active {
    background: var(--glass-bg);
    color: var(--text-primary);
    transform: translateX(5px);
  }
`;

const EasterEggCounter = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--gradient-accent);
  color: white;
  padding: 1rem 2rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.2rem;
  z-index: 10000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { scrollProgress, scrollToSection, activeSection } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Easter egg logic
  const handleLogoClick = () => {
    setLogoClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 7) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 3000);
        return 0;
      }
      return newCount;
    });
  };

  // Download resume
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Haseeb_Ahmad_Resume.pdf';
    link.click();
  };

  const navItems = [
    { to: '/', label: 'Home', icon: FiHome, section: 'home' },
    { to: '/about', label: 'About', icon: FiUser, section: 'about' },
    { to: '/skills', label: 'Skills', icon: FiCode, section: 'skills' },
    { to: '/projects', label: 'Projects', icon: FiBriefcase, section: 'projects' },
    { to: '/experience', label: 'Experience', icon: FiBookOpen, section: 'experience' },
    { to: '/contact', label: 'Contact', icon: FiMail, section: 'contact' },
  ];

  return (
    <>
      <HeaderContainer
        $isScrolled={isScrolled}
        $isDarkMode={isDarkMode}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <ProgressBar
          style={{ scaleX: scrollProgress / 100 }}
          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        />
        
        <Nav>
          <Logo
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogoClick}
          >
            <div className="logo-icon">H</div>
            Portfolio
          </Logo>
          
          <NavItems>
            {navItems.map((item) => (
              <NavItem
                key={item.section}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <StyledNavLink 
                  to={item.to} 
                  className={activeSection === item.section ? 'active' : ''}
                >
                  <item.icon size={16} />
                  {item.label}
                </StyledNavLink>
              </NavItem>
            ))}
          </NavItems>

          <ActionButtons>
            <ActionButton
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </ActionButton>
            
            <ActionButton
              className="download-btn"
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Download Resume"
            >
              <FiDownload />
              Resume
            </ActionButton>

            <MobileMenuButton
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMenu />
            </MobileMenuButton>
          </ActionButtons>
        </Nav>
      </HeaderContainer>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1000,
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <MobileMenuHeader>
                <Logo>
                  <div className="logo-icon">H</div>
                  Portfolio
                </Logo>
                <ActionButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiX />
                </ActionButton>
              </MobileMenuHeader>

              {navItems.map((item) => (
                <MobileNavLink
                  key={item.section}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={activeSection === item.section ? 'active' : ''}
                >
                  <item.icon />
                  {item.label}
                </MobileNavLink>
              ))}

              <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                <ActionButton
                  onClick={toggleTheme}
                  style={{ width: '100%', justifyContent: 'center' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isDarkMode ? <FiSun /> : <FiMoon />}
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </ActionButton>
                
                <ActionButton
                  className="download-btn"
                  onClick={handleDownloadResume}
                  style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiDownload />
                  Download Resume
                </ActionButton>
              </div>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>

      {/* Easter Egg */}
      <AnimatePresence>
        {showEasterEgg && (
          <EasterEggCounter
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: 'spring', damping: 10 }}
          >
            🎉 You found the easter egg! 🎉
          </EasterEggCounter>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;