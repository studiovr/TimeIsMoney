import { ViewStyle, StyleSheet } from "react-native";

interface Style {
    container: ViewStyle;
    title: ViewStyle;
    button: ViewStyle;
    description: ViewStyle;
    buttonClick: ViewStyle;
    buttonText: ViewStyle;
    buttonTextClick: ViewStyle;

}

export default () => {
    return StyleSheet.create<Style>({
        container: {

        },
        title: {
            marginTop: "24%",
            marginBottom: 6,
            justifyContent: "center",
            fontSize: 20,
            fontFamily: "inter",
            color: "#000000",
            textAlign: "center",
            fontStyle: "normal",
        },
        button: {
            backgroundColor: "#F6F6F8",
            height: 50,
            width: "100%",
            fontSize: 16,
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: 50,
            borderColor: "#F6F6F8",
            borderWidth: 1,
            textAlign: "center",
            marginTop: 17

        },
        buttonClick: {
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
            marginTop: 17

        },
        description: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontSize: 12,
            textAlign: "center",
            color: "#828282",
        },
        buttonText: {
            color: "black", 
            fontSize: 16 
        },
        buttonTextClick: {
            color: "white", 
            fontSize: 16 
        }
    });
};