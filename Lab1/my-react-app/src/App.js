import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function CityDropdown() {
  const cities = ['Київ', 'Львів', 'Одеса', 'Харків', 'Житомир'];
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <h2>Виберіть місто:</h2>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Оберіть місто</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      {selectedCity && <p>Ви обрали місто: {selectedCity}</p>}
    </div>
  );
}


const product1 = { name: "Mouse" };

const tableStyle = {
  borderCollapse: 'collapse',
  width: '300px',
};

const cellStyle = {
  border: '3px solid #ddd',
  padding: '8px',
  textAlign: 'center',
};

function Product(props) {
  return (
    <div>
      <h2>I'm a: {props.Product.name}</h2>
    </div>
  );
}


const MainApp = () => {
  return (
    <div>
      <CityDropdown />
      <Product Product={product1} />
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={cellStyle}><h1>First Name</h1></td>
            <td style={cellStyle}>John</td>
          </tr>
          <tr>
            <td style={cellStyle}><h1>Last Name</h1></td>
            <td style={cellStyle}>Silver</td>
          </tr>
          <tr>
            <td style={cellStyle}><h1>Occupation</h1></td>
            <td style={cellStyle}>Pirate Captain</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.render(<MainApp />, document.getElementById('root'));

export default MainApp;