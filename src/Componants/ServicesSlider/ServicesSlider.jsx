import React, { memo, useState, useCallback, useEffect } from 'react';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import './ServicesSlider.css';

const ServicesSlider = memo(function ServicesSlider() {
  // بيانات البطاقات (صورة + عنوان + رابط)
  const items = [
    { id: 'social', title: 'خدمات التواصل الإجتماعي', img: 'https://cdn.salla.sa/form-builder/wQpsBmml66COkI01vSIjWfiTSUI8sCX7tuFssmYN.png', link: '/social-media-services' },
    { id: 'sale', title: 'حسابات للبيع', img: 'https://cdn.salla.sa/form-builder/RSKdJKJz4pshenKIdXj8P4VW3tz2JkAbHFLHfAFK.png', link: '/accounts-for-sale' },
    { id: 'followers', title: 'زيادة متابعين', img: 'https://cdn.salla.sa/form-builder/WQw3Fo3kqhEsZ6YefCVHWeosifusMWp0wj6Fde6t.png', link: '/snapchat-followers' },
    { id: 'verify', title: 'توثيق حسابات', img: 'https://cdn.salla.sa/form-builder/EVXgJ9IAquPE5nyRK1cLCk0BRWIFITOqWKq4Y6uo.png', link: '/verification-services' },
    { id: 'ads', title: 'حملات إعلانات ممولة', img: 'https://cdn.salla.sa/form-builder/Tahg2y3wrxH9hy2qHNEY43cbOQLzUhMwitbhYDUS.png', link: '/ads-campaigns-services' },
    { id: 'dev', title: 'برمجة', img: 'https://cdn.salla.sa/form-builder/0gY5BTTaGdjXFrJdQybAHlmlOfr5Af6nv6pPYGdc.png', link: '/web-apps' },
    { id: 'exclusive', title: 'يوزرات حصرية', img: 'https://cdn.salla.sa/form-builder/V02YZMlYZ8BtAxcsyHgznb8COwnMQrFfheQHte5h.png', link: '/usernames-services' },
  ];

  // Responsive visible cards based on screen size
  const getVisibleCards = useCallback(() => {
    const width = window.innerWidth;
    if (width > 1024) return 6;      // Desktop: 6 cards
    if (width > 768) return 4;       // Tablet: 4 cards
    if (width > 480) return 3;       // Mobile: 3 cards
    return 2;                        // Small Mobile: 2 cards
  }, []);

  const [visible, setVisible] = useState(getVisibleCards);
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visible);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const newVisible = getVisibleCards();
      if (newVisible !== visible) {
        setVisible(newVisible);
        // Reset index if it exceeds new maxIndex
        setIndex((prev) => Math.min(prev, Math.max(0, items.length - newVisible)));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [visible, getVisibleCards, items.length]);

  // Move one card at a time for smooth scrolling like Facebook
  const next = useCallback(() => {
    setIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  }, [maxIndex]);

  const goTo = useCallback((i) => {
    setIndex(Math.min(Math.max(i, 0), maxIndex));
  }, [maxIndex]);

  const currentPage = index;
  const totalPages = maxIndex + 1;

  // Calculate card width + gap for smooth scrolling
  const getCardWidth = useCallback(() => {
    const width = window.innerWidth;
    if (width > 1024) return 170 + 24; // 170px card + 1.5rem gap (24px)
    if (width > 768) return 170 + 20;  // 170px card + 1.25rem gap (20px)
    if (width > 480) return 130 + 12.8; // 130px card + 0.8rem gap (12.8px)
    return 110 + 9.6; // 110px card + 0.6rem gap (9.6px)
  }, []);

  const [cardWidth, setCardWidth] = useState(getCardWidth);

  // Update card width on resize
  useEffect(() => {
    const handleResize = () => {
      const newCardWidth = getCardWidth();
      if (newCardWidth !== cardWidth) {
        setCardWidth(newCardWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardWidth, getCardWidth]);

  return (
    <section className="services" dir="rtl">
      <div className="services__container">
        <h2 className="services__title">خدماتنا</h2>

        <div className="services__slider">
          <div className="services__viewport">
            <div className="services__track" style={{ transform: `translateX(${index * cardWidth}px)` }}>
              {items.map((it) => (
                <a key={it.id} href={it.link} className="services__item">
                  <div className="services__card">
                    <img className="services__img" src={it.img} alt={it.title} />
                  </div>
                  <div className="services__label">{it.title}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="services__controls">
          <button className="services__arrow" onClick={prev} aria-label="السابق">
            <HiArrowSmallRight />
          </button>
          <div className="services__dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} className={`services__dot ${i===currentPage? 'is-active':''}`} onClick={() => goTo(i)} aria-label={`صفحة ${i+1}`} />
            ))}
          </div>
          <button className="services__arrow" onClick={next} aria-label="التالي">
            <HiArrowSmallLeft />
          </button>
        </div>
      </div>
    </section>
  );
});

export default ServicesSlider;
