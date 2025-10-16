import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  return (
    <section className="products-preview">
      <div className="container">
        <h2>Our Collections</h2>
        <div className="categories-grid">
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400" alt="Women's Collection" />
            <h3>Women's Collection</h3>
            <p>Elegant and stylish clothing for modern women</p>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400" alt="Men's Collection" />
            <h3>Men's Collection</h3>
            <p>Contemporary fashion for the modern gentleman</p>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400" alt="Children's Collection" />
            <h3>Children's Collection</h3>
            <p>Fun and comfortable clothing for kids</p>
          </div>
        </div>
        <div className="explore-more">
          <Link to="/products" className="explore-button">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
