import React, { memo, useEffect, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './SnapchatAds.css';
import UnifiedReviews from '../UnifiedReviews/UnifiedReviews';

const SnapchatAds = memo(() => {
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
      title: 'حملة إعلانية سناب شات 1000 مشاهدة',
      price: '150',
      range: '1000 مشاهدة',
      badge: '5★'
    },
    {
      id: 2,
      title: 'حملة إعلانية سناب شات 500 مشاهدة',
      price: '80',
      range: '500 مشاهدة',
      badge: '5★'
    },
    {
      id: 3,
      title: 'حملة إعلانية سناب شات 200 مشاهدة',
      price: '40',
      range: '200 مشاهدة',
      badge: '5★'
    },
    {
      id: 4,
      title: 'حملة إعلانية سناب شات 100 مشاهدة',
      price: '25',
      range: '100 مشاهدة',
      badge: '5★'
    }
  ];

  const reviews = [
    {
      id: 1,
      text: "خدمة إدارة الحملات الإعلانية ممتازة ونتائج فعالة",
      name: "محمد الشمري",
      date: "02/20/2024",
      rating: 5
    },
    {
      id: 2,
      text: "فريق محترف ونتائج تفوق التوقعات",
      name: "نوف العتيبي",
      date: "02/15/2024",
      rating: 5
    },
    {
      id: 3,
      text: "أفضل شركة لإدارة الحملات الإعلانية",
      name: "عبدالرحمن القحطاني",
      date: "02/05/2024",
      rating: 5
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
    <div className="snapchat-ads">
      {/* Main Content */}
      <main className="snapchat-ads__main">
        <div className="snapchat-ads__container">
          <div className="snapchat-ads__sub-nav">
            <div className="snapchat-ads__dropdown-container">
              <button 
                className="snapchat-ads__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="snapchat-ads__dropdown-arrow">
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="snapchat-ads__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button 
                      key={index}
                      className={`snapchat-ads__dropdown-item ${option === selectedSort ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="snapchat-ads__counter">
              <span className="snapchat-ads__counter-text">
                عرض {getProductCountText(products.length)}
              </span>
            </div>
          </div>
          
          <div className="snapchat-ads__products">
            {products.map((product) => (
              <div key={product.id} className="snapchat-ads__product-card">
                <div className="snapchat-ads__product-header">
                  <img
                    src="https://cdn.salla.sa/DQYwE/M5rnE6RQieGwxLbKyl4EpAHD9Y3OkeObgnKbtYTB.jpg"
                    alt="خدمة"
                    className="snapchat-ads__product-header-image"
                  />
                </div>
                <div className="snapchat-ads__product-content">
                  <h4 className="snapchat-ads__product-title">{product.title}</h4>
                  <p className="snapchat-ads__product-price" dir="rtl">
                    {product.price} <SaudiRiyalIcon width={12} height={13} />
                  </p>
                  <div className="snapchat-ads__product-actions">
                    <button className="snapchat-ads__favorite-btn">
                      <IoIosHeartEmpty />
                    </button>
                    <button className="snapchat-ads__add-to-cart">
                      <PiShoppingBag />
                      إضافة للسلة
                    </button>
                    {/* Removed contact button per request */}
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

SnapchatAds.displayName = 'SnapchatAds';

export default SnapchatAds;
