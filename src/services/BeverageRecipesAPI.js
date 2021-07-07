const BeverageServiceIngredientsAPI = async (ingredient) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(endpoint);
  const responseObject = await response.json();
  return responseObject.drinks;
};

const BeverageServiceNameAPI = async (name) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(endpoint);
  const responseObject = await response.json();
  return responseObject.drinks;
};

const BeverageServiceFirstLetterAPI = async (firstLetter) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(endpoint);
  const responseObject = await response.json();
  return responseObject.drinks;
};

const SurpriseDrinksAPI = async () => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const response = await fetch(endpoint);
  const responseObject = await response.json();
  return responseObject.drinks;
};

const getDrinkById = async (idDrink) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
  const response = await fetch(endpoint);
  const responseObject = await response.json();
  return responseObject.drinks;
};

export default {
  ingredient: BeverageServiceIngredientsAPI,
  name: BeverageServiceNameAPI,
  letter: BeverageServiceFirstLetterAPI,
  surpriseDrink: SurpriseDrinksAPI,
  getDrinkById,
  default: () => fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((res) => res.json())
    .then((res) => res.drinks),
};
