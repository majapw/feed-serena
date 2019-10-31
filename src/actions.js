/*
 * action types
 */

export const ADD_FOOD = 'ADD_FOOD';
export const FEED_SERENA = 'FEED_SERENA';


export const GAME_STATE = {
  ACTIVE: 'active',
  PENDING: 'pending',
};

/*
 * action creators
 */

export function newGame() {
  return { type: NEW_GAME };
}

export function endGame() {
  return { type: END_GAME };
}

export function addFood(food) {
  return { type: ADD_FOOD, food };
}

export function feedSerena(food) {
  return { type: FEED_SERENA, food };
}
