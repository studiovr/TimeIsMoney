import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
/**
 * ? Local Imports
 */
import createStyles from "./main.style";

type mainScreenProps = NativeStackScreenProps<RootStackParamList, 'MAIN'>;

const mainScreen: React.FC<mainScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.container}>
        <Text>Приветствую</Text>
    </View>
  );
};

export default mainScreen;