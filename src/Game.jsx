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

    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }

  startGame() {
    const { dispatch } = this.props;
    dispatch(newGame());

    const generateFoodInterval = setInterval(() => {
      dispatch(addFood(this.getNewFood()));
      dispatch(decrementTime());
    }, 1000);
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

  onFoodClick({ id, type, points }) {
    const { dispatch } = this.props;
    dispatch(feedSerena(id, type, points));
  }

  getNewFood() {
    const foodTypes = Object.keys(FOODS);
    const type = foodTypes[Math.floor(Math.random() * foodTypes.length)];
    const randomXValue = this.getRandomValue(this.windowWidth)
    const randomYValue = this.getRandomValue(this.windowHeight);
    const { points, ttl } = FOODS[type];

    const id = `${randomXValue},${randomYValue}`;
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
    console.log(this.props);
    return (
      <div className="Game">
        {foods.map((food) => (
          <Food 
            key={food.id} 
            type={food.type} 
            posX={food.posX} 
            posY={food.posY} 
            onClick={() => this.onFoodClick(food)}
          />
        ))}

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
