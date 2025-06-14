import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #00a8ff, #0066ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
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

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSubtitle>Hi, I'm</HeroSubtitle>
          <HeroTitle>Web Developer</HeroTitle>
          <HeroText>
            I create beautiful, functional websites and applications with modern technologies. 
            Specializing in React, JavaScript, and responsive design.
          </HeroText>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </CTAButton>
        </motion.div>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home;