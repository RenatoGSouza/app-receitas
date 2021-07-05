import { listByCategories } from '../../services/services';

export const [
  USERLOGIN,
  DRINKS,
  FOODS,
  RANDOM,
  FOOD_CATEGORIES,
  DRINK_CATEGORIES,
] = ['USERLOGIN', 'DRINKS', 'FOODS', 'RANDOM', 'FOOD_CATEGORIES', 'DRINK_CATEGORIES'];

export function userLogin(payload) {
  return {
    type: USERLOGIN,
    payload,
  };
}

const actionGetFoods = (payload) => ({
  type: FOODS,
  payload,
});

const actionGetDrinks = (payload) => ({
  type: DRINKS,
  payload,
});

const actionGetRandom = (payload) => ({
  type: RANDOM,
  payload,
});

const actionSortCategoriesFood = (payload) => ({
  type: FOOD_CATEGORIES,
  payload,
});

const actionSortCategoriesDrink = (payload) => ({
  type: DRINK_CATEGORIES,
  payload,
});

export function getFoods(value, callback) {
  return (dispatch) => callback(value)
    .then((food) => dispatch(actionGetFoods(food)));
}

export function getDrinks(value, callback) {
  return (dispatch) => callback(value)
    .then((drink) => dispatch(actionGetDrinks(drink)));
}

export function getRandom(callback) {
  return (dispatch) => callback()
    .then((random) => dispatch(actionGetRandom(random)));
}

export function getCategory(category, type) {
  const actionCallback = type === 'meal'
    ? actionSortCategoriesFood : actionSortCategoriesDrink;
  return (dispatch) => listByCategories(category, type)
    .then((list) => dispatch(actionCallback(list)));
}
