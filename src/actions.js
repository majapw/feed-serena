/*
 * action types
 */

export const NEW_GAME = 'NEW_GAME';
export const DECREMENT_TIME = 'DECREMENT_TIME';
export const END_GAME = 'END_GAME';
export const ADD_FOOD = 'ADD_FOOD';
export const HIDE_FOOD = 'HIDE_FOOD';
export const FEED_SERENA = 'FEED_SERENA';


export const GAME_STATE = {
  ACTIVE: 'active',
  PENDING: 'pending',
  GAME_OVER: 'game over',
};

export const GAME_LENGTH = 20;

/*
 * action creators
 */

export function newGame() {
  return { type: NEW_GAME };
}

export function decrementTime() {
  return { type: DECREMENT_TIME };
}

export function endGame() {
  return { type: END_GAME };
}

export function addFood(food) {
  return { type: ADD_FOOD, food };
}

export function hideFood({ id, type }) {
  return { type: HIDE_FOOD, id, foodType: type };
}

export function feedSerena({ id, type, points }) {
  return { type: FEED_SERENA, id, foodType: type, points };
}
