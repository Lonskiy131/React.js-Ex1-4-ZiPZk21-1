import React, { useState } from 'react';

function CartItem({ name, price, min = 0, max, onQuantityChange }) {
  const [quantity, setQuantity] = useState(min);

  const handleIncrement = () => {
    if (max === undefined || quantity < max) {
      setQuantity(quantity + 1);
      onQuantityChange(price);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
      onQuantityChange(-price);
    }
  };

  const totalPrice = price * quantity;

  return (
    <div>
      <p>{name}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

function Cart() {
  const cartItems = [
    { name: 'Item 1', price: 10, min: 0, max: 5 },
    { name: 'Item 2', price: 15, min: 0, max: undefined },
    { name: 'Item 3', price: 20, min: 0, max: 10 },
  ];

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange = (priceChange) => {
    setTotalQuantity((prevQuantity) => prevQuantity + (priceChange > 0 ? 1 : -1));
    setTotalPrice((prevPrice) => prevPrice + priceChange);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          {...item}
          onQuantityChange={handleQuantityChange}
        />
      ))}
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}

export default Cart;