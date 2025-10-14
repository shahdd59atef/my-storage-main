import React, { memo, useRef, useState, useEffect, useCallback } from 'react';
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import './ProductsSlider.css';

const ProductsSlider = memo(function ProductsSlider() {
  const products = [
    {
      id: 1,
      title: 'إنشاء موقع ووردبرس',
      subtitle: 'برمجة مواقع الويب WordPress',
      price: 1500,
      description: 'إنشاء موقع ووردبرس احترافي',
      highlight: 'اسبوع عمل فقط'
    },
    {
      id: 2,
      title: 'تطوير تطبيقات الجوال',
      subtitle: 'برمجة تطبيقات الأندرويد',
      price: 2500,
      description: 'تطوير تطبيقات الجوال',
      highlight: 'اسبوعين عمل'
    },
    {
      id: 3,
      title: 'تصميم هوية بصرية',
      subtitle: 'لوقو وهوية بصرية',
      price: 800,
      description: 'تصميم هوية بصرية شاملة',
      highlight: '5 أيام عمل'
    },
    {
      id: 4,
      title: 'تسويق رقمي',
      subtitle: 'إدارة الحملات الإعلانية',
      price: 1200,
      description: 'تسويق رقمي احترافي',
      highlight: 'اسبوع عمل'
    }
  ];

  const SLIDE_DURATION_MS = 220;
  const visible = 3;
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, products.length - visible);
  const [items, setItems] = useState(products);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const dir = sectionRef.current?.getAttribute('dir') || document?.dir || 'ltr';
    setIsRTL(dir.toLowerCase() === 'rtl');
  }, []);

  const performSlide = useCallback((direction /* 'next' | 'prev' */) => {
    const track = trackRef.current;
    if (!track || isAnimatingRef.current) return;
    const firstCard = track.children && track.children[0];
    if (!firstCard) return;

    const cardRect = firstCard.getBoundingClientRect();
    const styles = window.getComputedStyle(track);
    const gapPx = parseFloat(styles.columnGap || styles.gap || '0');
    const step = cardRect.width + gapPx;

    // match usernames slider behavior: move right on next
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
        setItems((prev) => {
          const arr = prev.slice();
          if (direction === 'next') {
            const f = arr.shift(); if (f) arr.push(f);
          } else {
            const l = arr.pop(); if (l) arr.unshift(l);
          }
          return arr;
        });
        setIndex((p) => direction === 'next' ? (p + 1) % items.length : (p - 1 + items.length) % items.length);
        requestAnimationFrame(() => {
          track.style.transition = '';
          track.style.willChange = '';
          isAnimatingRef.current = false;
        });
      });
    };
    track.addEventListener('transitionend', onEnd);
  }, [SLIDE_DURATION_MS, items.length]);

  const next = useCallback(() => performSlide('next'), [performSlide]);
  const prev = useCallback(() => performSlide('prev'), [performSlide]);

  useEffect(() => {
    const onResize = () => {
      // no-op to keep behavior; could recalc if needed
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section className="products-slider" dir="rtl" ref={sectionRef}>
      <div className="products-slider__container">
        <h2 className="products-slider__title">زود متابعينك</h2>

        <div className="products-slider__wrapper">
          <div className="products-slider__track" ref={trackRef} style={{ transform: 'translateX(0)' }}>
            {items.map((product) => (
              <div key={product.id} className="products-slider__card">
                <div className="products-slider__header">
                  <img 
                    src="https://cdn.salla.sa/DQYwE/60e65ac0-11ff-4c02-a51d-1df33680522d-500x375.10584250635-jfWA4k2ZTz1KIraipWtBoxrfuWrIO1Npoq146dPR.jpg" 
                    alt="خدمة" 
                    className="products-slider__header-image"
                  />
                </div>
                <div className="products-slider__content">
                  <h4 className="products-slider__description">{product.subtitle}</h4>
                  <div className="products-slider__pricing">
                    <span className="products-slider__price">{product.price} <SaudiRiyalIcon width={14} height={15} color="#ffffff" /></span>
                  </div>
                  <div className="products-slider__actions">
                    <button className="products-slider__favorite-btn">
                      <CiHeart />
                    </button>
                    <button className="products-slider__add-to-cart">
                      <TbShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="products-slider__controls">
          <button className="products-slider__arrow" onClick={prev} aria-label="السابق">
            <HiArrowSmallRight />
          </button>
          <div className="products-slider__dots">
            {Array.from({ length: items.length }).map((_, i) => (
              <button key={i} className={`products-slider__dot ${i===index? 'is-active':''}`}
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
          <button className="products-slider__arrow" onClick={next} aria-label="التالي">
            <HiArrowSmallLeft />
          </button>
        </div>
      </div>
    </section>
  );
});

export default ProductsSlider;
