// Shared styled components & variants for project related UI
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../utils/responsive';

export const containerMax = css`max-width:1180px; margin-inline:auto; width:100%;`;

export const ProjectsWrapper = styled.div`
  padding:7rem 2rem 4rem; position:relative; ${containerMax};
  ${media.tablet}{padding:6rem 1.5rem 3rem;} ${media.mobile}{padding:4.5rem 1rem 2.5rem;}
`;

export const PageHeader = styled(motion.header)`text-align:center; margin-bottom:3.5rem; ${media.tablet}{margin-bottom:3rem;} ${media.mobile}{margin-bottom:2.25rem;}`;
export const PageTitle = styled.h1`font-size:clamp(2.2rem,5.5vw,3.25rem); font-weight:800; background:var(--gradient-primary); -webkit-background-clip:text; background-clip:text; color:transparent; letter-spacing:-0.035em; margin:0 0 .85rem;`;
export const PageSubtitle = styled.p`max-width:720px; margin:0 auto 1.75rem; line-height:1.55; font-size:clamp(.95rem,2.4vw,1.1rem); color:var(--text-secondary);`;

export const StatsRow = styled.div`display:flex; justify-content:center; gap:2.5rem; margin-top:1.5rem; flex-wrap:wrap; ${media.tablet}{gap:2rem;} ${media.mobile}{gap:1.25rem;}`;
export const StatCard = styled(motion.div)`min-width:150px; padding:1.1rem 1.25rem; border:1px solid var(--border); border-radius:1rem; background:var(--card-bg); box-shadow:0 4px 16px var(--shadow); position:relative; overflow:hidden; isolation:isolate; &:before{content:''; position:absolute; inset:0; background:var(--gradient-accent); opacity:0; transition:opacity .5s; z-index:-1;} &:hover:before{opacity:.07;} h4{margin:0 0 .35rem; font-size:1.9rem; line-height:1; font-weight:800; background:var(--gradient-accent); -webkit-background-clip:text; color:transparent;} span{font-size:.7rem; letter-spacing:.08em; font-weight:600; text-transform:uppercase; color:var(--text-secondary);} `;

export const FiltersBar = styled(motion.div)`display:flex; flex-wrap:wrap; justify-content:center; gap:.6rem; margin:2.75rem 0 0;`;
export const FilterLabel = styled.span`display:flex; align-items:center; gap:.4rem; font-size:.75rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:var(--text-muted); margin-right:.25rem;`;
export const FilterChip = styled(motion.button)`padding:.55rem 1.05rem; font-size:.75rem; font-weight:600; letter-spacing:.04em; border:1px solid var(--border); border-radius:2rem; background:var(--card-bg); color:var(--text-secondary); position:relative; overflow:hidden; transition:all .35s; display:inline-flex; align-items:center; gap:.4rem; ${({ $active }) => $active && css`color:var(--accent-primary); border-color:var(--accent-primary); background:linear-gradient(135deg, rgba(99,102,241,0.08), rgba(99,102,241,0.02));`}; &:hover{color:var(--accent-primary); border-color:var(--accent-primary);} `;

