import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Image, Platform, Pressable, Text, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";

import createStyles from "./documentDetail.style";
import DocumentDetailItem from "./cell";
import { Get, Set } from "../../store/keyStore/keyStrore";
import { saveString } from "../../store/keyStore/AsyncStorage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


type DocumentDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'DOCUMENTDETAIL'>;


const DocumentDetailScreen: React.FC<DocumentDetailScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);
  const data = route.params?.item;
  const checkIcon = require('../../assets/save.png');

  var [items, setItems] = useState<Map<string, string>>(new Map<string, string>());
  // data.fields.map(async field => {
  //   const id = field.id.toString();
  //   await Get(id).then(v => {
  //     if (v === undefined)
  //       v = ""
  //     console.log("Find item with id = " + id + " and value is ", v)
  //     items.set(id, v);
  //   })
  // });

  const t = () => {
    Get(data.id.toString()).then((x) => {
      const localItems = new Map<string, string>();
      const frpm: string[][] = JSON.parse(x);
      frpm.map(i => localItems.set(i[0], i[1]));
      console.log("rrrr");
      console.log("rrrr 2", localItems);
      setItems(localItems);
    }).catch((error) => {
      // Handle any errors that occur
      console.error("wwwwwwwwwwww" + error);
    });
  }

  useEffect(() => navigation.addListener('focus', () => t()), []);


  console.log("Loaded items in DocumentDetailScreen222 is ", items);

  const fieldValueChanged = (id: number, value: string) => {
    console.log("here")
    if (value == undefined || value == "") {
      items.delete(id.toString());
    }
    else {
      items.set(id.toString(), value == undefined ? "" : value);
    }

  };

  // const saveForm = () => {
  //   var isPresent = "false";
  //   items.forEach((key, value) => {
  //     if (key && key != "") {
  //       Set(value, key);
  //       isPresent = "true";
  //       console.log("1value = ", key)
  //     }
  //     else
  //       Remove(value);
  //   })
  //   saveString(data.id.toString(), isPresent)
  // }

  const saveForm = () => {
    var isPresent = "false";

    console.log("items in save form = ", items);
    var str = JSON.stringify(Array.from(items.entries()))
    console.log("str in save form = ", str);
    const frpm: string[][] = JSON.parse(str);
    const mp = Object.fromEntries(frpm.map(i => i))
    console.log("mp in save form = ", mp);
    console.log("data.id = ", data.id)
    if (items.size > 0)
      isPresent = "true";
    Set(data.id.toString(), str);
    saveString(data.id.toString(), isPresent)
  }

  const saveButton = () => {
    return (
      <Pressable style={{}} onPress={() => saveForm()}>
        <Image
          source={checkIcon}
        />
      </Pressable>
    );
  }

  navigation.setOptions({ title: data.title, headerRight: () => { return saveButton() } })

  return (
    <KeyboardAwareScrollView
    showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      enableAutomaticScroll={(Platform.OS === 'ios')
      }>
      <View style={styles.container}>
        <FlatList
          style={{
            width: '100%',
            height: 'auto'
          }}
          ItemSeparatorComponent={
            () => <View style={{ height: 16, backgroundColor: 'transparent' }} />
          }
          data={data.fields}
          renderItem={({ item }) => {
            const itemValue = items.get(item.id.toString()) ?? "";
            console.log('Render item with value ', itemValue == "" ? "empty" : itemValue)
            return (
              <DocumentDetailItem
                id={item.id}
                field={item.field}
                title={item.title}
                value={itemValue}
                validTextChange={fieldValueChanged}
              />
            )
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default DocumentDetailScreen;