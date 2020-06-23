import React from "react";
import { CATEGORIES, RECIPES } from "../data/dummy-data";
import RecipeList from "../components/RecipeList";

const CategoryRecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedRecipes = RECIPES.filter(
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
