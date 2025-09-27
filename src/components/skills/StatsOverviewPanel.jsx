import React from 'react';
import { StatsOverview, StatCard, StatIcon, StatNumber, StatLabel } from './SkillsStyles';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsOverviewPanel = ({ stats }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <StatsOverview ref={ref}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 50,
              scale: inView ? 1 : 0.8
            }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <StatIcon>{stat.icon}</StatIcon>
          <StatNumber>
            {inView && <CountUp end={stat.number} duration={2} suffix={stat.suffix} />}
          </StatNumber>
          <StatLabel>{stat.label}</StatLabel>
          <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginTop: '0.5rem', margin: 0 }}>
            {stat.description}
          </p>
        </StatCard>
      ))}
    </StatsOverview>
  );
};

export default StatsOverviewPanel;
