import { ViewStyle, StyleSheet } from "react-native";

interface Style {
    container: ViewStyle;
    title: ViewStyle;
    button: ViewStyle;
}

export default () => {
    return StyleSheet.create<Style>({
        container: {

        },
        title: {
            marginTop: "24%",
            marginBottom: 41,
            justifyContent: "center",
            fontSize: 20,
            fontFamily: "inter",
            color: "#000000",
            textAlign: "center",
            fontStyle: "normal",
        },
        button: {
            color: "white",
            backgroundColor: "#F74261",
            height: 50,
            width: "100%",
            fontSize: 16,
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: 50,
            borderColor: "#F74261",
            borderWidth: 1,
            textAlign: "center",

        }
    });
};