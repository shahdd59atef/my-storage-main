import React, { memo, useState } from 'react';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import './SocialServicesSlider.css';

const SocialServicesSlider = memo(function SocialServicesSlider() {
  const services = [
    {
      id: 1,
      title: 'حساب انستقرام | 12k',
      background: 'linear-gradient(135deg, #c13584 0%, #833ab4 100%)',
      icon: '📷',
      platform: 'حساب انستقرام',
      price: 550,
      oldPrice: 700,
      saved: 150
    },
    {
      id: 2,
      title: 'اشتراك شهري تغريدات | لايك - ريتويت',
      subtitle: 'اشتراك شهري لخدمات تويتر',
      background: 'linear-gradient(135deg, #1da1f2 0%, #0c7abf 100%)',
      icon: '🐦',
      platform: 'اشتراك شهري',
      price: 350,
      oldPrice: 400,
      saved: 50
    },
    {
      id: 3,
      title: 'اشتراك أسبوعي تغريدات | لايك - ريتويت',
      background: 'linear-gradient(135deg, #1da1f2 0%, #0c7abf 100%)',
      icon: '🐦',
      platform: 'اشتراك أسبوعي',
      price: 150,
      oldPrice: 200,
      saved: 50
    },
    {
      id: 4,
      title: 'حساب تيك توك | 50k متابع',
      background: '#1a1a1a',
      icon: '🎵',
      platform: 'حساب تيك توك',
      price: 800,
      oldPrice: 1200,
      saved: 400
    }
  ];

  const visible = 3;
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, services.length - visible);

  // Manual navigation functions
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <section className="social-services" dir="rtl">
      <div className="social-services__container">
        <div className="social-services__header">
          <h2 className="social-services__title">خدمات السوشيال ميديا</h2>
          <a href="/social-media-services" className="social-services__view-all">عرض الكل</a>
        </div>

        <div className="social-services__wrapper">
          <div className="social-services__track" style={{ transform: `translateX(-${index * (100/visible)}%)` }}>
            {services.map((service) => (
              <div key={service.id} className="social-services__card">
                <div className="social-services__header">
                  <div className="social-services__logo">
                    <div className="social-services__logo-bg">
                      <span className="social-services__logo-text">Z</span>
                    </div>
                    <span className="social-services__logo-subtitle">عز للخدمات التسويقية</span>
                  </div>
                  <div className="social-services__title-section">
                    <h4 className="social-services__name">{service.title}</h4>
                    <div className="social-services__highlight">
                      <span>اسبوع عمل فقط</span>
                    </div>
                    <button className="social-services__order-btn">اطلب خدمتك الآن</button>
                  </div>
                  <div className="social-services__laptop">
                    <div className="social-services__laptop-screen">
                      <div className="social-services__website-mockup"></div>
                    </div>
                  </div>
                </div>
                <div className="social-services__content">
                  <h4 className="social-services__description">{service.platform}</h4>
                  <div className="social-services__pricing">
                    <span className="social-services__price" dir="rtl">
                      {service.price}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" width="12" height="13" aria-label="Saudi Riyal" title="Saudi Riyal" style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: '2px'}}>
                        <path fill="#ffffff" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path>
                        <path fill="#ffffff" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="social-services__actions">
                    <button className="social-services__favorite-btn">
                      <CiHeart />
                    </button>
                    <button className="social-services__add-to-cart">
                      <TbShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="social-services__controls">
          <button className="social-services__arrow" onClick={prevSlide} aria-label="السابق">
            <HiArrowSmallRight />
          </button>
          <div className="social-services__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} className={`social-services__dot ${i===index? 'is-active':''}`} onClick={() => setIndex(i)} aria-label={`شريحة ${i+1}`} />
            ))}
          </div>
          <button className="social-services__arrow" onClick={nextSlide} aria-label="التالي">
            <HiArrowSmallLeft />
          </button>
        </div>
      </div>
    </section>
  );
});

export default SocialServicesSlider;
