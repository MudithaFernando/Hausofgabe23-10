import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import Content from './components/layout/Content.jsx';
import Footer from './components/layout/Footer.jsx';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Content />
      <Footer />
      <div>Hello Eath</div>
    </div>
  );
}

export default App;
