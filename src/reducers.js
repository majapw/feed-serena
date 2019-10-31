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
  points: number,
}
 */

const initialState = {
  gameState: GAME_STATE.PENDING,
  foods: [],
  points: 0,
}

function feedSerenaApp(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        gameState: GAME_STATE.ACTIVE,
        foods: [],
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