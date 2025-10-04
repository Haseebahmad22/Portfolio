import React from 'react';
import { SectionWrapper, SectionHeader, Eyebrow, SectionTitle, SectionSubtitle, ShowcaseGrid, Card, CardTitle, CardDesc, PillRow, Pill, GradientDivider } from './HomeSectionsStyles';
import { skillsData, stats as skillsStats } from '../../../data/skills';

const topSkills = [
  ...skillsData.frontend.slice(0,3),
  ...skillsData.backend.slice(0,2),
  ...skillsData.tools.slice(0,1)
];

const SkillsPreview = () => {
  return (
    <SectionWrapper id="skills-preview">
      <SectionHeader initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.4}} transition={{duration:0.7}}>
        <Eyebrow>Capabilities</Eyebrow>
        <SectionTitle>Core Technical Strengths</SectionTitle>
        <SectionSubtitle>
          A focused snapshot of the technologies and tools I use to deliver performant, accessible and visually refined digital products.
        </SectionSubtitle>
      </SectionHeader>

      <ShowcaseGrid initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} variants={{hidden:{opacity:0},visible:{opacity:1, transition:{staggerChildren:0.08}}}}>
        {topSkills.map((skill,i)=>(
          <Card key={skill.name} variants={{hidden:{opacity:0,y:30},visible:{opacity:1,y:0}}} whileHover={{scale:1.015}} transition={{type:'spring', stiffness:140, damping:18}}>
            <CardTitle>{skill.name}</CardTitle>
            <CardDesc>Proficiency: {skill.level}% • {skill.experience}</CardDesc>
            <PillRow>
              <Pill>{skill.color.replace('#','')}</Pill>
              <Pill>{skill.level}%</Pill>
              <Pill>{skill.experience}</Pill>
            </PillRow>
          </Card>
        ))}
      </ShowcaseGrid>
      <GradientDivider style={{marginTop:'3.5rem'}} />
    </SectionWrapper>
  );
};

export default SkillsPreview;
