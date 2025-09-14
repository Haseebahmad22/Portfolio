// Performance configuration for the portfolio
export const performanceConfig = {
  // Loading settings
  loading: {
    minLoadTime: 1500, // Minimum loading time for UX (ms)
    maxLoadTime: 5000, // Maximum loading time before error (ms)
    showProgress: true, // Show loading progress
    preloadDelay: 1000, // Delay before starting component preloading (ms)
  },

  // Code splitting settings
  codeSplitting: {
    enabled: true,
    preloadComponents: true,
    preloadDelay: 1000, // Delay between component preloads (ms)
    chunkNames: {
      home: 'home-chunk',
      about: 'about-chunk',
      skills: 'skills-chunk',
      projects: 'projects-chunk',
      experience: 'experience-chunk',
      contact: 'contact-chunk',
    }
  },

  // Animation settings
  animations: {
    reduceMotion: false, // Respect user's motion preferences
    defaultDuration: 0.3, // Default animation duration (s)
    staggerDelay: 0.1, // Stagger delay for list animations (s)
    pageTransition: 0.5, // Page transition duration (s)
    particleCount: {
      desktop: 100,
      tablet: 50,
      mobile: 25
    }
  },

  // Image optimization
  images: {
    lazyLoading: true,
    placeholder: true,
    webpSupport: true,
    retina: true,
    maxWidth: {
      hero: 1920,
      project: 800,
      thumbnail: 400
    }
  },

  // Performance monitoring
  monitoring: {
    enabled: process.env.NODE_ENV === 'development',
    fpsThreshold: {
      good: 45,
      fair: 30,
      poor: 0
    },
    memoryWarning: 100, // MB
    renderTimeWarning: 100, // ms
    trackInteractions: true,
    trackNavigation: true
  },

  // Bundle optimization
  bundle: {
    splitChunks: true,
    vendorChunk: true,
    runtimeChunk: true,
    treeshaking: true,
    compression: {
      gzip: true,
      brotli: true
    }
  },

  // Cache settings
  cache: {
    serviceWorker: false, // Enable service worker (for production)
    staticAssets: true,
    apiResponses: false,
    maxAge: {
      images: 86400, // 1 day
      styles: 3600, // 1 hour
      scripts: 3600, // 1 hour
    }
  },

  // Error handling
  errorHandling: {
    boundary: true,
    reporting: {
      enabled: process.env.NODE_ENV === 'production',
      endpoint: '/api/errors',
      includeStack: process.env.NODE_ENV === 'development',
      includeUserAgent: true,
      includeUrl: true
    },
    fallback: {
      showErrorId: true,
      showReportOption: true,
      showRefreshOption: true,
      showHomeOption: true
    }
  },

  // SEO and accessibility
  seo: {
    prerender: false,
    metaTags: true,
    structuredData: true,
    sitemap: true,
    robotsTxt: true
  },

  accessibility: {
    focusManagement: true,
    skipLinks: true,
    ariaLabels: true,
    colorContrast: 'AA', // WCAG level
    fontSize: {
      min: '16px',
      max: '24px'
    }
  },

  // Feature flags
  features: {
    darkMode: true,
    animations: true,
    particles: true,
    soundEffects: false,
    analytics: false,
    cookieConsent: false,
    newsletter: false,
    blog: false,
    multiLanguage: false
  }
};

// Environment-specific overrides
export const getPerformanceConfig = () => {
  const config = { ...performanceConfig };

  // Production optimizations
  if (process.env.NODE_ENV === 'production') {
    config.loading.minLoadTime = 800;
    config.animations.particleCount.desktop = 75;
    config.animations.particleCount.tablet = 40;
    config.animations.particleCount.mobile = 20;
    config.monitoring.enabled = false;
    config.cache.serviceWorker = true;
  }

  // Development settings
  if (process.env.NODE_ENV === 'development') {
    config.errorHandling.reporting.includeStack = true;
    config.monitoring.enabled = true;
  }

  // Mobile device optimizations
  if (typeof window !== 'undefined') {
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

    if (isMobile || isLowEnd) {
      config.animations.particleCount.mobile = 15;
      config.animations.defaultDuration = 0.2;
      config.animations.reduceMotion = true;
      config.images.maxWidth.hero = 1200;
    }
  }

  return config;
};

// Performance utilities
export const performanceUtils = {
  // Measure function execution time
  measureTime: (fn, label = 'Function') => {
    return async (...args) => {
      const start = performance.now();
      const result = await fn(...args);
      const end = performance.now();
      console.log(`⏱️ ${label} took ${(end - start).toFixed(2)}ms`);
      return result;
    };
  },

  // Debounce utility for performance
  debounce: (func, wait, immediate = false) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  },

  // Throttle utility for performance
  throttle: (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Check if user prefers reduced motion
  prefersReducedMotion: () => {
    return typeof window !== 'undefined' && 
           window.matchMedia && 
           window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Get device performance info
  getDevicePerformance: () => {
    if (typeof navigator === 'undefined') return 'unknown';
    
    const hardwareConcurrency = navigator.hardwareConcurrency || 2;
    const memory = navigator.deviceMemory || 4;
    
    if (hardwareConcurrency >= 8 && memory >= 8) return 'high';
    if (hardwareConcurrency >= 4 && memory >= 4) return 'medium';
    return 'low';
  },

  // Memory usage monitoring
  getMemoryUsage: () => {
    if (typeof performance !== 'undefined' && performance.memory) {
      return {
        used: Math.round(performance.memory.usedJSHeapSize / 1048576), // MB
        total: Math.round(performance.memory.totalJSHeapSize / 1048576), // MB
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) // MB
      };
    }
    return null;
  },

  // Network connection info
  getConnectionInfo: () => {
    if (typeof navigator !== 'undefined' && navigator.connection) {
      return {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt,
        saveData: navigator.connection.saveData
      };
    }
    return null;
  }
};

export default performanceConfig;