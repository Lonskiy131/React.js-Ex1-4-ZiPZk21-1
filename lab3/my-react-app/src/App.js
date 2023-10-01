import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const App = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const cartIconRef = useRef(null);

  useEffect(() => {
    // Отримайте дані з API
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFocus = () => {
    
    cartIconRef.current.focus();
  };

  const filteredProducts = products
    .filter((product) => category === 'all' || product.category === category)
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  return (
    <div className="app">
      <h1>Product List</h1>
      <div>
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="books">Books</option>
        </select>
      </div>
      <div>
        <label htmlFor="sortOrder">Sort by Price:</label>
        <select
          id="sortOrder"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleFocus={handleFocus}
          />
        ))}
      </div>
      <div>
        <button
          ref={cartIconRef}
          onClick={() => alert('Cart icon clicked!')}
        >
          Cart Icon
        </button>
      </div>
    </div>
  );
};

export default App;