import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';


const CardContainer = () => {
    return (
      <div className="card-container">
        <div><CardBanner/></div>
        <div className="card-content">
          <h4>Get started with React</h4>
          <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
          <p className="bannerLink">reactjs.org</p>
        </div>
      </div>
    );
  };
  
  export default CardContainer;