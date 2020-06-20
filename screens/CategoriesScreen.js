import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryRecipes",
            params: {
              categoryId: itemData.item.id,
            },
          });

          // alternative syntax:
          // props.navigation.navigate("CategoryRecipes", {
          //   categoryId: itemData.item.id,
          // });
        }}
      >
        <View>
          <Text style={{ color: Colors.light }}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Recipe Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 5,
    height: 150,
    backgroundColor: Colors.accent,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoriesScreen;
