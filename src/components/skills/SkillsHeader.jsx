import React from 'react';
import { SkillsHeader as HeaderWrapper, SkillsTitle, SkillsSubtitle } from './SkillsStyles';

const SkillsHeader = () => {
  return (
    <HeaderWrapper
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <SkillsTitle>Technical Skills</SkillsTitle>
      <SkillsSubtitle>
        A comprehensive overview of my technical expertise, tools mastery, and continuous learning journey
      </SkillsSubtitle>
    </HeaderWrapper>
  );
};

export default SkillsHeader;
