import React from 'react';
import './Display.css';

const CalculatorDisplay = (data) => {
    return (
      <div className="calculatorDisplay">
        <div className="numberDisplay">{data.total}</div>
      </div>
    );
  };
  
  export default CalculatorDisplay;