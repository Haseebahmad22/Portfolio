import React from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  TechSection,
  TechHeader,
  TechTitle,
  TechSubtitle,
  TabContainer,
  Tab,
  TechGrid,
  TechItem
} from './HomeStyles';

const TechTabs = ({ tabs, activeTab, onChange, technologies, gridRef, fitLabels }) => {
  return (
    <TechSection data-aos="fade-left" data-aos-delay="200">
      <TechHeader>
        <TechTitle>My Tech Arsenal ⚡</TechTitle>
        <TechSubtitle>Technologies I master and love working with</TechSubtitle>
      </TechHeader>
      <TabContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            $active={activeTab === tab.id}
            onClick={() => onChange(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="icon">{tab.icon}</span>
            {tab.label}
          </Tab>
        ))}
      </TabContainer>
      <AnimatePresence mode="wait">
        <TechGrid
          ref={gridRef}
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          onAnimationComplete={fitLabels}
        >
          {technologies[activeTab].map((tech, index) => (
            <TechItem
              data-tech-card="true"
              key={tech.name}
              color={tech.color}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <span className="icon" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              <span className="labelWrap">
                <span className="label" title={tech.name}>{tech.name}</span>
              </span>
            </TechItem>
          ))}
        </TechGrid>
      </AnimatePresence>
    </TechSection>
  );
};

export default TechTabs;