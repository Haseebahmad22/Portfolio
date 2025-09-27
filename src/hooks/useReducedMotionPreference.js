import { useEffect, useState } from 'react';

export default function useReducedMotionPreference() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    if (media.addEventListener) media.addEventListener('change', update);
    else if (media.addListener) media.addListener(update);
    return () => {
      if (media.removeEventListener) media.removeEventListener('change', update);
      else if (media.removeListener) media.removeListener(update);
    };
  }, []);

  return prefersReducedMotion;
}
