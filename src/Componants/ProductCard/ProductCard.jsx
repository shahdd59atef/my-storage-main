import React from "react";
import { CiShare2, CiHeart } from "react-icons/ci";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './ProductCard.css';

const ProductCard = () => {
  const product = {
    name: "مشاهدات سناب 100",
    price: 75,
    sold: 6,
    image: "https://cdn.salla.sa/DQYwE/40c6b05a-e635-47e1-87ea-ac765b6e3f40-400x500-QGuJ4XmWyyOvg1ZUcOmY28x7RGEIk9PLWpHWXHtd.jpg",
    description: "ضع اسم المستخدم الخاص بك في منطقة الرابط. 100 مشاهدة قصة لحسابك.",
  };

  return (
    <section className="product-card-section" dir="rtl">
      <div className="product-card-container">
        <div className="product-card-wrapper">
          
          {/* اليمين: تفاصيل المنتج */}
          <div className="product-card-details">
            <h2 className="product-card-title">{product.name}</h2>

            <p className="product-card-price" dir="rtl">
              {product.price} <SaudiRiyalIcon width={14} height={15} />
            </p>

            <p className="product-card-sold">
              🔥 تم بيعه أكثر من {product.sold}
            </p>

            <p className="product-card-description">
              {product.description}
            </p>

            <div className="product-card-actions">
              <button className="product-card-add-to-cart">
                إضافة للسلة
              </button>
              <button className="product-card-heart-btn">
                <CiHeart />
              </button>
              <button className="product-card-share-btn">
                <CiShare2 />
              </button>
            </div>
          </div>

          {/* اليسار: صورة المنتج */}
          <div className="product-card-image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="product-card-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
