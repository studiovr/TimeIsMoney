import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
/**
 * ? Local Imports
 */
import createStyles from "./documents.style";
import DocumentItem from "./cell";
import { DocumentModel } from "../main/typings";

type documentsScreenProps = NativeStackScreenProps<RootStackParamList, 'DOCUMENTS'>;

const documentsScreen: React.FC<documentsScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);
  const data = route.params?.item;

  navigation.setOptions({ title: data.title })

  
  navigation.addListener('focus', () => {
    console.log("What we want")
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={data.listDocuments.map(d => new DocumentModel(d.id, d.title, d.status, d.fields))}
        ItemSeparatorComponent={() =>
          (<View style={{ backgroundColor: "#F0F0F0", height: 1 }}></View>)}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate("DOCUMENTDETAIL", { item: item })}>
            <DocumentItem {...item} />
          </TouchableOpacity>}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default documentsScreen;