import React, { useState } from 'react';
import {
  SkillsContainer,
  SkillsSection,
  SkillsGrid,
  FloatingElement
} from '../components/skills/SkillsStyles';
import SkillsHeader from '../components/skills/SkillsHeader';
import StatsOverviewPanel from '../components/skills/StatsOverviewPanel';
import CategoryFilters from '../components/skills/CategoryFilters';
import SkillsCardsPanel from '../components/skills/SkillsCardsPanel';
import SkillsCharts from '../components/skills/SkillsCharts';

// Static data
import {
  skillsData,
  categories,
  stats,
  frontendChartData,
  backendChartData,
  experienceData
} from '../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <SkillsContainer>
      {/* Floating decorative elements */}
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />

      <SkillsSection>
        <SkillsHeader />
        <StatsOverviewPanel stats={stats} />
        <CategoryFilters
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
        <SkillsGrid>
          <SkillsCardsPanel
            activeCategory={activeCategory}
            categories={categories}
            skillsData={skillsData}
          />
          <SkillsCharts
            frontendChartData={frontendChartData}
            backendChartData={backendChartData}
            experienceData={experienceData}
          />
        </SkillsGrid>
      </SkillsSection>
    </SkillsContainer>
  );
};

export default Skills;