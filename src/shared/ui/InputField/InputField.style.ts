import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Style {
	inputContainer: ViewStyle;
	input: ViewStyle;
	labelText: TextStyle;
	inputValueText: TextStyle;
    selectButtonStyle: ViewStyle;
    selectButtonTextStyle: ViewStyle;
    selectSearchInputStyle: ViewStyle;
}


export default () => {
	return StyleSheet.create<Style>({
		inputContainer: {
			position: 'relative',
            width: '100%',
			height: 60,
			// paddingTop: 10,
			// paddingRight: 18,
			// paddingBottom: 10,
			// paddingLeft: 18,
			backgroundColor: '#F6F6F8',
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: '#F0F0F0',
		},
		input: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: 60,
            paddingTop: 32,
            paddingLeft: 18,
            fontSize: 14,
			fontWeight: '400',
			letterSpacing: -0.02,
			color: '#4F4F4F',
		},
		labelText: {
			position: 'absolute',
            top: 0,
            left: 0,
			width: '100%',
            height: 60,
			paddingRight: 18,
			paddingBottom: 10,
			paddingLeft: 18,
            fontSize: 14,
            fontWeight: '500',
            color: '#141415',
		},
		inputValueText: {
			fontSize: 14,
			fontWeight: '400',
			letterSpacing: -0.02,
			color: '#4F4F4F',
		},
        selectButtonStyle: {
            position: 'absolute',
			top: 0,
			left: 0,
			width: 335,
			height: 60,
            backgroundColor: '#F6F6F8',
        },
        selectButtonTextStyle: {
            textAlign: 'left',
            fontSize: 14,
			fontWeight: '400',
			letterSpacing: -0.02,
			color: '#4F4F4F',
        },
        selectSearchInputStyle: {
            minWidth: 335,
            minHeight: 800,
        },
	});
};