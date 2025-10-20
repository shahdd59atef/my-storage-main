import React, { memo, useEffect, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './SnapchatAccounts.css';
import ReviewsSlider from '../ReviewsSlider/ReviewsSlider';

const SnapchatAccounts = memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedSort, setSelectedSort] = useState('ترتيب مقترحاتنا');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // يمكن تغييرها حسب حالة تسجيل الدخول
  const [isMobile, setIsMobile] = useState(false);

  // Use global ReviewsSlider on mobile only
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
    // منطق إضافة للمفضلة هنا
  };
  
  const products = [
    {
      id: 1,
      title: 'حساب سناب شات 500 الف نقطة',
      price: 500,
      originalPrice: null,
      discountPercentage: null,
      savings: null,
      hasDiscount: false,
      rating: '5★'
    },
    {
      id: 2,
      title: 'حساب سناب شات 200 الف نقطة',
      price: 200,
      originalPrice: null,
      discountPercentage: null,
      savings: null,
      hasDiscount: false,
      rating: null
    },
    {
      id: 3,
      title: 'حساب سناب شات 100 الف نقطة',
      price: 140,
      originalPrice: 200,
      discountPercentage: 30,
      savings: 60,
      hasDiscount: true,
      rating: '5★'
    },
    {
      id: 4,
      title: 'حساب سناب شات 50 الف نقطة',
      price: 90,
      originalPrice: 100,
      discountPercentage: 10,
      savings: 10,
      hasDiscount: true,
      rating: null
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
      text: "حسابات موثوقة وجودة عالية",
      name: "عمر الشهري",
      date: "02/10/2024",
      rating: 5
    },
    {
      id: 2,
      text: "خدمة ممتازة وتسليم سريع",
      name: "ريم العنزي",
      date: "01/28/2024",
      rating: 5
    },
    {
      id: 3,
      text: "أفضل موقع لشراء حسابات سناب شات",
      name: "سعود القحطاني",
      date: "01/15/2024",
      rating: 5
    }
  ];

  // Slider navigation functions
  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentReviewIndex(index);
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
    <div className="snapchat-accounts">
      {/* Main Content */}
      <main className="snapchat-accounts__main">
        <div className="snapchat-accounts__container">
          <div className="snapchat-accounts__sub-nav">
            <div className="snapchat-accounts__dropdown-container">
              <button 
                className="snapchat-accounts__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="snapchat-accounts__dropdown-arrow">
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="snapchat-accounts__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button 
                      key={index}
                      className={`snapchat-accounts__dropdown-item ${option === selectedSort ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="snapchat-accounts__counter">
              <span className="snapchat-accounts__counter-text">
                عرض {getProductCountText(products.length)}
              </span>
            </div>
          </div>
          
          <div className="snapchat-accounts__products">
            {products.map((product) => (
              <div key={product.id} className="snapchat-accounts__product-card">
                <div className="snapchat-accounts__product-header">
                  <img
                    src="https://cdn.salla.sa/DQYwE/M5rnE6RQieGwxLbKyl4EpAHD9Y3OkeObgnKbtYTB.jpg"
                    alt="خدمة"
                    className="snapchat-accounts__product-header-image"
                  />
                </div>
                <div className="snapchat-accounts__product-content">
                  <h4 className="snapchat-accounts__product-title">{product.title}</h4>
                  <div className="snapchat-accounts__price-container" dir="rtl">
                    {product.hasDiscount ? (
                      <div className="snapchat-accounts__discount-container">
                        <div className="snapchat-accounts__price-info">
                          <p className="snapchat-accounts__product-price snapchat-accounts__product-price--discounted">
                            {product.price} <SaudiRiyalIcon width={12} height={13} />
                          </p>
                          <p className="snapchat-accounts__product-old-price">
                            {product.originalPrice} <SaudiRiyalIcon width={10} height={11} />
                          </p>
                        </div>
                        <div className="snapchat-accounts__discount-info">
                          <div className="snapchat-accounts__discount-badge">
                            - % {product.discountPercentage}
                          </div>
                          <div className="snapchat-accounts__savings">
                            وفر {product.savings.toFixed(2)} <SaudiRiyalIcon width={10} height={11} />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="snapchat-accounts__product-price">
                        {product.price} <SaudiRiyalIcon width={12} height={13} />
                      </p>
                    )}
                  </div>
                  <div className="snapchat-accounts__product-actions">
                    <button className="snapchat-accounts__favorite-btn" onClick={handleFavoriteClick}>
                      <IoIosHeartEmpty />
                    </button>
                    <button className="snapchat-accounts__add-to-cart">
                      <PiShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Customer Reviews Section */}
          {isMobile ? (
            <ReviewsSlider />
          ) : (
            <section className="snapchat-accounts__reviews">
              <div className="snapchat-accounts__reviews-header">
                <h3 className="snapchat-accounts__reviews-title">آراء العملاء</h3>
              </div>
              <div className="snapchat-accounts__reviews-container">
                <button 
                  className="snapchat-accounts__slider-btn snapchat-accounts__slider-btn--prev"
                  onClick={prevReview}
                  aria-label="السابق"
                >
                  ‹
                </button>
                <button 
                  className="snapchat-accounts__slider-btn snapchat-accounts__slider-btn--next"
                  onClick={nextReview}
                  aria-label="التالي"
                >
                  ›
                </button>
                <div className="snapchat-accounts__reviews-slider">
                  <div 
                    className="snapchat-accounts__reviews-track"
                    style={{ transform: `translateX(${currentReviewIndex * 100}%)` }}
                  >
                    <div className="snapchat-accounts__reviews-grid">
                      {reviews.map((review) => (
                        <div key={review.id} className="snapchat-accounts__review-card">
                          <div className="snapchat-accounts__review-rating">
                            <span className="snapchat-accounts__star"><CiStar /></span>
                            <span className="snapchat-accounts__rating-number">{review.rating}</span>
                          </div>
                          <div className="snapchat-accounts__reviewer">
                            <div className="snapchat-accounts__reviewer-avatar">
                              <div className="snapchat-accounts__avatar-icon">👤</div>
                            </div>
                            <div className="snapchat-accounts__reviewer-info">
                              <h4 className="snapchat-accounts__reviewer-name">{review.name}</h4>
                              <span className="snapchat-accounts__reviewer-date">{review.date}</span>
                            </div>
                          </div>
                          <div className="snapchat-accounts__review-content">
                            <div className="snapchat-accounts__quote-open">"</div>
                            <p className="snapchat-accounts__review-text">{review.text}</p>
                            <div className="snapchat-accounts__quote-close">"</div>
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

SnapchatAccounts.displayName = 'SnapchatAccounts';

export default SnapchatAccounts;










