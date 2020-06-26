import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import RecipeList from "../components/RecipeList";

const FavoritesScreen = (props) => {
  const favRecipe = useSelector((state) => state.recipes.favoriteRecipes);

  if (favRecipe.length === 0 || !favRecipe) {
    return (
      <View style={styles.emptyFav}>
        <DefaultText>No favorite recipes found. Start adding some!</DefaultText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  emptyFav: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FavoritesScreen;
