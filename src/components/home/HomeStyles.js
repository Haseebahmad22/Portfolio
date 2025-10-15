// HomeStyles.js
// Centralized styled-components for Home page (extracted for modular architecture)
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media, touch } from '../../utils/responsive';

export const HomeContainer = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 2;
  overflow: hidden;
  min-height: calc(var(--vh, 1vh) * 100);
  ${media.mobile} { padding-top: 60px; }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  ${media.laptop} { padding: 1.5rem; }
  ${media.tablet} { padding: 1rem; align-items: flex-start; justify-content: flex-start; padding-top: 100px; }
  ${media.mobile} { padding: 0.75rem; padding-top: 80px; min-height: calc(100vh - 60px); align-items: center; }
  ${media.landscape} { ${media.mobile} { min-height: 100vh; padding-top: 1rem; align-items: center; } }
`;

export const ParticlesWrapper = styled.div`
  position: absolute; top:0; left:0; width:100%; height:100%; z-index:1; pointer-events:none;
  ${media.mobile} { opacity: 0.3; }
  ${media.reducedMotion} { display:none; }
`;

export const ContentWrapper = styled.div`
  display:grid; grid-template-columns:1.1fr 0.9fr; gap:4rem; align-items:center; width:100%; max-width:1400px; z-index:2; position:relative;
  ${media.laptop} { grid-template-columns:1fr 1fr; gap:3rem; }
  ${media.tablet} { grid-template-columns:1fr; text-align:center; gap:3rem; max-width:900px; }
  ${media.mobile} { gap:2rem; padding:0; }
`;

export const LeftContent = styled(motion.div)`
  display:flex; flex-direction:column; gap:2rem; z-index:3;
  ${media.tablet} { align-items:center; text-align:center; }
  ${media.mobile} { gap:1.5rem; }
`;

export const HeroGreeting = styled(motion.div)`
  display:flex; align-items:center; gap:0.5rem; font-size:1.4rem; color:var(--accent-primary); font-weight:600; margin-bottom:0.5rem; font-family:'Space Grotesk', sans-serif;
  ${media.tablet} { justify-content:center; font-size:1.2rem; }
  ${media.mobile} { font-size:1.1rem; margin-bottom:0.25rem; }
  .wave { animation: wave 2s ease-in-out infinite; transform-origin:70% 70%; font-size:1.8rem; ${media.mobile} { font-size:1.4rem; } }
  .sparkle { margin-left:0.5rem; color:var(--accent-secondary); animation: sparkle 2s ease-in-out infinite; }
  @keyframes wave { 0%,100%{transform:rotate(0deg);}10%,30%{transform:rotate(-10deg);}20%{transform:rotate(12deg);}40%{transform:rotate(-4deg);}50%{transform:rotate(10deg);}60%{transform:rotate(-6deg);}70%{transform:rotate(8deg);}80%{transform:rotate(-4deg);}90%{transform:rotate(6deg);} }
  @keyframes sparkle { 0%,100%{opacity:1; transform:scale(1);}50%{opacity:0.7; transform:scale(1.2);} }
  ${media.mobile} { .wave, .sparkle { animation-duration:3s; } }
  ${media.reducedMotion} { .wave, .sparkle { animation:none; } }
`;

export const HeroTitle = styled(motion.h1)`
  font-size:clamp(2.5rem,8vw,5.5rem); font-weight:900; line-height:1.1; margin-bottom:1.5rem;
  ${media.mobile} { font-size:clamp(2rem,10vw,3rem); margin-bottom:1rem; line-height:1.2; }
  .name { background:var(--gradient-accent); -webkit-background-clip:text; background-clip:text; color:transparent; position:relative; display:block; }
  .name::after { content:''; position:absolute; left:0; bottom:-6px; width:42%; height:10px; background:radial-gradient(60% 80% at 20% 50%, rgba(99,102,241,0.35) 0%, rgba(168,85,247,0.25) 40%, rgba(236,72,153,0.15) 80%, transparent 100%); filter:blur(6px); pointer-events:none; }
  .role-container { display:flex; align-items:center; gap:1rem; flex-wrap:wrap; ${media.tablet} { justify-content:center; } ${media.mobile} { justify-content:center; gap:0.5rem; } }
  .role { color:var(--text-primary); font-weight:700; }
  .typed-cursor { color:var(--accent-primary); animation:blink 1s infinite; }
  @keyframes blink { 0%,50%{opacity:1;}51%,100%{opacity:0;} }
  ${media.reducedMotion} { .typed-cursor { animation:none; opacity:1; } }
