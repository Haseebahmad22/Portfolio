import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 3rem 2rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Logo = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  max-width: 400px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.25rem 0;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateX(4px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background: rgba(99, 102, 241, 0.2);
  }
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const FooterNavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterMain>
          <FooterBrand>
            <Logo>Portfolio</Logo>
            <FooterDescription>
              Passionate frontend developer creating beautiful, functional, and user-centered 
              digital experiences with modern web technologies.
            </FooterDescription>
            <SocialLinks>
              <SocialIcon
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter />
              </SocialIcon>
              <SocialIcon
                href="mailto:example@email.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlineMail />
              </SocialIcon>
            </SocialLinks>
          </FooterBrand>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink href="/" whileHover={{ x: 4 }}>
              Home
            </FooterLink>
            <FooterLink href="/projects" whileHover={{ x: 4 }}>
              Projects
            </FooterLink>
            <FooterLink href="/about" whileHover={{ x: 4 }}>
              About
            </FooterLink>
            <FooterLink href="/contact" whileHover={{ x: 4 }}>
              Contact
            </FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Connect</FooterTitle>
            <FooterLink href="mailto:example@email.com" whileHover={{ x: 4 }}>
              Email Me
            </FooterLink>
            <FooterLink href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{ x: 4 }}>
              GitHub
            </FooterLink>
            <FooterLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{ x: 4 }}>
              LinkedIn
            </FooterLink>
            <FooterLink href="#" whileHover={{ x: 4 }}>
              Resume
            </FooterLink>
          </FooterSection>
        </FooterMain>

        <FooterBottom>
          <Copyright>
            © {currentYear} Portfolio. Made with <FaHeart /> by Developer
          </Copyright>
          <FooterNavLinks>
            <FooterLink href="#" whileHover={{ x: 4 }}>
              Privacy Policy
            </FooterLink>
            <FooterLink href="#" whileHover={{ x: 4 }}>
              Terms of Service
            </FooterLink>
          </FooterNavLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
