import {
  NEW_GAME,
  DECREMENT_TIME,
  END_GAME,
  ADD_FOOD,
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
      isEaten: boolean,

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
    case FEED_SERENA:
      const isSelectedFood = (food) => (food.id === action.id && food.type === action.foodType);
      const eatenFood = state.foods.filter(isSelectedFood)[0];
      const rest = state.foods.filter((food) => !isSelectedFood(food));
      return {
        ...state,
        gamePoints: state.gamePoints + eatenFood.points,
        foods: [
          ...rest,
          {
            ...eatenFood,
            isEaten: true,
          },
        ],
      }

    default:
      return state;
  }
};

export default feedSerenaApp