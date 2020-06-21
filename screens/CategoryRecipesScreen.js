import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES, RECIPES } from "../data/dummy-data";
import RecipeItem from "../components/RecipeItem";

const CategoryRecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedRecipes = RECIPES.filter(
    (recipe) => recipe.categoryIds.indexOf(catId) >= 0
  );

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
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayedRecipes}
        renderItem={renderRecipeItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryRecipesScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((item) => item.id === catId);

  return {
    headerTitle: selectedCategory.title,
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
