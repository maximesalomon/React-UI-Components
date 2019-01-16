import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
      <div class="header-container">
        <div class="image-thumbnail"><ImageThumbnail /></div>
        <div class="image-all">
          <div class="image-title"><HeaderTitle /></div>
          <div class="image-content"><HeaderContent /></div>
        </div>
      </div>
    );
  };
  
  export default HeaderContainer;