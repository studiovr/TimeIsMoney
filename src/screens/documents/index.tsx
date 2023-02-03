import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { FlatList, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
/**
 * ? Local Imports
 */
import createStyles from "./documents.style";
import { DocumentModel } from "./typings";
import DocumentItem from "./cell";

type documentsScreenProps = NativeStackScreenProps<RootStackParamList, 'DOCUMENTS'>;

const settings: DocumentModel[] = [
  {
    title: 'Удостоверенияasasd',
    isFilled: true
  },
  {
    title: 'Написать разработчикам',
    isFilled: false
  },
  {
    title: 'Безопасность',
    isFilled: false
  }
]

const documentsScreen: React.FC<documentsScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={settings}
        ItemSeparatorComponent = { () => 
          (<View style={{ backgroundColor: "#F0F0F0", height: 1 }}></View>)}
        renderItem={({ item }) => <DocumentItem {...item} />}
        keyExtractor={item => item.title}
      />  
    </View>
  );
};

export default documentsScreen;