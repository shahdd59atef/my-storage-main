import React from 'react';
import './WhyChooseUs2.css';

export default function WhyChooseUs2() {
  const features = [
    {
      id: 1,
      icon: '👤',
      title: 'دعم فني سريع',
      description: 'نتابع طلباتك خطوة بخطوة'
    },
    {
      id: 2,
      icon: '🎁',
      title: 'يوزرات مميزه',
      description: 'احجز اسم مستخدم يفرقك عن غيرك، سهل الحفظ، ويخدم هويتك التجارية'
    },
    {
      id: 3,
      icon: '✓',
      title: 'توثيق رسمي ومعتمد',
      description: 'نوفر خدمات توثيق إحترافية لحساباتك ترفع من مصداقيتك.'
    },
    {
      id: 4,
      icon: '👥',
      title: 'متابعين حقيقيين 100%',
      description: 'نضمن لك متابعين سعوديين حقيقيين يعززون التفاعل ويقوّون وجودك الرقمي.'
    }
  ];

  return (
    <section className="why-choose-us2" dir="rtl">
      <div className="why-choose-us2__container">
        <h2 className="why-choose-us2__title">
          ميزات تكمل مشروعك من <span className="why-choose-us2__brand">ZJA</span>
        </h2>
        <div className="why-choose-us2__underline"></div>
        
        <div className="why-choose-us2__grid">
          {features.slice().reverse().map((feature) => (
            <div key={feature.id} className="why-choose-us2__card">
              <div className="why-choose-us2__icon-wrapper">
                <div className="why-choose-us2__icon">{feature.icon}</div>
              </div>
              <h3 className="why-choose-us2__card-title">{feature.title}</h3>
              <p className="why-choose-us2__card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

