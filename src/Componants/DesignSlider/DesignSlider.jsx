import React, { memo, useState, useCallback, useEffect, useRef } from 'react';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import { useCart } from '../../contexts/CartContext';
import './DesignSlider.css';

const DesignSlider = memo(function DesignSlider() {
  const { addToCart } = useCart();
  
  const designs = [
    {
      id: 1,
      title: 'تصميم هوية بصرية شاملة',
      subtitle: 'لوقو وهوية بصرية',
      price: 650,
      originalPrice: 1200,
      discountPercentage: 45.83,
      savings: 550,
      description: 'تصميم هوية بصرية شاملة',
      highlight: '5 أيام عمل',
      hasDiscount: true
    },
    {
      id: 2,
      title: 'تصاميم سوشيال ميديا',
      subtitle: 'تصاميم السوشيال ميديا',
      price: 250,
      originalPrice: 300,
      discountPercentage: 16.67,
      savings: 50,
      description: 'تصاميم السوشيال ميديا',
      highlight: '3 أيام عمل',
      hasDiscount: true
    },
    {
      id: 3,
      title: 'بوسترات إعلانية',
      subtitle: 'تصاميم المطبوعات',
      price: 75,
      originalPrice: 89.99,
      discountPercentage: 16.66,
      savings: 14.99,
      description: 'بوسترات إعلانية احترافية',
      highlight: 'يومين عمل',
      hasDiscount: true
    },
    {
      id: 4,
      title: 'تصاميم متجر إلكتروني',
      subtitle: 'تصاميم التجارة الإلكترونية',
      price: 50,
      description: 'تصاميم متجر إلكتروني',
      highlight: 'اسبوع عمل',
      hasDiscount: false
    }
  ];

  // Responsive visible cards based on screen size
  const getVisibleCards = useCallback(() => {
    const width = window.innerWidth;
    if (width > 1024) return 4;      // Desktop: 4 cards
    if (width > 768) return 3;       // Tablet: 3 cards
    if (width > 480) return 2;       // Mobile: 2 cards
    return 1;                        // Small Mobile: 1 card
  }, []);

  const SLIDE_DURATION_MS = 220;
  const [visible, setVisible] = useState(getVisibleCards);
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, designs.length - visible);
  const [items, setItems] = useState(designs);
  const sectionRef = useRef(null);
  const [isRTL, setIsRTL] = useState(false);
  const trackRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const newVisible = getVisibleCards();
      if (newVisible !== visible) {
        setVisible(newVisible);
        // Reset index if it exceeds new maxIndex
        setIndex((prev) => Math.min(prev, Math.max(0, designs.length - newVisible)));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [visible, getVisibleCards, designs.length]);

  useEffect(() => {
    const dir = sectionRef.current?.getAttribute('dir') || document?.dir || 'ltr';
    setIsRTL(dir.toLowerCase() === 'rtl');
  }, []);

  // Slide then rotate to keep positions fixed visually
  const performSlide = useCallback((direction /* 'next' | 'prev' */) => {
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
  }, [SLIDE_DURATION_MS, items.length]);

  const nextSlide = useCallback(() => performSlide('next'), [performSlide]);
  const prevSlide = useCallback(() => performSlide('prev'), [performSlide]);

  const goTo = useCallback((i) => {
    setIndex(Math.min(Math.max(i, 0), maxIndex));
  }, [maxIndex]);

  const handleAddToCart = useCallback((design) => {
    addToCart({
      id: design.id,
      title: design.subtitle,
      price: design.price,
      originalPrice: design.originalPrice,
      discountPercentage: design.discountPercentage,
      savings: design.savings,
      hasDiscount: design.hasDiscount,
      description: design.description,
      highlight: design.highlight
    });
  }, [addToCart]);

  const currentPage = index;
  const totalPages = maxIndex + 1;

  return (
    <section className="design-slider" dir="rtl" ref={sectionRef}>
      <div className="design-slider__container">
        <h2 className="design-slider__title">التصميم الجرافيكي</h2>

        <div className="design-slider__wrapper">
          <div className="design-slider__track" ref={trackRef} style={{ transform: 'translateX(0)' }}>
            {items.map((design) => (
              <div key={design.id} className="design-slider__card">
                <div className="design-slider__header">
                  <img
                    src="https://cdn.salla.sa/DQYwE/60e65ac0-11ff-4c02-a51d-1df33680522d-500x375.10584250635-jfWA4k2ZTz1KIraipWtBoxrfuWrIO1Npoq146dPR.jpg"
                    alt="خدمة"
                    className="design-slider__header-image"
                  />
                </div>
                <div className="design-slider__content">
                  <h4 className="design-slider__description">{design.subtitle}</h4>
                  <div className="design-slider__pricing" dir="rtl">
                    {design.hasDiscount ? (
                      <div className="design-slider__discount-container">
                        <div className="design-slider__price-info">
                          <span className="design-slider__price design-slider__price--discounted">
                            {design.price} <SaudiRiyalIcon width={14} height={15} />
                          </span>
                          <span className="design-slider__original-price">
                            {design.originalPrice} <SaudiRiyalIcon width={12} height={13} />
                          </span>
                        </div>
                        <div className="design-slider__discount-info">
                          <div className="design-slider__discount-badge">
                            - % {design.discountPercentage}
                          </div>
                          <div className="design-slider__savings">
                            وفر {design.savings.toFixed(2)} <SaudiRiyalIcon width={12} height={13} />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <span className="design-slider__price">
                        {design.price} <SaudiRiyalIcon width={14} height={15} />
                      </span>
                    )}
                  </div>
                  <div className="design-slider__actions">
                    <button className="design-slider__favorite-btn">
                      <CiHeart />
                    </button>
                    <button 
                      className="design-slider__add-to-cart"
                      onClick={() => handleAddToCart(design)}
                    >
                      <TbShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="design-slider__controls">
          <button className="design-slider__arrow" onClick={isRTL ? prevSlide : nextSlide} aria-label="السابق">
            <HiArrowSmallRight />
          </button>
          <div className="design-slider__dots">
            {Array.from({ length: items.length }).map((_, i) => (
              <button 
                key={i} 
                className={`design-slider__dot ${i === index ? 'is-active' : ''}`} 
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
                }} 
                aria-label={`شريحة ${i + 1}`} 
              />
            ))}
          </div>
          <button className="design-slider__arrow" onClick={isRTL ? nextSlide : prevSlide} aria-label="التالي">
            <HiArrowSmallLeft />
          </button>
        </div>
      </div>
    </section>
  );
});

export default DesignSlider;
