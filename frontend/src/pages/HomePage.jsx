import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>BUY. SELL. WEAR.</h1>
          <p>Curated clothing marketplace</p>
          <Link to="/catalog" className="btn btn-primary">
            BROWSE CATALOG
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-card">
            <h3>CURATED SELECTION</h3>
            <p>Verified sellers and quality pieces</p>
          </div>
          <div className="feature-card">
            <h3>SECURE MESSAGING</h3>
            <p>Direct communication with sellers</p>
          </div>
          <div className="feature-card">
            <h3>FAST SHIPPING</h3>
            <p>Multiple delivery options available</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;