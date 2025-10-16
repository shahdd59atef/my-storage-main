import React, { useEffect, useRef, useState } from "react";
import { CiShare2, CiHeart } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import SaudiRiyalIcon from '../SaudiRiyalIcon/SaudiRiyalIcon';
import './ProductCard.css';

const ProductCard = () => {
  // Share menu state
  const [isShareOpen, setIsShareOpen] = useState(false);
  const shareRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!shareRef.current) return;
      if (!shareRef.current.contains(e.target)) {
        setIsShareOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const handleShare = (type) => {
    const url = window.location.href;
    const text = encodeURIComponent("شاهد هذه الخدمة المميزة من عز للخدمات التسويقية");
    switch (type) {
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          setIsShareOpen(false);
        }).catch(() => {});
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${text}%20${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent("خدمة مميزة من عز")}&body=${text}%20${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        break;
    }
  };

  const product = {
    name: "مشاهدات سناب 100",
    price: 50,
    originalPrice: 75,
    discountPercentage: 33.33,
    savings: 25,
    sold: 6,
    image: "https://cdn.salla.sa/DQYwE/40c6b05a-e635-47e1-87ea-ac765b6e3f40-400x500-QGuJ4XmWyyOvg1ZUcOmY28x7RGEIk9PLWpHWXHtd.jpg",
    description: "ضع اسم المستخدم الخاص بك في منطقة الرابط. 100 مشاهدة قصة لحسابك.",
    hasDiscount: false
  };

  return (
    <section className="product-card-section" dir="rtl">
      <div className="product-card-container">
        <div className="product-card-wrapper">
          
          {/* اليمين: تفاصيل المنتج */}
          <div className="product-card-details">
            <h2 className="product-card-title">{product.name}</h2>

            {product.hasDiscount ? (
              <div className="product-card-pricing" dir="rtl">
                <div className="product-card-discount-container">
                  <div className="product-card-price-info">
                    <span className="product-card-price product-card-price--discounted">
                      {product.price} <SaudiRiyalIcon width={14} height={15} />
                    </span>
                    <span className="product-card-original-price">
                      {product.originalPrice} <SaudiRiyalIcon width={12} height={13} />
                    </span>
                  </div>
                  <div className="product-card-discount-info">
                    <div className="product-card-discount-badge">
                      - % {product.discountPercentage}
                    </div>
                    <div className="product-card-savings">
                      وفر {product.savings.toFixed(2)} <SaudiRiyalIcon width={12} height={13} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="product-card-price" dir="rtl">
                {product.price} <SaudiRiyalIcon width={14} height={15} />
              </p>
            )}

            <p className="product-card-sold">
              <FaFireAlt color="#F7EC06" /> تم بيعه أكثر من {product.sold}
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
            <div className="product-card-share" ref={shareRef}>
              <button className="product-card-share-btn" onClick={() => setIsShareOpen((p) => !p)} aria-haspopup="true" aria-expanded={isShareOpen} aria-label="مشاركة">
                <CiShare2 />
              </button>
              {isShareOpen && (
                <div className="product-card-share-menu" role="menu">
                  <button role="menuitem" className="share-item" onClick={() => handleShare('facebook')}>
                    <FaFacebookF />
                  </button>
                  <button role="menuitem" className="share-item" onClick={() => handleShare('twitter')}>
                    <FaXTwitter />
                  </button>
                  <button role="menuitem" className="share-item" onClick={() => handleShare('whatsapp')}>
                    <IoLogoWhatsapp />
                  </button>
                  <button role="menuitem" className="share-item" onClick={() => handleShare('email')}>
                    <MdEmail />
                  </button>
                  <button role="menuitem" className="share-item" onClick={() => handleShare('copy')}>
                    <IoMdLink />
                  </button>
                </div>
              )}
            </div>
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
