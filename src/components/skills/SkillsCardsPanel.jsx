import React, { useState } from 'react';
import { SkillsCards, SkillCard, SkillCardHeader, SkillsList, SkillItem, SkillInfo, SkillLevel, SkillProgress, SkillPercentage } from './SkillsStyles';
import { FaDatabase } from 'react-icons/fa';
import { HiDesktopComputer, HiCog } from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';
import SkillTimelineModal from './SkillTimelineModal';

const SkillsCardsPanel = ({ activeCategory, categories, skillsData }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [...skillsData.frontend, ...skillsData.backend, ...skillsData.tools];
    }
    return skillsData[activeCategory] || [];
  };

  const getSkillsByCategory = () => [
    { category: 'Frontend', icon: <HiDesktopComputer />, skills: skillsData.frontend },
    { category: 'Backend', icon: <FaDatabase />, skills: skillsData.backend },
    { category: 'Tools & DevOps', icon: <HiCog />, skills: skillsData.tools }
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleOpen = (skill) => setSelectedSkill(skill);
  const handleClose = () => setSelectedSkill(null);

  return (
    <>
    <SkillsCards ref={ref}>
      {activeCategory === 'all' ? (
        getSkillsByCategory().map((categoryData, index) => (
          <SkillCard
            key={categoryData.category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <SkillCardHeader>
              {categoryData.icon}
              <h3>{categoryData.category}</h3>
            </SkillCardHeader>
            <SkillsList>
              {categoryData.skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                  transition={{ duration: 0.4, delay: 0.2 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <SkillInfo color={skill.color}>
                    {skill.icon}
                    <span>{skill.name}</span>
                  </SkillInfo>
                  <SkillLevel onClick={()=>handleOpen(skill)} style={{cursor:'pointer'}} title="Click to view timeline">
                    <SkillProgress level={inView ? skill.level : 0} />
                    <SkillPercentage>{skill.level}%</SkillPercentage>
                  </SkillLevel>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCard>
        ))
      ) : (
        <SkillCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <SkillCardHeader>
            {categories.find(cat => cat.id === activeCategory)?.icon}
            <h3>{categories.find(cat => cat.id === activeCategory)?.label}</h3>
          </SkillCardHeader>
          <SkillsList>
            {getFilteredSkills().map((skill, index) => (
                <SkillItem
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <SkillInfo color={skill.color}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </SkillInfo>
                <SkillLevel onClick={()=>handleOpen(skill)} style={{cursor:'pointer'}} title="Click to view timeline">
                  <SkillProgress level={skill.level} />
                  <SkillPercentage>{skill.level}%</SkillPercentage>
                </SkillLevel>
              </SkillItem>
            ))}
          </SkillsList>
        </SkillCard>
      )}
    </SkillsCards>
    {selectedSkill && <SkillTimelineModal skill={selectedSkill} onClose={handleClose} />}
    </>
  );
};

export default SkillsCardsPanel;
