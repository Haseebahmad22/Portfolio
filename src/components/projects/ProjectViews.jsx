import React from 'react';
import { FiGithub, FiExternalLink, FiEye, FiStar, FiCode } from 'react-icons/fi';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import {
  Grid, Card, Media, Cover, HoverOverlay, OverlayStats, StatMini, TechRow, TechIcon, Badges, Badge, CardBody, CardTitle, CardExcerpt, MetaBar, MetaItem, StackRow, Chip,
  ShowcaseList, ShowcaseItem, ShowcaseMedia, ShowcaseContent, ShowcaseTitle, ShowcaseExcerpt, ShowcaseMeta, ShowcaseTag, ShowcaseFooter, MiniStat, MiniStack,
  ListWrap, ListRow, Thumb, ListInfo, ListTitle, ListDesc, ListMeta, ListTag, ListActions, TinyBtn, ActionBtn, fadeUp
} from './ProjectStyles';

// Icons mapping (keep minimal fallback usage)
import { FaReact, FaNode, FaJs, FaJava, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiNextdotjs, SiFirebase, SiSpringboot, SiSocketdotio } from 'react-icons/si';

const techIcons = {
  'React': <FaReact />,
  'Node.js': <FaNode />,
  'JavaScript': <FaJs />,
  'TypeScript': <SiTypescript />,
  'Java': <FaJava />,
  'Express': <SiExpress />,
  'Next.js': <SiNextdotjs />,
  'Spring Boot': <SiSpringboot />,
  'MongoDB': <SiMongodb />,
  'SQL': <FaDatabase />,
  'PostgreSQL': <SiPostgresql />,
  'Firebase': <SiFirebase />,
  'Tailwind CSS': <SiTailwindcss />,
  'Socket.io': <SiSocketdotio />,
  'JWT': <FiCode />,
  'IoT': <FiCode />
};

export const GridView = ({ projects, onSelect }) => (
  <LayoutGroup>
    <Grid layout>
      <AnimatePresence>
        {projects.map((p,i)=> (
          <Card key={p.id} layout {...fadeUp(i*0.05)} onClick={()=>onSelect(p)}>
            <Media>
              <Cover src={p.images[0]} alt={p.title} loading="lazy" />
              <HoverOverlay>
                <OverlayStats>
                  <StatMini><FiEye/>{p.stats.views}</StatMini>
                  <StatMini><FiStar/>{p.stats.stars}</StatMini>
                </OverlayStats>
                <TechRow>
                  {p.technologies.slice(0,3).map((t,idx)=>(<TechIcon key={idx} title={t}>{techIcons[t]||<FiCode/>}</TechIcon>))}
                </TechRow>
              </HoverOverlay>
              <Badges>
                {p.featured && <Badge className="featured">Featured</Badge>}
                <Badge className="status" $status={p.status}>{p.status}</Badge>
              </Badges>
            </Media>
            <CardBody>
              <CardTitle>{p.title}</CardTitle>
              <CardExcerpt>{p.description}</CardExcerpt>
              <MetaBar>
                <MetaItem><div className='label'>Difficulty</div><div className='value'>{p.difficulty}</div></MetaItem>
                <MetaItem><div className='label'>Duration</div><div className='value'>{p.duration}</div></MetaItem>
                <MetaItem><div className='label'>Category</div><div className='value'>{p.category}</div></MetaItem>
              </MetaBar>
              <StackRow>
                {p.technologies.slice(0,4).map((t,idx)=>(<Chip key={idx}>{t}</Chip>))}
                {p.technologies.length>4 && <Chip>+{p.technologies.length-4}</Chip>}
              </StackRow>
            </CardBody>
          </Card>
        ))}
      </AnimatePresence>
    </Grid>
  </LayoutGroup>
);

