import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DOODLE_CLASSES = [
  'doodle-star',
  'doodle-fox',
  'doodle-skier',
  'doodle-bulb',
  'doodle-sun',
  'doodle-megaphone',
  'doodle-laptop',
  'doodle-chat',
  'doodle-rocket',
  'doodle-alt doodle-alt-1',
  'doodle-alt doodle-alt-2',
  'doodle-alt doodle-alt-3',
  'doodle-alt doodle-alt-4',
  'doodle-alt doodle-alt-5',
  'doodle-alt doodle-alt-6',
  'doodle-alt doodle-alt-7',
  'doodle-alt doodle-alt-8',
  'doodle-alt doodle-alt-9',
];

export default function DoodleLayer() {
  const { pathname } = useLocation();

  useEffect(() => {
    const layer = document.querySelector<HTMLElement>('.doodle-layer');
    if (!layer) {
      return;
    }

    const layoutDoodles = () => {
      const doodles = Array.from(layer.querySelectorAll<HTMLElement>('.doodle'));
      if (!doodles.length) {
        return;
      }

      const totalHeight = Math.max(layer.parentElement?.scrollHeight ?? 0, window.innerHeight);
      const step = totalHeight / (doodles.length + 1);

      doodles.forEach((doodle, index) => {
        const size = Math.round(110 + Math.random() * 140);
        const hiddenRatio = 0.1 + Math.random() * 0.08;
        const offset = Math.round(size * hiddenRatio);
        const verticalJitter = Math.round((Math.random() - 0.5) * step * 0.2);
        const nudge = Math.round((Math.random() - 0.5) * 18);
        const side = index % 2 === 0 ? 'left' : 'right';

        let top = Math.round(step * (index + 1) + verticalJitter);
        top = Math.max(0, Math.min(totalHeight - size, top));

        doodle.style.top = `${top}px`;
        doodle.style.left = '';
        doodle.style.right = '';
        doodle.style.setProperty('--doodle-size', `${size}px`);
        doodle.style.setProperty('--doodle-jitter', `${nudge}px`);
        doodle.style.setProperty('--doodle-enter', side === 'left' ? '-40px' : '40px');

        if (side === 'left') {
          doodle.style.left = `${-offset}px`;
        } else {
          doodle.style.right = `${-offset}px`;
        }

        doodle.classList.remove('is-ready');
      });

      requestAnimationFrame(() => {
        doodles.forEach((doodle, idx) => {
          doodle.style.transitionDelay = `${Math.min(idx * 30, 240)}ms`;
          doodle.classList.add('is-ready');
        });
      });
    };

    // Let the new route render before measuring page height.
    const raf = requestAnimationFrame(layoutDoodles);

    let resizeTimeout: number | undefined;
    const handleResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(layoutDoodles, 120);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [pathname]);

  return (
    <div className="doodle-layer" aria-hidden="true">
      {DOODLE_CLASSES.map((cls) => (
        <span key={cls} className={`doodle ${cls}`} />
      ))}
    </div>
  );
}
