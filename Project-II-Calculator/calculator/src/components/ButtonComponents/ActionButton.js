import React from 'react';
import './Button.css';

const ActionButton = () => {
    return (
      <div className="operators">
        <button className="operatorsButton">/</button>
        <button className="operatorsButton">X</button>
        <button className="operatorsButton">-</button>
        <button className="operatorsButton">+</button>
        <button className="operatorsButton">=</button>
      </div>
    );
  };
  
  export default ActionButton