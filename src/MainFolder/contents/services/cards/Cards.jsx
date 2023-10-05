import React from 'react';
import './cards.css';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Cards = ({ arr, image, link }) => {
  return (
    <div className='cards'>
      {<image />}
      <h3>{arr?.title}</h3>
      <div className="cards-content">
        <div className="point">
          <IoMdCheckmarkCircleOutline /> <h4>{arr?.point1}</h4>
        </div>
        <div className="point">
          <IoMdCheckmarkCircleOutline /> <h4>{arr?.point2}</h4>
        </div>
        <div className="point">
          <IoMdCheckmarkCircleOutline /> <h4>{arr?.point3}</h4>
        </div>
        <button><Link to={link}> Know More</Link></button>
      </div>
    </div>
  )
}

export default Cards