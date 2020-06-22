import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryRecipesScreen from "../screens/CategoryRecipesScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

const RecipesNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryRecipes: {
      screen: CategoryRecipesScreen,
    },
    RecipeDetail: RecipeDetailScreen,
  },
  {
    // example of other configurations
    // mode: "modal",
    // initialRouteName: "RecipeDetail",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS == "ios" ? Colors.light : Colors.primary,
      },
      headerTintColor: Platform.OS == "ios" ? Colors.primary : Colors.light,
    },
  }
);

// nested navigator
const RecipesFavTabNavigator = createBottomTabNavigator({
  // RecipesNavigator from the createStackNavigator above
  Recipes: RecipesNavigator,
  Favorites: FavoritesScreen,
});

// root navigator
export default createAppContainer(RecipesFavTabNavigator);