`;

export const HeroSubtitle = styled(motion.div)`
  display:flex; align-items:center; gap:1rem; font-size:1.5rem; font-weight:600; color:var(--text-secondary); margin-bottom:1.5rem; min-height:2rem;
  ${media.tablet} { justify-content:center; font-size:1.3rem; }
  ${media.mobile} { flex-direction:column; text-align:center; gap:0.5rem; font-size:1.1rem; margin-bottom:1rem; min-height:auto; }
  .icon { color:var(--accent-primary); font-size:1.8rem; ${media.mobile} { font-size:1.4rem; } }
  .typed-text { color:var(--accent-primary); font-weight:700; }
`;

export const HeroDescription = styled(motion.div)`
  font-size:1.2rem; color:var(--text-secondary); line-height:1.8; max-width:650px; margin-bottom:2rem;
  ${media.tablet} { font-size:1.1rem; max-width:600px; margin:0 auto 2rem; }
  ${media.mobile} { font-size:1rem; line-height:1.6; margin-bottom:1.5rem; max-width:100%; }
  .highlight { color:var(--accent-primary); font-weight:600; background:rgba(79,172,254,0.1); padding:0.2rem 0.5rem; border-radius:0.25rem; }
  .passion { background:var(--gradient-accent); -webkit-background-clip:text; background-clip:text; color:transparent; font-weight:700; }
`;

export const BadgeRow = styled(motion.div)`
  display:flex; align-items:center; flex-wrap:wrap; gap:0.5rem; margin:0.25rem 0 0.5rem; ${media.tablet} { justify-content:center; }
`;
export const Badge = styled.span`
  display:inline-flex; align-items:center; gap:0.4rem; padding:0.4rem 0.7rem; border-radius:999px; font-size:0.8rem; font-weight:600; letter-spacing:0.01em; background:linear-gradient(145deg, rgba(99,102,241,0.15), rgba(236,72,153,0.12)); border:1px solid rgba(255,255,255,0.12); color:${({theme})=>theme.colors.text}; backdrop-filter:blur(12px);
`;

export const ButtonGroup = styled(motion.div)`
  display:flex; gap:1.5rem; flex-wrap:wrap; margin-top:2rem; ${media.tablet} { justify-content:center; gap:1rem; } ${media.mobile} { flex-direction:column; align-items:center; gap:1rem; width:100%; button { width:100%; max-width:280px; } }
`;

export const PrimaryButton = styled(motion.button)`
  padding:1rem 2rem; background:var(--gradient-accent); color:#fff; border:none; border-radius:50px; font-size:1.1rem; font-weight:600; cursor:pointer; position:relative; overflow:hidden; transition:all 0.3s var(--transition-smooth); display:flex; align-items:center; justify-content:center; gap:0.5rem; box-shadow:0 8px 32px rgba(79,172,254,0.3); min-height:${touch.minTarget};
  ${media.mobile} { font-size:1rem; padding:0.875rem 1.5rem; }
  ${media.touch} { min-height:48px; padding:0.75rem 1.5rem; }
  &:hover { transform:translateY(-3px); box-shadow:0 12px 40px rgba(79,172,254,0.4); }
  &:active { transform:translateY(-1px); }
  &::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transition:0.8s; }
  &:hover::before { left:100%; }
  .icon { transition:transform 0.3s ease; }
  &:hover .icon { transform:scale(1.2); }
  ${media.reducedMotion} { &::before { display:none; } &:hover { transform:none; } .icon { transition:none; } }
