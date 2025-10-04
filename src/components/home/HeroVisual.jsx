import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  width:100%; height:560px; position:relative; display:flex; align-items:center; justify-content:center;
  @media (max-width:1100px){ height:420px; }
  @media (max-width:680px){ height:340px; }
`;
const Mesh = styled.div`
  position:absolute; inset:0; filter:blur(70px) saturate(150%); opacity:0.85; mix-blend-mode:plus-lighter;
  background:
    radial-gradient(circle at 18% 28%, rgba(99,102,241,0.55), transparent 60%),
    radial-gradient(circle at 72% 40%, rgba(236,72,153,0.45), transparent 65%),
    radial-gradient(circle at 52% 72%, rgba(168,85,247,0.5), transparent 60%);
`;
const Ring = styled(motion.div)`
  position:absolute; width:${p=>p.size||'160px'}; height:${p=>p.size||'160px'}; border:1px solid rgba(255,255,255,0.15); border-radius:50%;
  display:flex; align-items:center; justify-content:center; backdrop-filter:blur(12px); background:rgba(255,255,255,0.02);
  box-shadow:0 4px 18px -6px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05);
  overflow:hidden;
`;
const Core = styled(motion.div)`
  width:18px; height:18px; border-radius:50%; background:linear-gradient(135deg,#6366f1,#ec4899); box-shadow:0 0 0 5px rgba(255,255,255,0.08), 0 0 38px -4px #6366f1AA, 0 0 64px -6px #ec489988; position:relative;
`;

const HeroVisual = () => {
  return (
    <Wrapper
      initial={{opacity:0, scale:0.9}}
      whileInView={{opacity:1, scale:1}}
      viewport={{once:true, amount:0.3}}
      transition={{duration:0.9, ease:'easeOut'}}
    >
      <Mesh />
      <Ring size="360px" animate={{rotate:360}} transition={{repeat:Infinity, duration:46, ease:'linear'}}>
        <Ring size="250px" animate={{rotate:-360}} transition={{repeat:Infinity, duration:30, ease:'linear'}}>
          <Ring size="150px" animate={{rotate:360}} transition={{repeat:Infinity, duration:18, ease:'linear'}}>
            <Core animate={{scale:[1,1.3,1], rotate:[0,180,360]}} transition={{repeat:Infinity, duration:7, ease:'easeInOut'}} />
          </Ring>
        </Ring>
      </Ring>
    </Wrapper>
  );
};

export default HeroVisual;