import React, { useState } from 'react';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingBag } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import './BottomNavbar.css';

const BottomNavbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  // Open menu function for categories
  const handleCategoriesClick = (e) => {
    e.preventDefault();
    // Trigger hamburger menu click using ID
    const hamburgerBtn = document.getElementById('hamburger-menu-btn');
    if (hamburgerBtn && typeof hamburgerBtn.click === 'function') {
      hamburgerBtn.click();
    }
  };

  // Open login modal function
  const handleAccountClick = (e) => {
    e.preventDefault();
    // Trigger the account icon click from navbar using ID
    const accountIcon = document.getElementById('navbar-account-icon');
    if (accountIcon && typeof accountIcon.click === 'function') {
      accountIcon.click();
    }
  };

  // Open search bar function
  const handleSearchClick = (e) => {
    e.preventDefault();
    setShowSearchBar(true);
  };

  // Close search bar function
  const toggleSearchBar = () => {
    setShowSearchBar(false);
  };


  return (
    <nav className="bottom-navbar">
      <div className="bottom-navbar__container">
        
        {/* حسابي */}
        <button onClick={handleAccountClick} className="bottom-navbar__item">
          <IoPersonOutline className="bottom-navbar__icon" />
          <span className="bottom-navbar__label">حسابي</span>
        </button>

        {/* السلة */}
        <a href="/cart" className="bottom-navbar__item">
          <div className="bottom-navbar__cart-wrapper">
            <PiShoppingBag className="bottom-navbar__icon" />
            <span className="bottom-navbar__cart-badge">0</span>
          </div>
          <span className="bottom-navbar__label">السلة</span>
        </a>

        {/* التصنيفات */}
        <button onClick={handleCategoriesClick} className="bottom-navbar__item bottom-navbar__item--active">
          <AiOutlineAppstoreAdd className="bottom-navbar__icon" />
          <span className="bottom-navbar__label">التصنيفات</span>
        </button>

        {/* البحث */}
        <button onClick={handleSearchClick} className="bottom-navbar__item">
          <CiSearch className="bottom-navbar__icon" />
          <span className="bottom-navbar__label">بحث</span>
        </button>

        {/* الرئيسية */}
        <a href="/" className="bottom-navbar__item">
          <IoHomeOutline className="bottom-navbar__icon" />
          <span className="bottom-navbar__label">الرئيسية</span>
        </a>

      </div>

      {/* Search Modal */}
      {showSearchBar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-start justify-center pt-20 md:pt-32">
          <div className="relative w-full max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="ادخل كلمة البحث"
                className="w-full bg-white text-gray-800 px-4 py-3 pr-12 md:px-6 md:py-4 md:pr-16 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F7EC06] focus:ring-2 focus:ring-[#F7EC06] focus:ring-opacity-20 text-base md:text-lg shadow-lg"
                dir="rtl"
                autoFocus
              />
              <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl md:text-2xl" />
              <button
                onClick={toggleSearchBar}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl md:text-2xl hover:text-gray-600 transition-colors duration-200"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default BottomNavbar;
