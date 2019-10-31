import React, { Component } from 'react';
import './Game.css';

import Food, { FOODS, FOOD_HEIGHT } from './Food';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
    }

    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    const nextFoodInterval = setInterval(() => this.generateNextFood(), 1000)
    setTimeout(() => {
      clearInterval(nextFoodInterval);
    }, 5000)
  }

  startGame() {

  }

  getRandomValue(maxValue) {
    const randomValue = Math.floor(Math.random() * maxValue);
    if (randomValue > (maxValue - FOOD_HEIGHT)) return maxValue - FOOD_HEIGHT;
    if (randomValue < FOOD_HEIGHT) return FOOD_HEIGHT;
    return randomValue;
  }

  onFoodClick(idToRemove, typeToRemove) {
    const { foods } = this.state;
    const newFoods = foods.filter(({ id, type }) => !(id === idToRemove && type === typeToRemove));

    // LOL this has concurrency issues
    this.setState({
      foods: newFoods,
    });
  }

  generateNextFood() {
    const { foods } = this.state;
    const randomIndex = Math.floor(Math.random() * FOODS.length);
    const randomXValue = this.getRandomValue(this.windowWidth)
    const randomYValue = this.getRandomValue(this.windowHeight);

    const id = `${randomXValue},${randomYValue}`;
    const { type } = FOODS[randomIndex];
    const nextFood = {
      id,
      type,
      posX: randomXValue,
      posY: randomYValue,
      height: FOOD_HEIGHT,

      node: (
        <Food 
          key={id} 
          index={randomIndex}
          posX={randomXValue} 
          posY={randomYValue} 
          height={FOOD_HEIGHT}
          onClick={() => this.onFoodClick(id, type)}
        />
      ),
    }

    this.setState({
      foods: [...foods, nextFood],
    });
  }
  
  render() {
    const { foods } = this.state;
    return (
      <div className="Game">
        {foods.map(({ node }) => node)}
        <div className="Game-controls">
          <div className="Game-instructions">Help #FeedSerena!</div>
          <button 
            className="Game-start" 
            type="button" 
            onClick={this.startGame}
          >
            Start Game
          </button>
        </div>
        
      </div>
    );
  }
}

export default Game;
