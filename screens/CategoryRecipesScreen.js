import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoryRecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((item) => item.id === catId);
  return (
    <View style={styles.screen}>
      <Text>THE CATEGORY RECIPES SCREEN!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Recipe Detail"
        onPress={() => {
          props.navigation.push("CategoryRecipes");
          // props.navigation.navigate({ routeName: "RecipeDetail" });
        }}
      />
    </View>
  );
};

CategoryRecipesScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((item) => item.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS == "ios" ? Colors.light : Colors.primary,
    },
    headerTintColor: Platform.OS == "ios" ? Colors.primary : Colors.light,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryRecipesScreen;
