import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { FlatList, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
/**
 * ? Local Imports
 */
import createStyles from "./documentDetail.style";
import { DocumentDetailItemModel } from "./typings";
import DocumentDetailItem from "./cell";
import { DocumentFieldModel } from "./typings";


type DocumentDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'DOCUMENTDETAIL'>;

const settings: DocumentDetailItemModel[] = [
  {
    title: 'Удостоверенияds',
    field: {
      mask: "",
      isValid: true,
      regex: "",
      value: ""
    }
  },
  {
    title: 'Написать разработчикам',
    field: {
      mask: "",
      isValid: true,
      regex: "",
      value: ""
    }
  },
  {
    title: 'Безопасность',
    field: {
      mask: "",
      isValid: true,
      regex: "",
      value: ""
    }
  }
]

const DocumentDetailScreen: React.FC<DocumentDetailScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={settings}
        renderItem={({ item }) => <DocumentDetailItem {...item} />}
        keyExtractor={item => item.title}
      /> 
    </View>
  );
};

export default DocumentDetailScreen;