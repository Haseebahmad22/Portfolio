import React, { useRef, useEffect, useMemo, useState } from 'react';
import {
  SkillsContainer,
  SkillsSection,
  SkillsFullBleed
} from '../components/skills/SkillsStyles';
import SkillsHeader from '../components/skills/SkillsHeader';
import TechTabs from '../components/home/TechTabs';
import ArsenalProgressGraph from '../components/skills/ArsenalProgressGraph';

// Static data
import { skillsData } from '../data/skills';
import { HiDesktopComputer, HiCog } from 'react-icons/hi';
import { RiDatabase2Line } from 'react-icons/ri';

const Skills = () => {
  const gridRef = useRef(null);
  const [activeTab, setActiveTab] = useState('frontend');
  const [selected, setSelected] = useState(null);

  // Derive technologies/tabs from the unified skillsData (so it's complete)
  const technologies = useMemo(() => ({
    frontend: skillsData.frontend.map(s => ({ name: s.name, icon: s.icon, color: s.color, level: s.level, experience: s.experience })),
    backend: skillsData.backend.map(s => ({ name: s.name, icon: s.icon, color: s.color, level: s.level, experience: s.experience })),
    tools: skillsData.tools.map(s => ({ name: s.name, icon: s.icon, color: s.color, level: s.level, experience: s.experience })),
  }), []);

  const tabs = useMemo(() => ([
    { id: 'frontend', label: 'Frontend', icon: <HiDesktopComputer /> },
    { id: 'backend', label: 'Backend', icon: <RiDatabase2Line /> },
    { id: 'tools', label: 'Tools & DevOps', icon: <HiCog /> },
  ]), []);

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
  }, []);

  // Ensure a default selection so the graph is visible on first load
  useEffect(() => {
    const first = technologies[activeTab]?.[0];
    if (!selected && first) setSelected(first);
  }, [activeTab, technologies, selected]);

  return (
    <SkillsContainer>
      {/* full-bleed background */}
      <SkillsFullBleed />
  {/* Tech Arsenal with inline progress graph */}

      <SkillsSection>
        <SkillsHeader />
        <p style={{color:'var(--text-secondary)', margin:'0 0 0.5rem 0', fontWeight:600, fontSize:'0.95rem'}}>
          Click any skill to view its progress timeline below.
        </p>
        <TechTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          technologies={technologies}
          gridRef={gridRef}
          fitLabels={fitLabels}
          onTechClick={(tech)=> setSelected(tech)}
          compact
        />
        <ArsenalProgressGraph skill={selected} />
      </SkillsSection>
    </SkillsContainer>
  );
};


export default Skills;