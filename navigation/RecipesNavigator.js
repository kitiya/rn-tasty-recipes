import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryRecipesScreen from "../screens/CategoryRecipesScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
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

export default createAppContainer(RecipesNavigator);
