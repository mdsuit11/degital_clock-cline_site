import React from 'react';
import './Banner.css';
import img from '../../../images/top-banner.jpg'


const Banner = () => {
  return (
    <div className="top-banner">
      <img src={img} alt="" />
    </div>
  );
};

export default Banner;