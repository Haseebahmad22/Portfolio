import React from 'react';
import { ChartsContainer, ChartCard } from './SkillsStyles';
import { RadialBarChart, RadialBar, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useInView } from 'react-intersection-observer';

const SkillsCharts = ({ frontendChartData, backendChartData, experienceData }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <ChartsContainer ref={ref}>
      <ChartCard
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Frontend Proficiency</h3>
        <ResponsiveContainer width="100%" height={200}>
          <RadialBarChart data={frontendChartData}>
            <RadialBar dataKey="value" cornerRadius={10} fill="#6366f1" />
          </RadialBarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3>Backend Distribution</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={backendChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={70}
              innerRadius={30}
            >
              {backendChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3>Growth Timeline</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={experienceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
            <Line type="monotone" dataKey="projects" stroke="#6366f1" strokeWidth={3} dot={{ fill: '#6366f1', strokeWidth: 2, r: 6 }} />
            <Line type="monotone" dataKey="skills" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </ChartsContainer>
  );
};

export default SkillsCharts;
