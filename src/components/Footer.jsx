import styled from 'styled-components';
import SocialIcons from './SocialIcons';

const FooterContainer = styled.footer`
  background-color: #101025;
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(0, 168, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Copyright = styled.p`
  color: #b0b0b0;
  margin-top: 2rem;
  font-size: 0.9rem;

  a {
    color: #00a8ff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterNav = styled.nav`
  margin: 2rem 0;
`;

const FooterLinks = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const FooterLink = styled.li`
  a {
    color: #e0e0e0;
    transition: all 0.3s ease;
    font-weight: 500;

    &:hover {
      color: #00a8ff;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons />
        
        <FooterNav>
          <FooterLinks>
            <FooterLink>
              <a href="#home">Home</a>
            </FooterLink>
            <FooterLink>
              <a href="#projects">Projects</a>
            </FooterLink>
            <FooterLink>
              <a href="#about">About</a>
            </FooterLink>
            <FooterLink>
              <a href="#skills">Skills</a>
            </FooterLink>
            <FooterLink>
              <a href="#contact">Contact</a>
            </FooterLink>
          </FooterLinks>
        </FooterNav>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Your Name. All rights reserved. 
          Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;