import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  title: ViewStyle;
  description: ViewStyle;
  button: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    container: {
     
    },
    title: {
      marginTop: 15,
      marginBottom: 25,
      justifyContent: "center",
      fontSize: 18,
      fontFamily: "inter",
      color: "#000000",
      textAlign: "center",
      fontStyle: "normal",
    },
    description: {
        marginBottom: 70,
        fontSize: 12,
        fontFamily: "inter",
        marginLeft: 12,
        marginRight: 12,
        color: "#141415"
    },
    button: {
        color: "white",
        backgroundColor: "#F74261",
        height: 50,
        width: 311,
        fontSize: 16,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        borderColor:"#F74261",
        borderWidth: 1,
        textAlign: "center",
        marginLeft: 12,
        marginRight: 12
    }
  });
};