import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import styled, { css } from 'styled-components';
import { media } from '../../utils/responsive';

// Modal specific styled components (kept local to avoid over-bloating shared styles)
const ModalOverlay = styled(motion.div)`position:fixed; inset:0; z-index:1200; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(18px); background:rgba(15,23,42,.75); padding:2rem; ${media.tablet}{ padding:1.25rem; }`;
const ModalShell = styled(motion.div)`width:100%; max-width:1000px; max-height:88vh; background:var(--card-bg); border:1px solid var(--border); border-radius:1.35rem; display:grid; grid-template-columns:1.1fr .9fr; overflow:hidden; position:relative; box-shadow:0 25px 70px rgba(0,0,0,.35); ${media.tablet}{ grid-template-columns:1fr; }`;
const CloseButton = styled(motion.button)`position:absolute; top:.85rem; right:.85rem; width:40px; height:40px; border-radius:50%; border:1px solid var(--border); background:var(--bg-secondary); color:var(--text-secondary); display:flex; align-items:center; justify-content:center; font-size:1.15rem; cursor:pointer; transition:all .35s; &:hover{color:#fff; background:#ef4444; border-color:#ef4444;}`;
const ModalHeader = styled.div`grid-column:1 / -1; padding:1.6rem 1.8rem 1.1rem; border-bottom:1px solid var(--border); background:var(--bg-secondary);`;
const ModalTitle = styled.h1`font-size:1.9rem; font-weight:800; margin:0 0 .55rem; background:var(--gradient-primary); -webkit-background-clip:text; color:transparent;`;
const ModalDescription = styled.p`margin:0; font-size:.9rem; line-height:1.55; color:var(--text-secondary); max-width:800px;`;
const ModalMain = styled.div`display:contents;`;
const ModalMedia = styled.div`background:var(--bg-primary); position:relative; display:flex; flex-direction:column; border-right:1px solid var(--border); ${media.tablet}{border-right:none; border-bottom:1px solid var(--border);} `;
const MediaTabs = styled.div`display:flex; border-bottom:1px solid var(--border); background:var(--card-bg);`;
const MediaTab = styled(motion.button)`flex:1; padding:.85rem 1rem; font-size:.7rem; letter-spacing:.07em; font-weight:600; text-transform:uppercase; border:0; cursor:pointer; color:var(--text-muted); background:transparent; border-bottom:2px solid transparent; transition:all .35s; ${({ $active }) => $active && css`color:var(--accent-primary); background:var(--bg-secondary); border-color:var(--accent-primary);`}; &:hover{color:var(--accent-primary);}`;
const MediaStage = styled.div`flex:1; display:flex; align-items:center; justify-content:center; padding:1.75rem; min-height:400px; position:relative; ${media.tablet}{min-height:300px; padding:1.25rem;}`;
const MediaImage = styled(motion.img)`max-width:100%; max-height:100%; object-fit:contain; border-radius:1rem; border:1px solid var(--border); box-shadow:0 18px 45px rgba(0,0,0,.25);`;
const MediaVideo = styled.video`max-width:100%; max-height:100%; object-fit:contain; border-radius:1rem; border:1px solid var(--border); box-shadow:0 18px 45px rgba(0,0,0,.25);`;
const Dots = styled.div`position:absolute; bottom:.9rem; left:50%; transform:translateX(-50%); display:flex; gap:.45rem; background:rgba(0,0,0,.65); padding:.45rem .85rem; border-radius:1rem; backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,.08);`;
const Dot = styled(motion.button)`width:7px; height:7px; border-radius:50%; border:0; background:${({ $active }) => $active ? 'var(--accent-primary)' : 'rgba(255,255,255,.45)'}; cursor:pointer; transition:background .3s, transform .3s; &:hover{background:var(--accent-primary); transform:scale(1.25);} `;
const Arrow = styled(motion.button)`position:absolute; top:50%; transform:translateY(-50%); width:38px; height:38px; border-radius:50%; border:1px solid rgba(255,255,255,.15); background:rgba(0,0,0,.65); color:#fff; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:1.05rem; backdrop-filter:blur(10px); transition:all .35s; &:hover{background:var(--accent-primary); transform:translateY(-50%) scale(1.05);} &.left{left:1rem;} &.right{right:1rem;}`;
const ModalAside = styled.div`padding:1.6rem 1.7rem 1.8rem; background:var(--card-bg); display:flex; flex-direction:column; gap:1.4rem; overflow-y:auto;`;
const SectionTitle = styled.h3`font-size:.65rem; letter-spacing:.09em; text-transform:uppercase; font-weight:700; color:var(--accent-primary); margin:0 0 .9rem;`;
const FeatureGrid = styled.div`display:grid; grid-template-columns:repeat(auto-fit,minmax(190px,1fr)); gap:.35rem;`;
const FeatureItem = styled.div`position:relative; padding:.45rem 0 .45rem 1.05rem; font-size:.75rem; line-height:1.35; color:var(--text-secondary); &::before{content:'✓'; position:absolute; left:0; top:.45rem; font-size:.65rem; font-weight:700; color:var(--accent-primary);} `;
const TechGrid = styled.div`display:flex; flex-wrap:wrap; gap:.45rem;`;
const TechBadge = styled.span`padding:.45rem .75rem; font-size:.6rem; font-weight:600; background:rgba(99,102,241,.08); color:var(--accent-primary); border:1px solid rgba(99,102,241,.15); border-radius:.75rem;`;
const Actions = styled.div`display:flex; gap:.8rem; margin-top:auto; ${media.mobile}{flex-direction:column;}`;
const ActionBtn = styled(motion.a)`flex:1; display:inline-flex; align-items:center; justify-content:center; gap:.55rem; padding:.75rem 1.15rem; font-size:.75rem; font-weight:600; letter-spacing:.05em; border:1px solid var(--border); border-radius:.85rem; background:var(--bg-secondary); color:var(--text-primary); text-decoration:none; transition:all .4s; svg{width:16px;height:16px;} &:hover{background:var(--accent-primary); color:#fff; border-color:var(--accent-primary); transform:translateY(-2px);} ${({ $primary }) => $primary && css`background:var(--accent-primary); color:#fff; border-color:var(--accent-primary); &:hover{background:var(--accent-hover); border-color:var(--accent-hover);}`}`;

