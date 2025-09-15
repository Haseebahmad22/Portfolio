// Responsive breakpoints and utilities
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
  wide: '1400px'
};

// Media query helpers
export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  laptop: `@media (max-width: ${breakpoints.laptop})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
  
  // Min-width queries
  fromTablet: `@media (min-width: ${breakpoints.tablet})`,
  fromLaptop: `@media (min-width: ${breakpoints.laptop})`,
  fromDesktop: `@media (min-width: ${breakpoints.desktop})`,
  
  // Range queries
  mobileToTablet: `@media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`,
  tabletToLaptop: `@media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop})`,
  
  // Orientation queries
  landscape: '@media (orientation: landscape)',
  portrait: '@media (orientation: portrait)',
  
  // Touch device detection
  touch: '@media (hover: none) and (pointer: coarse)',
  hover: '@media (hover: hover) and (pointer: fine)',
  
  // High DPI displays
  retina: '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  
  // Reduced motion preference
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
  
  // Color scheme preference
  darkMode: '@media (prefers-color-scheme: dark)',
  lightMode: '@media (prefers-color-scheme: light)'
};

// Container sizes
export const containers = {
  mobile: '100%',
  tablet: '95%',
  laptop: '90%',
  desktop: '1200px',
  wide: '1400px'
};

// Spacing scale for responsive design
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem'
};

// Typography scales
export const typography = {
  mobile: {
    h1: 'clamp(1.75rem, 8vw, 2.5rem)',
    h2: 'clamp(1.5rem, 6vw, 2rem)',
    h3: 'clamp(1.25rem, 5vw, 1.75rem)',
    h4: 'clamp(1.125rem, 4vw, 1.5rem)',
    h5: 'clamp(1rem, 3.5vw, 1.25rem)',
    h6: 'clamp(0.875rem, 3vw, 1.125rem)',
    body: 'clamp(0.875rem, 4vw, 1rem)',
    small: 'clamp(0.75rem, 3vw, 0.875rem)'
  },
  tablet: {
    h1: 'clamp(2rem, 6vw, 3rem)',
    h2: 'clamp(1.75rem, 5vw, 2.25rem)',
    h3: 'clamp(1.5rem, 4vw, 2rem)',
    h4: 'clamp(1.25rem, 3vw, 1.75rem)',
    h5: 'clamp(1.125rem, 2.5vw, 1.5rem)',
    h6: 'clamp(1rem, 2vw, 1.25rem)',
    body: 'clamp(1rem, 2.5vw, 1.125rem)',
    small: 'clamp(0.875rem, 2vw, 1rem)'
  },
  desktop: {
    h1: 'clamp(2.5rem, 4vw, 4rem)',
    h2: 'clamp(2rem, 3vw, 2.5rem)',
    h3: 'clamp(1.75rem, 2.5vw, 2rem)',
    h4: 'clamp(1.5rem, 2vw, 1.75rem)',
    h5: 'clamp(1.25rem, 1.5vw, 1.5rem)',
    h6: 'clamp(1.125rem, 1vw, 1.25rem)',
    body: '1.125rem',
    small: '1rem'
  }
};

// Touch-friendly sizing
export const touch = {
  minTarget: '44px', // Minimum touch target size (WCAG AA)
  padding: '12px',
  spacing: '16px',
  borderRadius: '12px'
};

// Animation durations based on screen size
export const animations = {
  mobile: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.4s'
  },
  desktop: {
    fast: '0.15s',
    normal: '0.25s',
    slow: '0.35s'
  }
};

// Z-index scale
export const zIndex = {
  base: 1,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070
};

// Utility functions
export const rem = (px) => `${px / 16}rem`;
export const em = (px, base = 16) => `${px / base}em`;

// Responsive value function
export const responsive = (mobile, tablet, desktop) => `
  font-size: ${mobile};
  ${media.tablet} {
    font-size: ${tablet};
  }
  ${media.laptop} {
    font-size: ${desktop};
  }
`;

// Grid helpers
export const grid = {
  mobile: 'repeat(1, 1fr)',
  tablet: 'repeat(2, 1fr)',
  laptop: 'repeat(3, 1fr)',
  desktop: 'repeat(4, 1fr)'
};

// Flexbox helpers
export const flex = {
  center: 'display: flex; align-items: center; justify-content: center;',
  between: 'display: flex; align-items: center; justify-content: space-between;',
  start: 'display: flex; align-items: center; justify-content: flex-start;',
  end: 'display: flex; align-items: center; justify-content: flex-end;',
  column: 'display: flex; flex-direction: column;',
  columnCenter: 'display: flex; flex-direction: column; align-items: center; justify-content: center;'
};

// Safe area helpers for mobile devices
export const safeArea = {
  top: 'env(safe-area-inset-top)',
  right: 'env(safe-area-inset-right)',
  bottom: 'env(safe-area-inset-bottom)',
  left: 'env(safe-area-inset-left)'
};

