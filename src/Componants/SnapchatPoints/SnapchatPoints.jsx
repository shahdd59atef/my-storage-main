import React, { memo, useEffect, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './SnapchatPoints.css';
import UnifiedReviews from '../UnifiedReviews/UnifiedReviews';

const SnapchatPoints = memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedSort, setSelectedSort] = useState('ترتيب مقترحاتنا');
  const [isMobile, setIsMobile] = useState(false);

  // Render the global ReviewsSlider design on mobile only to avoid affecting desktop.
  useEffect(() => {
    // Avoid SSR issues and keep the listener lightweight
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  
  const products = [
    {
      id: 1,
      title: 'نقاط سناب شات 1000 - 3000',
      price: '150',
      range: '1000 - 3000',
      badge: '1★'
    },
    {
      id: 2,
      title: 'نقاط سناب شات 500 - 1500',
      price: '100',
      range: '500 - 1500',
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
    <div className="snapchat-points">
      {/* Main Content */}
      <main className="snapchat-points__main">
        <div className="snapchat-points__container">
          <div className="snapchat-points__sub-nav">
            <div className="snapchat-points__dropdown-container">
              <button 
                className="snapchat-points__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="snapchat-points__dropdown-arrow">
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="snapchat-points__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button 
                      key={index}
                      className={`snapchat-points__dropdown-item ${option === selectedSort ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="snapchat-points__counter">
              <span className="snapchat-points__counter-text">
                عرض {getProductCountText(products.length)}
              </span>
            </div>
          </div>
          
          <div className="snapchat-points__products">
            {products.map((product) => (
              <div key={product.id} className="snapchat-points__product-card">
                <div className="snapchat-points__product-header">
                  <img
                    src="https://cdn.salla.sa/DQYwE/M5rnE6RQieGwxLbKyl4EpAHD9Y3OkeObgnKbtYTB.jpg"
                    alt="خدمة"
                    className="snapchat-points__product-header-image"
                  />
                </div>
                <div className="snapchat-points__product-content">
                  <h4 className="snapchat-points__product-title">{product.title}</h4>
                  <p className="snapchat-points__product-price" dir="rtl">
                    {product.price} <SaudiRiyalIcon width={12} height={13} />
                  </p>
                  <div className="snapchat-points__product-actions">
                    <button className="snapchat-points__favorite-btn">
                      <IoIosHeartEmpty />
                    </button>
                    <button className="snapchat-points__add-to-cart">
                      <PiShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Customer Reviews Section */}
          <UnifiedReviews />
        </div>
      </main>
    </div>
  );
});

SnapchatPoints.displayName = 'SnapchatPoints';

export default SnapchatPoints;