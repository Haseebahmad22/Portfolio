import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(20px);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(15, 15, 35, 0.98);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  cursor: pointer;
  letter-spacing: -0.5px;
  position: relative;
  
  &:hover {
    filter: brightness(1.2);
  }
`;

const NavItems = styled.ul`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const NavItem = styled(motion.li)`
  position: relative;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all 0.3s ease;
  position: relative;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: rgba(99, 102, 241, 0.1);
  }
  
  &.active {
    color: ${({ theme }) => theme.colors.text};
    background: rgba(99, 102, 241, 0.15);
    border: 1px solid ${({ theme }) => theme.colors.border};
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
      height: 2px;
      background: ${({ theme }) => theme.colors.gradientPrimary};
      border-radius: 2px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <Nav>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </Logo>
        <NavItems>
          <NavItem
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <StyledNavLink to="/" end>Home</StyledNavLink>
          </NavItem>
          <NavItem
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <StyledNavLink to="/projects">Projects</StyledNavLink>
          </NavItem>
          <NavItem
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <StyledNavLink to="/about">About</StyledNavLink>
          </NavItem>
          <NavItem
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <StyledNavLink to="/contact">Contact</StyledNavLink>
          </NavItem>
        </NavItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;