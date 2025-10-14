import React, { memo, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './AdsCampaigns.css';

const AdsCampaigns = memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedSort, setSelectedSort] = useState('ترتيب مقترحاتنا');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // يمكن تغييرها حسب حالة تسجيل الدخول
  
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
      title: 'إدارة حملات سناب شات',
      price: '100',
      category: 'سناب شات',
      icon: '👻',
      badge: '1★'
    },
    {
      id: 2,
      title: 'إدارة حملات انستقرام',
      price: '100',
      category: 'انستقرام',
      icon: '📷',
      badge: '1★'
    },
    {
      id: 3,
      title: 'إدارة حملات تيك توك',
      price: '100',
      category: 'تيك توك',
      icon: '🎵',
      badge: '1★'
    },
    {
      id: 4,
      title: 'إدارة حملات جوجل',
      price: '100',
      category: 'جوجل',
      icon: '🔍',
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
      text: "إدارة حملات إعلانية احترافية ونتائج ممتازة",
      name: "خالد الشمري",
      date: "03/05/2024",
      rating: 5
    },
    {
      id: 2,
      text: "فريق محترف وخبرة كبيرة في الحملات",
      name: "هند القحطاني",
      date: "03/02/2024",
      rating: 5
    },
    {
      id: 3,
      text: "أفضل شركة لإدارة الحملات الإعلانية",
      name: "عبدالله السعيد",
      date: "02/28/2024",
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
    <div className="ads-campaigns">
      {/* Main Content */}
      <main className="ads-campaigns__main">
        <div className="ads-campaigns__container">
          <div className="ads-campaigns__sub-nav">
            <div className="ads-campaigns__dropdown-container">
              <button 
                className="ads-campaigns__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="ads-campaigns__dropdown-arrow">
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="ads-campaigns__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button 
                      key={index}
                      className={`ads-campaigns__dropdown-item ${option === selectedSort ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="ads-campaigns__counter">
              <span className="ads-campaigns__counter-text">
                عرض {getProductCountText(products.length)}
              </span>
            </div>
          </div>
          
          <div className="ads-campaigns__products">
            {products.map((product) => (
              <div key={product.id} className="ads-campaigns__product-card">
                <div className="ads-campaigns__product-header">
                  <div className="ads-campaigns__product-image">
                    <img
                      src="https://cdn.salla.sa/DQYwE/vknfwxMv9gXEyMCt5M6hCQOZIxj59EOlvKq8f2Gl.jpg"
                      alt={product.title}
                      className="ads-campaigns__main-image"
                    />
                  </div>
                  <div className="ads-campaigns__product-logo">
                    <span className="ads-campaigns__product-logo-letter">Z</span>
                  </div>
                  <span className="ads-campaigns__category-icon">{product.icon}</span>
                  <div className="ads-campaigns__product-line"></div>
                  <h3 className="ads-campaigns__product-subtitle">{product.category}</h3>
                  <span className="ads-campaigns__star"><CiStar /></span>
                  <span className="ads-campaigns__badge">{product.badge}</span>
                </div>
                <div className="ads-campaigns__product-content">
                  <h4 className="ads-campaigns__product-title">{product.title}</h4>
                  <p className="ads-campaigns__product-price" dir="rtl">
                    {product.price} <SaudiRiyalIcon width={12} height={13} />
                  </p>
                  <div className="ads-campaigns__product-actions">
                    <button className="ads-campaigns__favorite-btn" onClick={handleFavoriteClick}>
                      <IoIosHeartEmpty />
                    </button>
                    <button className="ads-campaigns__add-to-cart">
                      <PiShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Customer Reviews Section */}
          <section className="ads-campaigns__reviews">
            <div className="ads-campaigns__reviews-header">
              <h3 className="ads-campaigns__reviews-title">آراء العملاء</h3>
            </div>
            
            <div className="ads-campaigns__reviews-container">
              <button 
                className="ads-campaigns__slider-btn ads-campaigns__slider-btn--prev"
                onClick={prevReview}
                aria-label="السابق"
              >
                ‹
              </button>
              
              <button 
                className="ads-campaigns__slider-btn ads-campaigns__slider-btn--next"
                onClick={nextReview}
                aria-label="التالي"
              >
                ›
              </button>
              
              <div className="ads-campaigns__reviews-slider">
                <div 
                  className="ads-campaigns__reviews-track"
                  style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
                >
                  <div className="ads-campaigns__reviews-grid">
                    {reviews.map((review) => (
                      <div key={review.id} className="ads-campaigns__review-card">
                        <div className="ads-campaigns__review-rating">
                          <span className="ads-campaigns__star"><CiStar /></span>
                          <span className="ads-campaigns__rating-number">{review.rating}</span>
                        </div>
                        
                        <div className="ads-campaigns__reviewer">
                          <div className="ads-campaigns__reviewer-avatar">
                            <div className="ads-campaigns__avatar-icon">👤</div>
                          </div>
                          <div className="ads-campaigns__reviewer-info">
                            <h4 className="ads-campaigns__reviewer-name">{review.name}</h4>
                            <span className="ads-campaigns__reviewer-date">{review.date}</span>
                          </div>
                        </div>
                        
                        <div className="ads-campaigns__review-content">
                          <div className="ads-campaigns__quote-open">"</div>
                          <p className="ads-campaigns__review-text">{review.text}</p>
                          <div className="ads-campaigns__quote-close">"</div>
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

AdsCampaigns.displayName = 'AdsCampaigns';

export default AdsCampaigns;










