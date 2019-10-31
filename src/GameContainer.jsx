import { connect } from 'react-redux'

import Game from './Game';

const mapStateToProps = (state) => {
  return {
    gameState: state.gameState,
    visibleFoods: state.foods.filter(food => !food.eaten),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onStartClick: () => {
      dispatch(newGame())
    },
    onAddFood: (food) => {
      dispatch(addFood(food))
    }
  }
}

const InteractiveGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default InteractiveGame