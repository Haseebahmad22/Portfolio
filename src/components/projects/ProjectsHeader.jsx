import React from 'react';
import CountUp from 'react-countup';
import { FiFilter } from 'react-icons/fi';
import { PageHeader, PageTitle, PageSubtitle, StatsRow, StatCard, FiltersBar, FilterLabel, FilterChip } from './ProjectStyles';
import { fadeUp, fadeIn } from './ProjectStyles';

export const ProjectsHeader = ({ stats, inViewRef, inView }) => (
  <PageHeader {...fadeUp().initial} animate={fadeUp().animate}>
    <PageTitle>Projects</PageTitle>
    <PageSubtitle>Crafted products, experiments & learning builds. A curated selection that reflects my focus on clarity, practicality and delightful details.</PageSubtitle>
    <StatsRow ref={inViewRef}>
      <StatCard {...fadeUp(.2)}>
        <h4>{inView && <CountUp end={stats.total} duration={1.8} />}</h4>
        <span>Total</span>
      </StatCard>
      <StatCard {...fadeUp(.3)}>
        <h4>{inView && <CountUp end={stats.featured} duration={1.8} />}</h4>
        <span>Featured</span>
      </StatCard>
      <StatCard {...fadeUp(.4)}>
        <h4>{inView && <CountUp end={stats.tech} duration={1.8} />}+</h4>
        <span>Technologies</span>
      </StatCard>
    </StatsRow>
  </PageHeader>
);

export const ProjectFilters = ({ categories, activeCategory, setActiveCategory, viewMode, setViewMode }) => (
  <FiltersBar {...fadeIn(.25)}>
    <FilterLabel><FiFilter/> Filter</FilterLabel>
    {categories.map(cat => (
      <FilterChip key={cat} $active={activeCategory===cat} onClick={()=>setActiveCategory(cat)} whileTap={{scale:.92}} whileHover={{y:-2}}>{cat}</FilterChip>
    ))}
  </FiltersBar>
);
