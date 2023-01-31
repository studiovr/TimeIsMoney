import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
/**
 * ? Local Imports
 */
import createStyles from "./documents.style";

type documentsScreenProps = NativeStackScreenProps<RootStackParamList, 'DOCUMENTS'>;

const documentsScreen: React.FC<documentsScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.container}>
    </View>
  );
};

export default documentsScreen;