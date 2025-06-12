import { useEffect } from 'react';

const useSlideUpOnScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll('.slide-up');
    targets.forEach(target => observer.observe(target));

    return () => observer.disconnect();
  }, []);
};

export default useSlideUpOnScroll;
