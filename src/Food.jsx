
import React from 'react';
import './Food.css';

import apple from './images/apple.png';
import orange from './images/orange.png';
import avocado from './images/avocado.png';
import chocochip from './images/choco-chip-cookie.png';
import cereal from './images/cereal.png';
import popsicle from './images/popsicle.png';
import sandwich from './images/sandwich.png';
import pancakes from './images/pancakes.png';
import waffles from './images/waffles.png';
import croissant from './images/croissant.png';
import oatmeal from './images/oatmeal.png';
import iceCreamCone from './images/ice-cream-cone.png';
import eggsAndBacon from './images/eggs-and-bacon.png';
import spaghetti from './images/spaghetti.png';
import sushi from './images/sushi.png';
import burgersAndFries from './images/burgers-and-fries.png';

export const FOOD_HEIGHT = 100;
export const FOODS = {
  apple: {
    src: apple,
    alt: 'Apple',
    points: 1,
    ttl: 5,
  },
  orange: {
    src: orange,
    alt: 'Orange',
    points: 2,
    ttl: 4,
  },
  avocado: {
    src: avocado,
    alt: 'Avocado',
    points: 5,
    ttl: 3,
  },
  chocochip: {
    src: chocochip,
    alt: 'chocochip',
    points: 10,
    ttl: 2,
  },
  cereal: {
    src: cereal,
    alt: 'Cereal',
    points: 12,
    ttl: 1.8,
  },
  popsicle: {
    src: popsicle,
    alt: 'Popsicle',
    points: 15,
    ttl: 1.5,
  },

  sandwich: {
    src: sandwich,
    alt: 'Sandwich',
    points: 20,
    ttl: 1.2,
  },
  pancakes: {
    src: pancakes,
    alt: 'Pancakes',
    points: 22,
    ttl: 1,
  },
  waffles: {
    src: waffles,
    alt: 'Waffles',
    points: 22,
    ttl: 1,
  },

  croissant: {
    src: croissant,
    alt: 'Croissant',
    points: 24,
    ttl: .9,
  },
  oatmeal: {
    src: oatmeal,
    alt: 'Oatmeal',
    points: 25,
    ttl: .9,
  },
  iceCreamCone: {
    src: iceCreamCone,
    alt: 'Ice Cream',
    points: 30,
    ttl: .8,
  },
  eggsAndBacon: {
    src: eggsAndBacon,
    alt: 'Eggs and Bacon',
    points: 40,
    ttl: 0.7,
  },
  spaghetti: {
    src: spaghetti,
    alt: 'Spaghetti',
    points: 40,
    ttl: 0.7,
  },
  sushi: {
    src: sushi,
    alt: 'Sushi',
    points: 100,
    ttl: 0.5,
  },
  burgersAndFries: {
    src: burgersAndFries,
    alt: 'Burgers and Fries',
    points: 100,
    ttl: 0.5,
  },
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
        onMouseDown={onClick}
        onTouchStart={onClick}
      />
      <div className="Food-points">{`+${points}pts`}</div>
    </div>
  )
}

export default Food;