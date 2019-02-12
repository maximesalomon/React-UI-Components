import React from 'react';
import './Button.css';

export default function WeaponSelector(props) {
    return (
      <div className="keyPad">
          <button onClick={() => props.press(0)} className="clearButton">Clear</button>
          <button onClick={() => props.press(1)} className="numberButton">1</button>
          <button onClick={() => props.press(2)} className="numberButton">2</button>
          <button onClick={() => props.press(3)} className="numberButton">3</button>
          <button onClick={() => props.press(4)} className="numberButton">4</button>
          <button onClick={() => props.press(5)} className="numberButton">5</button>
          <button onClick={() => props.press(6)} className="numberButton">6</button>
          <button onClick={() => props.press(7)} className="numberButton">7</button>
          <button onClick={() => props.press(8)} className="numberButton">8</button>
          <button onClick={() => props.press(9)} className="numberButton">9</button>
          <button onClick={() => props.press(0)} className="zeroButton">0</button>
      </div>
    );
  };
  