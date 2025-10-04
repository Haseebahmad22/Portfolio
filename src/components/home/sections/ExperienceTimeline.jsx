import React from 'react';
import { SectionWrapper, SectionHeader, Eyebrow, SectionTitle, SectionSubtitle, Timeline, TimelineItem, TimelineBullet, TimelineYear, TimelineRole, TimelineOrg, TimelineText, GradientDivider } from './HomeSectionsStyles';

// Updated focused journey (starting from 2023 as requested)
const timeline = [
  {
    year: '2025',
    role: 'Founder & Developer',
    org: 'zarqais.com',
    text: 'Building and evolving a real product: shipping features end‑to‑end, refining UX, performance tuning, and owning technical/product decisions.'
  },
  {
    year: 'Fall 2024',
    role: 'Full‑Stack Development',
    org: 'Project Work',
    text: 'Integrated frontends with REST APIs & databases, focusing on data modeling, component architecture, and deployment workflows.'
  },
  {
    year: 'Spring 2024',
    role: 'Desktop Apps Exploration',
    org: 'Independent Study',
    text: 'Experimented with desktop application patterns—state management, packaging, and non‑browser UI paradigms to broaden architectural thinking.'
  },
  {
    year: '2023',
    role: 'Academic Foundations',
    org: 'Software Engineering',
    text: 'Focused on core programming principles, problem solving, and the underlying web platform—establishing durable fundamentals.'
  }
];

const ExperienceTimeline = () => {
  return (
    <SectionWrapper id="experience">
      <SectionHeader initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.4}} transition={{duration:0.7}}>
        <Eyebrow>Journey</Eyebrow>
        <SectionTitle>Learning & Technology Journey</SectionTitle>
        <SectionSubtitle>
          Capturing the phases of growth from academic grounding to product ownership—how each stage expanded technical depth and practical impact.
        </SectionSubtitle>
      </SectionHeader>

      <Timeline>
        {timeline.map((item,i)=>(
          <TimelineItem key={item.year} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.4}} transition={{duration:0.55, delay:i*0.08}}>
            <TimelineBullet />
            <TimelineYear>{item.year}</TimelineYear>
            <TimelineRole>{item.role}</TimelineRole>
            <TimelineOrg>{item.org}</TimelineOrg>
            <TimelineText>{item.text}</TimelineText>
          </TimelineItem>
        ))}
      </Timeline>
      <GradientDivider style={{marginTop:'1rem'}} />
    </SectionWrapper>
  );
};

export default ExperienceTimeline;
