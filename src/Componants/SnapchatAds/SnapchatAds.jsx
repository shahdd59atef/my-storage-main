import React, { memo, useState } from 'react';
import { CiStar } from "react-icons/ci";
import './SnapchatAds.css';

const SnapchatAds = memo(() => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

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

  // Slider navigation functions
  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="snapchat-ads">
      {/* Main Content */}
      <main className="snapchat-ads__main">
        <div className="snapchat-ads__container">
          <div className="snapchat-ads__empty-state">
            <div className="snapchat-ads__empty-icon">📢</div>
            <h2 className="snapchat-ads__empty-title">إعلانات سناب شات</h2>
            <p className="snapchat-ads__empty-text">قريباً.. سنوفر لك أفضل خدمات إدارة الحملات الإعلانية على سناب شات</p>
          </div>

          {/* Customer Reviews Section */}
          <section className="snapchat-ads__reviews">
            <div className="snapchat-ads__reviews-header">
              <h3 className="snapchat-ads__reviews-title">آراء العملاء</h3>
            </div>
            
            <div className="snapchat-ads__reviews-container">
              <button 
                className="snapchat-ads__slider-btn snapchat-ads__slider-btn--prev"
                onClick={prevReview}
                aria-label="السابق"
              >
                ‹
              </button>
              
              <button 
                className="snapchat-ads__slider-btn snapchat-ads__slider-btn--next"
                onClick={nextReview}
                aria-label="التالي"
              >
                ›
              </button>
              
              <div className="snapchat-ads__reviews-slider">
                <div 
                  className="snapchat-ads__reviews-track"
                  style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
                >
                  <div className="snapchat-ads__reviews-grid">
                    {reviews.map((review) => (
                      <div key={review.id} className="snapchat-ads__review-card">
                        <div className="snapchat-ads__review-rating">
                          <span className="snapchat-ads__star"><CiStar /></span>
                          <span className="snapchat-ads__rating-number">{review.rating}</span>
                        </div>
                        
                        <div className="snapchat-ads__reviewer">
                          <div className="snapchat-ads__reviewer-avatar">
                            <div className="snapchat-ads__avatar-icon">👤</div>
                          </div>
                          <div className="snapchat-ads__reviewer-info">
                            <h4 className="snapchat-ads__reviewer-name">{review.name}</h4>
                            <span className="snapchat-ads__reviewer-date">{review.date}</span>
                          </div>
                        </div>
                        
                        <div className="snapchat-ads__review-content">
                          <div className="snapchat-ads__quote-open">"</div>
                          <p className="snapchat-ads__review-text">{review.text}</p>
                          <div className="snapchat-ads__quote-close">"</div>
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

SnapchatAds.displayName = 'SnapchatAds';

export default SnapchatAds;
