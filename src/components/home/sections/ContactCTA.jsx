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
        <CTATitle>Let’s Create Impact Together</CTATitle>
        <CTAText>
          I collaborate with teams to engineer resilient platforms, refine UX, and accelerate product velocity. If you need someone who merges clean architecture with design clarity—reach out.
        </CTAText>
        <div style={{display:'flex', flexWrap:'wrap', gap:'0.5rem', margin:'0 0 2rem'}}>
          {['Architecture','Performance','DX','Scalability','Quality'].map(tag => (
            <span key={tag} style={{fontSize:'0.6rem', letterSpacing:'0.15em', fontWeight:700, padding:'0.45rem 0.7rem', border:'1px solid rgba(255,255,255,0.15)', borderRadius:999, background:'rgba(255,255,255,0.06)', backdropFilter:'blur(8px)', color:'var(--text-secondary)'}}>{tag}</span>
          ))}
        </div>
        <CTAButtons>
          <CTAButton onClick={handleHire}>Start a Conversation</CTAButton>
          <CTAButtonSecondary onClick={handleResume}>Download Resume</CTAButtonSecondary>
        </CTAButtons>
      </CTAWrapper>
    </SectionWrapper>
  );
};

export default ContactCTA;