export const ShowcaseView = ({ projects, onSelect }) => (
  <ShowcaseList layout>
    <AnimatePresence>
      {projects.map((p,i)=>(
        <ShowcaseItem key={p.id} {...fadeUp(i*0.06)} onClick={()=>onSelect(p)}>
          <ShowcaseMedia>
            <img src={p.images[0]} alt={p.title} loading='lazy' />
            <Badges>
              {p.featured && <Badge className='featured'>Featured</Badge>}
              <Badge className='status' $status={p.status}>{p.status}</Badge>
            </Badges>
          </ShowcaseMedia>
          <ShowcaseContent>
            <ShowcaseTitle>{p.title}</ShowcaseTitle>
            <ShowcaseExcerpt>{p.longDescription || p.description}</ShowcaseExcerpt>
            <ShowcaseMeta>
              <ShowcaseTag>{p.category}</ShowcaseTag>
              <ShowcaseTag>{p.difficulty}</ShowcaseTag>
              <ShowcaseTag>{p.duration}</ShowcaseTag>
            </ShowcaseMeta>
            <ShowcaseFooter>
              <MiniStack>
                {p.technologies.slice(0,6).map((t,idx)=>(<Chip key={idx}>{t}</Chip>))}
                {p.technologies.length>6 && <Chip>+{p.technologies.length-6}</Chip>}
              </MiniStack>
              <div style={{display:'flex', gap:'.45rem'}} onClick={e=>e.stopPropagation()}>
                <ActionBtn href={p.githubUrl} target='_blank' rel='noopener noreferrer' style={{flex:'unset', padding:'.55rem .85rem'}}><FiGithub/></ActionBtn>
                {(((p.title||'').toLowerCase().includes('gameexplorer') || (p.title||'').toLowerCase().includes('zarqais') || p.id==='proj-zarqais') && p.liveUrl && p.liveUrl !== '#') && (
                  <ActionBtn href={p.liveUrl} target='_blank' rel='noopener noreferrer' $primary style={{flex:'unset', padding:'.55rem .85rem'}}><FiExternalLink/></ActionBtn>
                )}
              </div>
            </ShowcaseFooter>
            <div style={{display:'flex', gap:'.5rem', marginTop:'.25rem'}}>
              <MiniStat><FiEye/>{p.stats.views}</MiniStat>
              <MiniStat><FiStar/>{p.stats.stars}</MiniStat>
            </div>
          </ShowcaseContent>
        </ShowcaseItem>
      ))}
    </AnimatePresence>
  </ShowcaseList>
);

export const ListView = ({ projects, onSelect }) => (
  <ListWrap layout>
    <AnimatePresence>
      {projects.map((p,i)=>(
        <ListRow key={p.id} {...fadeUp(i*0.04)} onClick={()=>onSelect(p)}>
          <Thumb><img src={p.images[0]} alt={p.title} loading='lazy' /></Thumb>
          <ListInfo>
            <ListTitle>{p.title}</ListTitle>
            <ListDesc>{p.description}</ListDesc>
            <ListMeta>
              <ListTag>{p.category}</ListTag>
              <ListTag>{p.difficulty}</ListTag>
              <ListTag>{p.duration}</ListTag>
            </ListMeta>
          </ListInfo>
          <ListActions onClick={e=>e.stopPropagation()}>
            <TinyBtn onClick={()=>onSelect(p)}><FiEye/> View</TinyBtn>
            <TinyBtn as='a' href={p.githubUrl} target='_blank' rel='noopener noreferrer'><FiGithub/></TinyBtn>
            {(((p.title||'').toLowerCase().includes('gameexplorer') || (p.title||'').toLowerCase().includes('zarqais') || p.id==='proj-zarqais') && p.liveUrl && p.liveUrl !== '#') && (
              <TinyBtn as='a' href={p.liveUrl} target='_blank' rel='noopener noreferrer'><FiExternalLink/></TinyBtn>
            )}
          </ListActions>
        </ListRow>
      ))}
    </AnimatePresence>
  </ListWrap>
);
