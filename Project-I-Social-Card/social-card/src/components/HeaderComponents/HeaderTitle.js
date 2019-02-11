import React from 'react';
import './Header.css';

const now = Date.now();

const HeaderTitle = () => {
    return (
        <div className="header-title">
            <h3>Lambda School</h3>
            <p>@LambdaSchool</p>
            <p>February 11th, 2019</p>
        </div>
    );
  };
  
  export default HeaderTitle;