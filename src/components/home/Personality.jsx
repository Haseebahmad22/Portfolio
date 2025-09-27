import React from 'react';
import { PersonalitySection, PersonalityTitle, PersonalityText } from './HomeStyles';

const Personality = () => (
  <PersonalitySection
    data-aos="fade-left"
    data-aos-delay="400"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <PersonalityTitle>Beyond the Code 🎯</PersonalityTitle>
    <PersonalityText>
      When I'm not crafting digital magic <span className="emoji">🎨</span>,
      you'll find me exploring cutting-edge tech <span className="emoji">🤖</span>,
      contributing to open source projects <span className="emoji">🌟</span>,
      or perfecting my craft with a steaming cup of coffee at 2 AM
      <span className="emoji">☕</span> (the developer's way! 😄)
    </PersonalityText>
  </PersonalitySection>
);

export default Personality;