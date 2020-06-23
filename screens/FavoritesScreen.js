import React from "react";
import RecipeList from "../components/RecipeList";
import { RECIPES } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favRecipe = RECIPES.filter(
    (recipe) => recipe.id === "m1" || recipe.id === "m2"
  );
  return (
    <RecipeList recipeListData={favRecipe} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Favorite Recipes",
};

export default FavoritesScreen;
