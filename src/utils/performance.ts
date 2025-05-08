export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Track First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime);
          // You can send this to your analytics
        }
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Track Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('LCP:', entry.startTime);
        // You can send this to your analytics
      });
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Track First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
        // You can send this to your analytics
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Track Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('CLS:', entry.value);
        // You can send this to your analytics
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Track Time to Interactive (TTI)
    const ttiObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('TTI:', entry.duration);
        // You can send this to your analytics
      });
    });
    ttiObserver.observe({ entryTypes: ['longtask'] });
  }
};

export const trackResourceTiming = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const resources = performance.getEntriesByType('resource');
    resources.forEach((resource) => {
      console.log('Resource:', {
        name: resource.name,
        duration: resource.duration,
        size: resource.transferSize,
        type: resource.initiatorType,
      });
      // You can send this to your analytics
    });
  }
};

export const trackError = (error: Error) => {
  console.error('Error:', error);
  // You can send this to your analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
    window.gtag('event', 'error', {
      error_name: error.name,
      error_message: error.message,
      error_stack: error.stack,
    });
  }
}; 