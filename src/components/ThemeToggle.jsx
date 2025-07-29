import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ToggleButton = styled(motion.button)`
  width: 60px;
  height: 32px;
  background: ${({ theme, $isDark }) => 
    $isDark ? theme.colors.primary : theme.colors.cardBackground};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  position: relative;
  transition: all ${({ theme }) => theme.transitions.smooth};
  backdrop-filter: blur(10px);

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const ToggleCircle = styled(motion.div)`
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ $isDark }) => $isDark ? '32px' : '2px'};
  transition: left ${({ theme }) => theme.transitions.smooth};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const IconWrapper = styled.span`
  color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeToggle = ({ isDark = true, onToggle }) => {
  const [isToggled, setIsToggled] = useState(isDark);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    if (onToggle) {
      onToggle(!isToggled);
    }
  };

  return (
    <ToggleButton
      onClick={handleToggle}
      $isDark={isToggled}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isToggled ? 'light' : 'dark'} mode`}
    >
      <ToggleCircle $isDark={isToggled}>
        <IconWrapper>
          {isToggled ? '🌙' : '☀️'}
        </IconWrapper>
      </ToggleCircle>
    </ToggleButton>
  );
};

export default ThemeToggle;