import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
import { DocumentCategoryModel, IDocumentCategory } from "./typings";
import DocumentCategoryItem from "./cell";
import InputField from "../../shared/ui/InputField";
import { InputTypeEnum } from "../documentDetail/typings";
import { TextInput } from "react-native-paper";

import createStyles from "./main.style";
import { Category } from "../../store/typings";
import { timing } from "react-native-reanimated";

type mainScreenProps = NativeStackScreenProps<RootStackParamList, 'MAIN'>;

const mainScreen: React.FC<mainScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);
  const customData: IDocumentCategory[] = require('../../store/data.json');

  const items = customData.map(c => new DocumentCategoryModel(c.id, c.title, c.description, c.icon, c.listDocuments));

  const [data, setData] = useState<DocumentCategoryModel[]>(items);

  const onTextChange = (text: string) => {
    const searchText = text.toLowerCase();
    const resultData = data.filter(s =>
      s.title.toLowerCase().includes(searchText) || s.description.toLowerCase().includes(searchText)
    );
    setData(resultData.length == data.length ? items : resultData);
  }

//   const [testState, setTestState] = useState<string>(''); // for Text or Password Input
//   const [testState, setTestState] = useState<number>(0); // for Number Input
//   const [testState, setTestState] = useState<{ id: number, name: string }>(); // for Select Input (may be any type)
//   const [testState, setTestState] = useState<Date>(new Date(Date.now() - 18 * 365 * 3600 * 24 * 1000)); // for Date Input

  return (
    <View style={styles.container}>
        {/* <InputField
            type={InputTypeEnum.TEXT}
            label='Test'
            value={testState}
            onChange={(newValue) => setTestState(newValue)}
        /> */}
        {/* <InputField
            type={InputTypeEnum.NUMBER}
            label='Test'
            value={testState}
            onChange={(newValue) => setTestState(newValue.replace(/[^0-9]/g, ''))}
        /> */}
        {/* <InputField
            type={InputTypeEnum.PASSWORD}
            label='Test'
            value={testState}
            onChange={(newValue) => setTestState(newValue)}
        /> */}
        {/* <InputField
            type={InputTypeEnum.DATE}
            label='Test'
            value={testState}
            onChange={(newValue) => setTestState(newValue)}
        /> */}
        {/* <InputField
            type={InputTypeEnum.SELECT}
            label='Select User'
            value={testState}
            onChange={(newValue) => setTestState(newValue)}
            options={[{id: 1, name: 'Test Name 1' }, {id: 2, name: 'Test Name 2' }]}
            renderOptionItem={(item) => item.name}
        /> */}
        {/* <FlatList
            data={settings}
            renderItem={({ item }) => <DocumentCategoryItem {...item} />}
            keyExtractor={item => item.title}
        />
      </View> */}
      <TextInput
        placeholder="Поиск"
        left={<TextInput.Icon icon={require('../../assets/default.png')} />}
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
          <TouchableOpacity style={styles.container} onPress = {() => navigation.navigate("DOCUMENTS", {item: item})}>
            <DocumentCategoryItem {...item} />  
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default mainScreen;