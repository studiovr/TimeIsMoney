import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, Image, Pressable, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
import { DocumentCategoryModel, IDocumentCategory } from "./typings";
import DocumentCategoryItem from "./cell";
import { TextInput } from "react-native-paper";

import createStyles from "./main.style";
import { loadString } from "../../store/keyStore/AsyncStorage";

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'MAIN'>;

const MainScreen: React.FC<MainScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);
  const customData: IDocumentCategory[] = require('../../store/data.json');
  const items = customData.map(c => new DocumentCategoryModel(c.id, c.title, c.description, c.icon, c.listDocuments, 0));
  const [data, setData] = useState<DocumentCategoryModel[]>(items);
  const [dataRender, setDataRender] = useState<DocumentCategoryModel[]>(items);
  const [fcs, setFcs] = useState<number>(0);

  navigation.setOptions({
    headerLeft: (props) => {
      return (<></>)
    }
  });

  const effect = () => {
    var map = new Map<string, number>();
    const promises = customData.map(async (x) => {
      var count = 0;
      const proms = x.listDocuments.map(async (c) => {
        const v = await loadString(c.id.toString());
        console.log("V for customData x.id = " + x.id + " and listDocuments c.id = " + c.id + " has value " + v);
        if (v === "true")
          count += 1;
        console.log("count = " + count);
      });

      await Promise.all(proms).then(() => {
        console.log("Count items for x.id = " + x.id + " has " + count + " items");
        map.set(x.id.toString(), count);
      });
      
      return new Promise((r,rej) => {
        r(true);
      })
    });
    
    Promise.all(promises).then(() => {
      const newData = customData.map(cd => {
        const categoryModel = new DocumentCategoryModel(cd.id, cd.title, cd.description, cd.icon, cd.listDocuments, cd.count ?? 0);
        categoryModel.count = map.get(cd.id.toString()) ?? 0;
        return categoryModel;
      });
      console.log("New Data is ", newData);
      setData(newData);
      setDataRender(newData);
    })

  };

  useEffect(effect, [fcs]);

  
  navigation.addListener('focus', () => {
    console.log("fcd = ", fcs)
    setFcs(fcs+1)
  });

  const onTextChange = (text: string) => {
    const searchText = text.toLowerCase();

    const resultData = dataRender.filter(s =>
      s.title.toLowerCase().includes(searchText) || s.description.toLowerCase().includes(searchText)
    );
    setData(resultData.length == items.length ? data : resultData);
  }

  const settingsButton = () => {
    return (
      <Pressable onPress={() => navigation.navigate("SETTINGS")}>
        <Image source={require('../../assets/Vector.png')} />
      </Pressable>
    );
  }

  navigation.setOptions({ headerRight: () => { return settingsButton() } })

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Поиск"
        left={<TextInput.Icon style={{}} icon={require('../../assets/search.png')} />}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        style={{
          width: '100%',
          height: 45,
          backgroundColor: '#F2F2F2',
          borderRadius: 4
        }}
        onChangeText={onTextChange}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        contentContainerStyle={{
          paddingTop: 4,
          paddingBottom: 65
        }}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("DOCUMENTS", { item: item })}>
            <DocumentCategoryItem {...item} />
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default MainScreen;