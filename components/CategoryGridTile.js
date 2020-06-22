import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback, // ripple effect for android
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import Colors from "../constants/Colors";

const CategoryGridTile = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    height: 150,
    borderRadius: 10, // for android
    overflow:
      // for android
      Platform.OS === "andirod" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 15,
    borderRadius: 10,
    // shadowing only works on iOS
    shadowColor: Colors.dark,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: Colors.light,
    textAlign: "right", // for Android
  },
});

export default CategoryGridTile;
