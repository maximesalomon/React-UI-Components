import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
      <div className="header-container">
        <div className="image-thumbnail"><ImageThumbnail /></div>
        <div className="image-all">
          <div className="image-title"><HeaderTitle /></div>
          <div className="image-content"><HeaderContent /></div>
        </div>
      </div>
    );
  };
  
  export default HeaderContainer;