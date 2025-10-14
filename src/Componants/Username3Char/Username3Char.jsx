import React, { memo, useState } from 'react';
import { CiStar } from "react-icons/ci";
import './Username3Char.css';

const Username3Char = memo(() => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "يوزر ثلاثي مميز وسعر مناسب",
      name: "فهد الدوسري",
      date: "02/25/2024",
      rating: 5
    },
    {
      id: 2,
      text: "خدمة سريعة ويوزرات فريدة",
      name: "لينا المطيري",
      date: "02/20/2024",
      rating: 5
    },
    {
      id: 3,
      text: "أفضل موقع ليوزرات ثلاثية",
      name: "عبدالعزيز القرني",
      date: "02/10/2024",
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
    <div className="username-3char">
      {/* Main Content */}
      <main className="username-3char__main">
        <div className="username-3char__container">
          <div className="username-3char__empty-state">
            <div className="username-3char__empty-icon">@️⃣</div>
            <h2 className="username-3char__empty-title">يوزر ثلاثي</h2>
            <p className="username-3char__empty-text">قريباً.. سنوفر لك مجموعة مميزة من اليوزرات الثلاثية الفريدة</p>
          </div>

          {/* Customer Reviews Section */}
          <section className="username-3char__reviews">
            <div className="username-3char__reviews-header">
              <h3 className="username-3char__reviews-title">آراء العملاء</h3>
            </div>
            
            <div className="username-3char__reviews-container">
              <button 
                className="username-3char__slider-btn username-3char__slider-btn--prev"
                onClick={prevReview}
                aria-label="السابق"
              >
                ‹
              </button>
              
              <button 
                className="username-3char__slider-btn username-3char__slider-btn--next"
                onClick={nextReview}
                aria-label="التالي"
              >
                ›
              </button>
              
              <div className="username-3char__reviews-slider">
                <div 
                  className="username-3char__reviews-track"
                  style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
                >
                  <div className="username-3char__reviews-grid">
                    {reviews.map((review) => (
                      <div key={review.id} className="username-3char__review-card">
                        <div className="username-3char__review-rating">
                          <span className="username-3char__star"><CiStar /></span>
                          <span className="username-3char__rating-number">{review.rating}</span>
                        </div>
                        
                        <div className="username-3char__reviewer">
                          <div className="username-3char__reviewer-avatar">
                            <div className="username-3char__avatar-icon">👤</div>
                          </div>
                          <div className="username-3char__reviewer-info">
                            <h4 className="username-3char__reviewer-name">{review.name}</h4>
                            <span className="username-3char__reviewer-date">{review.date}</span>
                          </div>
                        </div>
                        
                        <div className="username-3char__review-content">
                          <div className="username-3char__quote-open">"</div>
                          <p className="username-3char__review-text">{review.text}</p>
                          <div className="username-3char__quote-close">"</div>
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

Username3Char.displayName = 'Username3Char';

export default Username3Char;


















