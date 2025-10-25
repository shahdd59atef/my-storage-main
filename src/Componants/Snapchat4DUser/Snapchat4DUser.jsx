import React, { memo, useEffect, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './Snapchat4DUser.css';
import UnifiedReviews from '../UnifiedReviews/UnifiedReviews';

const Snapchat4DUser = memo(() => {
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
      title: 'يوزر رباعي سناب شات 1000 مشاهدة',
      price: '250',
      range: '1000 مشاهدة',
      badge: '5★'
    },
    {
      id: 2,
      title: 'يوزر رباعي سناب شات 500 مشاهدة',
      price: '150',
      range: '500 مشاهدة',
      badge: '5★'
    },
    {
      id: 3,
      title: 'يوزر رباعي سناب شات 200 مشاهدة',
      price: '80',
      range: '200 مشاهدة',
      badge: '5★'
    },
    {
      id: 4,
      title: 'يوزر رباعي سناب شات 100 مشاهدة',
      price: '50',
      range: '100 مشاهدة',
      badge: '5★'
    }
  ];

  const reviews = [
    {
      id: 1,
      text: "خدمة اليوزر الرباعي ممتازة ونتائج مذهلة",
      name: "سارة المطيري",
      date: "03/20/2024",
      rating: 5
    },
    {
      id: 2,
      text: "أفضل خدمة لليوزر الرباعي على سناب شات",
      name: "عبدالله النعيمي",
      date: "03/18/2024",
      rating: 5
    },
    {
      id: 3,
      text: "نتائج رائعة وخدمة سريعة ومهنية",
      name: "نورا السعيد",
      date: "03/12/2024",
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
    <div className="snapchat-4d-user">
      {/* Main Content */}
      <main className="snapchat-4d-user__main">
        <div className="snapchat-4d-user__container">
          <div className="snapchat-4d-user__sub-nav">
            <div className="snapchat-4d-user__dropdown-container">
              <button 
                className="snapchat-4d-user__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="snapchat-4d-user__dropdown-arrow">
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="snapchat-4d-user__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button 
                      key={index}
                      className={`snapchat-4d-user__dropdown-item ${option === selectedSort ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="snapchat-4d-user__counter">
              <span className="snapchat-4d-user__counter-text">
                عرض {getProductCountText(products.length)}
              </span>
            </div>
          </div>
          
          <div className="snapchat-4d-user__products">
            {products.map((product) => (
              <div key={product.id} className="snapchat-4d-user__product-card">
                <div className="snapchat-4d-user__product-header">
                  <img
                    src="https://cdn.salla.sa/DQYwE/M5rnE6RQieGwxLbKyl4EpAHD9Y3OkeObgnKbtYTB.jpg"
                    alt="خدمة"
                    className="snapchat-4d-user__product-header-image"
                  />
                </div>
                <div className="snapchat-4d-user__product-content">
                  <h4 className="snapchat-4d-user__product-title">{product.title}</h4>
                  <p className="snapchat-4d-user__product-price" dir="rtl">
                    {product.price} <SaudiRiyalIcon width={12} height={13} />
                  </p>
                  <div className="snapchat-4d-user__product-actions">
                    <button className="snapchat-4d-user__favorite-btn">
                      <IoIosHeartEmpty />
                    </button>
                    <button className="snapchat-4d-user__add-to-cart">
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

Snapchat4DUser.displayName = 'Snapchat4DUser';

export default Snapchat4DUser;
