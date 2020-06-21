import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoryRecipesScreen = (props) => {
  // console.log(props);
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((item) => item.id === catId);
  return (
    <View style={styles.screen}>
      <Text>THE CATEGORY RECIPES SCREEN!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Recipe Detail"
        onPress={() => {
          props.navigation.push("RecipeDetail");
          // props.navigation.navigate({ routeName: "RecipeDetail" });
        }}
      />
    </View>
  );
};

// CategoryRecipesScreen.navigationOptions = (navigationData) => {
//   // console.log("\n\nNavigation Data\n", navigationData);
//   const catId = navigationData.navigation.getParam("categoryId");

//   const selectedCategory = CATEGORIES.find((item) => item.id === catId);

//   return {
//     headerTitle: selectedCategory.title,
//   };
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryRecipesScreen;
