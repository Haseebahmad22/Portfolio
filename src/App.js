import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider } from './context/NavigationContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CursorTracker from './components/CursorTracker';
import LoadingScreen from './components/LoadingScreen';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy loaded components for code splitting
import {
  LazyHome,
  LazyAbout,
  LazySkills,
  LazyProjects,
  LazyContact,
  preloadAllComponents,
  logBundleInfo
} from './utils/lazyLoading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // Initialize app and measure load time
    const initializeApp = async () => {
      try {
        // Log bundle information in development
        logBundleInfo();

        // Simulate initial loading for demo purposes
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Start preloading components
        preloadAllComponents();

        // Mark app as ready
        setIsAppReady(true);
        setIsLoading(false);

        // Track performance metrics
        if (typeof window !== 'undefined' && window.performance) {
          const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
          console.log(`🚀 App loaded in ${loadTime}ms`);
        }
      } catch (error) {
        console.error('App initialization error:', error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Component-level loading fallback
  const ComponentLoader = () => (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '50vh',
      color: 'var(--text-secondary)'
    }}>
      Loading component...
    </div>
  );

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <NavigationProvider>
          <StyledThemeProvider theme={theme}>
            <GlobalStyles />
            
            {/* Loading screen */}
            <LoadingScreen 
              isLoading={isLoading} 
              onLoadComplete={() => setIsLoading(false)} 
            />

            {/* Main app content */}
            {isAppReady && (
              <Router>
                <CursorTracker />
                <Header />
                
                <main role="main">
                  <ErrorBoundary>
                    <Suspense fallback={<ComponentLoader />}>
                      <Routes>
                        <Route path="/" element={<LazyHome />} />
                        <Route path="/about" element={<LazyAbout />} />
                        <Route path="/skills" element={<LazySkills />} />
                        <Route path="/projects" element={<LazyProjects />} />
                        <Route path="/contact" element={<LazyContact />} />
                        {/* 404 fallback */}
                        <Route path="*" element={
                          <div style={{ 
                            textAlign: 'center', 
                            padding: '4rem 2rem',
                            color: 'var(--text-primary)'
                          }}>
                            <h1>404 - Page Not Found</h1>
                            <p>The page you're looking for doesn't exist.</p>
                            <a href="/" style={{ color: 'var(--accent-primary)' }}>
                              Go back home
                            </a>
                          </div>
                        } />
                      </Routes>
                    </Suspense>
                  </ErrorBoundary>
                </main>
                
                <Footer />
              </Router>
            )}

            {/* Performance monitoring (development only by default) */}
            <PerformanceMonitor showDebugInfo={false} />
          </StyledThemeProvider>
        </NavigationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;