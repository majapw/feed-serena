
import React, { Component } from 'react';
import './Food.css';

import avocado from './images/avocado.png';
import orange from './images/orange.png';
import chocochip from './images/choco-chip-cookie.png';

export const FOOD_HEIGHT = 100;
export const FOODS = {
  avocado: {
    src: avocado,
    alt: 'Avocado',
    points: 10,
    ttl: 1,
  },
  chocochip: {
    src: chocochip,
    alt: 'Chocolate Chip Cookie',
    points: 50,
    ttl: .2,
  },
  orange: {
    src: orange,
    alt: 'Cutie!',
    points: 5,
    ttl: 2,
  }
};

function Food({ type, posX, posY, onClick }) {
  const { name, src, points } = FOODS[type];

  return (
    <div 
      className="Food"
      style={{ top: posY, left: posX }}
    >
      <img 
        className="Food-img" 
        src={src} 
        alt={name} 
        style={{ height: FOOD_HEIGHT }}
        onClick={onClick}
      />
      <div className="Food-points">{`+${points}pts`}</div>
    </div>
  )
}

export default Food;