const fadeIn = (delay=0) => ({ initial:{opacity:0}, animate:{opacity:1,transition:{duration:.5, delay}}, exit:{opacity:0} });

export const ProjectModal = ({ project, onClose, showVideo, setShowVideo, slide, setSlide }) => {
  // Basic focus trap & esc close
  useEffect(()=>{ if(project){ document.body.style.overflow='hidden'; } else { document.body.style.overflow=''; } return ()=>{ document.body.style.overflow=''; }; },[project]);
  const prev = useCallback(()=> setSlide(s => s===0 ? project.images.length-1 : s-1),[project,setSlide]);
  const next = useCallback(()=> setSlide(s => (s+1)%project.images.length),[project,setSlide]);
  if(!project) return null;
  return (
    <AnimatePresence>
      {project && (
        <ModalOverlay {...fadeIn(0)} onClick={onClose}>
          <ModalShell
            layoutId={`project-${project.id}`}
            initial={{opacity:0, scale:.94, y:30}}
            animate={{opacity:1, scale:1, y:0, transition:{type:'spring', stiffness:160, damping:22}}}
            exit={{opacity:0, scale:.9, y:20}}
            onClick={e=>e.stopPropagation()}
          >
            <CloseButton onClick={onClose}><FiX/></CloseButton>
            <ModalHeader>
              <ModalTitle>{project.title}</ModalTitle>
              <ModalDescription>{project.longDescription || project.description}</ModalDescription>
            </ModalHeader>
            <ModalMain>
              <ModalMedia>
                <MediaTabs>
                  <MediaTab $active={!showVideo} onClick={()=>setShowVideo(false)} whileTap={{scale:.95}}>Screens</MediaTab>
                  <MediaTab $active={showVideo} onClick={()=>setShowVideo(true)} whileTap={{scale:.95}}>Demo</MediaTab>
                </MediaTabs>
                <MediaStage>
                  {!showVideo ? (
                    project.images.length===1 ? (
                      <MediaImage src={project.images[0]} alt={project.title} initial={{opacity:0, scale:.97}} animate={{opacity:1, scale:1}} />
                    ) : (
                      <>
                        <AnimatePresence mode='wait'>
                          <MediaImage key={slide} src={project.images[slide]} alt={`${project.title} image ${slide+1}`} initial={{opacity:0, x:25}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-25}} transition={{duration:.35}} />
                        </AnimatePresence>
                        {project.images.length>1 && (
                          <>
                            <Arrow className='left' onClick={prev}><FiChevronLeft/></Arrow>
                            <Arrow className='right' onClick={next}><FiChevronRight/></Arrow>
                            <Dots>
                              {project.images.map((_,i)=>(<Dot key={i} $active={i===slide} onClick={()=>setSlide(i)} whileTap={{scale:.7}}/>))}
                            </Dots>
                          </>
                        )}
                      </>
                    )
                  ) : (
                    <MediaVideo src={project.video} controls autoPlay muted loop />
                  )}
                </MediaStage>
              </ModalMedia>
              <ModalAside>
                <div>
                  <SectionTitle>Key Features</SectionTitle>
                  <FeatureGrid>
                    {project.features.map((f,i)=>(<FeatureItem key={i}>{f}</FeatureItem>))}
                  </FeatureGrid>
                </div>
                <div>
                  <SectionTitle>Technologies</SectionTitle>
                  <TechGrid>
                    {project.technologies.map((t,i)=>(<TechBadge key={i}>{t}</TechBadge>))}
                  </TechGrid>
                </div>
                <Actions>
                  <ActionBtn href={project.githubUrl} target='_blank' rel='noopener noreferrer'><FiGithub/> Source</ActionBtn>
                  {(((project.title||'').toLowerCase().includes('gameexplorer') || (project.title||'').toLowerCase().includes('zarqais') || project.id==='proj-zarqais') && project.liveUrl && project.liveUrl !== '#') && (
                    <ActionBtn href={project.liveUrl} target='_blank' rel='noopener noreferrer' $primary><FiExternalLink/> Live</ActionBtn>
                  )}
                </Actions>
              </ModalAside>
            </ModalMain>
          </ModalShell>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};
