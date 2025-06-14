import styled from 'styled-components';
import { motion } from 'framer-motion';
const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 8rem auto 4rem; /* Added top margin to account for navbar */
  padding: 0 2rem;
  color: #e0e0e0;
  min-height: calc(100vh - 12rem); /* Adjust based on your header/footer height */
`;

const ContactHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 2rem;
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  color: #00a8ff;
  margin-bottom: 1rem;
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ContactInfo = styled(motion.div)`
  background-color: #101025;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 168, 255, 0.1);
`;

const InfoTitle = styled.h3`
  color: #00a8ff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  color: #00a8ff;
  font-size: 1.5rem;
`;

const InfoText = styled.p`
  color: #b0b0b0;
  margin: 0;
`;

const ContactForm = styled(motion.form)`
  background-color: #101025;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 168, 255, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #b0b0b0;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  background-color: #0a0a1a;
  border: 1px solid rgba(0, 168, 255, 0.2);
  border-radius: 4px;
  color: #e0e0e0;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00a8ff;
    box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background-color: #0a0a1a;
  border: 1px solid rgba(0, 168, 255, 0.2);
  border-radius: 4px;
  color: #e0e0e0;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #00a8ff;
    box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: #00a8ff;
  color: #0a0a1a;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: #0088cc;
    box-shadow: 0 0 15px rgba(0, 168, 255, 0.5);
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Message sent!');
  };

  return (
    <ContactContainer>
      <ContactHeader
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContactTitle>Get In Touch</ContactTitle>
        <ContactSubtitle>
          Have a project in mind or want to collaborate? Feel free to reach out through
          the form or contact me directly via email or social media.
        </ContactSubtitle>
      </ContactHeader>

      <ContactGrid>
        <ContactInfo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <InfoTitle>Contact Information</InfoTitle>
          <InfoItem>
            <IconWrapper>✉️</IconWrapper>
            <InfoText>example@email.com</InfoText>
          </InfoItem>
          <InfoItem>
            <IconWrapper>📱</IconWrapper>
            <InfoText>+1 (123) 456-7890</InfoText>
          </InfoItem>
          <InfoItem>
            <IconWrapper>📍</IconWrapper>
            <InfoText>San Francisco, CA</InfoText>
          </InfoItem>
        </ContactInfo>

        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FormGroup>
            <FormLabel htmlFor="name">Your Name</FormLabel>
            <FormInput type="text" id="name" required />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">Your Email</FormLabel>
            <FormInput type="email" id="email" required />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput type="text" id="subject" required />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="message">Your Message</FormLabel>
            <FormTextarea id="message" required />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;