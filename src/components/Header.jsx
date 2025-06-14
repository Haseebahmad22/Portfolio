import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  background-color: rgba(10, 10, 25, 0.95);
  backdrop-filter: blur(12px);
  padding: 1.2rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 168, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(90deg, #00a8ff, #0066ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  cursor: pointer;
  letter-spacing: -0.5px;
  position: relative;
  padding: 0.5rem 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #00a8ff, #0066ff);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const NavItems = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled(motion.li)`
  position: relative;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  color: #b0b0b0;
  display: flex;
  align-items: center;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 168, 255, 0.1), rgba(0, 102, 255, 0.1));
    border-radius: 8px;
    z-index: -1;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #ffffff;
    
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  &.active {
    color: #ffffff;
    font-weight: 700;
    
    &::before {
      opacity: 1;
      transform: scale(1);
      background: linear-gradient(135deg, rgba(0, 168, 255, 0.2), rgba(0, 102, 255, 0.2));
      box-shadow: 0 0 15px rgba(0, 168, 255, 0.3);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 3px;
      background: linear-gradient(90deg, #00a8ff, #0066ff);
      border-radius: 3px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Nav>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          DevPortfolio
        </Logo>
        <NavItems>
          <NavItem
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <StyledNavLink to="/" end>Home</StyledNavLink>
          </NavItem>
          <NavItem
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <StyledNavLink to="/projects">Projects</StyledNavLink>
          </NavItem>
          <NavItem
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <StyledNavLink to="/about">About</StyledNavLink>
          </NavItem>
          <NavItem
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <StyledNavLink to="/skills">Skills</StyledNavLink>
          </NavItem>
          <NavItem
            whileHover={{ y: -3 }}
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