import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from './responsive';

// Lazy load all page components for code splitting
export const LazyHome = lazy(() => 
  import('../pages/Home').then(module => ({ default: module.default }))
);

export const LazyAbout = lazy(() => 
  import('../pages/About').then(module => ({ default: module.default }))
);

export const LazySkills = lazy(() => 
  import('../pages/Skills').then(module => ({ default: module.default }))
);

export const LazyProjects = lazy(() => 
  import('../pages/Projects').then(module => ({ default: module.default }))
);

export const LazyExperience = lazy(() => 
  import('../pages/Experience').then(module => ({ default: module.default }))
);

export const LazyContact = lazy(() => 
  import('../pages/Contact').then(module => ({ default: module.default }))
);

// Component-level loading fallback
const ComponentLoader = ({ message = "Loading component..." }) => (
  <LoaderContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <LoaderContent>
      <LoaderSpinner>
        <SpinnerRing />
        <SpinnerRing />
        <SpinnerRing />
      </LoaderSpinner>
      <LoaderText>{message}</LoaderText>
    </LoaderContent>
  </LoaderContainer>
);

// Higher-order component for lazy loading with suspense
export const withLazyLoading = (Component, fallbackMessage) => {
  return (props) => (
    <Suspense fallback={<ComponentLoader message={fallbackMessage} />}>
      <Component {...props} />
    </Suspense>
  );
};

// Preload utilities for better UX
export const preloadComponent = (importFunction) => {
  const componentPromise = importFunction();
  return componentPromise;
};

// Preload all components for faster navigation
export const preloadAllComponents = () => {
  // Preload in order of likely user navigation
  setTimeout(() => preloadComponent(() => import('../pages/About')), 1000);
  setTimeout(() => preloadComponent(() => import('../pages/Skills')), 2000);
  setTimeout(() => preloadComponent(() => import('../pages/Projects')), 3000);
  setTimeout(() => preloadComponent(() => import('../pages/Experience')), 4000);
  setTimeout(() => preloadComponent(() => import('../pages/Contact')), 5000);
};

// Image lazy loading utility
export const LazyImage = ({ src, alt, placeholder, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ImageContainer ref={imgRef} className={className} {...props}>
      {isInView && (
        <>
          <Image
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            $isLoaded={isLoaded}
          />
          {!isLoaded && placeholder && (
            <PlaceholderImage>
              {placeholder}
            </PlaceholderImage>
          )}
        </>
      )}
    </ImageContainer>
  );
};

// Resource prefetching utility
export const prefetchResource = (url, type = 'prefetch') => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = type; // 'prefetch' or 'preload'
    link.href = url;
    document.head.appendChild(link);
  }
};

// Bundle analysis helper (development only)
export const logBundleInfo = () => {
  if (process.env.NODE_ENV === 'development') {
    console.group('📦 Bundle Information');
    console.log('React version:', React.version);
    console.log('Code splitting enabled: ✅');
    console.log('Lazy loading components: ✅');
    console.log('Performance monitoring: ✅');
    console.groupEnd();
  }
};

// Styled Components
const LoaderContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem;
`;

const LoaderContent = styled.div`
  text-align: center;
`;

const LoaderSpinner = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;

  ${media.mobile} {
    width: 50px;
    height: 50px;
  }
`;

const SpinnerRing = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid var(--accent-primary);
  border-radius: 50%;
  animation: spin 1.2s linear infinite;

  &:nth-child(2) {
    animation-delay: -0.4s;
    border-top-color: var(--accent-secondary);
  }

  &:nth-child(3) {
    animation-delay: -0.8s;
    border-top-color: var(--accent-primary);
    opacity: 0.5;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoaderText = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  margin: 0;

  ${media.mobile} {
    font-size: 0.9rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${props => props.$isLoaded ? 1 : 0};
`;

const PlaceholderImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  font-size: 2rem;
`;

const lazyUtils = {
  LazyHome,
  LazyAbout,
  LazySkills,
  LazyProjects,
  LazyExperience,
  LazyContact,
  withLazyLoading,
  preloadComponent,
  preloadAllComponents,
  LazyImage,
  prefetchResource,
  logBundleInfo
};

export default lazyUtils;