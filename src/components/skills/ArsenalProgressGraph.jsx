import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const Card = styled(motion.div)`
  margin-top:1rem; border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:1rem; background:linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)); backdrop-filter:blur(18px);
`;

const Header = styled.div`
  display:flex; align-items:center; justify-content:space-between; gap:1rem; margin-bottom:0.75rem;
`;

const Title = styled.h4`
  margin:0; font-size:1.05rem; font-weight:800; color:var(--text-primary);
`;

const Meta = styled.div`
  display:flex; gap:0.75rem; align-items:center; color:var(--text-secondary); font-weight:700; font-size:0.85rem;
`;

function generateMonths() {
  const start = new Date(2023, 7, 1); // Aug 2023
  const now = new Date();
  const out = [];
  const cur = new Date(start);
  while (cur <= now) {
    out.push(new Date(cur));
    cur.setMonth(cur.getMonth() + 1);
  }
  return out;
}

const months = generateMonths();

function seededRandom(seed) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619) >>> 0;
  return () => {
    h += 0x6D2B79F5;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967295;
  };
}

function buildSeries(skill) {
  const rand = seededRandom(skill.name);
  const maxOffset = Math.max(0, Math.floor(months.length * 0.6));
  const offset = Math.floor(rand() * maxOffset); // some early, some mid
  const startValue = Math.floor(rand() * 35); // 0..35%
  const target = skill.level; // aim toward stated level
  const steps = months.length - offset;
  const series = [];
  for (let i = 0; i < months.length; i++) {
    let value;
    if (i < offset) {
      value = Math.max(0, Math.floor(startValue * (i / Math.max(1, offset)) * 0.5));
    } else {
      const p = (i - offset) / Math.max(1, steps - 1);
      const eased = 1 - Math.pow(1 - p, 2);
      value = Math.min(100, Math.round(startValue + (target - startValue) * eased + rand() * 6 - 3));
    }
    series.push({
      label: months[i].toLocaleString('default', { month: 'short', year: '2-digit' }),
      value: Math.max(0, Math.min(100, value))
    });
  }
  return series;
}

const ArsenalProgressGraph = ({ skill }) => {
  const data = useMemo(() => (skill ? buildSeries(skill) : []), [skill]);
  if (!skill) return null;
  return (
    <AnimatePresence mode="wait">
      <Card
        key={skill.name}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Header>
          <Title>{skill.name} — Progress Timeline</Title>
          <Meta>
            <span style={{ color: skill.color, fontWeight: 800 }}>{skill.level}%</span>
            {skill.experience && <span>• {skill.experience}</span>}
            <span>• Aug 2023 → Present</span>
          </Meta>
        </Header>
        <div style={{ height: 280 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 18, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="label" tick={{ fill: 'var(--text-secondary)' }} interval={Math.ceil(data.length / 6)} />
              <YAxis domain={[0, 100]} tick={{ fill: 'var(--text-secondary)' }} />
              <Tooltip contentStyle={{ background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }} />
              <Line type="monotone" dataKey="value" stroke={skill.color || '#60A5FA'} strokeWidth={3} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </AnimatePresence>
  );
};

export default ArsenalProgressGraph;
