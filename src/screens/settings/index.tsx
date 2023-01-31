import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
/**
 * ? Local Imports
 */
import createStyles from "./settings.style";

type settingsScreenProps = NativeStackScreenProps<RootStackParamList, 'SETTINGS'>;

const settingsScreen: React.FC<settingsScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.container}>
    </View>
  );
};

export default settingsScreen;