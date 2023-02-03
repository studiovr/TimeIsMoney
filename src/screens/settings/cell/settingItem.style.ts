import { ViewStyle, StyleSheet, ImageStyle } from "react-native";

interface Style {
  container: ViewStyle;
  text: ViewStyle;
  image: ImageStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    container: {
      height: 92,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width:28,
      height: 28  ,
      margin: 0,
      resizeMode: "contain"
    },
    text: {
      marginLeft: 16,
      height: 28,
      justifyContent: "center",
      fontSize: 16,
      fontFamily: "inter",
    }
  });
};