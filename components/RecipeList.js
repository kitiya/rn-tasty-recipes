import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import RecipeItem from "./RecipeItem";

const RecipeList = (props) => {
  const renderRecipeItem = (itemData) => {
    return (
      <RecipeItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectRecipe={() => {
          props.navigation.navigate({
            routeName: "RecipeDetail",
            params: {
              recipeId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.recipeList}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.recipeListData}
        renderItem={renderRecipeItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recipeList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RecipeList;
