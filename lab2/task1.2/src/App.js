import React, { useState } from 'react';

function MyCounter({ initialValue = 0, minValue = -10, maxValue = 10 }) {
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

function App() {
  const countersData = [
    { initialValue: 2, minValue: 0, maxValue: 5 },
    { initialValue: -3, minValue: -5, maxValue: 5 },
    { initialValue: 8, minValue: 0, maxValue: 10 },
  ];

  return (
    <div>
      <h1>Список лічильників</h1>
      {countersData.map((data, index) => (
        <MyCounter
          key={index}
          initialValue={data.initialValue}
          minValue={data.minValue}
          maxValue={data.maxValue}
        />
      ))}
    </div>
  );
}

export default App;