`;

export const SecondaryButton = styled(motion.button)`
  padding:1rem 2rem; background:transparent; color:var(--accent-primary); border:2px solid var(--accent-primary); border-radius:50px; font-size:1.1rem; font-weight:600; cursor:pointer; transition:all 0.3s var(--transition-smooth); position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center; gap:0.5rem; min-height:${touch.minTarget};
  ${media.mobile} { font-size:1rem; padding:0.875rem 1.5rem; }
  ${media.touch} { min-height:48px; padding:0.75rem 1.5rem; }
  &:hover { transform:translateY(-3px); background:var(--accent-primary); color:#fff; box-shadow:0 8px 32px rgba(79,172,254,0.3); }
  &:active { transform:translateY(-1px); }
  .icon { transition:transform 0.3s ease; }
  &:hover .icon { transform:scale(1.1); }
  ${media.reducedMotion} { &:hover { transform:none; } .icon { transition:none; } }
`;

export const GhostButton = styled(SecondaryButton)`
  color:${({theme})=>theme.colors.text}; border-color:rgba(255,255,255,0.18);
  &:hover { background:linear-gradient(135deg,#22d3ee 0%, #a855f7 100%); border-color:transparent; color:#fff; box-shadow:0 8px 32px rgba(168,85,247,0.35); }
`;

export const StatsSection = styled(motion.div)`
  display:flex; gap:1rem; margin-top:1.5rem; flex-wrap:wrap; ${media.tablet}{ justify-content:center; } ${media.mobile}{ flex-direction:row; justify-content:center; gap:0.75rem; margin-top:1rem; }
`;
export const StatItem = styled(motion.div)`
  text-align:center; min-width:150px; padding:1rem; border-radius:16px; background:linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04)); border:1px solid rgba(255,255,255,0.12); backdrop-filter:blur(14px); transition:transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; &:hover { transform:translateY(-4px); border-color:rgba(99,102,241,0.35); box-shadow:0 12px 32px rgba(0,0,0,0.18); } ${media.tablet}{ flex:1 1 180px; } ${media.mobile}{ min-width:130px; padding:0.85rem; } .number { font-size:2.2rem; font-weight:900; background:${({theme})=>theme.colors.gradientPrimary}; -webkit-background-clip:text; background-clip:text; color:transparent; line-height:1; letter-spacing:-0.02em; } .label { font-size:0.9rem; color:${({theme})=>theme.colors.textSecondary}; font-weight:600; margin-top:0.45rem; letter-spacing:0.01em; }
`;

export const RightContent = styled(motion.div)`
  display:flex; flex-direction:column; gap:${({theme})=>theme.spacing['2xl']}; z-index:3;
`;

// Portrait / Headshot area replacing TechTabs on Home
export const PortraitWrapper = styled.div`
  display:flex; align-items:center; justify-content:center; width:100%;
`;
export const PortraitFrame = styled(motion.div)`
  position:relative; width:100%; max-width:420px; aspect-ratio:1/1; border-radius:28px; overflow:hidden; background:linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.15); backdrop-filter:blur(20px); box-shadow:0 20px 40px -10px rgba(0,0,0,0.4); isolation:isolate;
  &::after { content:''; position:absolute; inset:0; background:radial-gradient(circle at 30% 30%, rgba(99,102,241,0.35), transparent 60%); mix-blend-mode:overlay; pointer-events:none; }
  ${media.mobile}{ max-width:320px; border-radius:24px; }
`;
export const PortraitImage = styled.img`
  width:100%; height:100%; object-fit:cover; filter:saturate(1.05) contrast(1.05); transition:transform 0.6s ease, filter 0.6s ease; position:relative; z-index:2;
  ${PortraitFrame}:hover & { transform:scale(1.05); filter:saturate(1.15) contrast(1.1); }
`;
export const PortraitGlow = styled.div`
  position:absolute; inset:0; background:linear-gradient(135deg, rgba(99,102,241,0.35), rgba(168,85,247,0.25), rgba(236,72,153,0.25)); opacity:0.35; mix-blend-mode:screen; z-index:1; pointer-events:none; transition:opacity 0.5s ease; ${PortraitFrame}:hover & { opacity:0.5; }
