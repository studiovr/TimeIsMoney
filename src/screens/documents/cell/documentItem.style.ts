import { ViewStyle, StyleSheet, ImageStyle } from "react-native";

interface Style {
  container: ViewStyle;
  text: ViewStyle;
  image: ImageStyle;
  status: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    container: {
      height: 81,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width:28,
      height: 28,
      margin: 0,
      resizeMode: "contain"
    },
    text: {
      marginLeft: 13,
      height: 19,
      justifyContent: "center",
      fontSize: 16,
      fontFamily: "inter",
    },
    status: {
      fontSize: 14,
      fontStyle: "italic",
      color: "red",
      borderColor: 'red',
      borderWidth: 1,
      borderRadius: 14,
      textAlign: "center",
      height: 21,
      width: 44,
      marginEnd: 0,
    }
  });
};