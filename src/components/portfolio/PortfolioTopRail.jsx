import React from 'react';
import styled from 'styled-components';

function PortfolioTopRail({ isNavCompact, progressPercent, sectionIds, activeSection }) {
  return (
    <TopRail className={isNavCompact ? 'compact' : ''}>
      <ProgressTrack aria-hidden="true">
        <span style={{ width: `${progressPercent}%` }} />
      </ProgressTrack>

      <div className="ds-shell top-rail-inner">
        <BrandMark href="#hero" aria-label="Navigate to hero section">
          <strong>HA</strong>
          <span>Engineering Portfolio</span>
        </BrandMark>

        <TopRailNav aria-label="Section navigation">
          {sectionIds.map((id) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''}>
              {id}
            </a>
          ))}
        </TopRailNav>

        <TopRailContact href="#contact">Start a conversation</TopRailContact>
      </div>
    </TopRail>
  );
}

const TopRail = styled.header`
  position: sticky;
  top: 0;
  z-index: 80;
  background: rgba(var(--color-surface-canvas), 0.86);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(var(--color-border-subtle), 0.72);
  transition: background-color var(--transition-standard), border-color var(--transition-standard),
    box-shadow var(--transition-standard);

  .top-rail-inner {
    min-height: 4.8rem;
    display: grid;
    align-items: center;
    gap: 1rem;
    grid-template-columns: auto minmax(0, 1fr) auto;
    transition: min-height var(--transition-standard), padding var(--transition-standard);
  }

  &.compact {
    background: rgba(var(--color-surface-canvas), 0.92);
    border-bottom-color: rgba(var(--color-border-strong), 0.7);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.24);
  }

  &.compact .top-rail-inner {
    min-height: 4.15rem;
  }

  @media (max-width: 980px) {
    .top-rail-inner {
      min-height: auto;
      padding-block: 0.65rem;
      row-gap: 0.6rem;
      grid-template-columns: auto auto;
      grid-template-areas:
        'brand cta'
        'nav nav';
    }
  }
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(var(--color-border-subtle), 0.4);

  span {
    display: block;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(var(--color-accent-soft), 0.8),
      rgba(var(--color-accent-strong), 0.9)
    );
    transition: width var(--transition-standard);
  }
`;

const BrandMark = styled.a`
  grid-area: brand;
  display: inline-flex;
  align-items: baseline;
  gap: 0.65rem;

  strong {
    color: rgb(var(--color-text-primary));
    letter-spacing: 0.08em;
  }

  span {
    color: rgb(var(--color-text-muted));
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
`;

const TopRailNav = styled.nav`
  grid-area: nav;
  min-width: 0;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 0.4rem;

  a {
    text-transform: capitalize;
    color: rgb(var(--color-text-muted));
    border-radius: 0.6rem;
    border: 1px solid transparent;
    font-size: 0.82rem;
    padding: 0.4rem 0.62rem;
    position: relative;
    transition: color var(--transition-standard), border-color var(--transition-standard),
      background-color var(--transition-standard), transform var(--transition-quick);
  }

  @media (max-width: 1200px) {
    gap: 0.28rem;

    a {
      font-size: 0.76rem;
      padding: 0.34rem 0.46rem;
    }
  }

  a::after {
    content: '';
    position: absolute;
    left: 0.6rem;
    right: 0.6rem;
    bottom: 0.26rem;
    height: 1px;
    background: rgba(var(--color-accent-soft), 0.7);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform var(--transition-standard);
  }

  a:hover,
  a.active {
    color: rgb(var(--color-text-primary));
    border-color: rgba(var(--color-border-strong), 0.9);
    background: rgba(var(--color-surface-raised), 0.55);
    transform: translateY(-1px);
  }

  a:hover::after,
  a.active::after {
    transform: scaleX(1);
  }

  @media (max-width: 980px) {
    justify-self: stretch;
    overflow-x: auto;
    gap: 0.35rem;

    a {
      white-space: nowrap;
      font-size: 0.8rem;
      padding: 0.4rem 0.56rem;
    }

    &::-webkit-scrollbar {
      height: 0;
    }
  }
`;

const TopRailContact = styled.a`
  grid-area: cta;
  justify-self: end;
  color: rgb(var(--color-text-primary));
  border: 1px solid rgba(var(--color-border-strong), 0.88);
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.46rem 0.72rem;
  transition: background-color var(--transition-standard), border-color var(--transition-standard),
    transform var(--transition-quick), color var(--transition-standard);

  &:hover {
    border-color: rgba(var(--color-accent-soft), 0.8);
    background: rgba(var(--color-surface-raised), 0.55);
    transform: translateY(-1px);
  }
`;

export default PortfolioTopRail;
