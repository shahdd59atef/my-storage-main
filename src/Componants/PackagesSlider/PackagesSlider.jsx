import React, { memo, useRef, useState, useEffect } from 'react';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import './PackagesSlider.css';

const PackagesSlider = memo(function PackagesSlider() {
  const packages = [
    {
      id: 1,
      title: 'إدارة حساب تويتر | باقة برونزية',
      background: 'linear-gradient(135deg, #1da1f2 0%, #0c7abf 100%)',
      icon: '🐦',
      subtitle: 'إدارة حسابات تويتر',
      price: 600,
      oldPrice: 1000,
      saved: 400
    },
    {
      id: 2,
      title: 'إدارة حساب تويتر | باقة فضية',
      background: 'linear-gradient(135deg, #1da1f2 0%, #0c7abf 100%)',
      icon: '🐦',
      subtitle: 'إدارة حسابات تويتر',
      price: 1200,
      oldPrice: 2000,
      saved: 800
    },
    {
      id: 3,
      title: 'باقة التسويق لإدارة حسابات التواصل الاجتماعي',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #334155 100%)',
      icon: '📢',
      subtitle: 'باقة التسويق',
      price: 1300
    },
    {
      id: 4,
      title: 'باقة تصميم المتجر والتسويق',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #334155 100%)',
      icon: '🏪',
      subtitle: 'إنشاء متجر الكتروني احترافي سعودي رقمي',
      price: 2309
    },
    {
      id: 5,
      title: 'إدارة حساب انستقرام | باقة ذهبية',
      background: 'linear-gradient(135deg, #c13584 0%, #833ab4 100%)',
      icon: '📷',
      subtitle: 'إدارة حسابات انستقرام',
      price: 1500,
      oldPrice: 2500,
      saved: 1000
    },
    {
      id: 6,
      title: 'باقة السوشيال ميديا الشاملة',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '📱',
      subtitle: 'إدارة جميع حسابات التواصل الاجتماعي',
      price: 3500
    }
  ];

  const SLIDE_DURATION_MS = 220;
  const visible = 4;
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, packages.length - visible);
  const [items, setItems] = useState(packages);
  const sectionRef = useRef(null);
  const [isRTL, setIsRTL] = useState(false);
  const trackRef = useRef(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const dir = sectionRef.current?.getAttribute('dir') || document?.dir || 'ltr';
    setIsRTL(dir.toLowerCase() === 'rtl');
  }, []);

  // Slide animation then rotate to keep positions fixed visually
  const performSlide = (direction /* 'next' | 'prev' */) => {
    const track = trackRef.current;
    if (!track || isAnimatingRef.current) return;
    const firstCard = track.children && track.children[0];
    if (!firstCard) return;

    const cardRect = firstCard.getBoundingClientRect();
    const styles = window.getComputedStyle(track);
    const gapPx = parseFloat(styles.columnGap || styles.gap || '0');
    const step = cardRect.width + gapPx;

    const delta = direction === 'next' ? step : -step;

    isAnimatingRef.current = true;
    track.style.willChange = 'transform';
    track.style.transition = `transform ${SLIDE_DURATION_MS}ms cubic-bezier(.4,0,.2,1)`;
    track.style.transform = `translateX(${delta}px)`;

    const onEnd = () => {
      track.removeEventListener('transitionend', onEnd);
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';

      requestAnimationFrame(() => {
        setItems(prev => {
          const arr = prev.slice();
          if (direction === 'next') {
            const f = arr.shift();
            if (f) arr.push(f);
          } else {
            const l = arr.pop();
            if (l) arr.unshift(l);
          }
          return arr;
        });
        setIndex(p => direction === 'next' ? (p + 1) % items.length : (p - 1 + items.length) % items.length);
        requestAnimationFrame(() => {
          track.style.transition = '';
          track.style.willChange = '';
          isAnimatingRef.current = false;
        });
      });
    };
    track.addEventListener('transitionend', onEnd);
  };

  const nextSlide = () => performSlide('next');
  const prevSlide = () => performSlide('prev');

  return (
    <section className="packages-slider" dir="rtl" ref={sectionRef}>
      <div className="packages-slider__container">
        <h2 className="packages-slider__title">باقات مميزة</h2>

        <div className="packages-slider__wrapper">
          <div className="packages-slider__track" ref={trackRef} style={{ transform: 'translateX(0)' }}>
            {items.map((pkg) => (
              <div key={pkg.id} className="packages-slider__card">
                <div className="packages-slider__header">
                  <img
                    src="https://cdn.salla.sa/DQYwE/60e65ac0-11ff-4c02-a51d-1df33680522d-500x375.10584250635-jfWA4k2ZTz1KIraipWtBoxrfuWrIO1Npoq146dPR.jpg"
                    alt="خدمة"
                    className="packages-slider__header-image"
                  />
                </div>
                <div className="packages-slider__content">
                  <h4 className="packages-slider__description">{pkg.subtitle}</h4>
                  <div className="packages-slider__pricing">
                    <span className="packages-slider__price" dir="rtl">
                      {pkg.price}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" width="12" height="13" aria-label="Saudi Riyal" title="Saudi Riyal" style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: '2px'}}>
                        <path fill="#ffffff" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path>
                        <path fill="#ffffff" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="packages-slider__actions">
                    <button className="packages-slider__favorite-btn">
                      <CiHeart />
                    </button>
                    <button className="packages-slider__add-to-cart">
                      <TbShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="packages-slider__controls">
          <button className="packages-slider__arrow" onClick={isRTL ? prevSlide : nextSlide} aria-label="السابق">
            <HiArrowSmallRight />
          </button>
          <div className="packages-slider__dots">
            {Array.from({ length: items.length }).map((_, i) => (
              <button key={i} className={`packages-slider__dot ${i===index? 'is-active':''}`}
                onClick={() => {
                  let steps = (i - index + items.length) % items.length;
                  if (steps === 0) return;
                  const stepOnce = () => {
                    if (steps <= 0) return;
                    performSlide('next');
                    steps -= 1;
                    if (steps > 0) setTimeout(stepOnce, SLIDE_DURATION_MS + 20);
                  };
                  stepOnce();
                }} aria-label={`شريحة ${i+1}`} />
            ))}
          </div>
          <button className="packages-slider__arrow" onClick={isRTL ? nextSlide : prevSlide} aria-label="التالي">
            <HiArrowSmallLeft />
          </button>
        </div>
      </div>
    </section>
  );
});

export default PackagesSlider;
