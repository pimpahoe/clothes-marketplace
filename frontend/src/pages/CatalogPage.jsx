import React, { useState } from 'react';
import './CatalogPage.css';

function CatalogPage() {
  const [filters, setFilters] = useState({
    brand: '',
    condition: '',
    minPrice: '',
    maxPrice: ''
  });

  // Временные данные для демонстрации (потом заменим на реальные из API)
  const mockListings = [
    { id: 1, title: 'Nike Air Max', brand: 'Nike', price: 8500, condition: 'new', image: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Adidas Hoodie', brand: 'Adidas', price: 3500, condition: 'like_new', image: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Zara Jacket', brand: 'Zara', price: 4200, condition: 'good', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <h1>Каталог</h1>
        
        <div className="catalog-layout">
          {/* Фильтры */}
          <aside className="filters">
            <h3>Фильтры</h3>
            
            <div className="filter-group">
              <label>Бренд</label>
              <input 
                type="text" 
                placeholder="Введите бренд"
                value={filters.brand}
                onChange={(e) => setFilters({...filters, brand: e.target.value})}
              />
            </div>

            <div className="filter-group">
              <label>Состояние</label>
              <select 
                value={filters.condition}
                onChange={(e) => setFilters({...filters, condition: e.target.value})}
              >
                <option value="">Любое</option>
                <option value="new">Новое</option>
                <option value="like_new">Как новое</option>
                <option value="good">Хорошее</option>
                <option value="worn">Ношенное</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Цена от</label>
              <input 
                type="number" 
                placeholder="0"
                value={filters.minPrice}
                onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
              />
            </div>

            <div className="filter-group">
              <label>Цена до</label>
              <input 
                type="number" 
                placeholder="100000"
                value={filters.maxPrice}
                onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
              />
            </div>

            <button className="btn btn-primary">Применить</button>
          </aside>

          {/* Список объявлений */}
          <div className="listings-grid">
            {mockListings.map(listing => (
              <div key={listing.id} className="listing-card">
                <img src={listing.image} alt={listing.title} />
                <div className="listing-info">
                  <h3>{listing.title}</h3>
                  <p className="brand">{listing.brand}</p>
                  <p className="price">{listing.price} ₽</p>
                  <span className="condition">{listing.condition}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;