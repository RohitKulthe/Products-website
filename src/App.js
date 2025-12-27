import React from "react";
import ExploreSection from "./ExploreSection";
import TopPicksSection from "./TopPicksSection";
import "./styles.css";
import "./ProductCard.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <nav className="main-nav">
          <div className="logo">Company Name</div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Categories</a>
            <a href="#">Sale</a>
            <a href="#">Contact</a>
          </div>
          <div className="nav-icons">
            <button className="icon-btn">🔍</button>
            <button className="icon-btn">🛒</button>
            <button className="icon-btn">👤</button>
          </div>
        </nav>
      </header>
      
      <div className="hero-banner">
        <h1>Audio That Moves You</h1>
        <p>Premium sound quality meets stylish design</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
      
      <ExploreSection />
      <TopPicksSection />
      
      <footer className="app-footer">
        <p>© 2024 Company name. All rights reserved.</p>
        <p>Experience the extraordinary with Company name</p>
      </footer>
    </div>
  );
}

export default App;