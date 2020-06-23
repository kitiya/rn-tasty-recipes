import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
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

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Favorite Recipes",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

export default FavoritesScreen;
