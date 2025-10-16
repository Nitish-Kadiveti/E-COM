import React, { useState } from 'react';
import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsPage.css';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');

  const categoryData = {
    women: products.women,
    men: products.men,
    childBoys: products.childBoys,
    childGirls: products.childGirls
  };

  const categoryTitles = {
    women: "Women's Collection",
    men: "Men's Collection", 
    childBoys: "Boys' Collection",
    childGirls: "Girls' Collection"
  };

  return (
    <div className="products-page">
      <div className="container">
        <h1>Our Products</h1>
        
        <div className="category-tabs">
          <button 
            className={selectedCategory === 'women' ? 'active' : ''} 
            onClick={() => setSelectedCategory('women')}
          >
            Women
          </button>
          <button 
            className={selectedCategory === 'men' ? 'active' : ''} 
            onClick={() => setSelectedCategory('men')}
          >
            Men
          </button>
          <button 
            className={selectedCategory === 'childBoys' ? 'active' : ''} 
            onClick={() => setSelectedCategory('childBoys')}
          >
            Boys
          </button>
          <button 
            className={selectedCategory === 'childGirls' ? 'active' : ''} 
            onClick={() => setSelectedCategory('childGirls')}
          >
            Girls
          </button>
        </div>

        <h2 className="category-title">{categoryTitles[selectedCategory]}</h2>
        
        <div className="products-grid">
          {categoryData[selectedCategory].map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
