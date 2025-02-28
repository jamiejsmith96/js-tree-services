import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // On initial mount, scroll instantly
    if (isInitialMount.current) {
      isInitialMount.current = false;
      window.scrollTo(0, 0);
      return;
    }

    // On subsequent route changes, scroll smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;