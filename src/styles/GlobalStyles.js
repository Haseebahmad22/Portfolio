import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  :root {
    /* Default theme values (will be overridden by ThemeContext) */
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --bg-tertiary: #2a2a2a;
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    --text-muted: #666666;
    --accent-primary: #00d4ff;
    --accent-secondary: #ff6b9d;
    --border-color: #333333;
    --shadow-light: rgba(255, 255, 255, 0.1);
    --shadow-dark: rgba(0, 0, 0, 0.5);
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    
    /* Animation variables */
    --transition-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --transition-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    /* Enhanced cursor background effect */
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
          rgba(79, 172, 254, 0.08) 0%, 
          rgba(79, 172, 254, 0.04) 40%, 
          transparent 80%);
      pointer-events: none;
      z-index: 1;
      transition: opacity 0.3s var(--transition-smooth);
      opacity: 0.6;
    }
    
    /* Background grain texture */
    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
      background-size: 20px 20px;
      pointer-events: none;
      z-index: 1;
      opacity: 0.03;
    }
  }

  /* Enhanced focus management */
  body:not(.user-is-tabbing) button:focus,
  body:not(.user-is-tabbing) input:focus,
  body:not(.user-is-tabbing) select:focus,
  body:not(.user-is-tabbing) textarea:focus {
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s var(--transition-smooth);
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
    background: transparent;
    transition: all 0.3s var(--transition-smooth);
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
    border: none;
    background: transparent;
  }

  /* Enhanced scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gradient-accent);
    border-radius: 4px;
    transition: all 0.3s var(--transition-smooth);
    
    &:hover {
      background: var(--accent-primary);
      transform: scale(1.1);
    }
  }

  ::-webkit-scrollbar-corner {
    background: var(--bg-secondary);
  }

  /* Enhanced selection styles */
  ::selection {
    background: var(--accent-primary);
    color: var(--bg-primary);
    text-shadow: none;
  }

  ::-moz-selection {
    background: var(--accent-primary);
    color: var(--bg-primary);
    text-shadow: none;
  }

  /* Modern focus styles */
  :focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Enhanced typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 800;
    letter-spacing: -0.04em;
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 700;
  }

  h3 {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: 600;
  }

  p {
    line-height: 1.7;
    color: var(--text-secondary);
    margin: 0;
  }

  code {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.9em;
    background: var(--glass-bg);
    padding: 0.2em 0.4em;
    border-radius: 4px;
    border: 1px solid var(--glass-border);
  }

  /* Enhanced utility classes */
  .glass-effect {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.3s var(--transition-smooth);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 
        0 16px 40px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      border-color: var(--accent-primary);
    }
  }

  .text-gradient {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }

  .text-gradient-primary {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }

  .text-gradient-secondary {
    background: var(--gradient-secondary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }

  .glow-effect {
    box-shadow: 0 0 20px rgba(79, 172, 254, 0.3);
    transition: box-shadow 0.3s var(--transition-smooth);
    
    &:hover {
      box-shadow: 0 0 40px rgba(79, 172, 254, 0.5);
    }
  }

  .glow-text {
    text-shadow: 0 0 20px var(--accent-primary);
    transition: text-shadow 0.3s var(--transition-smooth);
    
    &:hover {
      text-shadow: 0 0 30px var(--accent-primary);
    }
  }

  /* Enhanced animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translate3d(0, 0, 0);
    }
    40%, 43% {
      transform: translate3d(0, -30px, 0);
    }
    70% {
      transform: translate3d(0, -15px, 0);
    }
    90% {
      transform: translate3d(0, -4px, 0);
    }
  }

  /* Animation classes */
  .fade-in {
    animation: fadeIn 0.6s var(--transition-smooth) forwards;
  }

  .slide-up {
    animation: slideUp 0.6s var(--transition-smooth) forwards;
  }

  .slide-in-left {
    animation: slideInLeft 0.6s var(--transition-smooth) forwards;
  }

  .slide-in-right {
    animation: slideInRight 0.6s var(--transition-smooth) forwards;
  }

  .scale-in {
    animation: scaleIn 0.4s var(--transition-bounce) forwards;
  }

  .pulse {
    animation: pulse 2s var(--transition-smooth) infinite;
  }

  .float {
    animation: float 3s ease-in-out infinite;
  }

  .spin {
    animation: spin 1s linear infinite;
  }

  .bounce {
    animation: bounce 2s infinite;
  }

  /* Loading states */
  .loading {
    pointer-events: none;
    opacity: 0.7;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin: -10px 0 0 -10px;
      border: 2px solid var(--accent-primary);
      border-top: 2px solid transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }

  /* Responsive breakpoints */
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  /* Hide elements on mobile */
  @media (max-width: 768px) {
    .hide-mobile {
      display: none !important;
    }
  }

  /* Hide elements on desktop */
  @media (min-width: 769px) {
    .hide-desktop {
      display: none !important;
    }
  }

  /* Accessibility improvements */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    
    html {
      scroll-behavior: auto !important;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    :root {
      --bg-primary: #000000;
      --text-primary: #ffffff;
      --accent-primary: #ffffff;
      --border-color: #ffffff;
    }
  }

  /* Print styles */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    
    a, a:visited {
      text-decoration: underline;
    }
    
    .no-print {
      display: none !important;
    }
  }
`;