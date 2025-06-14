import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: rgba(10, 10, 25, 0.9);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 168, 255, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #00a8ff, #0066ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  cursor: pointer;
`;

const NavItems = styled.ul`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li`
  a {
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    
    &:hover {
      color: #00a8ff;
    }
    
    &.active {
      color: #00a8ff;
      box-shadow: 0 0 10px rgba(0, 168, 255, 0.5);
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>DevPortfolio</Logo>
        <NavItems>
          <NavItem>
            <NavLink to="/" end>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/skills">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </NavItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;