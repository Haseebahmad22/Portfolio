import React from 'react';
import { SkillsHeader as HeaderWrapper, SkillsTitle, SkillsSubtitle } from './SkillsStyles';

const SkillsHeader = () => {
  return (
    <HeaderWrapper
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
         <SkillsTitle>My Tech Arsenal</SkillsTitle>
         <SkillsSubtitle>
           A comprehensive, up-to-date list of the technologies I use to build, ship, and scale.
         </SkillsSubtitle>
    </HeaderWrapper>
  );
};

export default SkillsHeader;