// Grid
export const Grid = styled(motion.div)`margin-top:3rem; display:grid; gap:1.75rem; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); ${media.tablet}{gap:1.4rem;} ${media.mobile}{gap:1rem; margin-top:2.2rem;}`;
export const Card = styled(motion.article)`background:var(--card-bg); border:1px solid var(--border); border-radius:1.1rem; overflow:hidden; position:relative; display:flex; flex-direction:column; cursor:pointer; box-shadow:0 4px 18px var(--shadow); transition:all .5s var(--transition-smooth); &:hover{transform:translateY(-6px); box-shadow:0 10px 32px var(--shadow-hover); border-color:var(--border-hover);} `;
export const Media = styled.div`height:180px; position:relative; overflow:hidden; background:var(--bg-secondary);`;
export const Cover = styled.img`width:100%; height:100%; object-fit:cover; transition:transform .6s ease; filter:saturate(1.05); ${Card}:hover &{transform:scale(1.04);} `;
export const HoverOverlay = styled.div`position:absolute; inset:0; display:flex; flex-direction:column; justify-content:space-between; padding:.75rem .75rem .65rem; background:linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,.55) 100%); opacity:0; transition:opacity .45s; ${Card}:hover &{opacity:1;} `;
export const OverlayStats = styled.div`display:flex; gap:.55rem;`;
export const StatMini = styled.span`display:inline-flex; align-items:center; gap:.3rem; background:rgba(0,0,0,.55); color:#fff; font-size:.65rem; padding:.4rem .6rem; border-radius:.65rem; font-weight:600; backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,.12); svg{font-size:.8rem;}`;
export const TechRow = styled.div`display:flex; gap:.4rem; margin-top:auto; justify-content:flex-end;`;
export const TechIcon = styled.span`width:30px; height:30px; display:inline-flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.85); border-radius:.55rem; color:#1f2937; font-size:.9rem; box-shadow:0 2px 6px rgba(0,0,0,.12);`;
export const Badges = styled.div`position:absolute; top:.75rem; left:.75rem; display:flex; gap:.4rem; z-index:2;`;
export const Badge = styled.span`padding:.35rem .65rem; font-size:.55rem; font-weight:600; letter-spacing:.05em; text-transform:uppercase; border-radius:.75rem; background:rgba(255,255,255,0.15); backdrop-filter:blur(10px); color:#fff; mix-blend:overlay; border:1px solid rgba(255,255,255,.25); &.featured{background:linear-gradient(135deg,#6366f1,#4f46e5);} &.status{background:rgba(99,102,241,.3);}`;
export const CardBody = styled.div`padding:1.1rem 1.15rem 1.25rem; display:flex; flex-direction:column; gap:.9rem;`;
export const CardTitle = styled.h3`font-size:1.1rem; font-weight:700; margin:0; letter-spacing:-.01em;`;
export const CardExcerpt = styled.p`font-size:.8rem; line-height:1.45; margin:0; color:var(--text-secondary); display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; min-height:3.4em;`;
export const MetaBar = styled.div`display:flex; gap:.5rem; justify-content:space-between; background:var(--bg-secondary); border:1px solid var(--border); padding:.55rem .7rem; border-radius:.8rem;`;
export const MetaItem = styled.div`flex:1; text-align:center; display:flex; flex-direction:column; gap:.15rem; .label{font-size:.5rem; letter-spacing:.08em; text-transform:uppercase; color:var(--text-muted); font-weight:600;} .value{font-size:.65rem; font-weight:600; color:var(--accent-primary);} `;
export const StackRow = styled.div`display:flex; flex-wrap:wrap; gap:.4rem;`;
export const Chip = styled.span`padding:.35rem .65rem; font-size:.55rem; font-weight:600; border-radius:.65rem; background:rgba(99,102,241,0.08); color:var(--accent-primary); letter-spacing:.03em; border:1px solid rgba(99,102,241,0.15);`;

// View toggles
export const ViewToggleBar = styled.div`display:flex; justify-content:center; gap:.5rem; margin:1.4rem 0 0; flex-wrap:wrap;`;
export const ViewButton = styled.button`padding:.55rem .95rem; font-size:.6rem; letter-spacing:.07em; font-weight:600; text-transform:uppercase; border:1px solid var(--border); background:var(--card-bg); color:var(--text-secondary); border-radius:.7rem; transition:all .35s; cursor:pointer; &:hover{color:var(--accent-primary); border-color:var(--accent-primary);} ${({ $active }) => $active && css`color:var(--accent-primary); border-color:var(--accent-primary); background:linear-gradient(135deg, rgba(99,102,241,.12), rgba(99,102,241,.04));`};`;

// Showcase
export const ShowcaseList = styled(motion.div)`display:flex; flex-direction:column; gap:2.25rem; margin-top:2.75rem; ${media.mobile}{gap:1.75rem;}`;
export const ShowcaseItem = styled(motion.article)`display:grid; grid-template-columns:1.2fr 1fr; gap:2rem; align-items:stretch; padding:1.6rem 1.6rem 1.65rem; background:var(--card-bg); border:1px solid var(--border); border-radius:1.3rem; box-shadow:0 6px 24px var(--shadow); cursor:pointer; transition:all .55s var(--transition-smooth); position:relative; overflow:hidden; ${media.tablet}{grid-template-columns:1fr; gap:1.25rem;} &:hover{transform:translateY(-6px); box-shadow:0 14px 36px var(--shadow-hover); border-color:var(--border-hover);} `;
export const ShowcaseMedia = styled.div`position:relative; border-radius:1rem; overflow:hidden; background:var(--bg-secondary); display:flex; align-items:center; justify-content:center; min-height:260px; ${media.mobile}{min-height:200px;} img{width:100%; height:100%; object-fit:cover; transition:transform .7s; ${ShowcaseItem}:hover &{transform:scale(1.05);} }`;
export const ShowcaseContent = styled.div`display:flex; flex-direction:column; gap:1rem;`;
export const ShowcaseTitle = styled.h2`font-size:clamp(1.4rem,3vw,1.9rem); margin:0; letter-spacing:-.02em; background:var(--gradient-primary); -webkit-background-clip:text; color:transparent;`;
export const ShowcaseMeta = styled.div`display:flex; flex-wrap:wrap; gap:.6rem;`;
export const ShowcaseTag = styled.span`padding:.4rem .7rem; font-size:.55rem; font-weight:600; text-transform:uppercase; letter-spacing:.08em; background:rgba(99,102,241,.09); color:var(--accent-primary); border:1px solid rgba(99,102,241,.18); border-radius:.6rem;`;
export const ShowcaseExcerpt = styled.p`margin:0; font-size:.85rem; line-height:1.5; max-width:640px; color:var(--text-secondary);`;
export const ShowcaseFooter = styled.div`display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.8rem; margin-top:.5rem;`;
export const MiniStat = styled.span`display:inline-flex; align-items:center; gap:.35rem; font-size:.65rem; background:var(--bg-secondary); border:1px solid var(--border); padding:.45rem .65rem; border-radius:.6rem; font-weight:600; svg{font-size:.8rem; color:var(--accent-primary);} `;
export const MiniStack = styled.div`display:flex; flex-wrap:wrap; gap:.4rem;`;

