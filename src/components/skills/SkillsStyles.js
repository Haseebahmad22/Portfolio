import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media, touch, typography } from '../../utils/responsive';

export const SkillsContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  overflow: hidden;
  ${media.mobile} { min-height: auto; }
`;

export const SkillsSection = styled.section`
  max-width: 1400px; margin:0 auto; padding:8rem 2rem 4rem; position:relative; z-index:2;
  ${media.laptop}{ padding:6rem 1.5rem 3rem; }
  ${media.tablet}{ padding:5rem 1rem 2rem; }
  ${media.mobile}{ padding:4rem 1rem 2rem; }
`;

export const SkillsHeader = styled(motion.div)`
  text-align:center; margin-bottom:4rem; ${media.tablet}{ margin-bottom:3rem; } ${media.mobile}{ margin-bottom:2rem; }
`;

export const SkillsTitle = styled.h1`
  font-size:clamp(2.5rem,8vw,5rem); font-weight:900; margin-bottom:1.5rem; background:var(--gradient-accent); -webkit-background-clip:text; background-clip:text; color:transparent; position:relative; ${media.mobile}{ font-size:clamp(2rem,10vw,3rem); margin-bottom:1rem; }
  &::after{ content:''; position:absolute; bottom:-10px; left:50%; transform:translateX(-50%); width:80px; height:3px; background:var(--gradient-accent); border-radius:2px; ${media.mobile}{ width:60px; height:2px; } }
`;

export const SkillsSubtitle = styled.h2`
  font-size:clamp(1.2rem,4vw,1.6rem); color:var(--text-secondary); font-weight:400; max-width:700px; margin:0 auto; line-height:1.6; ${media.mobile}{ font-size:${typography.mobile.body}; line-height:1.5; padding:0 0.5rem; }
`;

export const CategoryTabs = styled.div`
  display:flex; justify-content:center; gap:1.5rem; margin-bottom:3rem; flex-wrap:wrap; ${media.tablet}{ gap:1rem; margin-bottom:2rem; } ${media.mobile}{ gap:0.75rem; margin-bottom:1.5rem; padding:0 0.5rem; }
`;

export const CategoryTab = styled(motion.button)`
  padding:1rem 2rem; background:${({$active})=>$active?'var(--gradient-accent)':'var(--bg-glass)'}; color:${({$active})=>$active?'#fff':'var(--text-secondary)'}; border:1px solid ${({$active})=>$active?'transparent':'var(--border-primary)'}; border-radius:50px; font-size:1rem; font-weight:600; cursor:pointer; transition:all 0.3s ease; display:flex; align-items:center; gap:0.75rem; backdrop-filter:blur(20px);
  ${media.mobile}{ padding:0.75rem 1.5rem; font-size:${typography.mobile.small}; gap:0.5rem; ${touch.target} }
  &:hover{ transform:translateY(-2px); box-shadow:0 10px 30px var(--shadow-primary); border-color:var(--accent-primary); ${media.mobile}{ transform:translateY(-1px); } }
  svg{ font-size:1.2rem; ${media.mobile}{ font-size:1rem; } }
`;

export const SkillsGrid = styled(motion.div)`
  display:grid; grid-template-columns:1fr 400px; gap:${({theme})=>theme.spacing['3xl']}; margin-bottom:${({theme})=>theme.spacing['4xl']};
  @media (max-width:${({theme})=>theme.breakpoints.laptop}){ grid-template-columns:1fr; gap:${({theme})=>theme.spacing['2xl']}; }
`;

export const SkillsCards = styled.div`
  display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:${({theme})=>theme.spacing['2xl']};
`;

export const SkillCard = styled(motion.div)`
  background:rgba(255,255,255,0.05); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.1); border-radius:24px; padding:${({theme})=>theme.spacing['2xl']}; position:relative; overflow:hidden; transition:all 0.3s ease;
  &:hover{ transform:translateY(-8px); border-color:${({theme})=>theme.colors.accent}; box-shadow:0 25px 50px rgba(99,102,241,0.2); }
  &::before{ content:''; position:absolute; top:0; left:0; right:0; height:4px; background:${({theme})=>theme.colors.gradientPrimary}; }
`;

export const SkillCardHeader = styled.div`
  display:flex; align-items:center; gap:${({theme})=>theme.spacing.md}; margin-bottom:${({theme})=>theme.spacing.xl};
  svg{ font-size:2rem; color:${({theme})=>theme.colors.accent}; }
  h3{ font-size:1.5rem; font-weight:700; color:${({theme})=>theme.colors.text}; margin:0; }
