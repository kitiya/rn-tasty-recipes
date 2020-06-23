import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";

const RecipeItem = (props) => {
  return (
    <View style={styles.recipeItem}>
      <TouchableOpacity onPress={props.onSelectRecipe}>
        <View>
          <View style={{ ...styles.recipeRow, ...styles.recipeHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.recipeRow, ...styles.recipeDetail }}>
            <DefaultText>{props.duration} m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeItem: {
    height: 200,
    width: "100%",
    marginVertical: 5,
    backgroundColor: Colors.accent,
    borderRadius: 10,
    overflow: "hidden",
  },
  recipeRow: {
    flexDirection: "row",
  },
  recipeHeader: { height: "85%" },
  recipeDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: Colors.light,
    textAlign: "center",
  },
});
export default RecipeItem;
