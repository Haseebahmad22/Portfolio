import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
    
    /* Cursor background effect */
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
          rgba(99, 102, 241, 0.06) 0%, 
          rgba(99, 102, 241, 0.03) 40%, 
          transparent 80%);
      pointer-events: none;
      z-index: 1;
      transition: opacity 0.3s ease;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 3px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.accentSecondary};
    }
  }

  /* Selection styles */
  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.text};
  }

  /* Smooth focus styles */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  /* Enhanced typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    line-height: 1.7;
  }

  /* Animation classes */
  .fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .slide-up {
    animation: slideUp 0.6s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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

  /* Utility classes */
  .glass-effect {
    background: rgba(26, 26, 46, 0.4);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(99, 102, 241, 0.1);
  }

  .text-gradient {
    background: ${({ theme }) => theme.colors.gradientPrimary};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .glow-effect {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
    transition: box-shadow 0.3s ease;
    
    &:hover {
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
    }
  }

  /* Loading animation */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  /* Floating animation */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .float {
    animation: float 3s ease-in-out infinite;
  }
`;