import React from 'react';
import { SectionWrapper, SectionHeader, Eyebrow, SectionTitle, SectionSubtitle, ShowcaseGrid, Card, CardTitle, CardDesc, PillRow, Pill, GradientDivider, CardMeta } from './HomeSectionsStyles';
import projectsData from '../../../data/projectsData';

const featured = projectsData.slice(0,3);

const ProjectsShowcase = () => {
  return (
    <SectionWrapper id="projects-showcase">
      <SectionHeader initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.4}} transition={{duration:0.7}}>
        <Eyebrow>Selected Work</Eyebrow>
        <SectionTitle>Projects Making Real Impact</SectionTitle>
        <SectionSubtitle>
          A brief highlight of engineering work spanning UI engineering, scalable backend services and product experience refinement.
        </SectionSubtitle>
      </SectionHeader>
      <ShowcaseGrid initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} variants={{hidden:{opacity:0},visible:{opacity:1, transition:{staggerChildren:0.1}}}}>
        {featured.map((p,i)=>(
          <Card key={p.id || p.title} variants={{hidden:{opacity:0,y:28},visible:{opacity:1,y:0}}} whileHover={{scale:1.02}} onClick={()=>window.location.href='/projects'} style={{cursor:'pointer'}}>
            <CardMeta>{p.category || 'Project'}</CardMeta>
            <CardTitle>{p.title}</CardTitle>
            <CardDesc>{p.description?.slice(0,120)}{p.description && p.description.length>120?'…':''}</CardDesc>
            <PillRow>
              {(p.tech || []).slice(0,4).map(t=> <Pill key={t}>{t}</Pill>)}
            </PillRow>
          </Card>
        ))}
      </ShowcaseGrid>
      <GradientDivider style={{marginTop:'3.5rem'}} />
    </SectionWrapper>
  );
};

export default ProjectsShowcase;
