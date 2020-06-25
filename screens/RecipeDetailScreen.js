import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const RecipeDetailScreen = (props) => {
  const recipeId = props.navigation.getParam("recipeId");

  const availabeRecipes = useSelector((state) => state.recipes.recipes);
  const selectedRecipe = availabeRecipes.find(
    (recipe) => recipe.id === recipeId
  );

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image style={styles.image} source={{ uri: selectedRecipe.imageUrl }} />
      </View>
      <View style={styles.detailsContainer}>
        <DefaultText style={styles.details}>
          {selectedRecipe.duration} m
        </DefaultText>
        <DefaultText style={styles.details}>
          {selectedRecipe.complexity.toUpperCase()}
        </DefaultText>
        <DefaultText style={styles.details}>
          {selectedRecipe.affordability.toUpperCase()}
        </DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedRecipe.ingredients.map((ingredientItem, index) => {
        return <ListItem key={index}>{ingredientItem}</ListItem>;
      })}
      <Text style={styles.title}>Steps</Text>
      {selectedRecipe.steps.map((stepItem, index) => {
        return <ListItem key={index}>{stepItem}</ListItem>;
      })}
    </ScrollView>
  );
};

RecipeDetailScreen.navigationOptions = (navigationData) => {
  const recipeId = navigationData.navigation.getParam("recipeId");
  const recipeTitle = navigationData.navigation.getParam("recipeTitle");
  // const selectedRecipe = RECIPES.find((recipe) => recipe.id === recipeId);

  return {
    headerTitle: recipeTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Fav");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: Colors.accent,
  },
  details: {
    color: Colors.light,
  },
  title: {
    marginVertical: 10,
    fontSize: 22,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    color: Colors.primary,
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
    borderColor: Colors.borderLight,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default RecipeDetailScreen;
