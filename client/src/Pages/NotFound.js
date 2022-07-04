import React from 'react';
import { Link } from 'react-router-dom';
import Imag from './404Image.jpg';
import "./NotFound.css";
const NotFound = () => {
  return (
    <>
      <div className="NotFoundPage">
        <img className='NotFoundImage' src={Imag} alt="" />
        <Link to="/" className='backLink'>Click Here</Link> to go back to homepage...
      </div>
    </>
  );
}

export default NotFound;
