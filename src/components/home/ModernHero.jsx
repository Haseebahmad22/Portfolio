import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { FaArrowRight, FaDownload, FaEnvelope } from 'react-icons/fa';

// Modern, professional hero built from scratch (does not reuse old hero styles)

const HeroOuter = styled.section`
  width:100%;
  min-height:clamp(560px, 82vh, 880px);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:clamp(2rem,5vw,4rem) clamp(1.25rem,4vw,3rem);
  position:relative;
  isolation:isolate;
  overflow:hidden;
`;

const HeroInner = styled.div`
  width:100%; max-width:820px; display:flex; flex-direction:column; gap:2.75rem; position:relative;
`;

const TopMeta = styled(motion.div)`
  display:flex; flex-wrap:wrap; gap:0.75rem; align-items:center;
  font-size:0.7rem; letter-spacing:0.18em; font-weight:600; text-transform:uppercase;
  color:var(--accent-primary); opacity:0.85;
`;

const HeadlineBlock = styled.div`
  display:flex; flex-direction:column; gap:1.25rem; max-width:1050px;
`;

const PrimaryHeading = styled(motion.h1)`
  font-size:clamp(2.25rem,5vw,3.2rem);
  line-height:1.12; font-weight:800; letter-spacing:-0.5px; margin:0; color:var(--text-primary);
  background:linear-gradient(110deg,var(--text-primary) 0%,var(--accent-primary) 100%);
  -webkit-background-clip:text; background-clip:text; color:transparent;
  strong{
    background:linear-gradient(95deg,#ffb347 0%, #ff6b6b 30%, #c850c0 55%, #4158d0 80%);
    -webkit-background-clip:text; background-clip:text; color:transparent; font-weight:inherit; filter:drop-shadow(0 4px 14px rgba(200,80,192,0.35));
  }
`;

const SubHeading = styled(motion.p)`
  font-size:clamp(1.05rem,1.5vw,1.25rem);
  line-height:1.65; max-width:760px; margin:0; font-weight:500;
  color:var(--text-secondary);
`;

const Rotator = styled.span`
  position:relative; display:inline-flex; min-width:170px; height:1.05em; overflow:hidden; vertical-align:baseline; color:var(--accent-primary); font-weight:600; line-height:1.05; align-items:flex-end; padding-left:0.35rem;
`;

const RotateWord = styled(motion.span)`
  position:absolute; left:0; top:0; width:100%;
`;

const MetricsRow = styled(motion.div)`
  display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:1.1rem; max-width:820px;
`;

const MetricCard = styled(motion.div)`
  position:relative; padding:1.1rem 1.25rem 1.15rem; border:1px solid rgba(255,255,255,0.12); border-radius:18px;
  background:linear-gradient(150deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); backdrop-filter:blur(16px);
  display:flex; flex-direction:column; gap:0.35rem; min-height:120px; overflow:hidden;
  &:before{content:''; position:absolute; inset:0; background:radial-gradient(circle at 30% 20%, var(--accent-primary)22, transparent 70%); opacity:0; transition:opacity .5s ease;}
  &:hover:before{opacity:0.4;}
  &:hover{border-color:var(--accent-primary);}
  .num{font-size:2.15rem; font-weight:800; letter-spacing:-1px; line-height:1; background:var(--gradient-accent); -webkit-background-clip:text; color:transparent;}
  .label{font-size:0.75rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; opacity:0.75;}
  .desc{font-size:0.8rem; line-height:1.35; opacity:0.7;}
`;

const CTAGroup = styled(motion.div)`
  display:flex; flex-wrap:wrap; gap:1rem; align-items:center;
`;

// Visuals moved to separate HeroVisual component

const CTAButton = styled(motion.button)`
  --bg:linear-gradient(125deg,#6366f1,#8b5cf6,#ec4899);
  padding:0.95rem 1.55rem; font-size:0.95rem; font-weight:600; letter-spacing:0.25px; border-radius:14px; border:none; cursor:pointer; position:relative; display:inline-flex; align-items:center; gap:0.6rem; color:#fff; background:var(--bg); box-shadow:0 10px 32px -8px rgba(99,102,241,0.45);
  transition:transform .4s cubic-bezier(.19,1,.22,1), box-shadow .4s ease; overflow:hidden;
  &:hover{transform:translateY(-4px); box-shadow:0 16px 38px -10px rgba(99,102,241,0.55);} &:active{transform:translateY(-1px);} svg{font-size:0.9rem;}
`;

const OutlineButton = styled(CTAButton)`
  background:transparent; color:var(--accent-primary); border:1.5px solid var(--accent-primary); box-shadow:none;
  &:hover{background:var(--accent-primary); color:#fff; box-shadow:0 14px 36px -8px rgba(99,102,241,0.5);} 
`;

const GhostLink = styled.button`
  background:none; border:none; color:var(--text-secondary); font-size:0.85rem; font-weight:600; letter-spacing:0.05em; cursor:pointer; display:inline-flex; align-items:center; gap:0.4rem; padding:0.6rem 0.9rem; position:relative; border-radius:10px;
  &:hover{color:var(--text-primary);}
`;

