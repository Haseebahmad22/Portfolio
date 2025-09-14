import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiActivity, FiClock, FiMonitor, FiX } from 'react-icons/fi';

const PerformanceMonitor = ({ showDebugInfo = false }) => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
    interactions: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const interactionCount = useRef(0);

  useEffect(() => {
    // Measure initial load time
    const measureLoadTime = () => {
      if (window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }
    };

    // Measure FPS
    const measureFPS = () => {
      frameCount.current++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime.current + 1000) {
        const fps = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount.current = 0;
        lastTime.current = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    // Measure memory usage (if available)
    const measureMemory = () => {
      if (window.performance && window.performance.memory) {
        const memoryUsage = Math.round(window.performance.memory.usedJSHeapSize / 1048576); // MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Track user interactions
    const trackInteractions = () => {
      interactionCount.current++;
      setMetrics(prev => ({ ...prev, interactions: interactionCount.current }));
    };

    // Measure render time with Performance Observer
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure' && entry.name.includes('React')) {
            setMetrics(prev => ({ ...prev, renderTime: Math.round(entry.duration) }));
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['measure'] });
      } catch (error) {
        console.log('Performance Observer not fully supported');
      }
    }

    // Event listeners
    window.addEventListener('load', measureLoadTime);
    document.addEventListener('click', trackInteractions);
    document.addEventListener('keypress', trackInteractions);
    document.addEventListener('scroll', trackInteractions);

    // Start FPS monitoring
    requestAnimationFrame(measureFPS);

    // Memory monitoring interval
    const memoryInterval = setInterval(measureMemory, 5000);

    // Keyboard shortcut to toggle debug info (Ctrl + Shift + P)
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', measureLoadTime);
      document.removeEventListener('click', trackInteractions);
      document.removeEventListener('keypress', trackInteractions);
      document.removeEventListener('scroll', trackInteractions);
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(memoryInterval);
    };
  }, []);

  // Show performance warnings
  const getPerformanceStatus = () => {
    if (metrics.fps < 30) return { status: 'poor', color: '#ff6b6b' };
    if (metrics.fps < 45) return { status: 'fair', color: '#ffa500' };
    return { status: 'good', color: '#00ff88' };
  };

  const performanceStatus = getPerformanceStatus();

  // Only show in development or when explicitly enabled
  if (!showDebugInfo && process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <PerformancePanel
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.3 }}
        >
          <PanelHeader>
            <HeaderTitle>
              <FiActivity />
              Performance Monitor
            </HeaderTitle>
            <CloseButton onClick={() => setIsVisible(false)}>
              <FiX />
            </CloseButton>
          </PanelHeader>

          <MetricsGrid>
            <MetricCard>
              <MetricIcon>
                <FiClock />
              </MetricIcon>
              <MetricValue>{metrics.loadTime}ms</MetricValue>
              <MetricLabel>Load Time</MetricLabel>
            </MetricCard>

            <MetricCard>
              <MetricIcon style={{ color: performanceStatus.color }}>
                <FiMonitor />
              </MetricIcon>
              <MetricValue style={{ color: performanceStatus.color }}>
                {metrics.fps} FPS
              </MetricValue>
              <MetricLabel>Frame Rate</MetricLabel>
            </MetricCard>

            <MetricCard>
              <MetricIcon>
                <FiActivity />
              </MetricIcon>
              <MetricValue>{metrics.renderTime}ms</MetricValue>
              <MetricLabel>Render Time</MetricLabel>
            </MetricCard>

            {metrics.memoryUsage > 0 && (
              <MetricCard>
                <MetricIcon>
                  💾
                </MetricIcon>
                <MetricValue>{metrics.memoryUsage}MB</MetricValue>
                <MetricLabel>Memory Usage</MetricLabel>
              </MetricCard>
            )}

            <MetricCard>
              <MetricIcon>
                🎯
              </MetricIcon>
              <MetricValue>{metrics.interactions}</MetricValue>
              <MetricLabel>Interactions</MetricLabel>
            </MetricCard>
          </MetricsGrid>

          <PerformanceStatus status={performanceStatus.status}>
            Performance: {performanceStatus.status.toUpperCase()}
          </PerformanceStatus>

          <KeyboardHint>
            Press Ctrl+Shift+P to toggle
          </KeyboardHint>
        </PerformancePanel>
      )}
      
      {!isVisible && process.env.NODE_ENV === 'development' && (
        <ToggleButton
          onClick={() => setIsVisible(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiActivity />
        </ToggleButton>
      )}
    </AnimatePresence>
  );
};

// Styled Components
const PerformancePanel = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 280px;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-primary);
  border-radius: 16px;
  padding: 1rem;
  z-index: 10000;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  box-shadow: 0 20px 40px var(--shadow-primary);

  @media (max-width: 768px) {
    width: 250px;
    top: 10px;
    right: 10px;
    font-size: 0.8rem;
  }
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-secondary);
`;

const HeaderTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 600;

  svg {
    color: var(--accent-primary);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: var(--text-primary);
    background: var(--bg-secondary);
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const MetricCard = styled.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border-secondary);
  border-radius: 8px;
  padding: 0.75rem;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    background: var(--bg-tertiary);
    border-color: var(--accent-primary);
  }
`;

const MetricIcon = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
  color: var(--accent-primary);
`;

const MetricValue = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
`;

const MetricLabel = styled.div`
  font-size: 0.7rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PerformanceStatus = styled.div`
  text-align: center;
  padding: 0.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  background: ${props => {
    switch (props.status) {
      case 'poor': return '#ff6b6b20';
      case 'fair': return '#ffa50020';
      default: return '#00ff8820';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'poor': return '#ff6b6b';
      case 'fair': return '#ffa500';
      default: return '#00ff88';
    }
  }};
  border: 1px solid ${props => {
    switch (props.status) {
      case 'poor': return '#ff6b6b40';
      case 'fair': return '#ffa50040';
      default: return '#00ff8840';
    }
  }};
`;

const KeyboardHint = styled.div`
  text-align: center;
  font-size: 0.7rem;
  color: var(--text-secondary);
  opacity: 0.7;
`;

const ToggleButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  z-index: 9999;
  box-shadow: 0 10px 30px var(--shadow-primary);

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
`;

export default PerformanceMonitor;