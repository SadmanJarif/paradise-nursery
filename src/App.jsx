import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

// Paradise Nursery — main app
// Navbar with cart icon + count, hero / landing section, product list,
// cart view, and About Us section.
function App() {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
    document.getElementById('plants-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <div className="navbar" style={{ backgroundColor: '#4CAF50' }}>
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt="Paradise Nursery logo"
            />
            <a href="/" onClick={(e) => { e.preventDefault(); setShowCart(false); setShowPlants(false); }}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="#plants-section" onClick={handlePlantsClick} style={{ color: 'white', fontSize: '18px', textDecoration: 'none' }}>Plants</a>
          <a href="#about-us" onClick={(e) => { e.preventDefault(); document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ color: 'white', fontSize: '18px', textDecoration: 'none' }}>About Us</a>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/cart" onClick={handleCartClick} style={{ color: 'white', fontSize: '18px', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <h1 className="cart" style={{ margin: 0 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32" fill="white">
                  <rect width="256" height="256" fill="none" />
                  <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  <circle cx="80" cy="216" r="12" />
                  <circle cx="184" cy="216" r="12" />
                </svg>
              </h1>
              <span className="cart_quantity_count">{totalQuantity}</span>
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div>
          {/* Hero / landing */}
          <div className="landing-section">
            <div className="landing-content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handlePlantsClick}>Get Started</button>
            </div>
            <div className="landing-image">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"
                alt="Houseplants at Paradise Nursery"
              />
            </div>
          </div>

          {/* Product list */}
          <div id="plants-section" className="product-list-container">
            <h1 className="product-list-title">Our Plants</h1>
            <ProductList />
          </div>

          {/* About Us */}
          <div id="about-us">
            <AboutUs />
          </div>
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
      {showPlants && !showCart ? null : null}
    </div>
  );
}

export default App;
