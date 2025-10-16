import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

export default function Stats() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  
  const stats = [
    { value: 1000, label: 'وثقوا حساباتهم معنا بنجاح' },
    { value: 440, label: 'يثقون بخدماتنا للتوثيق والنمو' },
    { value: 670, label: 'حصلوا على تفاعل وحضور قوي' },
    { value: 500, label: 'حساب موثق عبر عز' }
  ];

  // Start only once when the section first enters viewport (no scroll coupling)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { root: null, threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Animate once after visible
  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1200; // ms
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setCounts(stats.map((stat) => Math.floor(stat.value * eased)));
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((s) => s.value));
      }
    };
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [hasStarted]);

  return (
    <section className="stats" dir="rtl" ref={sectionRef}>
      <div className="stats__container">
        <h2 className="stats__title">انضم لآلاف التجار الآن</h2>
        <div className="stats__divider" />
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <div key={index} className="stats__item">
              <div className="stats__num">
                <span className={hasStarted ? 'stats__num--animating' : 'stats__num--stable'}>
                  {counts[index].toLocaleString('en-US')}
                </span>+
              </div>
              <div className="stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}