import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Marketplace</h1>
        </Link>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/login">Войти</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;