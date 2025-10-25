import React, { memo, useEffect, useState, useCallback } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './Username3Char.css';
import UnifiedReviews from '../UnifiedReviews/UnifiedReviews';

const Username3Char = memo(() => {
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
      title: 'يوزر ثلاثي سناب شات 1000 مشاهدة',
      price: '180',
      range: '1000 مشاهدة',
      badge: '5★',
      image: 'https://cdn.salla.sa/DQYwE/vknfwxMv9gXEyMCt5M6hCQOZIxj59EOlvKq8f2Gl.jpg'
    },
    {
      id: 2,
      title: 'يوزر ثلاثي انستقرام 500 متابع',
      price: '150',
      range: '500 متابع',
      badge: '5★',
      image: 'https://cdn.salla.sa/DQYwE/vknfwxMv9gXEyMCt5M6hCQOZIxj59EOlvKq8f2Gl.jpg'
    },
    {
      id: 3,
      title: 'يوزر ثلاثي تيك توك 2000 مشاهدة',
      price: '120',
      range: '2000 مشاهدة',
      badge: '5★',
      image: 'https://cdn.salla.sa/DQYwE/vknfwxMv9gXEyMCt5M6hCQOZIxj59EOlvKq8f2Gl.jpg'
    },
    {
      id: 4,
      title: 'يوزر ثلاثي تويتر 1000 متابع',
      price: '90',
      range: '1000 متابع',
      badge: '5★',
      image: 'https://cdn.salla.sa/DQYwE/vknfwxMv9gXEyMCt5M6hCQOZIxj59EOlvKq8f2Gl.jpg'
    },
    {
      id: 5,
      title: 'يوزر ثلاثي فيسبوك 500 إعجاب',
      price: '80',
      range: '500 إعجاب',
      badge: '5★',
      image: 'https://cdn.salla.sa/DQYwE/vknfwxMv9gXEyMCt5M6hCQOZIxj59EOlvKq8f2Gl.jpg'
    },
    {
      id: 6,
      title: 'يوزر ثلاثي يوتيوب 1000 مشاهدة',
      price: '200',
      range: '1000 مشاهدة',
      badge: '5★',
      image: 'https://cdn.salla.sa/DQYwE/vknfwxMv9gXEyMCt5M6hCQOZIxj59EOlvKq8f2Gl.jpg'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'أحمد محمد',
      rating: 5,
      date: 'منذ يومين',
      text: 'خدمات ممتازة وسريعة، أنصح بها بشدة!'
    },
    {
      id: 2,
      name: 'فاطمة علي',
      rating: 5,
      date: 'منذ أسبوع',
      text: 'جودة عالية وأسعار مناسبة، شكراً لكم'
    },
    {
      id: 3,
      name: 'محمد السعيد',
      rating: 5,
      date: 'منذ أسبوعين',
      text: 'خدمة احترافية ومتابعة ممتازة'
    }
  ];

  const getProductCountText = () => {
    return `عرض ${products.length} منتج`;
  };

  const nextReview = useCallback(() => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevReview = useCallback(() => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  const goToReview = useCallback((index) => {
    setCurrentReviewIndex(index);
  }, []);

  const sortOptions = [
    'ترتيب مقترحاتنا',
    'السعر: من الأقل للأعلى',
    'السعر: من الأعلى للأقل',
    'الأكثر مبيعاً',
    'الأحدث'
  ];

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setIsDropdownOpen(false);
  };

  return (
    <main className="username-3char">
      <div className="username-3char__container">
        <div className="username-3char__main">
          {/* Sub Navigation */}
          <div className="username-3char__sub-nav">
            <div className="username-3char__dropdown-container">
              <button 
                className="username-3char__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="username-3char__dropdown-arrow">▼</span>
              </button>
              
              {isDropdownOpen && (
                <div className="username-3char__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button
                      key={index}
                      className="username-3char__dropdown-item"
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="username-3char__counter">
              <span className="username-3char__counter-text">{getProductCountText()}</span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="username-3char__products">
            {products.map((product) => (
              <div key={product.id} className="username-3char__product-card">
                <div className="username-3char__product-header">
                  <div className="username-3char__product-header-image">
                    <img 
                      src={product.image} 
                      alt={product.title}
                    />
                  </div>
                </div>
                
                <div className="username-3char__product-content">
                  <h3 className="username-3char__product-title">{product.title}</h3>
                  <div className="username-3char__product-price">
                    <SaudiRiyalIcon />
                    <span>{product.price}</span>
                  </div>
                  
                  <div className="username-3char__product-actions">
                    <button className="username-3char__favorite-btn">
                      <IoIosHeartEmpty />
                    </button>
                    <button className="username-3char__add-to-cart">
                      <PiShoppingBag />
                      <span>أضف للسلة</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reviews Section */}
          <UnifiedReviews />
        </div>
      </div>
    </main>
  );
});

export default Username3Char;