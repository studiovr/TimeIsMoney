import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
/**
 * ? Local Imports
 */
import createStyles from "./documentDetail.style";

type DocumentDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'DOCUMENTDETAIL'>;

const DocumentDetailScreen: React.FC<DocumentDetailScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.container}>
    </View>
  );
};

export default DocumentDetailScreen;