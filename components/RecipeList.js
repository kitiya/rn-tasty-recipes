import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import RecipeItem from "./RecipeItem";

const RecipeList = (props) => {
  const favoriteRecipes = useSelector((state) => state.recipes.favoriteRecipes);

  const renderRecipeItem = (itemData) => {
    const isFavorite = favoriteRecipes.find(
      (recipe) => recipe.id === itemData.item.id
    );

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
              recipeTitle: itemData.item.title,
              isFav: isFavorite,
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
