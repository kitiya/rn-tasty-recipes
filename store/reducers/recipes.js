import { RECIPES } from "../../data/dummy-data";

const initialState = {
  recipes: RECIPES,
  filteredRecipes: RECIPES,
  favoriteRecipes: [],
};

const recipesReducer = (state = initialState, action) => {
  return state;
};

export default recipesReducer;
