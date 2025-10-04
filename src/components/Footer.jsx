import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
// Removed BackToTop button per request
import { useNavigation } from '../context/NavigationContext';

// COMPACT FOOTER REWRITE
const FooterContainer = styled(motion.footer)`
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 60%, rgba(0,0,0,0.4) 100%);
  border-top: 1px solid rgba(255,255,255,0.08);
  position: relative;
  overflow: hidden;
  --padY: clamp(1.5rem, 2.5vw, 2.25rem);
  --padX: clamp(1rem, 3vw, 2rem);
`;
const CompactInner = styled.div`
  max-width:1200px; margin:0 auto; padding:var(--padY) var(--padX); display:flex; flex-direction:column; gap:1.25rem;
`;
const TopRow = styled.div`
  display:grid; grid-template-columns: auto 1fr auto; align-items:center; gap:2rem; flex-wrap:wrap;
  @media (max-width:900px){ grid-template-columns:1fr; justify-items:center; }
`;
const Brand = styled.div`
  font-weight:800; font-size:1.15rem; letter-spacing:0.5px; display:flex; align-items:center; gap:0.6rem;
  .logoMark { width:38px; height:38px; border-radius:12px; background:var(--gradient-accent); display:flex; align-items:center; justify-content:center; font-size:1.05rem; font-weight:700; color:#fff; box-shadow:0 6px 18px -4px rgba(99,102,241,0.6); }
  span.name { background:var(--gradient-accent); -webkit-background-clip:text; background-clip:text; color:transparent; }
`;
const LinkRow = styled.nav`
  display:flex; align-items:center; justify-content:center; gap:1.15rem; flex-wrap:wrap; font-size:0.7rem; font-weight:600; letter-spacing:0.55px; text-transform:uppercase; opacity:0.9;
  button { background:none; border:none; cursor:pointer; color:var(--text-secondary); padding:0.4rem 0.65rem; border-radius:7px; transition:all 0.35s cubic-bezier(.19,1,.22,1); position:relative; letter-spacing:0.6px; }
  button:hover { color:var(--text-primary); background:rgba(255,255,255,0.07); box-shadow:0 4px 14px -4px rgba(0,0,0,0.35); }
`;
const SocialRow = styled.div`
  display:flex; align-items:center; justify-content:center; gap:0.65rem; flex-wrap:wrap;
`;
const SocialButton = styled(motion.a)`
  --brand: ${({$brand})=>$brand||'rgba(255,255,255,0.15)'};
  width:42px; height:42px; border-radius:14px; display:flex; align-items:center; justify-content:center; color:#fff; background:linear-gradient(145deg, var(--brand) 0%, rgba(255,255,255,0.08) 110%); border:1px solid rgba(255,255,255,0.12); backdrop-filter:blur(12px); position:relative; overflow:hidden; font-size:0.95rem; transition:all 0.45s cubic-bezier(.19,1,.22,1); cursor:pointer;
  &::before{content:''; position:absolute; inset:0; background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 70%); opacity:0; mix-blend-mode:overlay; transition:opacity 0.5s ease;}
  svg{ filter:drop-shadow(0 2px 4px rgba(0,0,0,0.45)); }
  &:hover{ transform:translateY(-6px) scale(1.07); border-color:var(--brand); box-shadow:0 10px 28px -6px var(--brand), 0 4px 18px -4px rgba(0,0,0,0.5); }
  &:hover::before{ opacity:0.85; }
  &:active{ transform:translateY(-2px) scale(0.96); }
`;
const Divider = styled.div` height:1px; width:100%; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent); opacity:0.7; `;
const BottomRow = styled.div` display:flex; flex-wrap:wrap; gap:1rem; align-items:center; justify-content:space-between; font-size:0.72rem; color:var(--text-secondary); @media (max-width:900px){ justify-content:center; text-align:center; }`;
const Copy = styled.div` display:flex; align-items:center; gap:0.4rem; .heart{ color:#ef4444; animation:beat 2.4s ease-in-out infinite; } @keyframes beat { 0%,100%{transform:scale(1);} 50%{transform:scale(1.15);} } `;

const Footer = () => {
  const { scrollToSection } = useNavigation();
  const year = new Date().getFullYear();
  const links = [
    { label: 'Home', target: 'home' },
    { label: 'Projects', target: 'projects' },
    { label: 'Skills', target: 'skills' },
    { label: 'Contact', target: 'contact' }
  ];
  const socials = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub', color: '#181717' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter', color: '#1DA1F2' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram', color: '#E1306C' }
  ];
  // Back to top removed
  return (
    <FooterContainer initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
      <CompactInner>
        <TopRow>
          <Brand>
            <div className="logoMark">H</div>
            <span className="name">Haseeb Ahmad</span>
          </Brand>
          <LinkRow aria-label="Footer navigation">
            {links.map(l => (
              <button key={l.label} onClick={()=>scrollToSection(l.target)}>{l.label}</button>
            ))}
          </LinkRow>
          <SocialRow>
            {socials.map((s,i)=>(
              <SocialButton key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
                $brand={s.color}
                whileHover={{ y:-4, rotate:0.5 }} whileTap={{ scale:0.9 }} initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1, transition:{ delay:0.05 * i } }}>
                <s.icon size={18} />
              </SocialButton>
            ))}
          </SocialRow>
        </TopRow>
        <Divider />
        <BottomRow>
          <Copy>
            <span>© {year} Haseeb Ahmad</span>
            <span>Built with passion</span>
            <FaHeart className="heart" />
          </Copy>
          <span style={{opacity:0.65}}>v1.0.0</span>
        </BottomRow>
      </CompactInner>
    </FooterContainer>
  );
};

export default Footer;
