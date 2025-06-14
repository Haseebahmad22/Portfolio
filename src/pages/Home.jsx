import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #00a8ff, #0066ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

const HeroText = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CTAButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background: transparent;
  color: #00a8ff;
  border: 2px solid #00a8ff;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-weight: 600;
  margin-right: 1rem;

  &:hover {
    color: #0a0a1a;
    box-shadow: 0 0 15px rgba(0, 168, 255, 0.7);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #00a8ff, transparent);
    transition: 0.5s;
    z-index: -1;
  }

  &:hover::before {
    left: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const SocialIcon = styled(motion.a)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00a8ff;
    transform: translateY(-3px);
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 168, 255, 0.1) 0%, transparent 70%);
  filter: blur(60px);
  z-index: 1;
  right: -200px;
  top: 100px;
`;

const HighlightText = styled.span`
  color: #00a8ff;
  font-weight: 600;
`;

const Home = () => {
  return (
    <HomeContainer>
      <BackgroundShape />
      
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm
          </HeroSubtitle>
          <HeroTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <HighlightText>Frontend</HighlightText> Developer
          </HeroTitle>
          <HeroText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I create <HighlightText>beautiful, functional</HighlightText> websites and applications with modern 
            technologies. Specializing in <HighlightText>React</HighlightText>, <HighlightText>JavaScript</HighlightText>, 
            and <HighlightText>responsive design</HighlightText>.
          </HeroText>
          
          <ButtonGroup>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              View My Work
            </CTAButton>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              style={{ background: '#00a8ff', color: '#0a0a1a' }}
            >
              Contact Me
            </CTAButton>
          </ButtonGroup>
          
          <SocialLinks
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="mailto:example@email.com">
              <HiOutlineMail />
            </SocialIcon>
          </SocialLinks>
        </motion.div>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home;