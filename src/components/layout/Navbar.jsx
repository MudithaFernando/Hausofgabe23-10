import React from 'react';

function Navbar() {
  const handleClick = () => {
    alert('Hallo von home');
  };

  return (
    <div className="navbar">
      <button onClick={handleClick}>Home</button>
      
    </div>
  );
}

export default Navbar;
