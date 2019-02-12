import React from 'react';
import RetweetCounter from './RetweetCounter.js';
import FavoriteCounter from './FavoriteCounter.js';

import './Footer.css';

class FooterContainer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="comment">📝</div>
        <RetweetCounter/>
        <FavoriteCounter/>
        <div className="message">✉️</div>
      </div>
    );
  }
};

export default FooterContainer;