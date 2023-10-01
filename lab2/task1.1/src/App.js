import React, { useState } from 'react';

function Counter({ initialValue = 0, minValue = -10, maxValue = 10 }) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > minValue) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Лічильник: {count}</p>
      <button onClick={handleIncrement}>Збільшити</button>
      <button onClick={handleDecrement}>Зменшити</button>
    </div>
  );
}

export default Counter;