// src/Card.js
import React from 'react';
import './Card.css';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <a href={link}><img src={image} alt={title} className="card-image" /></a>
      <div className="card-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;