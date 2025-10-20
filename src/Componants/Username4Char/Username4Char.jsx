import React, { memo, useEffect, useState } from 'react';
import { CiStar } from "react-icons/ci";
import './Username4Char.css';
import ReviewsSlider from '../ReviewsSlider/ReviewsSlider';

const Username4Char = memo(() => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Use unified ReviewsSlider on mobile only
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const reviews = [
    {
      id: 1,
      text: "يوزر رباعي رائع وخدمة ممتازة",
      name: "سلطان الشهري",
      date: "02/22/2024",
      rating: 5
    },
    {
      id: 2,
      text: "أفضل يوزرات رباعية في السوق",
      name: "دانة الرشيدي",
      date: "02/18/2024",
      rating: 5
    },
    {
      id: 3,
      text: "خدمة احترافية وأسعار منافسة",
      name: "ماجد الغامدي",
      date: "02/12/2024",
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
    <div className="username-4char">
      {/* Main Content */}
      <main className="username-4char__main">
        <div className="username-4char__container">
          <div className="username-4char__empty-state">
            <div className="username-4char__empty-icon">@️⃣</div>
            <h2 className="username-4char__empty-title">يوزر رباعي</h2>
            <p className="username-4char__empty-text">قريباً.. سنوفر لك مجموعة مميزة من اليوزرات الرباعية المتميزة</p>
          </div>

          {/* Customer Reviews Section */}
          {isMobile ? (
            <ReviewsSlider />
          ) : (
            <section className="username-4char__reviews">
              <div className="username-4char__reviews-header">
                <h3 className="username-4char__reviews-title">آراء العملاء</h3>
              </div>
              <div className="username-4char__reviews-container">
                <button 
                  className="username-4char__slider-btn username-4char__slider-btn--prev"
                  onClick={prevReview}
                  aria-label="السابق"
                >
                  ‹
                </button>
                <button 
                  className="username-4char__slider-btn username-4char__slider-btn--next"
                  onClick={nextReview}
                  aria-label="التالي"
                >
                  ›
                </button>
                <div className="username-4char__reviews-slider">
                  <div 
                    className="username-4char__reviews-track"
                    style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
                  >
                    <div className="username-4char__reviews-grid">
                      {reviews.map((review) => (
                        <div key={review.id} className="username-4char__review-card">
                          <div className="username-4char__review-rating">
                            <span className="username-4char__star"><CiStar /></span>
                            <span className="username-4char__rating-number">{review.rating}</span>
                          </div>
                          <div className="username-4char__reviewer">
                            <div className="username-4char__reviewer-avatar">
                              <div className="username-4char__avatar-icon">👤</div>
                            </div>
                            <div className="username-4char__reviewer-info">
                              <h4 className="username-4char__reviewer-name">{review.name}</h4>
                              <span className="username-4char__reviewer-date">{review.date}</span>
                            </div>
                          </div>
                          <div className="username-4char__review-content">
                            <div className="username-4char__quote-open">"</div>
                            <p className="username-4char__review-text">{review.text}</p>
                            <div className="username-4char__quote-close">"</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
});

Username4Char.displayName = 'Username4Char';

export default Username4Char;


















