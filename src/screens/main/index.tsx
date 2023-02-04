import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
// import { SearchBar } from "../../shared/components/SeachBar";
/**
 * ? Local Imports
 */
import createStyles from "./main.style";
import { DocumentCategoryModel } from "./typings";
import DocumentCategoryItem from "./cell";
import InputField from "../../shared/ui/InputField";
import { InputTypeEnum } from "../documentDetail/typings";


type mainScreenProps = NativeStackScreenProps<RootStackParamList, 'MAIN'>;

const settings: DocumentCategoryModel[] = [
  {
    title: 'Удостоверения',
    description: 'Паспорт РФ, загранпаспорт, свидетельство о рождении, военный билет',
    icon: require('../../assets/profile.png'),
    count: 3
  },
  {
    title: 'Транспорт',
    description: 'Водительское удостоверение, СТС, ПТС, ОСАГО, КАСКО',
    icon: require('../../assets/transport.png'),
    count: 0
  },
  {
    title: 'Государство',
    description: 'СНИЛС, ИНН',
    icon: require('../../assets/state.png'),
    count: 2
  },
  {
    title: 'Свидетельства',
    description: 'Свидетельство о браке, разводе, усыновлении',
    icon: require('../../assets/default.png'),
    count: 0
  },
  {
    title: 'Медицинские',
    description: 'ОМС, ДМС',
    icon: require('../../assets/plus.png'),
    count: 0
  },
  {
    title: 'Охота',
    description: 'Лицензия на оружие, разрешение РОХа, охотничий билет',
    icon: require('../../assets/default.png'),
    count: 0
  },
  {
    title: 'Прочее',
    description: 'Диплом, фотокопии',
    icon: require('../../assets/default.png'),
    count: 0
  },
]

const mainScreen: React.FC<mainScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);

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
        <FlatList
            data={settings}
            renderItem={({ item }) => <DocumentCategoryItem {...item} />}
            keyExtractor={item => item.title}
        />
      </View>
  );
};

export default mainScreen;