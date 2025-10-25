import React, { memo, useEffect, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './SocialMediaServices.css';
import ReviewsSlider from '../ReviewsSlider/ReviewsSlider';

const SocialMediaServices = memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedSort, setSelectedSort] = useState('ترتيب مقترحاتنا');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Use ReviewsSlider on mobile only
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      alert('يرجى تسجيل الدخول للاستفادة من هذه الميزة');
      return;
    }
  };
  
  const products = [
    {
      id: 1,
      title: 'خدمات سناب شات الشاملة',
      price: '100',
      category: 'سناب شات',
      icon: '👻',
      badge: '1★'
    },
    {
      id: 2,
      title: 'خدمات انستقرام المتكاملة',
      price: '100',
      category: 'انستقرام',
      icon: '📷',
      badge: '1★'
    },
    {
      id: 3,
      title: 'خدمات تيك توك المميزة',
      price: '100',
      category: 'تيك توك',
      icon: '🎵',
      badge: '1★'
    },
    {
      id: 4,
      title: 'خدمات تويتر الاحترافية',
      price: '100',
      category: 'تويتر',
      icon: '🐦',
      badge: '1★'
    }
  ];

  // Function to get correct product count text
  const getProductCountText = (num) => {
    if (num === 0) return 'لا توجد منتجات';
    if (num === 1) return 'منتج واحد';
    if (num === 2) return 'منتجين';
    if (num >= 3 && num <= 10) return `${num} منتجات`;
    if (num > 10) return `${num} منتج`;
    
    return `${num} منتج`;
  };

  const reviews = [
    {
      id: 1,
      text: "خدمات السوشيال ميديا ممتازة ونتائج سريعة",
      name: "راكان العنزي",
      date: "02/28/2024",
      rating: 5
    },
    {
      id: 2,
      text: "فريق محترف وأسعار مناسبة",
      name: "جود الحربي",
      date: "02/24/2024",
      rating: 5
    },
    {
      id: 3,
      text: "أفضل موقع لخدمات التواصل الاجتماعي",
      name: "ناصر القرشي",
      date: "02/18/2024",
      rating: 5
    }
  ];

  // Reviews Slider navigation functions
  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Sort options
  const sortOptions = [
    'ترتيب مقترحاتنا',
    'الأحدث أولاً',
    'الأقدم أولاً',
    'الأقل سعراً',
    'الأعلى سعراً',
    'الأكثر شعبية'
  ];

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="social-media-services">
      {/* Main Content */}
      <main className="social-media-services__main">
        <div className="social-media-services__container">
          <div className="social-media-services__sub-nav">
            <div className="social-media-services__dropdown-container">
              <button 
                className="social-media-services__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="social-media-services__dropdown-arrow">
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="social-media-services__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button 
                      key={index}
                      className={`social-media-services__dropdown-item ${option === selectedSort ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="social-media-services__counter">
              <span className="social-media-services__counter-text">
                عرض {getProductCountText(products.length)}
              </span>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="social-media-services__products">
            {products.map((product) => (
              <div key={product.id} className="social-media-services__product-card">
                <div className="social-media-services__product-header">
                  <div className="social-media-services__product-image">
                    <img
                      src="https://cdn.salla.sa/DQYwE/vknfwxMv9gXEyMCt5M6hCQOZIxj59EOlvKq8f2Gl.jpg"
                      alt={product.title}
                      className="social-media-services__main-image"
                    />
                  </div>
                  <div className="social-media-services__product-logo">
                    <span className="social-media-services__product-logo-letter">Z</span>
                  </div>
                  <span className="social-media-services__category-icon">{product.icon}</span>
                  <div className="social-media-services__product-line"></div>
                  <h3 className="social-media-services__product-subtitle">{product.category}</h3>
                  <span className="social-media-services__badge">{product.badge}</span>
                </div>
                <div className="social-media-services__product-content">
                  <h4 className="social-media-services__product-title">{product.title}</h4>
                  <p className="social-media-services__product-price" dir="rtl">
                    {product.price} <SaudiRiyalIcon width={12} height={13} />
                  </p>
                  <div className="social-media-services__product-actions">
                    <button className="social-media-services__favorite-btn" onClick={handleFavoriteClick}>
                      <IoIosHeartEmpty />
                    </button>
                    <button className="social-media-services__add-to-cart">
                      <PiShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="social-media-services__view-all">
            <Link to="/social-view-all" className="social-media-services__view-all-btn">
              عرض الكل
            </Link>
          </div>
          
          {/* Customer Reviews Section */}
          {isMobile ? (
            <ReviewsSlider />
          ) : (
            <section className="social-media-services__reviews">
              <div className="social-media-services__reviews-header">
                <h3 className="social-media-services__reviews-title">آراء العملاء</h3>
              </div>
              <div className="social-media-services__reviews-container">
                <button 
                  className="social-media-services__slider-btn social-media-services__slider-btn--prev"
                  onClick={prevReview}
                  aria-label="السابق"
                >
                  ‹
                </button>
                <button 
                  className="social-media-services__slider-btn social-media-services__slider-btn--next"
                  onClick={nextReview}
                  aria-label="التالي"
                >
                  ›
                </button>
                <div className="social-media-services__reviews-slider">
                  <div 
                    className="social-media-services__reviews-track"
                    style={{ transform: `translateX(${currentReviewIndex * 100}%)` }}
                  >
                    <div className="social-media-services__reviews-grid">
                      {reviews.map((review) => (
                        <div key={review.id} className="social-media-services__review-card">
                          <div className="social-media-services__review-rating">
                            <span className="social-media-services__star"><CiStar /></span>
                            <span className="social-media-services__rating-number">{review.rating}</span>
                          </div>
                          <div className="social-media-services__reviewer">
                            <div className="social-media-services__reviewer-avatar">
                              <div className="social-media-services__avatar-icon">👤</div>
                            </div>
                            <div className="social-media-services__reviewer-info">
                              <h4 className="social-media-services__reviewer-name">{review.name}</h4>
                              <span className="social-media-services__reviewer-date">{review.date}</span>
                            </div>
                          </div>
                          <div className="social-media-services__review-content">
                            <div className="social-media-services__quote-open">"</div>
                            <p className="social-media-services__review-text">{review.text}</p>
                            <div className="social-media-services__quote-close">"</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
});

SocialMediaServices.displayName = 'SocialMediaServices';

export default SocialMediaServices;





