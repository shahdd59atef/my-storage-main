
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductCard from './Componants/ProductCard/ProductCard';
import Navbar from './Componants/Navbar/Navbar';
import CustomCursor from './Componants/CustomCursor/CustomCursor';
import HeroSlider from './Componants/HeroSlider/HeroSlider';
import FeaturedService from './Componants/FeaturedService/FeaturedService';
import ServicesSlider from './Componants/ServicesSlider/ServicesSlider';
import StepsSection from './Componants/StepsSection/StepsSection';
import Stats from './Componants/Stats/Stats';
import ProductsSlider from './Componants/ProductsSlider/ProductsSlider';
import ContactBar from './Componants/ContactBar/ContactBar';
import WhyChooseUs from './Componants/WhyChooseUs/WhyChooseUs';
import DesignSlider from './Componants/DesignSlider/DesignSlider';
import WebDevSlider from './Componants/WebDevSlider/WebDevSlider';
import PackagesSlider from './Componants/PackagesSlider/PackagesSlider';
import UsernamesSlider from './Componants/UsernamesSlider/UsernamesSlider';
import ReviewsSlider from './Componants/ReviewsSlider/ReviewsSlider';
import Blog from './Componants/Blog/Blog';
import BlogPost from './Componants/BlogPost/BlogPost';
import SnapchatCapture from './Componants/SnapchatCapture/SnapchatCapture';
import SnapchatPoints from './Componants/SnapchatPoints/SnapchatPoints';
import SnapchatStoryViews from './Componants/SnapchatStoryViews/SnapchatStoryViews';
import SnapchatFollowers from './Componants/SnapchatFollowers/SnapchatFollowers';
import SnapchatAccounts from './Componants/SnapchatAccounts/SnapchatAccounts';
import SnapchatAds from './Componants/SnapchatAds/SnapchatAds';
import Username3Char from './Componants/Username3Char/Username3Char';
import Username4Char from './Componants/Username4Char/Username4Char';
import SocialMediaServices from './Componants/SocialMediaServices/SocialMediaServices';
import AccountsForSale from './Componants/AccountsForSale/AccountsForSale';
import AdsCampaigns from './Componants/AdsCampaigns/AdsCampaigns';
import Verification from './Componants/Verification/Verification';
import Usernames from './Componants/Usernames/Usernames';
import Footer from './Componants/Footer/Footer';
import WhatsAppButton from './Componants/WhatsAppButton/WhatsAppButton';
import WhyChooseUs2 from './Componants/WhyChooseUs2/WhyChooseUs2';
import AllReviews from './Componants/AllReviews/AllReviews';
import Cart from './Componants/Cart/Cart';
import BottomNavbar from './Componants/BottomNavbar/BottomNavbar';
import { CartProvider } from './contexts/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <CustomCursor />
        <Navbar />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<PageHome />} />
            <Route path="/service" element={<FeaturedService />} />
            <Route path="/blog" element={<PageBlog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/snapchat-capture" element={<SnapchatCapture />} />
            <Route path="/snapchat-points" element={<SnapchatPoints />} />
            <Route path="/snapchat-story-views" element={<SnapchatStoryViews />} />
            <Route path="/snapchat-followers" element={<SnapchatFollowers />} />
            <Route path="/snapchat-accounts" element={<SnapchatAccounts />} />
            <Route path="/snapchat-ads" element={<SnapchatAds />} />
            <Route path="/username-3char" element={<Username3Char />} />
            <Route path="/username-4char" element={<Username4Char />} />
            <Route path="/social-media-services" element={<SocialMediaServices />} />
            <Route path="/accounts-for-sale" element={<AccountsForSale />} />
            <Route path="/ads-campaigns-services" element={<AdsCampaigns />} />
            <Route path="/verification-services" element={<Verification />} />
            <Route path="/usernames-services" element={<Usernames />} />
            <Route path="/social" element={<PageSocial />} />
            <Route path="/accounts-sale" element={<PageAccountsSale />} />
            <Route path="/ads-campaigns" element={<PageAdsCampaigns />} />
            <Route path="/verification" element={<PageVerification />} />
            <Route path="/accounts-management" element={<PageAccountsManagement />} />
            <Route path="/graphic-design" element={<PageGraphicDesign />} />
            <Route path="/web-apps" element={<PageWebApps />} />
            <Route path="/all-reviews" element={<AllReviews />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
        <BottomNavbar />
      </div>
    </CartProvider>
  );
}

export default App;

