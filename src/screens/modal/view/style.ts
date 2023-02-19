import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  description: ViewStyle;
  button: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    description: {
        fontSize: 12,
        fontFamily: "inter",
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