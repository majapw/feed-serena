import {
  NEW_GAME,
  DECREMENT_TIME,
  END_GAME,
  ADD_FOOD,
  HIDE_FOOD,
  FEED_SERENA,
  GAME_STATE,
  GAME_LENGTH,
} from './actions'

/*
{
  gameState: GAME_STATE,
  gamePoints: number,
  gameTime: number,
  foods: [
    {
      id: string,
      type: string,
      points: number,
      isVisible: boolean,

      posX: number,
      posY: number,
    }
  ],
}
 */

const initialState = {
  gameState: GAME_STATE.PENDING,
  gamePoints: 0,
  gameTime: 0,
  foods: [],
}

function isSelectedFood(food, action) {
  return food.id === action.id;
}

function getStateWithHiddenFood(action, foods) {
  const hiddenFood = foods.filter((food) => isSelectedFood(food, action))[0];
  const rest = foods.filter((food) => !isSelectedFood(food, action));
  return {
    foods: [
      ...rest,
      {
        ...hiddenFood,
        isVisible: false,
      },
    ],
  };
}

function feedSerenaApp(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        gameState: GAME_STATE.ACTIVE,
        gamePoints: 0,
        gameTime: GAME_LENGTH,
        foods: [],
        points: 0,
      };
    case DECREMENT_TIME:
      return {
        ...state,
        gameTime: state.gameTime - 1,
      }
    case END_GAME:
      return {
        ...state,
        foods: [],
        gameState: GAME_STATE.GAME_OVER,
      };

    case ADD_FOOD:
      return {
        ...state,
        foods: [
          ...state.foods,
          action.food,
        ],
      };
    case HIDE_FOOD:
      return {
        ...state,
        ...getStateWithHiddenFood(action, state.foods),
      }
    
    case FEED_SERENA:
      return {
        ...state,
        ...getStateWithHiddenFood(action, state.foods),
        gamePoints: state.gamePoints + action.points,
      }

    default:
      return state;
  }
};

export default feedSerenaApp