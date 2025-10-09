import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled.section`
  width:100%; position:relative; padding:6rem 2rem; max-width:1350px; margin:0 auto; z-index:2;
  @media (max-width:1024px){ padding:5rem 1.75rem; }
  @media (max-width:768px){ padding:4rem 1.25rem; }
  @media (max-width:640px){ padding:3.5rem 1rem; }
`;

export const SectionHeader = styled(motion.div)`
  text-align:center; margin:0 auto 3.5rem; max-width:780px; position:relative;
`;

export const Eyebrow = styled.span`
  display:inline-block; font-size:0.75rem; letter-spacing:0.15em; font-weight:700; text-transform:uppercase; background:var(--gradient-accent); -webkit-background-clip:text; background-clip:text; color:transparent; margin-bottom:0.85rem; position:relative;
`;

export const SectionTitle = styled.h2`
  font-size:clamp(1.9rem,3.5vw,2.6rem); font-weight:800; letter-spacing:-0.03em; margin:0 0 0.9rem; background: linear-gradient(135deg,#fff 0%,#cbd5e1 60%,#94a3b8 100%); -webkit-background-clip:text; color:transparent;
`;

export const SectionSubtitle = styled.p`
  font-size:clamp(0.95rem,1.3vw,1.05rem); color:var(--text-secondary); margin:0 auto; line-height:1.6; opacity:0.88;
`;

export const GradientDivider = styled.div`
  width:100%; height:1px; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent); margin:0 auto; position:relative; overflow:visible;
  &::after{content:''; position:absolute; left:50%; top:0; transform:translateX(-50%); width:280px; height:100%; background:linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), var(--accent-cyan), transparent); opacity:0.25; filter:blur(1px);}  
`;

export const Grid = styled(motion.div)`
  display:grid; gap:2rem; position:relative;
`;

export const ShowcaseGrid = styled(Grid)`
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
`;

export const Card = styled(motion.article)`
  background:linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  border:1px solid rgba(255,255,255,0.08); border-radius:22px; padding:1.5rem 1.4rem 1.4rem; position:relative; overflow:hidden; display:flex; flex-direction:column; gap:0.9rem; backdrop-filter:blur(28px) saturate(160%);
  box-shadow:0 8px 32px -8px rgba(0,0,0,0.55); transition:all 0.4s cubic-bezier(.4,.2,.2,1);
  &:hover{transform:translateY(-6px); box-shadow:0 16px 48px -10px rgba(0,0,0,0.65),0 0 0 1px rgba(255,255,255,0.05);} 
  &::before{content:''; position:absolute; inset:0; background:radial-gradient(circle at 30% 20%,rgba(99,102,241,0.25),transparent 60%); opacity:0; transition:opacity 0.6s;} 
  &:hover::before{opacity:1;} 
`;

export const CardTitle = styled.h3`
  font-size:1.05rem; font-weight:700; letter-spacing:-0.5px; margin:0; color:#fff;
`;

export const CardMeta = styled.span`
  font-size:0.7rem; letter-spacing:0.12em; font-weight:600; text-transform:uppercase; color:var(--text-muted); display:flex; gap:0.5rem; align-items:center;
`;

export const CardDesc = styled.p`
  font-size:0.8rem; line-height:1.5; color:var(--text-secondary); flex:1;
`;

export const PillRow = styled.div`
  display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.5rem;
`;
export const Pill = styled.span`
  font-size:0.65rem; padding:0.35rem 0.55rem; background:rgba(255,255,255,0.07); color:var(--text-secondary); border:1px solid rgba(255,255,255,0.12); border-radius:999px; font-weight:500; letter-spacing:0.04em; backdrop-filter:blur(10px);
`;

