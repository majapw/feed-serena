import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Game.css';

import Food, { FOODS, FOOD_HEIGHT } from './Food';

import { GAME_STATE, newGame, endGame, addFood } from './actions';

const mapStateToProps = ({ gameState, foods }) => ({
  gameState,
  foods: foods.filter(food => !food.isEaten),
});

class Game extends Component {
  constructor(props) {
    super(props);

    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }

  startGame() {
    const { dispatch } = this.props;
    dispatch(newGame());

    const generateFoodInterval = setInterval(() => dispatch(addFood(this.getNewFood())), 1000);
    setTimeout(() => {
      clearInterval(generateFoodInterval);
    }, 5000);
  }

  getRandomValue(maxValue) {
    const randomValue = Math.floor(Math.random() * maxValue);
    if (randomValue > (maxValue - FOOD_HEIGHT)) return maxValue - FOOD_HEIGHT;
    if (randomValue < FOOD_HEIGHT) return FOOD_HEIGHT;
    return randomValue;
  }

  onFoodClick(idToRemove, typeToRemove) {
    // const { foods } = this.state;
    // const newFoods = foods.filter(({ id, type }) => !(id === idToRemove && type === typeToRemove));

    // // LOL this has concurrency issues
    // this.setState({
    //   foods: newFoods,
    // });
  }

  getNewFood() {
    const foodTypes = Object.keys(FOODS);
    const type = foodTypes[Math.floor(Math.random() * foodTypes.length)];
    const randomXValue = this.getRandomValue(this.windowWidth)
    const randomYValue = this.getRandomValue(this.windowHeight);

    const id = `${randomXValue},${randomYValue}`;
    return {
      id,
      type,
      posX: randomXValue,
      posY: randomYValue,
      isEaten: false,
    };
  }
  
  render() {
    const { gameState, foods } = this.props;
    console.log(this.props);
    return (
      <div className="Game">
        {foods.map(({ id, type, posX, posY }) => (
          <Food 
            key={id} 
            type={type} 
            posX={posX} 
            posY={posY} 
          />
        ))}
        {gameState === GAME_STATE.PENDING &&
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
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(Game);
