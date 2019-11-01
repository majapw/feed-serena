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
  decrementTime,
  hideFood,
} from './actions';

const mapStateToProps = ({ gameState, gamePoints, gameTime, foods }) => ({
  gameState,
  gamePoints,
  gameTime,
  foods: foods.filter(food => food.isVisible),
});

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debug: false,
    };

    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }

  startGame() {
    const { dispatch } = this.props;
    const { debug } = this.state;
    dispatch(newGame());

    const generateFoodInterval = setInterval(() => {
      const food = this.getNewFood();
      dispatch(addFood(food));
      if (!debug) {
        setTimeout(() => {
          dispatch(hideFood(food));
        }, food.ttl * 1000);
      }
    }, 300);


    const decrementTimeInterval = setInterval(() => {
      dispatch(decrementTime());
    }, 1000);

    setTimeout(() => {
      clearInterval(generateFoodInterval);
      clearInterval(decrementTimeInterval);

      if (!debug) {
        dispatch(endGame());
      }
    }, debug ? 1000 : GAME_LENGTH * 1000);
  }

  getRandomValue(maxValue) {
    const randomValue = Math.floor(Math.random() * maxValue);
    if (randomValue > (maxValue - FOOD_HEIGHT)) return maxValue - FOOD_HEIGHT;
    if (randomValue < FOOD_HEIGHT) return FOOD_HEIGHT;
    return randomValue;
  }

  onFoodClick(food) {
    const { dispatch } = this.props;
    food.posX = 'calc(50% - 50px)';
    food.posY = 500;
    this.setState({});
    setTimeout(() => dispatch(feedSerena(food)), 500);
  }

  getNewFood() {
    const foodTypes = Object.keys(FOODS);
    const type = foodTypes[Math.floor(Math.random() * foodTypes.length)];
    const randomXValue = this.getRandomValue(this.windowWidth)
    const randomYValue = this.getRandomValue(this.windowHeight);
    const { points, ttl } = FOODS[type];

    const id = `${type}-${randomXValue},${randomYValue}`;
    return {
      id,
      type,
      posX: randomXValue,
      posY: randomYValue,
      points,
      isVisible: true,
      ttl,
    };
  }
  
  render() {
    const { gameState, gamePoints, gameTime, foods } = this.props;
    
    return (
      <div className="Game-container">
        <div className={gameState === GAME_STATE.ACTIVE && 'Game-active'}>
          {foods.map((food) => (
            <Food 
              key={food.id} 
              type={food.type} 
              posX={food.posX} 
              posY={food.posY} 
              onClick={() => this.onFoodClick(food)}
            />
          ))}
        </div>

        {gameState === GAME_STATE.ACTIVE &&
          <div className="Game-points">{`${gamePoints}pts`}</div>
        }

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
              <div className="Game-final-points">{`You got ${gamePoints} points!`}</div>
              
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