`;

export const SkillsList = styled.div`
  display:grid; gap:${({theme})=>theme.spacing.lg};
`;

export const SkillItem = styled(motion.div)`
  display:flex; align-items:center; justify-content:space-between; padding:${({theme})=>theme.spacing.md}; background:rgba(255,255,255,0.03); border-radius:12px; transition:all 0.3s ease;
  &:hover{ background:rgba(255,255,255,0.08); transform:translateX(8px); }
`;

export const SkillInfo = styled.div`
  display:flex; align-items:center; gap:${({theme})=>theme.spacing.md};
  svg{ font-size:1.5rem; color:${({color})=>color || '#6366f1'}; }
  span{ color:${({theme})=>theme.colors.text}; font-weight:600; }
`;

export const SkillLevel = styled.div`
  display:flex; align-items:center; gap:${({theme})=>theme.spacing.sm};
`;

export const SkillProgress = styled.div`
  width:80px; height:8px; background:rgba(255,255,255,0.1); border-radius:4px; overflow:hidden; position:relative;
  &::after{ content:''; position:absolute; top:0; left:0; height:100%; width:${({level})=>level}%; background:${({theme})=>theme.colors.gradientPrimary}; border-radius:4px; transition:width 1s ease-in-out; }
`;

export const SkillPercentage = styled.span`
  font-size:0.9rem; color:${({theme})=>theme.colors.accent}; font-weight:600; min-width:35px;
`;

export const ChartsContainer = styled(motion.div)`
  display:flex; flex-direction:column; gap:${({theme})=>theme.spacing['2xl']};
`;

export const ChartCard = styled(motion.div)`
  background:rgba(255,255,255,0.05); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.1); border-radius:24px; padding:${({theme})=>theme.spacing.xl}; position:relative; overflow:hidden;
  &::before{ content:''; position:absolute; top:0; left:0; right:0; height:4px; background:${({theme})=>theme.colors.gradientPrimary}; }
  h3{ color:${({theme})=>theme.colors.text}; font-size:1.3rem; font-weight:700; margin-bottom:${({theme})=>theme.spacing.lg}; text-align:center; }
`;

export const StatsOverview = styled.div`
  display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:${({theme})=>theme.spacing.xl}; margin-bottom:${({theme})=>theme.spacing['3xl']};
`;

export const StatCard = styled(motion.div)`
  background:rgba(255,255,255,0.05); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:${({theme})=>theme.spacing.xl}; text-align:center; position:relative; overflow:hidden;
  &:hover{ transform:translateY(-5px); border-color:${({theme})=>theme.colors.accent}; box-shadow:0 20px 40px rgba(99,102,241,0.2); }
  &::before{ content:''; position:absolute; top:0; left:0; right:0; height:4px; background:${({theme})=>theme.colors.gradientPrimary}; }
`;

export const StatIcon = styled.div`
  width:60px; height:60px; background:${({theme})=>theme.colors.gradientPrimary}; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto ${({theme})=>theme.spacing.md}; color:#fff; font-size:1.5rem;
`;

export const StatNumber = styled.h3`
  font-size:2.2rem; font-weight:900; background:${({theme})=>theme.colors.gradientPrimary}; -webkit-background-clip:text; background-clip:text; color:transparent; margin-bottom:${({theme})=>theme.spacing.sm}; line-height:1;
`;

export const StatLabel = styled.p`
  color:${({theme})=>theme.colors.textSecondary}; font-weight:600; margin:0;
`;

export const FloatingElement = styled(motion.div)`
  position:absolute; border-radius:50%; background:${({theme})=>theme.colors.gradientPrimary}; opacity:0.1; filter:blur(60px); z-index:1;
  &:nth-child(1){ width:400px; height:400px; top:10%; right:-5%; animation:float 18s ease-in-out infinite; }
  &:nth-child(2){ width:300px; height:300px; bottom:20%; left:-10%; animation:float 15s ease-in-out infinite reverse; }
  &:nth-child(3){ width:250px; height:250px; top:50%; right:40%; animation:float 20s ease-in-out infinite; }
  @keyframes float { 0%,100%{transform:translateY(0px) rotate(0deg);} 33%{transform:translateY(-30px) rotate(120deg);} 66%{transform:translateY(15px) rotate(240deg);} }
`;