`;

// Compact skills pills preview
export const PillsSection = styled.div`
  display:flex; flex-direction:column; gap:${({theme})=>theme.spacing.lg}; padding:${({theme})=>theme.spacing.lg}; background:linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03)); border:1px solid rgba(255,255,255,0.12); border-radius:24px; backdrop-filter:blur(18px); position:relative; overflow:hidden; max-width:600px; margin-top:${({theme})=>theme.spacing.md};
  &::before { content:''; position:absolute; top:-40%; left:-30%; width:160%; height:160%; background:radial-gradient(circle at 30% 30%, rgba(99,102,241,0.25), transparent 70%); opacity:0.5; pointer-events:none; }
  ${media.mobile}{ padding:${({theme})=>theme.spacing.md}; }
`;
export const PillsHeader = styled.div` text-align:center; display:flex; flex-direction:column; gap:0.25rem;`;
export const PillsTitle = styled.h3`
  font-size:clamp(1.6rem,3vw,2rem); font-weight:800; background:linear-gradient(135deg,#6366f1,#a855f7,#ec4899); -webkit-background-clip:text; background-clip:text; color:transparent; letter-spacing:-0.5px; margin:0;
`;
export const PillsSubtitle = styled.p`
  font-size:0.95rem; color:${({theme})=>theme.colors.textSecondary}; opacity:0.85; max-width:420px; margin:0 auto; line-height:1.5;
`;
export const PillsRow = styled.div`
  display:flex; flex-wrap:wrap; gap:0.75rem; justify-content:center;
`;
export const SkillPill = styled(motion.div)`
  display:inline-flex; align-items:center; gap:0.5rem; padding:0.65rem 1rem; border-radius:999px; background:linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04)); border:1px solid rgba(255,255,255,0.15); font-size:0.85rem; font-weight:600; letter-spacing:0.25px; position:relative; overflow:hidden; color:${({theme})=>theme.colors.text};
  .icon { display:flex; font-size:1rem; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.4)); }
  &::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg, ${({color})=>color||'#6366f1'}33, transparent 70%); opacity:0; transition:opacity 0.4s ease; }
  &:hover::after { opacity:0.8; }
  &:hover { border-color:${({color})=>color||'#6366f1'}AA; box-shadow:0 4px 18px -4px ${({color})=>color||'#6366f1'}55; }
`;
export const ViewAllLink = styled(motion.button)`
  background:var(--gradient-accent); color:#fff; border:none; cursor:pointer; padding:0.65rem 1.1rem; border-radius:999px; font-size:0.8rem; font-weight:600; letter-spacing:0.5px; display:inline-flex; align-items:center; justify-content:center; box-shadow:0 8px 24px -6px rgba(99,102,241,0.45); position:relative; overflow:hidden;
  &::before { content:''; position:absolute; inset:0; background:linear-gradient(90deg, rgba(255,255,255,0.15), transparent, rgba(255,255,255,0.15)); mix-blend-mode:overlay; opacity:0.6; }
`;

export const TechSection = styled.div`
  background:linear-gradient(145deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.06) 50%, rgba(236,72,153,0.05) 100%); backdrop-filter:blur(20px); border:1px solid rgba(99,102,241,0.2); border-radius:16px; padding:${({theme})=>theme.spacing.lg}; position:relative; overflow:hidden; margin-top:${({theme})=>theme.spacing.md}; max-width:${({$compact})=>$compact?'900px':'1200px'}; width:auto; > * { position:relative; z-index:2; }
  ${media.mobile}{ padding:${({theme})=>theme.spacing.md}; margin-top:${({theme})=>theme.spacing.sm}; max-width:100%; }
  ${({$full})=>$full&&`
    max-width:100%; width:100%; border-radius:0; padding-left:0; padding-right:0;
  `}
`;

export const TechInner = styled.div`
  max-width:${({$compact})=>$compact?'900px':'1200px'}; margin:0 auto; padding: ${({theme})=>theme.spacing.lg};
  ${media.mobile}{ padding:${({theme})=>theme.spacing.md}; }
