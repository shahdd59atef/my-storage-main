import React, { memo, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './SnapchatCapture.css';

const SnapchatCapture = memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedSort, setSelectedSort] = useState('ترتيب مقترحاتنا');
  
  const products = [
    {
      id: 1,
      title: 'كابتشر سناب 100 - 300',
      price: '200',
      range: '100 - 300',
      badge: '1★'
    },
    {
      id: 2,
      title: 'كابتشر سناب 50 - 150',
      price: '100',
      range: '50 - 150',
      badge: '1★'
    }
  ];

  const reviews = [
    {
      id: 1,
      text: "مميز",
      name: "سامي الحارثي",
      date: "10/22/2021",
      rating: 5
    },
    {
      id: 2,
      text: "متجر ثقة وتعاملهم بطل 😈",
      name: "NANA",
      date: "08/16/2022",
      rating: 5
    },
    {
      id: 3,
      text: "الخدمه عندكم مررره سيئه ومافيه تجاوب سريع في الواتس اب",
      name: "اشواق فيصل",
      date: "08/20/2025",
      rating: 1
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
    <div className="snapchat-capture">
      {/* Main Content */}
      <main className="snapchat-capture__main">
        <div className="snapchat-capture__container">
          <div className="snapchat-capture__sub-nav">
            <div className="snapchat-capture__dropdown-container">
              <button 
                className="snapchat-capture__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="snapchat-capture__dropdown-arrow">
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="snapchat-capture__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button 
                      key={index}
                      className={`snapchat-capture__dropdown-item ${option === selectedSort ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="snapchat-capture__counter">
              <span className="snapchat-capture__counter-text">
                عرض {getProductCountText(products.length)}
              </span>
            </div>
          </div>
          
          <div className="snapchat-capture__products">
            {products.map((product) => (
              <div key={product.id} className="snapchat-capture__product-card">
                <div className="snapchat-capture__product-header">
                  <img
                    src="https://cdn.salla.sa/DQYwE/M5rnE6RQieGwxLbKyl4EpAHD9Y3OkeObgnKbtYTB.jpg"
                    alt="خدمة"
                    className="snapchat-capture__product-header-image"
                  />
                </div>
                <div className="snapchat-capture__product-content">
                  <h4 className="snapchat-capture__product-title">{product.title}</h4>
                  <p className="snapchat-capture__product-price" dir="rtl">
                    {product.price} <SaudiRiyalIcon width={12} height={13} />
                  </p>
                  <div className="snapchat-capture__product-actions">
                    <button className="snapchat-capture__favorite-btn">
                      <IoIosHeartEmpty />
                    </button>
                    <button className="snapchat-capture__add-to-cart">
                      <PiShoppingBag />
                      إضافة للسلة
                    </button>
                    <button className="snapchat-capture__contact-btn">راسلنا</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Customer Reviews Section */}
          <section className="snapchat-capture__reviews">
            <div className="snapchat-capture__reviews-header">
              <h3 className="snapchat-capture__reviews-title">آراء العملاء</h3>
            </div>
            
            <div className="snapchat-capture__reviews-container">
              <button 
                className="snapchat-capture__slider-btn snapchat-capture__slider-btn--prev"
                onClick={prevReview}
                aria-label="السابق"
              >
                ‹
              </button>
              
              <button 
                className="snapchat-capture__slider-btn snapchat-capture__slider-btn--next"
                onClick={nextReview}
                aria-label="التالي"
              >
                ›
              </button>
              
              <div className="snapchat-capture__reviews-slider">
                <div 
                  className="snapchat-capture__reviews-track"
                  style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
                >
                  <div className="snapchat-capture__reviews-grid">
                    {reviews.map((review) => (
                      <div key={review.id} className="snapchat-capture__review-card">
                        <div className="snapchat-capture__review-rating">
                          <span className="snapchat-capture__star"><CiStar /></span>
                          <span className="snapchat-capture__rating-number">{review.rating}</span>
                        </div>
                        
                        <div className="snapchat-capture__reviewer">
                          <div className="snapchat-capture__reviewer-avatar">
                            <div className="snapchat-capture__avatar-icon">👤</div>
                          </div>
                          <div className="snapchat-capture__reviewer-info">
                            <h4 className="snapchat-capture__reviewer-name">{review.name}</h4>
                            <span className="snapchat-capture__reviewer-date">{review.date}</span>
                          </div>
                        </div>
                        
                        <div className="snapchat-capture__review-content">
                          <div className="snapchat-capture__quote-open">"</div>
                          <p className="snapchat-capture__review-text">{review.text}</p>
                          <div className="snapchat-capture__quote-close">"</div>
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

SnapchatCapture.displayName = 'SnapchatCapture';

export default SnapchatCapture;