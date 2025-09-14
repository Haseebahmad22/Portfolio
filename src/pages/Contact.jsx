import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiAlertCircle, FiUser, FiMessageSquare, FiClock, FiGlobe, FiHeart, FiZap } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDiscord, FaDribbble } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { media, touch, typography } from '../utils/responsive';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  position: relative;

  ${media.laptop} {
    padding: 6rem 1.5rem 3rem;
  }

  ${media.tablet} {
    padding: 5rem 1rem 2rem;
  }

  ${media.mobile} {
    padding: 4rem 1rem 2rem;
  }
`;

const ContactHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  ${media.tablet} {
    margin-bottom: 3rem;
  }

  ${media.mobile} {
    margin-bottom: 2rem;
  }
`;

const ContactTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  ${media.mobile} {
    font-size: clamp(2rem, 10vw, 3rem);
    margin-bottom: 0.75rem;
  }
`;

const ContactSubtitle = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.25rem);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;

  ${media.mobile} {
    font-size: ${typography.mobile.body.large};
    line-height: 1.5;
    padding: 0 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  
  ${media.tablet} {
    gap: 2rem;
  }
  
  ${media.mobile} {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-top: 1.5rem;
  }
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  
  .number {
    font-size: 2rem;
    font-weight: 800;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 0.25rem;
  }
  
  .label {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
  }
`;

const AvailabilityBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
  
  .pulse {
    width: 8px;
    height: 8px;
    background: #34d399;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.1); }
  }
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
  border: 1px solid ${({ theme, $hasError }) => $hasError ? '#ef4444' : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => $hasError ? '#ef4444' : theme.colors.accent};
    box-shadow: 0 0 0 3px ${({ $hasError }) => $hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(99, 102, 241, 0.1)'};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(15, 15, 35, 0.5);
  border: 1px solid ${({ theme, $hasError }) => $hasError ? '#ef4444' : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => $hasError ? '#ef4444' : theme.colors.accent};
    box-shadow: 0 0 0 3px ${({ $hasError }) => $hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(99, 102, 241, 0.1)'};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const ErrorMessage = styled(motion.div)`
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-weight: 600;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
`;

const LoadingSpinner = styled(motion.div)`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const QuickContactButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const QuickContactButton = styled(motion.a)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ResponseTimeIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.accent}15;
  border: 1px solid ${({ theme }) => theme.colors.accent}25;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 1rem;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub', color: '#333' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn', color: '#0077b5' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter', color: '#1da1f2' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram', color: '#e4405f' },
    { icon: <FaDribbble />, url: 'https://dribbble.com', label: 'Dribbble', color: '#ea4c89' },
    { icon: <FaDiscord />, url: 'https://discord.com', label: 'Discord', color: '#7289da' }
  ];

  return (
    <ContactContainer>
      <FloatingElement />
      <FloatingElement />

      <ContactHeader
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ContactTitle>Let's Work Together</ContactTitle>
        <ContactSubtitle>
          Ready to turn your ideas into reality? I'm passionate about creating 
          exceptional digital experiences and would love to hear about your project.
        </ContactSubtitle>
        
        <AvailabilityBadge
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="pulse"></div>
          Available for new projects
        </AvailabilityBadge>
        
        <StatsContainer ref={ref}>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="number">
              {inView && <CountUp end={24} duration={2} />}h
            </div>
            <div className="label">Response Time</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="number">
              {inView && <CountUp end={150} duration={2} />}+
            </div>
            <div className="label">Happy Clients</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="number">
              {inView && <CountUp end={98} duration={2} />}%
            </div>
            <div className="label">Satisfaction Rate</div>
          </StatItem>
        </StatsContainer>
      </ContactHeader>

      <ContactGrid>
        <ContactInfo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <InfoCard>
            <InfoHeader>
              <FiUser />
              Contact Information
            </InfoHeader>
            
            <InfoItem>
              <IconWrapper>
                <FiMail />
              </IconWrapper>
              <InfoText>
                <h4>Email</h4>
                <p>haseebahmad.dev@gmail.com</p>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <IconWrapper>
                <FiPhone />
              </IconWrapper>
              <InfoText>
                <h4>Phone</h4>
                <p>+92 (300) 123-4567</p>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <IconWrapper>
                <FiMapPin />
              </IconWrapper>
              <InfoText>
                <h4>Location</h4>
                <p>Lahore, Pakistan</p>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <IconWrapper>
                <FiGlobe />
              </IconWrapper>
              <InfoText>
                <h4>Timezone</h4>
                <p>PKT (UTC+5)</p>
              </InfoText>
            </InfoItem>

            <ResponseTimeIndicator>
              <FiClock />
              Usually responds within 24 hours
            </ResponseTimeIndicator>

            <QuickContactButtons>
              <QuickContactButton
                href="mailto:haseebahmad.dev@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiMail />
                Email Me
              </QuickContactButton>
              
              <QuickContactButton
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiMessageSquare />
                WhatsApp
              </QuickContactButton>
            </QuickContactButtons>

            <SocialGrid>
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  {social.icon}
                </SocialIcon>
              ))}
            </SocialGrid>
          </InfoCard>
        </ContactInfo>

        <ContactForm
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <FormTitle>
            <FiZap style={{ marginRight: '0.5rem' }} />
            Send Me a Message
          </FormTitle>
          
          <AnimatePresence>
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <FiCheck />
                Thank you! Your message has been sent successfully. I'll get back to you soon!
              </SuccessMessage>
            )}
          </AnimatePresence>
          
          <FormGroup>
            <FormLabel htmlFor="name">Full Name *</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              $hasError={!!errors.name}
              disabled={isSubmitting}
            />
            <AnimatePresence>
              {errors.name && (
                <ErrorMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <FiAlertCircle />
                  {errors.name}
                </ErrorMessage>
              )}
            </AnimatePresence>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">Email Address *</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              $hasError={!!errors.email}
              disabled={isSubmitting}
            />
            <AnimatePresence>
              {errors.email && (
                <ErrorMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <FiAlertCircle />
                  {errors.email}
                </ErrorMessage>
              )}
            </AnimatePresence>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="subject">Subject *</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Let's discuss a project"
              $hasError={!!errors.subject}
              disabled={isSubmitting}
            />
            <AnimatePresence>
              {errors.subject && (
                <ErrorMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <FiAlertCircle />
                  {errors.subject}
                </ErrorMessage>
              )}
            </AnimatePresence>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">Message *</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project, goals, timeline, and budget. The more details you provide, the better I can understand your needs and provide an accurate proposal."
              $hasError={!!errors.message}
              disabled={isSubmitting}
            />
            <AnimatePresence>
              {errors.message && (
                <ErrorMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <FiAlertCircle />
                  {errors.message}
                </ErrorMessage>
              )}
            </AnimatePresence>
          </FormGroup>

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner />
                Sending...
              </>
            ) : (
              <>
                <FiSend />
                Send Message
              </>
            )}
          </SubmitButton>
        </ContactForm>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;
