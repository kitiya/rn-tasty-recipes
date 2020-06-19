import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoriesScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>THE CATEGORIES SCREEN!</Text>
      <Button
        title="Go to Recipe"
        onPress={() => {
          props.navigation.navigate("CategoryRecipes");
          // props.navigation.navigate({ routeName: "CategoryRecipes" });
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

export default CategoriesScreen;
