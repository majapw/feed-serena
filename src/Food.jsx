
import React, { Component } from 'react';
import './Food.css';

import avocado from './images/avocado.png';

export const FOOD_HEIGHT = 100;
export const FOODS = [{
  type: 'Avocado',
  src: avocado,
}];

function Food({ index, posX, posY, onClick }) {
  const { name, src } = FOODS[index];

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