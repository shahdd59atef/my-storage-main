import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

export default function Stats() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  
  const stats = [
    { value: 1000, label: 'وثقوا حساباتهم معنا بنجاح' },
    { value: 440, label: 'يثقون بخدماتنا للتوثيق والنمو' },
    { value: 670, label: 'حصلوا على تفاعل وحضور قوي' },
    { value: 500, label: 'حساب موثق عبر عز' }
  ];

  // Detect when section becomes visible and handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (inView && !isVisible) {
        setIsVisible(true);
      }
      
      if (inView) {
        setIsScrolling(true);
        
        // Clear previous timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        // Set new timeout to detect when scrolling stops
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isVisible]);

  // Animation while scrolling
  useEffect(() => {
    if (!isVisible) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      
      if (isScrolling) {
        // While scrolling: count continuously but slowly
        const slowProgress = Math.min(elapsed / 10000, 1); // Very slow, 10 seconds to complete
        setCounts(stats.map(stat => Math.floor(stat.value * slowProgress)));
        
        if (slowProgress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      } else {
        // When scrolling stops: quickly complete to final values
        const quickProgress = Math.min(elapsed / 800, 1); // Fast completion in 0.8 seconds
        setCounts(stats.map(stat => Math.floor(stat.value * quickProgress)));
        
        if (quickProgress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCounts(stats.map(stat => stat.value));
        }
      }
    };

    // Reset start time when scrolling state changes
    startTimeRef.current = null;
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isScrolling, isVisible]);

  return (
    <section className="stats" dir="rtl" ref={sectionRef}>
      <div className="stats__container">
        <h2 className="stats__title">انضم لآلاف التجار الآن</h2>
        <div className="stats__divider" />
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <div key={index} className="stats__item">
              <div className="stats__num">
                <span className={isScrolling ? 'stats__num--animating' : 'stats__num--stable'}>
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