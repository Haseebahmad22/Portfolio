export const theme = {
  colors: {
    /* Refined Light Mode */
    light: {
      background: '#f8fafc',
      backgroundSecondary: '#ffffff',
      text: '#1e2430',
      textSecondary: '#5b6474',
      textMuted: '#8b95a5',
      accent: '#6366f1',
      accentHover: '#4f46e5',
      border: '#e2e8f0',
      borderHover: '#cbd5e1',
      card: '#ffffff',
      shadow: 'rgba(15, 23, 42, 0.06)',
      shadowHover: 'rgba(15, 23, 42, 0.1)'
    },
    /* Deep Modern Dark Mode */
    dark: {
      background: '#05060b',           /* Near-black for high contrast */
      backgroundSecondary: '#0d1117',   /* Elevated surface */
      backgroundTertiary: '#141b24',    /* Cards */
      backgroundOverlay: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(236,72,153,0.05) 60%, rgba(0,0,0,0.2) 100%)',
      text: '#e2e8f5',
      textSecondary: '#94a3b8',
      textMuted: '#64748b',
      accent: '#6366f1',
      accentHover: '#818cf8',
      accentAlt: '#ec4899',
      accentAltHover: '#f472b6',
      accentCyan: '#22d3ee',
      accentPurple: '#a855f7',
      accentOrange: '#f59e0b',
      border: '#1f2937',
      borderHover: '#2d3b4b',
      card: '#0f1621',
      cardAlt: '#162232',
      shadow: '0 8px 32px rgba(0,0,0,0.65)',
      shadowHover: '0 12px 40px rgba(0,0,0,0.75)'
    },
    /* Universal Semantic Tokens */
    accent: '#6366f1',
    accentHover: '#4f46e5',
    accentSecondary: '#8b5cf6',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    gradientPrimary: 'linear-gradient(135deg,#6366f1 0%,#8b5cf6 35%,#ec4899 70%,#22d3ee 100%)',
    gradientSecondary: 'linear-gradient(135deg,#3b82f6 0%,#6366f1 50%,#a855f7 100%)',
    gradientAccent: 'linear-gradient(135deg,#6366f1 0%,#ec4899 50%,#22d3ee 100%)',
    gradientGlass: 'linear-gradient(145deg,rgba(99,102,241,0.12),rgba(168,85,247,0.08),rgba(236,72,153,0.06))'
  },
  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    secondary: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"Fira Code", "JetBrains Mono", monospace',
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
    wide: '1536px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
  },
  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0,0,0,0.4)',
    md: '0 4px 10px -1px rgba(0,0,0,0.45)',
    lg: '0 10px 32px rgba(0,0,0,0.55)',
    xl: '0 20px 40px rgba(0,0,0,0.6)',
    '2xl': '0 35px 65px -10px rgba(0,0,0,0.65)',
    glow: '0 0 24px -4px rgba(99,102,241,0.45)',
    glowPink: '0 0 28px -4px rgba(236,72,153,0.5)',
    glowCyan: '0 0 30px -4px rgba(34,211,238,0.45)',
    glowHover: '0 0 38px -4px rgba(99,102,241,0.55)'
  },
  transitions: {
    fast: '200ms ease',
    normal: '300ms ease',
    slow: '600ms ease',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};