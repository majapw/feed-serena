
import React, { Component } from 'react';
import './Food.css';

import avocado from './images/avocado.png';
import chocochip from './images/choco-chip-cookie.png';

export const FOOD_HEIGHT = 100;
export const FOODS = {
  avocado: {
    src: avocado,
    alt: 'Avocado',
  },
  chocochip: {
    src: chocochip,
    alt: 'Chocolate Chip Cookie',
  }
};

function Food({ type, posX, posY, onClick }) {
  const { name, src } = FOODS[type];

  return (
    <img 
      className="Food" 
      src={src} 
      alt={name} 
      style={{ top: posY, left: posX, height: FOOD_HEIGHT }}
      onClick={onClick}
    />
  )
}

export default Food;