// List
export const ListWrap = styled(motion.div)`display:flex; flex-direction:column; gap:1rem; margin-top:2.5rem;`;
export const ListRow = styled(motion.div)`display:grid; grid-template-columns:120px 1fr auto; gap:1.25rem; align-items:center; padding:.95rem 1.1rem; border:1px solid var(--border); background:var(--card-bg); border-radius:.9rem; cursor:pointer; transition:background .35s, border-color .35s; ${media.mobile}{grid-template-columns:80px 1fr;} &:hover{border-color:var(--accent-primary);}`;
export const Thumb = styled.div`width:100%; height:80px; border-radius:.6rem; overflow:hidden; background:var(--bg-secondary); img{width:100%; height:100%; object-fit:cover;}`;
export const ListInfo = styled.div`display:flex; flex-direction:column; gap:.35rem;`;
export const ListTitle = styled.h3`font-size:1rem; margin:0; font-weight:600; letter-spacing:-.01em;`;
export const ListDesc = styled.p`margin:0; font-size:.7rem; line-height:1.4; color:var(--text-secondary); display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;`;
export const ListMeta = styled.div`display:flex; gap:.6rem; flex-wrap:wrap;`;
export const ListTag = styled.span`padding:.3rem .55rem; font-size:.5rem; font-weight:600; text-transform:uppercase; letter-spacing:.06em; background:rgba(99,102,241,.08); color:var(--accent-primary); border:1px solid rgba(99,102,241,.2); border-radius:.55rem;`;
export const ListActions = styled.div`display:flex; gap:.5rem; ${media.mobile}{display:none;}`;
export const TinyBtn = styled.button`display:inline-flex; align-items:center; justify-content:center; gap:.3rem; padding:.45rem .65rem; font-size:.6rem; font-weight:600; letter-spacing:.05em; border:1px solid var(--border); background:var(--bg-secondary); color:var(--text-secondary); border-radius:.55rem; cursor:pointer; transition:all .35s; svg{font-size:.75rem;} &:hover{color:#fff; background:var(--accent-primary); border-color:var(--accent-primary);} `;

// Action buttons
export const ActionBtn = styled(motion.a)`flex:1; display:inline-flex; align-items:center; justify-content:center; gap:.55rem; padding:.75rem 1.15rem; font-size:.75rem; font-weight:600; letter-spacing:.05em; border:1px solid var(--border); border-radius:.85rem; background:var(--bg-secondary); color:var(--text-primary); text-decoration:none; transition:all .4s; svg{width:16px;height:16px;} &:hover{background:var(--accent-primary); color:#fff; border-color:var(--accent-primary); transform:translateY(-2px);} ${({ $primary }) => $primary && css`background:var(--accent-primary); color:#fff; border-color:var(--accent-primary); &:hover{background:var(--accent-hover); border-color:var(--accent-hover);}`}`;

// Modal pieces will remain in main refactor for now (can be extracted next phase)

export const fadeUp = (delay=0) => ({ initial:{opacity:0,y:24}, animate:{opacity:1,y:0,transition:{duration:.6, ease:'easeOut', delay}}, exit:{opacity:0,y:24} });
export const fadeIn = (delay=0) => ({ initial:{opacity:0}, animate:{opacity:1,transition:{duration:.5, delay}}, exit:{opacity:0} });
