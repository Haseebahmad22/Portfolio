import React from 'react';
import { useNavigate } from 'react-router-dom';
import { technologies } from '../../data/home';
import { TechStripWrapper, TechRowsContainer, TechRow, TechPill, ViewAllSkillsLink } from './HomeStyles';

// Prioritize core modern web stack first, then supporting tools/services.
// We'll build a flat prioritized array and then flow it into 3 roughly balanced rows.
const priorityOrder = [
  // Core Frontend Frameworks & Language
  'Next.js','React','TypeScript','JavaScript','Tailwind CSS',
  // Backend & Data
  'Node.js','Express','MongoDB','PostgreSQL','Firebase',
  // DevOps / Infra / Tooling
  'Docker','Git','GitHub','VS Code','Postman','Vercel','Netlify',
  // Others / Design
  'Figma','Redis','AWS','Java','Python'
];

// Build a lookup map of all tech objects
const allTech = [...technologies.frontend, ...technologies.backend, ...technologies.tools];
const byName = Object.fromEntries(allTech.map(t=>[t.name,t]));

// Filter by priority list but only include those actually defined
const prioritized = priorityOrder.filter(name => byName[name]).map(name => byName[name]);

// Distribute into 3 rows dynamically (greedy balance by length of names for nicer alignment)
const rows = [[],[],[]];
const lengths = [0,0,0];
prioritized.forEach(item => {
  // approximate visual width cost: name length + constant for icon
  const cost = item.name.length + 6;
  const idx = lengths.indexOf(Math.min(...lengths));
  rows[idx].push(item);
  lengths[idx] += cost;
});

const TechStrip = () => {
  const navigate = useNavigate();
  return (
    <TechStripWrapper aria-label="Core technologies preview" data-variant="rows">
      <TechRowsContainer>
        {rows.map((row,i)=>(
          <TechRow key={i} data-row={i+1}>
            {row.map(t => (
              <TechPill key={t.name} title={t.name} $color={t.color}>
                <span className="icon" style={{ color: t.color }}>{t.icon}</span>
                {t.name}
              </TechPill>
            ))}
          </TechRow>
        ))}
        <ViewAllSkillsLink onClick={()=>navigate('/skills')}>View all skills →</ViewAllSkillsLink>
      </TechRowsContainer>
    </TechStripWrapper>
  );
};

export default TechStrip;
