import React from 'react';
import { SectionWrapper, SectionHeader, Eyebrow, SectionTitle, SectionSubtitle, CTAWrapper, CTATitle, CTAText, CTAButtons, CTAButton, CTAButtonSecondary } from './HomeSectionsStyles';

const ContactCTA = () => {
  const handleHire = () => window.location.href = '/contact';
  const handleResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Haseeb_Ahmad_Resume.pdf';
    link.click();
  };  
  return (
    <SectionWrapper id="contact-cta" style={{paddingTop: '2rem'}}>
      <CTAWrapper>
        <CTATitle>Let’s Build Something Exceptional</CTATitle>
        <CTAText>
          Open to impactful opportunities—product engineering, UI engineering, and collaborative innovation. If you’re looking for someone who blends design thinking with engineering rigor, let’s talk.
        </CTAText>
        <CTAButtons>
          <CTAButton onClick={handleHire}>Start a Conversation</CTAButton>
          <CTAButtonSecondary onClick={handleResume}>Download Resume</CTAButtonSecondary>
        </CTAButtons>
      </CTAWrapper>
    </SectionWrapper>
  );
};

export default ContactCTA;
