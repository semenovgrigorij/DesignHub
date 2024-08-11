import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__image"></div>
      <div className="banner__overlay">
        <h1 className="banner__text">Gorgeous long inscription</h1>
      </div>
    </div>
  );
};

export default Banner;
