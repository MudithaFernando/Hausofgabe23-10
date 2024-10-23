// components/CustomTextField.jsx
import React from 'react';

function CustomTextField({ label, placeholder, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="text" 
        placeholder={placeholder} 
        onChange={onChange} 
      />
    </div>
  );
}

export default CustomTextField;