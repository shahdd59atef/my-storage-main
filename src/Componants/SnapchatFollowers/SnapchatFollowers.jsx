import React, { memo, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './SnapchatFollowers.css';

const SnapchatFollowers = memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedSort, setSelectedSort] = useState('ترتيب مقترحاتنا');
  
  const products = [
    {
      id: 1,
      title: 'زيادة متابعين سناب 500 - 1000',
      price: '180',
      range: '500 - 1000',
      badge: '1★'
    },
    {
      id: 2,
      title: 'زيادة متابعين سناب 100 - 500',
      price: '90',
      range: '100 - 500',
      badge: '1★'
    },
    {
      id: 3,
      title: 'زيادة متابعين سناب 1000 - 5000',
      price: '350',
      range: '1000 - 5000',
      badge: '1★'
    }
  ];

  const getProductCountText = (num) => {
    if (num === 0) return 'لا توجد منتجات';
    if (num === 1) return 'منتج واحد';
    if (num === 2) return 'منتجين';
    if (num >= 3 && num <= 10) return `${num} منتجات`;
    return `${num} منتج`;
  };

  const reviews = [
    {
      id: 1,
      text: "متابعين حقيقيين وجودة عالية",
      name: "عبدالله الغامدي",
      date: "01/20/2024",
      rating: 5
    },
    {
      id: 2,
      text: "الخدمة رائعة والمتابعين فعالين",
      name: "نورة العتيبي",
      date: "12/05/2023",
      rating: 5
    },
    {
      id: 3,
      text: "أفضل موقع لزيادة المتابعين",
      name: "محمد السعيد",
      date: "11/15/2023",
      rating: 5
    }
  ];

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentReviewIndex(index);
  };

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
    <div className="snapchat-followers">
      <main className="snapchat-followers__main">
        <div className="snapchat-followers__container">
          <div className="snapchat-followers__sub-nav">
            <div className="snapchat-followers__dropdown-container">
              <button 
                className="snapchat-followers__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="snapchat-followers__dropdown-arrow">
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="snapchat-followers__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button 
                      key={index}
                      className={`snapchat-followers__dropdown-item ${option === selectedSort ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="snapchat-followers__counter">
              <span className="snapchat-followers__counter-text">
                عرض {getProductCountText(products.length)}
              </span>
            </div>
          </div>
          
          <div className="snapchat-followers__products">
            {products.map((product) => (
              <div key={product.id} className="snapchat-followers__product-card">
                <div className="snapchat-followers__product-header">
                  <img
                    src="https://cdn.salla.sa/DQYwE/M5rnE6RQieGwxLbKyl4EpAHD9Y3OkeObgnKbtYTB.jpg"
                    alt="خدمة"
                    className="snapchat-followers__product-header-image"
                  />
                </div>
                <div className="snapchat-followers__product-content">
                  <h4 className="snapchat-followers__product-title">{product.title}</h4>
                  <p className="snapchat-followers__product-price" dir="rtl">
                    {product.price} <SaudiRiyalIcon width={12} height={13} />
                  </p>
                  <div className="snapchat-followers__product-actions">
                    <button className="snapchat-followers__favorite-btn">
                      <IoIosHeartEmpty />
                    </button>
                    <button className="snapchat-followers__add-to-cart">
                      <PiShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="packages-slider__dots" style={{justifyContent:'center', marginTop:'1rem'}}>
            {Array.from({ length: products.length }).map((_, i) => (
              <button
                key={i}
                className="packages-slider__dot"
                onClick={() => {
                  const container = document.querySelector('.snapchat-followers__products');
                  if (!container) return;
                  const card = container.querySelector('.snapchat-followers__product-card');
                  if (!card) return;
                  const cardWidth = card.getBoundingClientRect().width + parseFloat(getComputedStyle(container).gap || '16');
                  container.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                }}
                aria-label={`شريحة ${i+1}`}
              />
            ))}
          </div>
          
          <section className="snapchat-followers__reviews">
            <div className="snapchat-followers__reviews-header">
              <h3 className="snapchat-followers__reviews-title">آراء العملاء</h3>
            </div>
            
            <div className="snapchat-followers__reviews-container">
              <button 
                className="snapchat-followers__slider-btn snapchat-followers__slider-btn--prev"
                onClick={prevReview}
                aria-label="السابق"
              >
                ›
              </button>
              
              <button 
                className="snapchat-followers__slider-btn snapchat-followers__slider-btn--next"
                onClick={nextReview}
                aria-label="التالي"
              >
                ‹
              </button>
              
              <div className="snapchat-followers__reviews-slider">
                <div 
                  className="snapchat-followers__reviews-track"
                  style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
                >
                  <div className="snapchat-followers__reviews-grid">
                    {reviews.map((review) => (
                      <div key={review.id} className="snapchat-followers__review-card">
                        <div className="snapchat-followers__review-rating">
                          <span className="snapchat-followers__star"><CiStar /></span>
                          <span className="snapchat-followers__rating-number">{review.rating}</span>
                        </div>
                        
                        <div className="snapchat-followers__reviewer">
                          <div className="snapchat-followers__reviewer-avatar">
                            <div className="snapchat-followers__avatar-icon">👤</div>
                          </div>
                          <div className="snapchat-followers__reviewer-info">
                            <h4 className="snapchat-followers__reviewer-name">{review.name}</h4>
                            <span className="snapchat-followers__reviewer-date">{review.date}</span>
                          </div>
                        </div>
                        
                        <div className="snapchat-followers__review-content">
                          <div className="snapchat-followers__quote-open">"</div>
                          <p className="snapchat-followers__review-text">{review.text}</p>
                          <div className="snapchat-followers__quote-close">"</div>
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

SnapchatFollowers.displayName = 'SnapchatFollowers';

export default SnapchatFollowers;