function PageHome(){
  return (
    <>
      <div style={{ width: '80%', margin: '0 auto', position: 'relative', zIndex: 1, marginTop: '-30px' }}>
        <HeroSlider
          height="auto"
          images={[
            "https://cdn.salla.sa/form-builder/b74s2qrmkHMOv45TmvCQuQRj8XChuogEwdPzljiw.jpg",
            "https://cdn.salla.sa/form-builder/ZC7yGMLoPxS0vA4KKKqPscrz8quVH7z3jQTLArwJ.jpg"
          ]}
        />
      </div>
      
      <section className="section" style={{ background: '#343444', padding: 0 }}>
        <div id="services-anchor"></div>
        <ServicesSlider />
      </section>
      
      {/* Featured Service Section */}
      <section className="section" style={{ 
        background: '#1F1F2C', 
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ 
            color: '#ffffff', 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem'
          }}>
            خدمة مميزة
          </h2>
          
          <ProductCard />
        </div>
      </section>
      {/* Featured service after services */}
      
      <StepsSection />
      <Stats />
      
      {/* Image Section after Stats */}
      <section className="image-section" style={{ 
        background: '#1F1F2C', 
        padding: '0.75rem 0', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          width: '100%', 
          padding: '0 2rem',
          '@media (max-width: 768px)': {
            padding: '0 1rem'
          }
        }}>
          <img 
            src="https://cdn.salla.sa/form-builder/uyQQNl6lYBFkGGQHN62y4fhIMXRc7ETYgc8RCRZF.jpg" 
            alt="عز"
            style={{ 
              width: '100%', 
              height: 'auto',
              minHeight: '200px',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '12px',
              boxShadow: '0 6px 25px rgba(247,236,6,0.3)',
              border: '2px solid rgba(247,236,6,0.4)',
              display: 'block'
            }}
          />
        </div>
      </section>
      <WhyChooseUs2 />

      <ProductsSlider />
      <ContactBar />
      
      {/* Image Section for Graphic Design */}
      <section className="image-section" style={{ 
        background: '#1F1F2C', 
        padding: '0.75rem 0', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '800px', width: '100%', padding: '0 2rem' }}>
          <img 
            src="https://cdn.salla.sa/form-builder/7F2P1yYlyxF16kG8jLKwe8VBDtK0yqS9ibxXe545.jpg" 
            alt="التصميم الجرافيكي"
            style={{ 
              width: '100%', 
              height: 'auto',
              minHeight: '200px',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '12px',
              boxShadow: '0 6px 25px rgba(247,236,6,0.3)',
              border: '2px solid rgba(247,236,6,0.4)',
              display: 'block'
            }}
          />
        </div>
      </section>
      
      <DesignSlider />
      
      {/* Image Section under Graphic Design */}
      <section className="image-section" style={{ 
        background: '#1F1F2C', 
        padding: '0.75rem 0', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '1000px', width: '100%', padding: '0 2rem' }}>
          <img 
            src="https://cdn.salla.sa/form-builder/KrI9lZrYT0s2BQMXzu0biOZouvf5YDVAU3K7HBQi.jpg" 
            alt="خدمات التصميم الجرافيكي"
            style={{ 
              width: '100%', 
              height: 'auto',
              minHeight: '200px',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '12px',
              display: 'block'
            }}
          />
        </div>
      </section>
      
      <WebDevSlider />
      <PackagesSlider />
      <UsernamesSlider />
      <ReviewsSlider />
    </>
  );
}

function PageBlog(){
  return <Blog />;
}

function PageSocial(){
  return (
    <section className="section"><div className="container"><h2>مواقع التواصل الاجتماعي</h2><p>إدارة الصفحات وزيادة التفاعل.</p></div></section>
  );
}

function PageAccountsSale(){
  return (
    <section className="section"><div className="container"><h2>حسابات للبيع</h2><p>خيارات متنوعة من الحسابات الجاهزة.</p></div></section>
  );
}

function PageAdsCampaigns(){
  return (
    <section className="section"><div className="container"><h2>اداره الحملات الاعلانية</h2><p>إعداد وتحسين حملاتك الإعلانية.</p></div></section>
  );
}

function PageVerification(){
  return (
    <section className="section"><div className="container"><h2>توثيق حسابات ويوزرات</h2><p>خدمات توثيق احترافية.</p></div></section>
  );
}

function PageAccountsManagement(){
  return (
    <section className="section"><div className="container"><h2>اداره حسابات</h2><p>إدارة كاملة لحساباتك.</p></div></section>
  );
}

function PageGraphicDesign(){
  return (
    <section className="section"><div className="container"><h2>التصميم الجرافييكي</h2><p>تصاميم مبدعة وهوية بصرية.</p></div></section>
  );
}

function PageWebApps(){
  return (
    <section className="section"><div className="container"><h2>برمجه الويب والتطبيقات</h2><p>مواقع وتطبيقات عالية الجودة.</p></div></section>
  );
}

function NotFound(){
  return (
    <section className="section"><div className="container"><h2>الصفحة غير موجودة</h2><p>تأكد من الرابط.</p></div></section>
  );
}
