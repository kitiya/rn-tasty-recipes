import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryRecipesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>THE CATEGORY RECIPES SCREEN!</Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryRecipesScreen;
