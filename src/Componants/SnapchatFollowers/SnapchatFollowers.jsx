import React, { memo, useCallback, useEffect, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './SnapchatFollowers.css';
import AllReviews from '../AllReviews/AllReviews';

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

  const scrollReviews = useCallback((dir) => {
    const grid = document.querySelector('.snapchat-followers .all-reviews__grid');
    if (!grid) return;
    const card = grid.querySelector('.all-reviews__card');
    const gap = parseFloat(getComputedStyle(grid).gap || '16');
    const width = card ? card.getBoundingClientRect().width + gap : 320;
    grid.scrollBy({ left: dir * width, behavior: 'smooth' });
  }, []);

  // Disable manual scroll (wheel/touch) on reviews grid; arrows only
  useEffect(() => {
    const grid = document.querySelector('.snapchat-followers .all-reviews__grid');
    if (!grid) return;
    const prevent = (e) => {
      e.preventDefault();
    };
    grid.addEventListener('wheel', prevent, { passive: false });
    grid.addEventListener('touchmove', prevent, { passive: false });
    return () => {
      grid.removeEventListener('wheel', prevent);
      grid.removeEventListener('touchmove', prevent);
    };
  }, []);

  

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

          {/* dots navigation removed as requested */}
          
          <div className="snapchat-followers__reviews-wrap">
            <button
              className="snapchat-followers__reviews-arrow snapchat-followers__reviews-arrow--prev"
              onClick={() => scrollReviews(-1)}
              aria-label="السابق"
            >
              ‹
            </button>
            <AllReviews />
            <button
              className="snapchat-followers__reviews-arrow snapchat-followers__reviews-arrow--next"
              onClick={() => scrollReviews(1)}
              aria-label="التالي"
            >
              ›
            </button>
          </div>
        </div>
      </main>
    </div>
  );
});

SnapchatFollowers.displayName = 'SnapchatFollowers';

export default SnapchatFollowers;
