import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

  :root {
    /* Light mode (default) */
    --bg-primary: #f9fafb;
    --bg-secondary: #ffffff;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --text-muted: #9ca3af;
    --accent-primary: #6366f1;
    --accent-hover: #4f46e5;
    --accent-secondary: #8b5cf6;
    --border: #e5e7eb;
    --border-hover: #d1d5db;
    --card-bg: #ffffff;
    --shadow: rgba(0, 0, 0, 0.08);
    --shadow-hover: rgba(0, 0, 0, 0.12);
    
    /* Dark mode overrides */
    @media (prefers-color-scheme: dark) {
      --bg-primary: #0f172a;
      --bg-secondary: #1e293b;
      --text-primary: #e2e8f0;
      --text-secondary: #94a3b8;
      --text-muted: #64748b;
      --border: #334155;
      --border-hover: #475569;
      --card-bg: #1e293b;
      --shadow: rgba(0, 0, 0, 0.25);
      --shadow-hover: rgba(0, 0, 0, 0.35);
    }
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    --gradient-secondary: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
    --gradient-accent: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
    
    /* Transitions */
    --transition-fast: 200ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 600ms cubic-bezier(0.4, 0, 0.2, 1);
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
    transition: background-color var(--transition-normal), color var(--transition-normal);
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

  /* Clean scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent-primary);
    border-radius: 3px;
    transition: background var(--transition-fast);
    
    &:hover {
      background: var(--accent-hover);
    }
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

  /* Clean typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0;
    color: var(--text-primary);
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
    font-family: 'Fira Code', monospace;
    font-size: 0.9em;
    background: rgba(99, 102, 241, 0.1);
    padding: 0.2em 0.4em;
    border-radius: 0.375rem;
    border: 1px solid var(--border);
  }

  /* Modern utility classes */
  .card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 1rem;
    box-shadow: 0 4px 20px var(--shadow);
    transition: all var(--transition-normal);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px var(--shadow-hover);
      border-color: var(--border-hover);
    }
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    transition: all var(--transition-normal);
    
    &:hover {
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
    }
  }

  .text-gradient {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }

  .glow-effect {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
    transition: box-shadow var(--transition-normal);
    
    &:hover {
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--accent-primary);
    color: white;
    border: none;
    border-radius: 1rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all var(--transition-fast);
    
    &:hover {
      background: var(--accent-hover);
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &.btn-outline {
      background: transparent;
      color: var(--accent-primary);
      border: 2px solid var(--accent-primary);
      
      &:hover {
        background: var(--accent-primary);
        color: white;
      }
    }
  }

  /* Subtle animations */
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
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Animation utility classes */
  .fade-in {
    animation: fadeIn 0.6s var(--transition-normal) forwards;
  }

  .slide-up {
    animation: slideUp 0.6s var(--transition-normal) forwards;
  }

  .slide-in-left {
    animation: slideInLeft 0.6s var(--transition-normal) forwards;
  }

  .slide-in-right {
    animation: slideInRight 0.6s var(--transition-normal) forwards;
  }

  .scale-in {
    animation: scaleIn 0.4s var(--transition-normal) forwards;
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