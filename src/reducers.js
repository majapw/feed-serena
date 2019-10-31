import { combineReducers } from 'redux'
import {
  NEW_GAME,
  END_GAME,
  ADD_FOOD,
  FEED_SERENA,
  GAME_STATE,
} from './actions'

/*
{
  gameState: ?,
  visibleFoods: [
    {
      id: string,
      type: string,
      points: number,

      posX: number,
      posY: number,
    }
  ],
  eatenFoods?: [],
  points: number,
}
 */

const initialState = {
  gameState: GAME_STATE.PENDING,
  visibleFoods: [],
  eatenFoods: [],
  points: 0,
}

function feedSerenaApp(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        gameState: GAME_STATE.ACTIVE,
        visibleFoods: [],
        eatenFoods: [],
        points: 0,
      };
    case END_GAME:
      return {
        ...state,
        gameState: GAME_STATE.PENDING,
      };

    case ADD_FOOD:
      return {
        ...state,
        visibleFoods: [
          ...state.visibleFoods,
          action.food,
        ],
      };
    // case FEED_SERENA:

    default:
      return state;
  }
};

export default feedSerenaApp