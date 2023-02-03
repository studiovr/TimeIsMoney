import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
// import { SearchBar } from "../../shared/components/SeachBar";
/**
 * ? Local Imports
 */
import createStyles from "./main.style";
import { DocumentCategoryModel } from "./typings";
import DocumentCategoryItem from "./cell";


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

  return (
    <View style={styles.container}>
      <FlatList
        data={settings}
        renderItem={({ item }) => <DocumentCategoryItem {...item} />}
        keyExtractor={item => item.title}
      />    
      </View>
  );
};

export default mainScreen;