`;

export const TechHeader = styled.div` text-align:center; margin-bottom:${({theme})=>theme.spacing.lg}; position:relative;`;
export const TechTitle = styled.h3`
  font-size:clamp(1.8rem,3.5vw,2.2rem); font-weight:800; background:linear-gradient(135deg,#6366f1 0%, #a855f7 50%, #ec4899 100%); background-size:200% 200%; -webkit-background-clip:text; background-clip:text; color:transparent; margin-bottom:${({theme})=>theme.spacing.sm}; animation:gradientShift 4s ease-in-out infinite; letter-spacing:-0.01em; position:relative; @keyframes gradientShift { 0%,100%{background-position:0% 50%;} 50%{background-position:100% 50%;} }
`;
export const TechSubtitle = styled.p`
  color:${({theme})=>theme.colors.textSecondary}; font-size:clamp(0.9rem,2vw,1.1rem); font-weight:500; opacity:0.8; max-width:400px; margin:0 auto; line-height:1.5;
`;

export const TabContainer = styled.div`
  display:flex; justify-content:center; margin-bottom:${({theme})=>theme.spacing.xl}; background:linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03)); backdrop-filter:blur(15px); border:1px solid rgba(255,255,255,0.15); border-radius:16px; padding:8px; gap:6px; box-shadow:0 4px 16px rgba(0,0,0,0.1); ${media.mobile}{ flex-wrap:wrap; gap:4px; padding:6px; }
`;
export const Tab = styled(motion.button)`
  flex:1; min-width:100px; padding:${({theme})=>theme.spacing.md} ${({theme})=>theme.spacing.lg}; border:none; border-radius:12px; font-size:0.9rem; font-weight:600; cursor:pointer; transition:all 0.3s cubic-bezier(0.175,0.885,0.32,1.275); position:relative; display:flex; align-items:center; justify-content:center; gap:${({theme})=>theme.spacing.sm}; background:${({$active})=>$active?'linear-gradient(135deg,#6366f1,#a855f7)':'transparent'}; color:${({$active,theme})=>$active?'#fff':theme.colors.textSecondary}; box-shadow:${({$active})=>$active?'0 8px 24px rgba(99,102,241,0.3)':'none'}; &:hover{ color:${({$active,theme})=>$active?'#fff':theme.colors.text}; transform:translateY(-2px); box-shadow:${({$active})=>$active?'0 12px 32px rgba(99,102,241,0.4)':'0 4px 12px rgba(0,0,0,0.1)'}; } .icon { font-size:1rem; transition:all 0.3s ease; } &:hover .icon { transform:scale(1.1); } ${media.mobile}{ min-width:80px; padding:${({theme})=>theme.spacing.sm}; font-size:0.8rem; .icon{ font-size:0.9rem; } }
`;

export const TechGrid = styled(motion.div)`
  display:grid; grid-template-columns:${({$compact})=>$compact?'repeat(auto-fit, minmax(90px,1fr))':'repeat(auto-fit, minmax(100px,1fr))'}; gap:${({theme})=>theme.spacing.sm}; min-height:${({$compact})=>$compact?'160px':'200px'}; padding:${({theme})=>theme.spacing.xs};
  ${media.mobile}{ grid-template-columns:repeat(auto-fit, minmax(80px,1fr)); gap:${({theme})=>theme.spacing.xs}; padding:0; min-height:150px; }