// Dedicated Lines of Code highlight block
const LinesBlock = styled(motion.div)`
  display:flex; align-items:baseline; gap:1.25rem; padding:1.25rem 1.5rem; border:1px solid rgba(255,255,255,0.12); border-radius:20px; background:linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02)); backdrop-filter:blur(18px);
  position:relative; overflow:hidden; max-width:580px;
  &:before{content:''; position:absolute; inset:0; background:radial-gradient(circle at 25% 35%, rgba(255,107,107,0.35), transparent 70%); opacity:0.55; mix-blend-mode:overlay;}
  .value{font-size:clamp(2.4rem,4.4vw,3.4rem); font-weight:800; letter-spacing:-2px; line-height:1; background:linear-gradient(90deg,#ffb347,#ff6b6b,#c850c0,#4158d0); background-size:200% 100%; -webkit-background-clip:text; background-clip:text; color:transparent; animation:shine 6s linear infinite;}
  .labelWrap{display:flex; flex-direction:column; gap:0.35rem;}
  .label{font-size:0.75rem; letter-spacing:0.15em; font-weight:700; text-transform:uppercase; opacity:0.75;}
  .sub{font-size:0.85rem; color:var(--text-secondary); line-height:1.35; max-width:360px;}
  @keyframes shine {0%{background-position:0% 50%;}100%{background-position:100% 50%;}}
`;

// Removed Divider & TagsRow per user request

const Hero = ({ stats = [], typewriterStrings = [], onViewWork, onDownloadResume, onContact }) => {
  const rotating = typewriterStrings.slice(0,4); // limit
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    if(rotating.length === 0) return; 
    const id = setInterval(()=> setIndex(i => (i+1) % rotating.length), 2500);
    return ()=> clearInterval(id);
  },[rotating.length]);

  // Explicit metric selection for tiles (exclude Lines of Code block): Years Experience, Technologies, Happy Clients
  const lookup = Object.fromEntries(stats.map(s=>[s.label,s]));
  const preferredOrder = ['Years Experience','Technologies','Happy Clients'];
  const metricData = preferredOrder.map(k=> lookup[k]).filter(Boolean).map(s => ({
    label: s.label,
    number: s.number,
    suffix: s.suffix,
    desc: ''
  }));

  return (
    <HeroOuter>
      <HeroInner>
        <TopMeta initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6, delay:.05}}>
          <span>FULL STACK</span><span>•</span><span>ENGINEERING</span><span>•</span><span>DELIVERY</span>
        </TopMeta>

        <HeadlineBlock>
          <PrimaryHeading initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8, delay:.15}}>
            Hi, I'm <strong>Haseeb Ahmad</strong>. I architect & deliver dependable web platforms.
          </PrimaryHeading>
          <SubHeading initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.75, delay:.3}}>
            I help teams design robust systems, craft clean services & ship performant interfaces. Focused on clarity,
            longevity and measurable impact.{' '}
            {rotating.length>0 && (
              <Rotator>
                <AnimatePresence mode="wait">
                  <RotateWord
                    key={rotating[index]}
                    initial={{y:'100%', opacity:0}}
                    animate={{y:0, opacity:1}}
                    exit={{y:'-100%', opacity:0}}
                    transition={{duration:.55, ease:[0.22,1,0.36,1]}}
                  >
                    {rotating[index]}
                  </RotateWord>
                </AnimatePresence>
              </Rotator>
            )}
          </SubHeading>
        </HeadlineBlock>

        <LinesBlock
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true, amount:0.4}}
          transition={{duration:0.7, ease:'easeOut'}}
        >
          <span className="value">120K+</span>
          <span className="labelWrap">
            <span className="label">LINES OF CODE</span>
            <span className="sub">Crafted across production projects, prototypes & experiments with focus on quality and maintainability.</span>
          </span>
        </LinesBlock>

        <MetricsRow initial="hidden" whileInView="visible" viewport={{once:true, amount:0.4}} variants={{hidden:{opacity:0,y:20}, visible:{opacity:1,y:0, transition:{staggerChildren:0.18}}}}>
          {metricData.map((m,i)=>(
            <MetricCard key={m.label} variants={{hidden:{opacity:0, y:25}, visible:{opacity:1, y:0}}} whileHover={{y:-6}} transition={{type:'spring', stiffness:140, damping:18}}>
              <div className="num"><CountUp end={m.number} duration={2} suffix={m.suffix} /></div>
              <div className="label">{m.label}</div>
              {m.desc && <div className="desc">{m.desc}</div>}
            </MetricCard>
          ))}
        </MetricsRow>

        <CTAGroup initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7, delay:.55}}>
          <CTAButton onClick={onViewWork} whileHover={{scale:1.05}} whileTap={{scale:0.96}}>
            <FaArrowRight /> View Projects
          </CTAButton>
          <OutlineButton onClick={onDownloadResume} whileHover={{scale:1.05}} whileTap={{scale:0.96}}>
            <FaDownload /> Resume
          </OutlineButton>
          <GhostLink onClick={onContact}>Contact <FaEnvelope style={{fontSize:'0.75rem'}} /></GhostLink>
        </CTAGroup>

        {/* Visual panel handled externally */}
      </HeroInner>
    </HeroOuter>
  );
};

export default Hero;