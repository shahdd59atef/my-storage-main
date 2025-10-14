import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import './Cart.css';

const Cart = () => {
  const goToHomePage = () => {
    window.location.href = '/';
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Shopping Bag Icon in Circle */}
        <div className="cart-icon-wrapper">
          <div className="cart-icon-circle">
            <HiOutlineShoppingBag className="cart-icon" />
          </div>
        </div>
        
        {/* Empty Cart Message */}
        <h2 className="cart-message">السلة فارغة</h2>
        
        {/* Home Page Button */}
        <button 
          className="home-page-button"
          onClick={goToHomePage}
        >
          الصفحة الرئيسية
        </button>
      </div>
    </div>
  );
};

export default Cart;










