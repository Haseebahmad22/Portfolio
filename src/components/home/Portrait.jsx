import React from 'react';
import { PortraitWrapper, PortraitFrame, PortraitImage, PortraitGlow } from './HomeStyles';

// Simple portrait block that replaces the TechTabs visual space on Home.
// Uses a public image (update src if you add a dedicated headshot file later).
const Portrait = () => {
  return (
    <PortraitWrapper data-aos="fade-left" data-aos-delay="150">
      <PortraitFrame whileHover={{ rotate: 1.5, scale: 1.015 }} whileTap={{ scale: 0.98 }}>
        <PortraitGlow />
        {/* Replace src with your real headshot file (add to public/ e.g. /portrait.jpg). */}
        <PortraitImage
          src="/profile.png"
          alt="Profile"
          loading="lazy"
          decoding="async"
          onError={(e)=>{
            // Fallback to /porfile.png if /profile.png is missing; then to a gradient placeholder
            if(!e.currentTarget.dataset.fallbackTried){
              e.currentTarget.dataset.fallbackTried = '1';
              e.currentTarget.src = '/porfile.png';
            } else if(!e.currentTarget.dataset.placeholder){
              e.currentTarget.dataset.placeholder = '1';
              e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0%' stop-color='%236366f1'/><stop offset='50%' stop-color='%23a855f7'/><stop offset='100%' stop-color='%23ec4899'/></linearGradient></defs><rect width='800' height='800' fill='url(%23g)'/></svg>";
            }
          }}
          style={{ position:'relative', zIndex:2 }}
        />
      </PortraitFrame>
    </PortraitWrapper>
  );
};

export default Portrait;
