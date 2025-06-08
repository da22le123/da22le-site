import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

interface CardProps {
  title: string;
  logoSrc: string;
  linkTo: string;
}

const Card: React.FC<CardProps> = ({ title, logoSrc, linkTo }) => (
  <Link to={linkTo} className="card-link">
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <img src={logoSrc} alt={`${title} icon`} className="card-logo" />
    </div>
  </Link> 
);

export default Card;
