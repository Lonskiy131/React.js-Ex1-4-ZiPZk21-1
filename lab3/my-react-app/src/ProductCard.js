import React from 'react';

const ProductCard = ({ product, handleFocus }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => handleFocus()}>Focus on Cart Icon</button>
    </div>
  );
};

export default ProductCard;