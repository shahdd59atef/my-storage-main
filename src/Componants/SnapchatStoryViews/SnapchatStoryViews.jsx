import React, { memo, useEffect, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './SnapchatStoryViews.css';
import UnifiedReviews from '../UnifiedReviews/UnifiedReviews';

const SnapchatStoryViews = memo(() => {
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
      title: 'مشاهدات ستوري 1000 - 3000',
      price: '200',
      range: '1000 - 3000',
      badge: '1★'
    },
    {
      id: 2,
      title: 'مشاهدات ستوري 500 - 1500',
      price: '150',
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
    <div className="snapchat-story-views">
      {/* Main Content */}
      <main className="snapchat-story-views__main">
        <div className="snapchat-story-views__container">
          <div className="snapchat-story-views__sub-nav">
            <div className="snapchat-story-views__dropdown-container">
              <button 
                className="snapchat-story-views__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="snapchat-story-views__dropdown-arrow">
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="snapchat-story-views__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button 
                      key={index}
                      className={`snapchat-story-views__dropdown-item ${option === selectedSort ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="snapchat-story-views__counter">
              <span className="snapchat-story-views__counter-text">
                عرض {getProductCountText(products.length)}
              </span>
            </div>
          </div>
          
          <div className="snapchat-story-views__products">
            {products.map((product) => (
              <div key={product.id} className="snapchat-story-views__product-card">
                <div className="snapchat-story-views__product-header">
                  <img
                    src="https://cdn.salla.sa/DQYwE/M5rnE6RQieGwxLbKyl4EpAHD9Y3OkeObgnKbtYTB.jpg"
                    alt="خدمة"
                    className="snapchat-story-views__product-header-image"
                  />
                </div>
                <div className="snapchat-story-views__product-content">
                  <h4 className="snapchat-story-views__product-title">{product.title}</h4>
                  <p className="snapchat-story-views__product-price" dir="rtl">
                    {product.price} <SaudiRiyalIcon width={12} height={13} />
                  </p>
                  <div className="snapchat-story-views__product-actions">
                    <button className="snapchat-story-views__favorite-btn">
                      <IoIosHeartEmpty />
                    </button>
                    <button className="snapchat-story-views__add-to-cart">
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

SnapchatStoryViews.displayName = 'SnapchatStoryViews';

export default SnapchatStoryViews;
