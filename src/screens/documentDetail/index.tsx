import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useMemo, useRef } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";

/**
 * ? Local Imports
 */
import createStyles from "./documentDetail.style";
import DocumentDetailItem from "./cell";
import { Get, Remove, Set } from "../../store/keyStore/keyStrore";
import { saveString } from "../../store/keyStore/AsyncStorage";


type DocumentDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'DOCUMENTDETAIL'>;


const DocumentDetailScreen: React.FC<DocumentDetailScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);
  const data = route.params?.item;

  //load before saved items in this document
  var items = new Map<string, string>();
  // var items: Map<string, string> = await Promise.all

  data.fields.map(async field => {
    const id = field.id.toString();
    await Get(id).then(v => {
      if (v === undefined)
        v = ""
      console.log("Find item with id = " + id + " and value is ", v)
      items.set(id, v);
    })
  });
  console.log("Loaded items in DocumentDetailScreen222 is ", items);
  //update map when field value is updated and valid
  const fieldValueChanged = (id: number, value: string) => {
    console.log("id = " + id + "value = " + value)
    items.set(id.toString(), value == undefined ? "" : value);
  };

  const saveForm = () => {
    var isPresent = "false";
    items.forEach((key, value) => {
      if (key && key != "") {
        Set(value, key);
        isPresent = "true";
        console.log("1value = ", key)
      }
      else
        Remove(value);
    })
    saveString(data.id.toString(), isPresent)
  }

  const saveButton = () => {
    return (
      <Pressable onPress={() => saveForm()}>
        <Text style={{ color: "black", fontSize: 20 }}>Save</Text>
      </Pressable>
    );
  }


  navigation.setOptions({ title: data.title, headerRight: () => { return saveButton() } })

  return (
    <View style={styles.container}>
      <FlatList
        style={{
          width: '100%'
        }}
        ItemSeparatorComponent={
          () => <View style={{ height: 16, backgroundColor: 'transparent' }} />
        }
        data={data.fields}
        renderItem={({ item }) => {
          console.log('Item in DocumentDetailScreen FlatList.renderItem ', item)
          return (
            <DocumentDetailItem id={item.id} field={item.field} title={item.title} value={String(items.get(item.id.toString()))} validTextChange={fieldValueChanged} />
          )
        }}

        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default DocumentDetailScreen;