`;
export const TechItem = styled(motion.div)`
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:${({theme})=>theme.spacing.xs}; padding:${({theme})=>theme.spacing.sm}; background:linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%); border:1px solid rgba(255,255,255,0.1); border-radius:16px; transition:all 0.3s ease; cursor:pointer; min-height:${({$compact})=>$compact?'90px':'100px'};
  &:hover{ transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,0.15); border-color:${({color})=>color||'#6366f1'}; }
  .icon { width:${({$compact})=>$compact?'34px':'40px'} !important; height:${({$compact})=>$compact?'34px':'40px'} !important; display:inline-flex; align-items:center; justify-content:center; --baseScale:${({$compact})=>$compact?'1.4':'1.6'}; transform:scale(var(--baseScale)); transform-origin:center; position:relative; transition:transform 0.25s ease; ${media.mobile}{ width:30px !important; height:30px !important; --baseScale:1.3; } }
  .icon::after{ content:''; position:absolute; inset:0; border-radius:12px; border:2px solid currentColor; opacity:0; transform:scale(1.15); transition:opacity 0.25s ease, transform 0.4s ease; pointer-events:none; }
  &:hover .icon { --baseScale:${({$compact})=>$compact?'1.6':'1.75'}; }
  &:hover .icon::after { opacity:0.5; transform:scale(1.25); animation:ringPulse 1.6s ease-out infinite; }
  @keyframes ringPulse { 0%{opacity:0.6; transform:scale(1.2);}70%{opacity:0; transform:scale(1.6);}100%{opacity:0; transform:scale(1.6);} }
  .labelWrap{ width:95%; display:flex; justify-content:center; align-items:center; margin:0 auto; overflow:visible; }
  .label{ font-size:${({$compact})=>$compact?'0.85rem':'0.9rem'}; font-weight:700; white-space:nowrap; display:inline-block; text-align:center; color:${({color,theme})=>color||theme.colors.text}; letter-spacing:0.01em; line-height:1.1; max-width:100%; }
  .label::after{ content:''; display:block; height:2px; width:0%; margin:4px auto 0; background:currentColor; border-radius:2px; transition:width 0.3s ease; }
  &:hover .label::after{ width:60%; }
  ${media.mobile}{ padding:${({theme})=>theme.spacing.xs}; min-height:76px; .labelWrap{ max-width:95%; } .label{ font-size:0.8rem; } }
`;

export const PersonalitySection = styled(motion.div)`
  background:linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.05)); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.1); border-radius:24px; padding:${({theme})=>theme.spacing.xl}; text-align:center; position:relative; overflow:hidden; &::before{ content:''; position:absolute; top:-50%; left:-50%; width:200%; height:200%; background:conic-gradient(from 0deg at 50% 50%, rgba(99,102,241,0.2), transparent, rgba(168,85,247,0.2), transparent); animation:rotate 30s linear infinite; z-index:0; } @keyframes rotate { from{transform:rotate(0deg);} to{transform:rotate(360deg);} } > * { position:relative; z-index:1; }
`;
export const PersonalityTitle = styled.h4` font-size:1.4rem; font-weight:700; color:${({theme})=>theme.colors.text}; margin-bottom:${({theme})=>theme.spacing.md};`;
export const PersonalityText = styled.p` color:${({theme})=>theme.colors.textSecondary}; line-height:1.7; font-size:1rem; .emoji{ font-size:1.3em; margin:0 0.3rem; }`;

export const SocialLinks = styled(motion.div)`
  display:flex; justify-content:center; gap:${({theme})=>theme.spacing.lg}; margin-top:${({theme})=>theme.spacing.xl}; @media (max-width:${({theme})=>theme.breakpoints.laptop}) { margin-top:${({theme})=>theme.spacing['2xl']}; }
