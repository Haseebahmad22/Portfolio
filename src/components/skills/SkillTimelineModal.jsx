import React, { useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Overlay = styled(motion.div)`
  position:fixed; inset:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:1000;
`;

const Modal = styled(motion.div)`
  width:min(900px,95%); background:var(--bg-primary); border-radius:16px; padding:1.5rem; box-shadow:0 30px 60px rgba(2,6,23,0.6); border:1px solid rgba(255,255,255,0.06);
`;

const Header = styled.div`
  display:flex; align-items:center; justify-content:space-between; gap:1rem; margin-bottom:1rem;
`;

const Title = styled.h3`
  margin:0; font-size:1.25rem; font-weight:800; background:var(--gradient-accent); -webkit-background-clip:text; color:transparent;
`;

const Close = styled.button`
  background:transparent; border:none; color:var(--text-secondary); font-weight:700; cursor:pointer; font-size:1rem;
`;

const InfoRow = styled.div`
  display:flex; gap:1rem; align-items:center; margin-bottom:0.75rem; color:var(--text-secondary);
`;

// generate monthly labels from Aug 2023 to current month
const generateMonths = () => {
  const start = new Date(2023,7,1); // Aug 2023
  const now = new Date();
  const months = [];
  const iter = new Date(start);
  while(iter <= now){
    months.push(new Date(iter));
    iter.setMonth(iter.getMonth()+1);
  }
  return months;
}

const months = generateMonths();

const seededRandom = (seed) => {
  let h = 2166136261 >>> 0;
  for(let i=0;i<seed.length;i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619) >>> 0;
  return () => { h += 0x6D2B79F5; let t = Math.imul(h ^ (h >>> 15), 1 | h); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967295; }
}

const buildTimeline = (skillName, level) => {
  const rand = seededRandom(skillName);
  const base = Math.max(5, Math.round(level * 0.6));
  let cur = base;
  return months.map((m,i)=>{
    // slowly trend upwards with small random jumps, finishing near level
    const progress = Math.min(100, Math.round(cur + rand()*5 + i* ( (level - base)/months.length )));
    cur = progress;
    return { label: m.toLocaleString('default',{month:'short', year:'numeric'}), value: progress };
  });
}

const SkillTimelineModal = ({ skill, onClose }) => {
  const data = useMemo(()=> buildTimeline(skill.name, skill.level), [skill]);
  return (
    <Overlay initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
      <Modal initial={{scale:0.97, y:20}} animate={{scale:1, y:0}} exit={{scale:0.98, y:10}} onClick={e=>e.stopPropagation()}>
        <Header>
          <div>
            <Title>{skill.name} — Proficiency Timeline</Title>
            <InfoRow>
              <div>Current: <strong style={{color:skill.color, marginLeft:6}}>{skill.level}%</strong></div>
              <div>Experience: <strong style={{marginLeft:6}}>{skill.experience || '—'}</strong></div>
            </InfoRow>
          </div>
          <Close onClick={onClose}>Close ✕</Close>
        </Header>

        <div style={{height:320}}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{top:10,right:20,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="label" tick={{fill:'var(--text-secondary)'}} interval={Math.ceil(months.length/6)} />
              <YAxis domain={[0,100]} tick={{fill:'var(--text-secondary)'}} />
              <Tooltip contentStyle={{background:'var(--bg-primary)', border:'1px solid rgba(255,255,255,0.04)'}} />
              <Line type="monotone" dataKey="value" stroke={skill.color || '#60A5FA'} strokeWidth={3} dot={{ r:4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Modal>
    </Overlay>
  )
}

export default SkillTimelineModal;
