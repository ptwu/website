import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HxhArt from '@/assets/img/hxhart.png';
import styles from './index.module.css';

// Fixed coordinates keep the stars aligned with the artwork at every screen size.
const stars = [
  [190, 240], [290, 170], [365, 290], [420, 125], [545, 205],
  [660, 285], [730, 390], [610, 510], [470, 590], [330, 490],
  [225, 410], [520, 405], [395, 395], [575, 320],
];

// Deterministic geometry: identical server/client output, no animation library.
const dust = Array.from({ length: 720 }, (_, index) => {
  const noise = (seed: number) => {
    const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
    return value - Math.floor(value);
  };
  const distance = 18 + Math.pow(noise(index + 1), 0.7) * 320;
  const angle = distance * 0.019 + (index % 3) * Math.PI * 2 / 3 + (noise(index + 900) - 0.5) * 0.8;
  return {
    x: 400 + Math.cos(angle) * distance,
    y: 400 + Math.sin(angle) * distance,
    radius: 0.5 + noise(index + 1800) * 1.5,
    opacity: 0.15 + noise(index + 2700) * 0.65,
  };
});

export default function AnimatedHxhArt() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element || !('IntersectionObserver' in window)) return;
    // Suspend decorative work when the illustration leaves the viewport.
    const observer = new IntersectionObserver(([entry]) => {
      element.dataset.paused = String(!entry.isIntersecting || document.hidden);
    });
    const onVisibility = () => {
      if (document.hidden) element.dataset.paused = 'true';
      else {
        const rect = element.getBoundingClientRect();
        element.dataset.paused = String(rect.bottom <= 0 || rect.top >= innerHeight);
      }
    };
    observer.observe(element);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div
      ref={root}
      className={`${styles.art} w-full md:w-3/5 mx-auto`}
      onPointerMove={(event) => {
        if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty('--galaxy-x', `${((event.clientX - rect.left) / rect.width - 0.5) * 5}px`);
        event.currentTarget.style.setProperty('--galaxy-y', `${((event.clientY - rect.top) / rect.height - 0.5) * 5}px`);
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty('--galaxy-x', '0px');
        event.currentTarget.style.setProperty('--galaxy-y', '0px');
      }}
    >
      <Image
        src={HxhArt}
        className={styles.original}
        alt="My Hunter × Hunter line art: Gon and Killua looking toward a slowly swirling galaxy."
        sizes="(min-width: 1280px) 768px, (min-width: 768px) 60vw, 100vw"
        priority
      />
      <div className={styles.nebula} aria-hidden="true">
        <div className={styles.aura} />
        <svg className={styles.cosmos} viewBox="0 0 800 800" fill="none">
          <g className={styles.orbits}>
            <ellipse cx="400" cy="400" rx="325" ry="195" transform="rotate(-28 400 400)" />
            <ellipse cx="400" cy="400" rx="285" ry="175" transform="rotate(32 400 400)" />
            <ellipse cx="400" cy="400" rx="355" ry="255" transform="rotate(-12 400 400)" strokeDasharray="1 18" />
          </g>
          <g transform="translate(400 400) rotate(-24) scale(1 .72) translate(-400 -400)">
            <g className={styles.spiral}>
              {dust.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={point.radius} opacity={point.opacity} className={index % 7 === 0 ? styles.ice : styles.dust} />
              ))}
              {[0, 120, 240].map((angle) => (
                <path key={angle} className={styles.arm} transform={`rotate(${angle} 400 400)`} d="M400 400 C430 375 485 400 490 455 C510 560 375 625 270 540 C125 420 260 210 430 220" />
              ))}
            </g>
          </g>
          <g className={styles.beacons}>
            {[[174, 286], [590, 215], [654, 476], [315, 615], [240, 455]].map(([x, y], index) => (
              <g key={index} className={styles.star} style={{ animationDelay: `${index * -1.4}s` }}>
                <path d={`M${x - 6} ${y}h12 M${x} ${y - 6}v12`} />
                <circle cx={x} cy={y} r="2" />
              </g>
            ))}
          </g>
          <circle className={styles.coreRing} cx="400" cy="400" r="13" />
          <circle className={styles.core} cx="400" cy="400" r="4" />
        </svg>
      </div>
      <div className={styles.galaxy} aria-hidden="true">
        <div className={styles.disc}>
          <Image src={HxhArt} alt="" fill sizes="(min-width: 1280px) 768px, (min-width: 768px) 60vw, 100vw" />
        </div>
        <svg className={styles.stars} viewBox={`0 0 ${HxhArt.width} ${HxhArt.height}`}>
          {stars.map(([x, y], index) => (
            <g key={index} className={styles.star} style={{ animationDelay: `${index * -0.73}s`, animationDuration: `${4 + index % 4}s` }}>
              <path d={`M ${x - 4} ${y} h 8 M ${x} ${y - 4} v 8`} />
              <circle cx={x} cy={y} r="1.3" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
