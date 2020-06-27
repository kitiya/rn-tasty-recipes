import React from "react";
import { View, StyleSheet } from "react-native";

// useSelector allows us to select a slice of our state, of our globally managed state and use it in this component
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import RecipeList from "../components/RecipeList";
import DefaultText from "../components/DefaultText";

const CategoryRecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableRecipes = useSelector(
    (state) => state.recipes.filteredRecipes
  );

  const displayedRecipes = availableRecipes.filter(
    (recipe) => recipe.categoryIds.indexOf(catId) >= 0
  );

  if (displayedRecipes.length === 0) {
    return (
      <View style={styles.emptyRecipeList}>
        <DefaultText>No recipes found. Maybe, check your filters?</DefaultText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  emptyRecipeList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryRecipesScreen;