export const Timeline = styled.div`
  position:relative; margin:2rem auto 0; max-width:880px; padding-left:0.5rem;
  &::before{content:''; position:absolute; left:50%; top:0; bottom:0; width:2px; background:linear-gradient(180deg,var(--accent-primary), var(--accent-secondary), var(--accent-cyan)); transform:translateX(-50%); opacity:0.35;}
  @media (max-width:850px){&::before{left:0; transform:none;}}
`;
export const TimelineItem = styled(motion.div)`
  position:relative; width:50%; padding:0 2.2rem 2.5rem; display:flex; flex-direction:column; gap:0.5rem;
  &:nth-child(odd){left:0;} &:nth-child(even){left:50%;}
  @media (max-width:850px){width:100%; padding:0 0 2.5rem; left:0 !important;}
`;
export const TimelineBullet = styled.span`
  position:absolute; top:4px; width:18px; height:18px; border-radius:50%; background:var(--gradient-primary); box-shadow:0 0 0 4px rgba(99,102,241,0.25); display:block; left:calc(100% - 9px); transform:translateX(-50%);
  @media (max-width:850px){ left:-9px; }
`;
export const TimelineYear = styled.span`
  font-size:0.7rem; letter-spacing:0.15em; font-weight:700; text-transform:uppercase; color:var(--accent-secondary); opacity:0.85;
`;
export const TimelineRole = styled.h3`
  font-size:1rem; font-weight:700; margin:0; color:#fff;
`;
export const TimelineOrg = styled.span`
  font-size:0.75rem; font-weight:600; letter-spacing:0.06em; color:var(--text-muted);
`;
export const TimelineText = styled.p`
  font-size:0.75rem; line-height:1.5; margin-top:0.35rem; color:var(--text-secondary); max-width:36ch;
`;

export const CTAWrapper = styled.div`
  margin:4rem auto 0; max-width:940px; background:linear-gradient(125deg, rgba(20,25,45,0.85), rgba(28,16,40,0.75)); border:1px solid rgba(255,255,255,0.12); border-radius:32px; padding:3.4rem clamp(1.7rem,4vw,3.7rem); position:relative; overflow:hidden; backdrop-filter:blur(36px); box-shadow:0 24px 60px -14px rgba(0,0,0,0.6);
  &::before,&::after{content:''; position:absolute; border-radius:50%; filter:blur(55px); opacity:0.35; animation:float 18s ease-in-out infinite;}
  &::before{ width:520px; height:520px; background:radial-gradient(circle at 30% 30%,rgba(99,102,241,0.55),transparent 70%); top:-20%; left:-15%; }
  &::after{ width:460px; height:460px; background:radial-gradient(circle at 70% 70%,rgba(236,72,153,0.45),transparent 70%); bottom:-25%; right:-10%; animation-direction:reverse; }
  @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-28px);} }
`;
export const CTATitle = styled.h2`
  font-size:clamp(2rem,3.2vw,2.7rem); font-weight:800; letter-spacing:-0.035em; margin:0 0 1.25rem; line-height:1.1; position:relative;
  background:linear-gradient(120deg,#ffffff 0%,#dbe2f1 55%,#a5b4c9 100%); -webkit-background-clip:text; color:transparent;
  &::after{content:''; position:absolute; left:0; bottom:-6px; width:160px; height:4px; border-radius:4px; background:linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899); box-shadow:0 0 18px -4px #8b5cf6AA;}
  @media (max-width:700px){ &::after{ width:120px; } }
`;
export const CTAText = styled.p`
  font-size:clamp(0.9rem,1.15vw,1.05rem); line-height:1.6; color:var(--text-secondary); max-width:60ch; margin:0 0 2rem;
`;
export const CTAButtons = styled.div`
  display:flex; flex-wrap:wrap; gap:1rem; align-items:center;
`;
export const CTAButton = styled.button`
  padding:0.85rem 1.6rem; border-radius:14px; font-size:0.85rem; font-weight:600; letter-spacing:0.03em; background:var(--gradient-accent); color:#fff; border:1px solid rgba(255,255,255,0.2); cursor:pointer; position:relative; overflow:hidden; display:inline-flex; align-items:center; gap:0.5rem; box-shadow:0 8px 28px -8px rgba(99,102,241,0.6); transition:all .35s cubic-bezier(.4,.2,.2,1);
  &:hover{ transform:translateY(-4px); box-shadow:0 14px 42px -10px rgba(99,102,241,0.65); }
  &:active{ transform:translateY(-2px); }
`;
export const CTAButtonSecondary = styled(CTAButton)`
  background:rgba(255,255,255,0.06); color:var(--text-secondary); box-shadow:none; backdrop-filter:blur(10px);
  &:hover{ background:rgba(255,255,255,0.12); color:#fff; }
`;
