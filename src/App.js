import React, { useState } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import Content from './components/layout/Content.jsx';
import Footer from './components/layout/Footer.jsx';
import CustomTextField from './components/customTextField.jsx';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="main-container">
      <Navbar />
      <Content />
      <CustomTextField 
        label="Dein Name:" 
        placeholder="Gib deinen Namen ein" 
        onChange={handleInputChange} 
      />
      <p>Aktueller Input: {inputValue}</p>
      <Footer />
      <div>Hello Earth</div>
    </div>
  );
}

export default App;