`;
export const SocialIcon = styled(motion.a)`
  display:flex; align-items:center; justify-content:center; width:60px; height:60px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:20px; color:${({theme})=>theme.colors.textSecondary}; font-size:1.5rem; transition:all 0.3s ease; backdrop-filter:blur(20px); position:relative; overflow:hidden; &::before{ content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:${({hoverColor})=>hoverColor||'#6366f1'}; transition:left 0.3s ease; } &:hover { transform:translateY(-5px) scale(1.1); border-color:${({hoverColor})=>hoverColor||'#6366f1'}; color:#fff; box-shadow:0 15px 35px ${({hoverColor})=>hoverColor||'#6366f1'}40; &::before{ left:0; } } svg{ position:relative; z-index:1; }
`;

export const FloatingElement = styled(motion.div)`
  position:absolute; border-radius:50%; background:${({theme})=>theme.colors.gradientPrimary}; opacity:0.1; filter:blur(60px); z-index:0; &:nth-child(1){ width:400px; height:400px; top:5%; right:0%; animation:float 12s ease-in-out infinite; } &:nth-child(2){ width:300px; height:300px; bottom:10%; left:5%; animation:float 8s ease-in-out infinite reverse; } &:nth-child(3){ width:200px; height:200px; top:50%; right:30%; animation:float 15s ease-in-out infinite; } @keyframes float { 0%,100%{transform:translateY(0px) rotate(0deg);} 33%{transform:translateY(-30px) rotate(120deg);} 66%{transform:translateY(15px) rotate(240deg);} }
`;

export const ScrollIndicator = styled(motion.div)`
  position:absolute; bottom:2rem; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:0.5rem; color:${({theme})=>theme.colors.textSecondary}; font-size:0.9rem; z-index:3; .arrow{ animation:bounce 2s infinite; } @keyframes bounce { 0%,20%,50%,80%,100%{transform:translateY(0);} 40%{transform:translateY(-10px);} 60%{transform:translateY(-5px);} } @media (max-width:${({theme})=>theme.breakpoints.mobile}) { display:none; }
`;

// Full-width horizontal technologies strip (marquee style, but accessible and pause on hover)
export const TechStripWrapper = styled.div`
  width:100%; margin:3rem 0 2.5rem; position:relative; overflow:hidden; padding:2.25rem clamp(1rem,3vw,2.25rem); background:linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015)); border:1px solid rgba(255,255,255,0.08); border-radius:28px; backdrop-filter:blur(22px);
`;
export const TechIconsGrid = styled.div`
  display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:1.5rem; align-items:stretch; justify-items:center;
  @media (max-width:600px){ grid-template-columns:repeat(auto-fit, minmax(120px,1fr)); gap:1rem; }
`;
  // Three-line slimmer pill layout
  export const TechRowsContainer = styled.div`
    display:flex; flex-direction:column; gap:0.85rem; width:100%;
  `;
  export const TechRow = styled.div`
    display:flex; flex-wrap:wrap; gap:0.75rem; justify-content:center;
  `;
  export const TechPill = styled.div`
    --c:${({$color})=>$color||'#888'}; display:inline-flex; align-items:center; gap:0.55rem; padding:0.55rem 1.05rem 0.55rem 0.7rem; font-size:0.78rem; font-weight:600; letter-spacing:0.35px; border-radius:999px; background:linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.09); color:#fff; position:relative; line-height:1; backdrop-filter:blur(14px) saturate(150%); cursor:default; transition:background 0.5s ease, transform 0.55s cubic-bezier(.19,1,.22,1), border-color 0.45s, box-shadow 0.55s ease;
    .icon{ width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-size:1.1rem; color:var(--c); background:radial-gradient(circle at 35% 30%, var(--c)55, transparent 70%); border-radius:50%; filter:drop-shadow(0 2px 8px rgba(0,0,0,0.45)); box-shadow:0 0 0 1px rgba(255,255,255,0.12), 0 4px 12px -4px var(--c)66; }
    &:hover{ background:linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03)); transform:translateY(-4px); border-color:var(--c); box-shadow:0 10px 28px -10px var(--c), 0 6px 18px -8px rgba(0,0,0,0.55); }
    &:active{ transform:translateY(-1px); }
  `;
  export const ViewAllSkillsLink = styled.button`
    margin-top:0.65rem; align-self:center; background:none; border:none; color:var(--accent-color,#a78bfa); font-size:0.75rem; font-weight:600; letter-spacing:0.6px; cursor:pointer; position:relative; padding:0.4rem 0.9rem; border-radius:8px; display:inline-flex; align-items:center; gap:0.35rem; opacity:0.85; transition:opacity 0.4s ease, transform 0.45s cubic-bezier(.19,1,.22,1);
    &:after{ content:''; position:absolute; left:0; bottom:0; height:2px; width:100%; background:linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899); transform:scaleX(0); transform-origin:left; transition:transform 0.55s ease; border-radius:2px; }
    &:hover{ opacity:1; transform:translateY(-3px); }
    &:hover:after{ transform:scaleX(1); }
  `;
