import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    container: {
      width: '100%',
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-end",
    },
  });
};