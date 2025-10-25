import React, { memo, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './Usernames.css';

const Usernames = memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedSort, setSelectedSort] = useState('ترتيب مقترحاتنا');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      alert('يرجى تسجيل الدخول للاستفادة من هذه الميزة');
      return;
    }
  };
  
  const products = [
    {
      id: 1,
      title: 'يوزرات سناب شات مميزة',
      price: 80,
      originalPrice: 100,
      discountPercentage: 20,
      savings: 20,
      hasDiscount: true,
      category: 'سناب شات',
      icon: '👻',
      badge: '1★'
    },
    {
      id: 2,
      title: 'يوزرات انستقرام فريدة',
      price: 100,
      originalPrice: null,
      discountPercentage: null,
      savings: null,
      hasDiscount: false,
      category: 'انستقرام',
      icon: '📷',
      badge: '1★'
    },
    {
      id: 3,
      title: 'يوزرات تيك توك مميزة',
      price: 75,
      originalPrice: 100,
      discountPercentage: 25,
      savings: 25,
      hasDiscount: true,
      category: 'تيك توك',
      icon: '🎵',
      badge: '1★'
    },
    {
      id: 4,
      title: 'يوزرات تويتر نادرة',
      price: 100,
      originalPrice: null,
      discountPercentage: null,
      savings: null,
      hasDiscount: false,
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
      text: "يوزرات مميزة وأسعار ممتازة",
      name: "تركي العمري",
      date: "03/10/2024",
      rating: 5
    },
    {
      id: 2,
      text: "خدمة سريعة ويوزرات فريدة",
      name: "أمل الحارثي",
      date: "03/06/2024",
      rating: 5
    },
    {
      id: 3,
      text: "أفضل موقع لشراء اليوزرات",
      name: "بدر الشهراني",
      date: "03/02/2024",
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
    <div className="usernames">
      {/* Main Content */}
      <main className="usernames__main">
        <div className="usernames__container">
          <div className="usernames__sub-nav">
            <div className="usernames__dropdown-container">
              <button 
                className="usernames__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="usernames__dropdown-arrow">
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="usernames__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button 
                      key={index}
                      className={`usernames__dropdown-item ${option === selectedSort ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="usernames__counter">
              <span className="usernames__counter-text">
                عرض {getProductCountText(products.length)}
              </span>
            </div>
          </div>
          
          <div className="usernames__products">
            {products.map((product) => (
              <div key={product.id} className="usernames__product-card">
                <div className="usernames__product-header">
                  <div className="usernames__product-image">
                    <img
                      src="https://cdn.salla.sa/DQYwE/vknfwxMv9gXEyMCt5M6hCQOZIxj59EOlvKq8f2Gl.jpg"
                      alt={product.title}
                      className="usernames__main-image"
                    />
                  </div>
                  <div className="usernames__product-logo">
                    <span className="usernames__product-logo-letter">Z</span>
                  </div>
                  <span className="usernames__category-icon">{product.icon}</span>
                  <div className="usernames__product-line"></div>
                  <h3 className="usernames__product-subtitle">{product.category}</h3>
                  <span className="usernames__badge">{product.badge}</span>
                </div>
                <div className="usernames__product-content">
                  <h4 className="usernames__product-title">{product.title}</h4>
                  {product.hasDiscount ? (
                    <div className="usernames__pricing" dir="rtl">
                      <div className="usernames__discount-container">
                        <div className="usernames__price-info">
                          <p className="usernames__product-price usernames__product-price--discounted">
                            {product.price} <SaudiRiyalIcon width={12} height={13} />
                          </p>
                          <p className="usernames__original-price">
                            {product.originalPrice} <SaudiRiyalIcon width={10} height={11} />
                          </p>
                        </div>
                        <div className="usernames__discount-info">
                          <div className="usernames__discount-badge">
                            - % {product.discountPercentage}
                          </div>
                          <div className="usernames__savings">
                            وفر {product.savings.toFixed(2)} <SaudiRiyalIcon width={10} height={11} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="usernames__product-price" dir="rtl">
                      {product.price} <SaudiRiyalIcon width={12} height={13} />
                    </p>
                  )}
                  <div className="usernames__product-actions">
                    <button className="usernames__favorite-btn" onClick={handleFavoriteClick}>
                      <IoIosHeartEmpty />
                    </button>
                    <button className="usernames__add-to-cart">
                      <PiShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Buttons */}
          <div className="usernames__view-all">
            <Link to="/username-3char" className="usernames__view-all-btn">
              يوزر 3 أحرف
            </Link>
            <Link to="/username-4char" className="usernames__view-all-btn">
              يوزر 4 أحرف
            </Link>
          </div>
          
          {/* Customer Reviews Section */}
          <section className="usernames__reviews">
            <div className="usernames__reviews-header">
              <h3 className="usernames__reviews-title">آراء العملاء</h3>
            </div>
            
            <div className="usernames__reviews-container">
              <button 
                className="usernames__slider-btn usernames__slider-btn--prev"
                onClick={prevReview}
                aria-label="السابق"
              >
                ‹
              </button>
              
              <button 
                className="usernames__slider-btn usernames__slider-btn--next"
                onClick={nextReview}
                aria-label="التالي"
              >
                ›
              </button>
              
              <div className="usernames__reviews-slider">
                <div 
                  className="usernames__reviews-track"
                  style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
                >
                  <div className="usernames__reviews-grid">
                    {reviews.map((review) => (
                      <div key={review.id} className="usernames__review-card">
                        <div className="usernames__review-rating">
                          <span className="usernames__star"><CiStar /></span>
                          <span className="usernames__rating-number">{review.rating}</span>
                        </div>
                        
                        <div className="usernames__reviewer">
                          <div className="usernames__reviewer-avatar">
                            <div className="usernames__avatar-icon">👤</div>
                          </div>
                          <div className="usernames__reviewer-info">
                            <h4 className="usernames__reviewer-name">{review.name}</h4>
                            <span className="usernames__reviewer-date">{review.date}</span>
                          </div>
                        </div>
                        
                        <div className="usernames__review-content">
                          <div className="usernames__quote-open">"</div>
                          <p className="usernames__review-text">{review.text}</p>
                          <div className="usernames__quote-close">"</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
});

Usernames.displayName = 'Usernames';

export default Usernames;










