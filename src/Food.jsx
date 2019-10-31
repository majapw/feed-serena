
import React from 'react';
import './Food.css';

import avocado from './images/avocado.png';
import orange from './images/orange.png';
import chocochip from './images/choco-chip-cookie.png';
import apple from './images/apple.png';
import cereal from './images/cereal.png';
import doubleSandwich from './images/double-sandwich.png';
import iceCreamCone from './images/ice-cream-cone.png';
import pancakes from './images/pancakes.png';
import waffles from './images/waffles.png';
import eggsAndBacon from './images/eggs-and-bacon.png';
import oatmeal from './images/oatmeal.png';
import popsicle from './images/popsicle.png';
import spaghetti from './images/spaghetti.png';
import burgersAndFries from './images/burgers-and-fries.png';
import croissant from './images/croissant.png';
import grapefruit from './images/grapefruit-juice';
import sandwich from './images/sandwich.png';
import sushi from './images/sushi.png';

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