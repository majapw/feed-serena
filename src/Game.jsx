import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Game.css';

import Food, { FOODS, FOOD_HEIGHT } from './Food';

import { 
  GAME_STATE,
  GAME_LENGTH,
  newGame, 
  endGame, 
  addFood, 
  feedSerena,
} from './actions';

const mapStateToProps = ({ gameState, gameTime, foods }) => ({
  gameState,
  gameTime,
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
      dispatch(endGame());
    }, GAME_LENGTH * 1000);
  }

  getRandomValue(maxValue) {
    const randomValue = Math.floor(Math.random() * maxValue);
    if (randomValue > (maxValue - FOOD_HEIGHT)) return maxValue - FOOD_HEIGHT;
    if (randomValue < FOOD_HEIGHT) return FOOD_HEIGHT;
    return randomValue;
  }

  onFoodClick({ id, type }) {
    const { dispatch } = this.props;
    dispatch(feedSerena(id, type));
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
    const { gameState, gameTime, foods } = this.props;
    console.log(this.props);
    return (
      <div className="Game">
        {foods.map(({ id, type, posX, posY }) => (
          <Food 
            key={id} 
            type={type} 
            posX={posX} 
            posY={posY} 
            onClick={() => this.onFoodClick({ id, type })}
          />
        ))}
        <div className="Game-controls">
          {gameState === GAME_STATE.PENDING &&
            <div>
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

          {gameState === GAME_STATE.ACTIVE &&
            <div className="Game-countdown">{gameTime}</div>
          }

          {gameState === GAME_STATE.GAME_OVER &&
            <div>
              <div className="Game-over">GAME OVER</div>
              <button 
                className="Game-start" 
                type="button" 
                onClick={this.startGame}
              >
                Play again?
              </button>
            </div>
          }
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Game);
