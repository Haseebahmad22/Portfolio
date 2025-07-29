import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  position: relative;
`;

const ContactHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const ContactSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const InfoHeader = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: ${({ theme }) => theme.colors.accent};
    width: 24px;
    height: 24px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.05);
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.25rem;
`;

const InfoText = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    margin: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.25rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const ContactForm = styled(motion.form)`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: 2.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    opacity: 0.02;
    pointer-events: none;
  }
`;

const FormTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  font-size: 0.875rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(15, 15, 35, 0.5);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(15, 15, 35, 0.5);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glowHover};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradientSecondary};
  opacity: 0.1;
  filter: blur(40px);
  z-index: -1;

  &:nth-child(1) {
    top: 10%;
    right: 10%;
    animation: float 8s ease-in-out infinite;
  }

  &:nth-child(2) {
    bottom: 20%;
    left: 5%;
    animation: float 6s ease-in-out infinite reverse;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <ContactContainer>
      <FloatingElement />
      <FloatingElement />

      <ContactHeader
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ContactTitle>Get In Touch</ContactTitle>
        <ContactSubtitle>
          Ready to collaborate? Let's discuss your project and bring your ideas to life.
          I'm always excited to work on new challenges and innovative solutions.
        </ContactSubtitle>
      </ContactHeader>

      <ContactGrid>
        <ContactInfo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <InfoCard>
            <InfoHeader>
              <FiMail />
              Contact Information
            </InfoHeader>
            
            <InfoItem>
              <IconWrapper>
                <FiMail />
              </IconWrapper>
              <InfoText>
                <h4>Email</h4>
                <p>your.email@example.com</p>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <IconWrapper>
                <FiPhone />
              </IconWrapper>
              <InfoText>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <IconWrapper>
                <FiMapPin />
              </IconWrapper>
              <InfoText>
                <h4>Location</h4>
                <p>Your City, Country</p>
              </InfoText>
            </InfoItem>

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
            </SocialLinks>
          </InfoCard>
        </ContactInfo>

        <ContactForm
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <FormTitle>Send me a message</FormTitle>
          
          <FormGroup>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              placeholder="What's this about?"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              placeholder="Tell me about your project or idea..."
              required
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiSend />
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;
