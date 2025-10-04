import React, { useState, useRef, useEffect } from 'react';
import {
  SkillsContainer,
  SkillsSection,
  SkillsGrid,
  FloatingElement
} from '../components/skills/SkillsStyles';
import SkillsHeader from '../components/skills/SkillsHeader';
import TechTabs from '../components/home/TechTabs';
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
import { technologies, tabs } from '../data/home';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  // Local state for TechTabs now on Skills page
  const [activeTab, setActiveTab] = useState('frontend');
  const gridRef = useRef(null);

  // Simplified label fitting logic (reuse minimal portion)
  const fitLabels = () => {
    if (!gridRef.current) return;
    const SAFE = 2;
    const MIN_SCALE = 0.8;
    const run = () => {
      const cards = gridRef.current?.querySelectorAll('[data-tech-card="true"]') || [];
      cards.forEach((card) => {
        const wrap = card.querySelector('.labelWrap');
        const label = card.querySelector('.label');
        if (!wrap || !label) return;
        label.style.transformOrigin = 'center';
        const wrapWidth = Math.floor(wrap.getBoundingClientRect().width) - SAFE;
        const labelWidth = Math.ceil(label.scrollWidth);
        if (wrapWidth > 0 && labelWidth > 0) {
          const needed = wrapWidth / labelWidth;
            const scale = Math.min(1, Math.max(MIN_SCALE, needed * 0.98));
            label.style.transform = `scale(${scale})`;
        }
      });
    };
    requestAnimationFrame(() => setTimeout(run, 0));
    setTimeout(run, 200);
  };

  useEffect(() => {
    const onResize = () => fitLabels();
    window.addEventListener('resize', onResize);
    const id = setTimeout(fitLabels, 500);
    return () => { window.removeEventListener('resize', onResize); clearTimeout(id); };
  }, [activeTab]);

  return (
    <SkillsContainer>
      {/* Floating decorative elements */}
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />

      <SkillsSection>
        <SkillsHeader />
        <StatsOverviewPanel stats={stats} />
        <TechTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          technologies={technologies}
          gridRef={gridRef}
          fitLabels={fitLabels}
        />
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