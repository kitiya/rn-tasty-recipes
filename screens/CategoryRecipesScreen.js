import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryRecipesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>THE CATEGORY RECIPES SCREEN!</Text>
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
