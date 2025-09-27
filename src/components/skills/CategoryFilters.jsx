import React from 'react';
import { CategoryTabs, CategoryTab } from './SkillsStyles';

const CategoryFilters = ({ categories, activeCategory, onChange }) => {
  return (
    <CategoryTabs>
      {categories.map(category => (
        <CategoryTab
          key={category.id}
          $active={activeCategory === category.id}
          onClick={() => onChange(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.icon}
          {category.label}
        </CategoryTab>
      ))}
    </CategoryTabs>
  );
};

export default CategoryFilters;
