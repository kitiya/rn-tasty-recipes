import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryRecipesScreen from "../screens/CategoryRecipesScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";

const RecipesNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryRecipes: {
    screen: CategoryRecipesScreen,
  },
  RecipeDetail: RecipeDetailScreen,
});

export default createAppContainer(RecipesNavigator);
