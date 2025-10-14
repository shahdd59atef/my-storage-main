import React, { useState, useCallback, memo } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { PiShoppingBag } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
    setMobileDropdown(null); // إغلاق أي dropdown مفتوح عند فتح/إغلاق القائ
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setMobileDropdown(null);
  }, []);

  const toggleMobileDropdown = useCallback((dropdownName) => {
    setMobileDropdown(prev => prev === dropdownName ? null : dropdownName);
  }, []);

  const toggleSearchBar = useCallback(() => {
    setShowSearchBar(prev => !prev);
  }, []);

  const toggleLoginModal = useCallback(() => {
    setShowLoginModal(prev => !prev);
  }, []);

  const handleMouseEnter = useCallback((dropdownName) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(dropdownName);
  }, [dropdownTimeout]);

  const handleMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // تأخير 300ms قبل إغلاق القائمة
    setDropdownTimeout(timeout);
  }, []);

  const linkClass = "text-gray-500 text-[13px] font-semibold py-[0.5rem] px-0 transition-colors duration-300 no-underline block whitespace-nowrap hover:text-[#F7EC06]";
  const buttonClass = "bg-none border-none text-gray-500 text-[13px] font-semibold cursor-pointer py-[0.5rem] px-0 transition-colors duration-300 whitespace-nowrap hover:text-[#F7EC06]";

  return (
    <nav className="bg-[#141420] py-1.5 relative z-[1000] h-30 shadow-[(247,236,6,0.15)] rounded-xl my-3 mx-auto w-[85%] -mb-20">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col gap-1">
        {/* Mobile/Tablet Layout */}
        <div className="flex items-center justify-between w-full md:hidden py-3 px-4">
          {/* Left side - Moon icon only */}
          <div className="flex items-center">
            <MdDarkMode className="text-white text-lg cursor-pointer hover:text-[#F7EC06] transition-colors duration-300" />
          </div>

          {/* Center - Logo */}
          <div className="flex flex-col items-center">
            <img 
              src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/DQYwE/wyWnbCpitH0YrIqGM6cmhukxXFJX8zWn8RnN3DLW.png" 
              alt="Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Right side - Hamburger menu */}
          <div className="flex items-center">
            <button
              id="hamburger-menu-btn"
              className={`flex flex-col gap-[3px] bg-none border-none cursor-pointer p-1 transition-all duration-300 ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`w-[20px] h-[2px] bg-white rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
              <span className={`w-[20px] h-[2px] bg-white rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-[20px] h-[2px] bg-white rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="flex items-center justify-between w-full hidden md:flex lg:hidden py-3 px-6">
          {/* Left side - Moon icon */}
          <div className="flex items-center">
            <MdDarkMode className="text-white text-xl cursor-pointer hover:text-[#F7EC06] transition-colors duration-300" />
          </div>

          {/* Center - Logo and text */}
          <div className="flex flex-col items-center">
            <img 
              src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/DQYwE/wyWnbCpitH0YrIqGM6cmhukxXFJX8zWn8RnN3DLW.png" 
              alt="Logo" 
              className="h-10 w-auto mb-1"
            />
            <span className="text-white text-sm font-medium text-center">عز للخدمات التسويقية</span>
          </div>

          {/* Right side - Hamburger menu */}
          <div className="flex items-center">
            <button
              className={`flex flex-col gap-[4px] bg-none border-none cursor-pointer p-1.5 transition-all duration-300 ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`w-[22px] h-[2.5px] bg-white rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></span>
              <span className={`w-[22px] h-[2.5px] bg-white rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-[22px] h-[2.5px] bg-white rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}></span>
            </button>
          </div>
        </div>
        <div className="w-full hidden lg:flex flex-col items-center gap-1">
            <div className="w-full flex justify-between items-center pt-1">
              <div className="flex items-center gap-6 flex-row-reverse mt-10 mr-25">
                <CiSearch 
                  id="navbar-search-icon"
                  className="text-gray-500 text-xl cursor-pointer hover:text-[#F7EC06] transition-colors duration-300" 
                  onClick={toggleSearchBar}
                />
                <IoPersonOutline 
                  id="navbar-account-icon"
                  className="text-gray-500 text-xl cursor-pointer hover:text-[#F7EC06] transition-colors duration-300" 
                  onClick={toggleLoginModal}
                />
                <MdDarkMode className="text-gray-500 text-xl cursor-pointer hover:text-[#F7EC06] transition-colors duration-300" />
                <PiShoppingBag 
                  className="text-gray-500 text-xl cursor-pointer hover:text-[#F7EC06] transition-colors duration-300" 
                  onClick={() => window.location.href = '/cart'}
                />
              </div>
              <div className="flex items-center gap-4">
                <ul className="flex items-center gap-2.5 list-none m-0 p-0 flex-row-reverse">
            <li className="relative">
              <a href="/blog" className={linkClass}>المدونة</a>
            </li>
            <li className="relative" onMouseEnter={() => handleMouseEnter('social')} onMouseLeave={handleMouseLeave}>
              <a href="/social-media-services" className={linkClass}><RiArrowDropDownLine className="inline-block ml-1" /> خدمات مواقع التواصل الاجتماعي</a>
              {openDropdown === 'social' && (
                      <div 
                        className="absolute top-full right-0 mt-2 bg-[#141420] rounded-lg shadow-[0_8px_20px_rgba(31,31,44,0.3)] min-w-[280px] p-3 z-50"
                        onMouseEnter={() => handleMouseEnter('social')}
                        onMouseLeave={handleMouseLeave}
                      >
                  <div className="mb-2">
                    <h4 className="text-[#F7EC06] font-bold text-sm mb-3 pb-2 border-b-2 border-[#F7EC06] text-left">سناب شات</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-1">
                      <li>
                        <a href="/social-media-services" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          عرض الكل
                        </a>
                      </li>
                      <li>
                        <a href="/snapchat-capture" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          كابشر سناب شات
                        </a>
                      </li>
                      <li>
                        <a href="/snapchat-points" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          نقاط سناب شات
                        </a>
                      </li>
                      <li>
                        <a href="/snapchat-story-views" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          مشاهدات ستوري سناب شات
                        </a>
                      </li>
                      <li>
                        <a href="/snapchat-followers" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          زيادة متابعين سناب شات
                        </a>
                      </li>
              </ul>
                  </div>
                </div>
              )}
            </li>

            <li className="relative" onMouseEnter={() => handleMouseEnter('sale')} onMouseLeave={handleMouseLeave}>
              <a href="/accounts-for-sale" className={linkClass}><RiArrowDropDownLine className="inline-block ml-1" /> حسابات للبيع</a>
              
              {/* Dropdown Menu for Sale Accounts */}
              {openDropdown === 'sale' && (
                      <div 
                        className="absolute top-full right-0 mt-2 bg-[#141420] rounded-lg shadow-[0_8px_20px_rgba(31,31,44,0.3)] min-w-[280px] p-3 z-50"
                        onMouseEnter={() => handleMouseEnter('sale')}
                        onMouseLeave={handleMouseLeave}
                      >
                  <div className="mb-2">
                    <h4 className="text-[#F7EC06] font-bold text-sm mb-3 pb-2 border-b-2 border-[#F7EC06] text-left">حسابات للبيع</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-1">
                      <li>
                        <a href="/snapchat-accounts" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          حسابات سناب شات
                        </a>
                      </li>
                      <li>
                        <a href="#instagram-accounts" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          حسابات انستقرام
                        </a>
                      </li>
                      <li>
                        <a href="#tiktok-accounts" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          حسابات تيك توك
                        </a>
                      </li>
                      <li>
                        <a href="#twitter-accounts" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          حسابات تويتر
                        </a>
                      </li>
              </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="relative" onMouseEnter={() => handleMouseEnter('ads')} onMouseLeave={handleMouseLeave}>
              <a href="/ads-campaigns-services" className={linkClass}><RiArrowDropDownLine className="inline-block ml-1" /> اداره الحملات الاعلانية</a>
              
              {/* Dropdown Menu for Ads Campaigns */}
              {openDropdown === 'ads' && (
                      <div 
                        className="absolute top-full right-0 mt-2 bg-[#141420] rounded-lg shadow-[0_8px_20px_rgba(31,31,44,0.3)] min-w-[280px] p-3 z-50"
                        onMouseEnter={() => handleMouseEnter('ads')}
                        onMouseLeave={handleMouseLeave}
                      >
                  <div className="mb-2">
                    <h4 className="text-[#F7EC06] font-bold text-sm mb-3 pb-2 border-b-2 border-[#F7EC06] text-left">إدارة الحملات الإعلانية</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-1">
                      <li>
                        <a href="/snapchat-ads" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          إعلانات سناب شات
                        </a>
                      </li>
                      <li>
                        <a href="#instagram-ads" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          إعلانات انستقرام
                        </a>
                      </li>
                      <li>
                        <a href="#tiktok-ads" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          إعلانات تيك توك
                        </a>
                      </li>
                      <li>
                        <a href="#twitter-ads" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          إعلانات تويتر (X)
                        </a>
                      </li>
                      <li>
                        <a href="#facebook-ads" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          إعلانات فيسبوك
                        </a>
                      </li>
                      <li>
                        <a href="#google-ads" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          إعلانات جوجل
                        </a>
                      </li>
              </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="relative" onMouseEnter={() => handleMouseEnter('verification')} onMouseLeave={handleMouseLeave}>
              <a href="/verification-services" className={linkClass}><RiArrowDropDownLine className="inline-block ml-1" /> توثيق حسابات</a>
            </li>
            <li className="relative" onMouseEnter={() => handleMouseEnter('usernames')} onMouseLeave={handleMouseLeave}>
              <a href="/usernames-services" className={linkClass}><RiArrowDropDownLine className="inline-block ml-1" /> يوزرات</a>
              
              {/* Dropdown Menu for Usernames */}
              {openDropdown === 'usernames' && (
                      <div 
                        className="absolute top-full right-0 mt-2 bg-[#141420] rounded-lg shadow-[0_8px_20px_rgba(31,31,44,0.3)] min-w-[280px] p-3 z-50"
                        onMouseEnter={() => handleMouseEnter('usernames')}
                        onMouseLeave={handleMouseLeave}
                      >
                  <div className="mb-2">
                    <h4 className="text-[#F7EC06] font-bold text-sm mb-3 pb-2 border-b-2 border-[#F7EC06] text-left">يوزرات</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-1">
                      <li>
                        <a href="#snapchat-usernames" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          يوزرات سناب شات
                        </a>
                        <div className="flex flex-col gap-1 mt-1 mr-6">
                          <a href="/username-3char" className="block py-1 px-2 text-gray-300 text-xs font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] text-left">
                            يوزر ثلاثي
                          </a>
                          <a href="/username-4char" className="block py-1 px-2 text-gray-300 text-xs font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] text-left">
                            يوزر رباعي
                          </a>
                        </div>
                      </li>
                      <li>
                        <a href="#instagram-usernames" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          يوزرات انستقرام
                        </a>
                      </li>
                      <li>
                        <a href="#tiktok-usernames" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          يوزرات تيك توك
                        </a>
                      </li>
                      <li>
                        <a href="#twitter-usernames" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          يوزرات تويتر (X)
                        </a>
                      </li>
                      <li>
                        <a href="#discord-usernames" className="block py-2 px-3 text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(247,236,6,0.1)] hover:text-[#F7EC06] hover:pl-4 text-left">
                          يوزرات ديسكورد
                        </a>
                      </li>
              </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="relative" onMouseEnter={() => handleMouseEnter('accounts')} onMouseLeave={handleMouseLeave}>
              <button className={buttonClass}><RiArrowDropDownLine className="inline-block ml-1" /> اداره حسابات</button>
            </li>
              </ul>
                <img 
                  src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/DQYwE/wyWnbCpitH0YrIqGM6cmhukxXFJX8zWn8RnN3DLW.png" 
                  alt="Logo" 
                  className="h-10 w-auto"
                />
              </div>

            </div>

          {/* Second Row */}
          <div className="w-full flex justify-end items-center pb-1">
            <div className="flex items-center gap-4">
              <ul className="flex items-center gap-2.5 list-none m-0 p-0 flex-row-reverse">
                <li className="relative flex items-center gap-2" onMouseEnter={() => handleMouseEnter('design')} onMouseLeave={handleMouseLeave}>
                  <button className={buttonClass}><RiArrowDropDownLine className="inline-block ml-1" /> التصميم الجرافيكي</button>
                </li>
                <li className="relative" onMouseEnter={() => handleMouseEnter('programming')} onMouseLeave={handleMouseLeave}>
                  <button className={buttonClass}><RiArrowDropDownLine className="inline-block ml-1" /> برمجة الويب</button>
                </li>
                <li className="relative">
                  <a href="#motion" className={linkClass}>الموشن جرافيك</a>
                </li>
              </ul>
              <div className="w-10"></div>
            </div>
          </div>
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

        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center">
            <div className="bg-[#141420] rounded-xl p-8 w-full max-w-md mx-4 relative">
              {/* Close Button */}
              <button
                onClick={toggleLoginModal}
                className="absolute top-4 left-4 text-[#F7EC06] text-xl hover:text-white transition-colors duration-200"
              >
                ✕
              </button>
              
              {/* User Icon */}
              <div className="flex justify-center mb-6">
                <IoPersonOutline className="text-[#F7EC06] text-6xl" />
              </div>
              
              {/* Title */}
              <h2 className="text-white text-2xl font-bold text-center mb-8">تسجيل الدخول</h2>
              
              {/* Email Input */}
              <div className="mb-8">
                <label className="block text-white text-sm font-medium mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#2a2a3a] text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-[#F7EC06] focus:ring-2 focus:ring-[#F7EC06] focus:ring-opacity-20"
                  dir="ltr"
                />
              </div>
              
              {/* Login Button */}
              <button className="w-full bg-white text-[#1F1F2C] py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200">
                دخول
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 bg-[#141420] border-t border-[rgba(247,236,6,0.2)] ${isMenuOpen ? 'max-h-[1000px] py-4' : 'max-h-0'}`}>
        <ul className="list-none p-0 m-0 max-w-[900px] mx-auto px-4">
          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <a href="/blog" className="block py-3 px-3 text-white text-sm no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              المدونة
            </a>
          </li>
          
          {/* خدمات السوشيال ميديا مع dropdown */}
          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <button 
              className="w-full flex items-center justify-between py-3 px-3 text-white text-sm font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] rounded-md bg-transparent border-none cursor-pointer text-right"
              onClick={() => toggleMobileDropdown('social')}
            >
              <RiArrowDropDownLine className={`text-xl transition-transform duration-300 ${mobileDropdown === 'social' ? 'rotate-180' : ''}`} />
              <span>خدمات مواقع التواصل الاجتماعي</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'social' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <ul className="list-none p-0 m-0 bg-[rgba(255,107,53,0.05)] rounded-md mr-4 mb-2">
                <li>
                  <a href="/social-media-services" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    عرض الكل
                  </a>
                </li>
                <li>
                  <a href="/snapchat-capture" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    كابشر سناب شات
                  </a>
                </li>
                <li>
                  <a href="/snapchat-points" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    نقاط سناب شات
                  </a>
                </li>
                <li>
                  <a href="/snapchat-story-views" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    مشاهدات ستوري
                  </a>
                </li>
                <li>
                  <a href="/snapchat-followers" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    زيادة متابعين
                  </a>
                </li>
                <li>
                  <a href="/snapchat-accounts" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    حسابات سناب شات
                  </a>
                </li>
                <li>
                  <a href="/snapchat-ads" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    إعلانات سناب شات
                  </a>
                </li>
              </ul>
            </div>
          </li>
          
          {/* يوزرات مع dropdown */}
          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <button 
              className="w-full flex items-center justify-between py-3 px-3 text-white text-sm font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] rounded-md bg-transparent border-none cursor-pointer text-right"
              onClick={() => toggleMobileDropdown('usernames')}
            >
              <RiArrowDropDownLine className={`text-xl transition-transform duration-300 ${mobileDropdown === 'usernames' ? 'rotate-180' : ''}`} />
              <span>يوزرات</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'usernames' ? 'max-h-[400px]' : 'max-h-0'}`}>
              <ul className="list-none p-0 m-0 bg-[rgba(255,107,53,0.05)] rounded-md mr-4 mb-2">
                <li>
                  <a href="/usernames-services" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    عرض الكل
                  </a>
                </li>
                <li>
                  <a href="/username-3char" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    يوزرات 3 أحرف
                  </a>
                </li>
                <li>
                  <a href="/username-4char" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    يوزرات 4 أحرف
                  </a>
                </li>
                <li>
                  <a href="#instagram-usernames" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    يوزرات انستقرام
                  </a>
                </li>
                <li>
                  <a href="#tiktok-usernames" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    يوزرات تيك توك
                  </a>
                </li>
                <li>
                  <a href="#twitter-usernames" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    يوزرات تويتر (X)
                  </a>
                </li>
                <li>
                  <a href="#discord-usernames" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    يوزرات ديسكورد
                  </a>
                </li>
              </ul>
            </div>
          </li>
          
          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <button 
              className="w-full flex items-center justify-between py-3 px-3 text-white text-sm font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] rounded-md bg-transparent border-none cursor-pointer text-right"
              onClick={() => toggleMobileDropdown('accounts')}
            >
              <RiArrowDropDownLine className={`text-xl transition-transform duration-300 ${mobileDropdown === 'accounts' ? 'rotate-180' : ''}`} />
              <span>اداره حسابات</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'accounts' ? 'max-h-[300px]' : 'max-h-0'}`}>
              <ul className="list-none p-0 m-0 bg-[rgba(255,107,53,0.05)] rounded-md mr-4 mb-2">
                <li>
                  <a href="/accounts-management" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    عرض الكل
                  </a>
                </li>
                <li>
                  <a href="/accounts-for-sale" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    حسابات للبيع
                  </a>
                </li>
                <li>
                  <a href="/verification-services" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    توثيق حسابات
                  </a>
                </li>
                <li>
                  <a href="/ads-campaigns-services" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    إدارة الحملات الإعلانية
                  </a>
                </li>
              </ul>
            </div>
          </li>
          
          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <a href="/graphic-design" className="block py-3 px-3 text-white text-sm no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              التصميم الجرافيكي
            </a>
          </li>
          
          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <a href="/web-apps" className="block py-3 px-3 text-white text-sm no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              برمجة الويب والتطبيقات
            </a>
          </li>
          
          <li>
            <a href="#motion-graphics" className="block py-3 px-3 text-white text-sm no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              الموشن جرافيك
            </a>
          </li>
        </ul>
      </div>

      {/* Tablet Menu */}
      <div className={`hidden md:block lg:hidden overflow-hidden transition-all duration-500 bg-[#141420] border-t border-[rgba(247,236,6,0.2)] ${isMenuOpen ? 'max-h-[1000px] py-4' : 'max-h-0'}`}>
        <ul className="list-none p-0 m-0 max-w-[900px] mx-auto px-4">
          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <a href="/blog" className="block py-3 px-3 text-white text-sm no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              المدونة
            </a>
          </li>
          
          {/* خدمات السوشيال ميديا مع dropdown */}
          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <button 
              className="w-full flex items-center justify-between py-3 px-3 text-white text-sm font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] rounded-md bg-transparent border-none cursor-pointer text-right"
              onClick={() => toggleMobileDropdown('social')}
            >
              <RiArrowDropDownLine className={`text-xl transition-transform duration-300 ${mobileDropdown === 'social' ? 'rotate-180' : ''}`} />
              <span>خدمات مواقع التواصل الاجتماعي</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'social' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <ul className="list-none p-0 m-0 bg-[rgba(255,107,53,0.05)] rounded-md mr-4 mb-2">
                <li>
                  <a href="/social-media-services" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    عرض الكل
                  </a>
                </li>
                <li>
                  <a href="/snapchat-capture" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    كابشر سناب شات
                  </a>
                </li>
                <li>
                  <a href="/snapchat-points" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    نقاط سناب شات
                  </a>
                </li>
                <li>
                  <a href="/snapchat-story-views" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    مشاهدات ستوري
                  </a>
                </li>
                <li>
                  <a href="/snapchat-followers" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    زيادة متابعين
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* حسابات للبيع مع dropdown */}
          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <button 
              className="w-full flex items-center justify-between py-3 px-3 text-white text-sm font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] rounded-md bg-transparent border-none cursor-pointer text-right"
              onClick={() => toggleMobileDropdown('sale')}
            >
              <RiArrowDropDownLine className={`text-xl transition-transform duration-300 ${mobileDropdown === 'sale' ? 'rotate-180' : ''}`} />
              <span>حسابات للبيع</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'sale' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <ul className="list-none p-0 m-0 bg-[rgba(255,107,53,0.05)] rounded-md mr-4 mb-2">
                <li>
                  <a href="/snapchat-accounts" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    حسابات سناب شات
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* إدارة الحملات الإعلانية مع dropdown */}
          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <button 
              className="w-full flex items-center justify-between py-3 px-3 text-white text-sm font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] rounded-md bg-transparent border-none cursor-pointer text-right"
              onClick={() => toggleMobileDropdown('ads')}
            >
              <RiArrowDropDownLine className={`text-xl transition-transform duration-300 ${mobileDropdown === 'ads' ? 'rotate-180' : ''}`} />
              <span>إدارة الحملات الإعلانية</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'ads' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <ul className="list-none p-0 m-0 bg-[rgba(255,107,53,0.05)] rounded-md mr-4 mb-2">
                <li>
                  <a href="/snapchat-ads" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    إعلانات سناب شات
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <a href="/verification-services" className="block py-3 px-3 text-white text-sm no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              توثيق حسابات
            </a>
          </li>

          {/* يوزرات مع dropdown */}
          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <button 
              className="w-full flex items-center justify-between py-3 px-3 text-white text-sm font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] rounded-md bg-transparent border-none cursor-pointer text-right"
              onClick={() => toggleMobileDropdown('usernames')}
            >
              <RiArrowDropDownLine className={`text-xl transition-transform duration-300 ${mobileDropdown === 'usernames' ? 'rotate-180' : ''}`} />
              <span>يوزرات</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'usernames' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <ul className="list-none p-0 m-0 bg-[rgba(255,107,53,0.05)] rounded-md mr-4 mb-2">
                <li>
                  <a href="/username-3char" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    يوزر ثلاثي
                  </a>
                </li>
                <li>
                  <a href="/username-4char" className="block py-2 px-4 text-gray-300 text-xs no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6" onClick={closeMenu}>
                    يوزر رباعي
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <a href="#accounts" className="block py-3 px-3 text-white text-sm no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              إدارة حسابات
            </a>
          </li>

          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <a href="#design" className="block py-3 px-3 text-white text-sm no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              التصميم الجرافيكي
            </a>
          </li>

          <li className="border-b border-[rgba(247,236,6,0.1)]">
            <a href="#programming" className="block py-3 px-3 text-white text-sm no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              برمجة الويب
            </a>
          </li>

          <li>
            <a href="#motion" className="block py-3 px-3 text-white text-sm no-underline font-semibold transition-all duration-300 hover:text-[#F7EC06] hover:bg-[rgba(247,236,6,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              الموشن جرافيك
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
