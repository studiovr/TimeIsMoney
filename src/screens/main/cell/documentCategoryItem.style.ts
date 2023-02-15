import { ViewStyle, StyleSheet, ImageStyle } from "react-native";

interface Style {
  container: ViewStyle;
  topView: ViewStyle;
  title: ViewStyle;
  description: ViewStyle;
  image: ImageStyle;
  countLabel: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    container: {
      flexDirection:'column', 
      paddingTop: 12,
      paddingBottom: 12
    },
    topView: {
      flexDirection: 'row',
      height: 32,
    },
    title: {
      marginLeft: 14,
      height: 32,
      justifyContent: "center",
      fontSize: 16,
      fontFamily: "inter",
    },
    description: {
      marginTop: -6,
      marginLeft: 46,
      fontSize: 14,
      fontFamily: "inter",
      color: "#828282",
    },
    image: {
      width:32,
      margin: 0,
      resizeMode: "contain"
    },
    countLabel: {
      marginLeft: 10,
      color: "red",
      width: 20,
      height: 20,
      borderRadius: 10,
      borderColor:"red",
      borderWidth: 1,
      textAlign: "center",
    }
  });
};