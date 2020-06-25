import { RECIPES } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/recipes";

const initialState = {
  recipes: RECIPES,
  filteredRecipes: RECIPES,
  favoriteRecipes: [],
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteRecipes.findIndex(
        (recipe) => recipe.id === action.recipeId
      );

      if (existingIndex >= 0) {
        // copied the favoriteRecipes
        const updatedFavRecipes = [...state.favoriteRecipes];

        // removed the recipe
        updatedFavRecipes.splice(existingIndex, 1);

        return {
          ...state,
          favoriteRecipes: updatedFavRecipes,
          // favoriteRecipes: favoriteRecipes.filter(
          //   (recipe) => recipe.id != action.recipeId
          // ),
        };
      } else {
        const recipe = state.recipes.find(
          (recipe) => recipe.id === action.recipeId
        );
        return {
          ...state,
          favoriteRecipes: state.favoriteRecipes.concat(recipe),
        };
      }
      break;
    default:
      return state;
  }
};

export default recipesReducer;
