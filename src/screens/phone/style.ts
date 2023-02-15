import { ViewStyle, StyleSheet } from "react-native";

interface Style {
    container: ViewStyle;
    title: ViewStyle;
    description: ViewStyle;
    button: ViewStyle;
    input: ViewStyle;
    textInput: ViewStyle;
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
        description: {
            justifyContent: "center",
            marginBottom: 43,
            fontSize: 12,
            fontStyle: "normal",
            fontFamily: "inter",
            color: "#828282",
            textAlign: "center",
            marginTop: 23

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
            borderColor: "#F74261",
            borderWidth: 1,
            textAlign: "center",

        },
        input: {
            fontSize: 18,
            flex: 1,
            alignItems: "center",
            // height: 60,
        },
        textInput: {
            fontSize: 18,
            flex: 1,
            color: "red",
            

        }
    });
};