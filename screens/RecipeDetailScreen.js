import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RECIPES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const RecipeDetailScreen = (props) => {
  const recipeId = props.navigation.getParam("recipeId");
  const selectedRecipe = RECIPES.find((recipe) => recipe.id === recipeId);

  return (
    <View style={styles.screen}>
      <Text style={styles.title} numberOfLines={1}>
        {selectedRecipe.title}
      </Text>
      <Image style={styles.image} source={{ uri: selectedRecipe.imageUrl }} />
    </View>
  );
};

RecipeDetailScreen.navigationOptions = (navigationData) => {
  const recipeId = navigationData.navigation.getParam("recipeId");
  const selectedRecipe = RECIPES.find((recipe) => recipe.id === recipeId);

  return {
    headerTitle: selectedRecipe.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    color: Colors.primary,
  },
  image: {
    width: "80%",
    height: "50%",
    borderRadius: 10,
  },
});

export default RecipeDetailScreen;
