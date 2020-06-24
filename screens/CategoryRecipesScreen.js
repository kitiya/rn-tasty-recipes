import React from "react";

// useSelector allows us to select a slice of our state, of our globally managed state and use it in this component
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import RecipeList from "../components/RecipeList";

const CategoryRecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableRecipes = useSelector(
    (state) => state.recipes.filteredRecipes
  );

  const displayedRecipes = availableRecipes.filter(
    (recipe) => recipe.categoryIds.indexOf(catId) >= 0
  );

  return (
    <RecipeList
      recipeListData={displayedRecipes}
      navigation={props.navigation}
    />
  );
};

CategoryRecipesScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((item) => item.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryRecipesScreen;
