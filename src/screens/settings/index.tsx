import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import { FlatList, Image, Linking, Modal, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
import SettingItem from "./cell"
import createStyles from "./settings.style";
import { SettingItemModel } from "./typings";
import ModalView from '../modal/view';
import { BlurView } from "@react-native-community/blur";
import FS from "react-native-fs";
import { SaveFile, ReadFile } from "../../store/storage"
import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";
import { clear } from "../../store/keyStore/AsyncStorage";
import { Remove } from "../../store/keyStore/keyStrore";
import { ViewStyle, StyleSheet } from "react-native";
import { IDocumentCategory } from "../main/typings";
import TouchID from "react-native-touch-id";



type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, 'SETTINGS'>;

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isVisibleDelete, setVisibleDelete] = useState<boolean>(false);
  const optionalConfigObject = {
    title: 'Вход в TimesIsMoney', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Прикоснитесь к сканеру отпечатков пальцев', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Отмена', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  const settings: SettingItemModel[] = [
    {
      title: 'Мой профиль',
      icon: require('../../assets/profile.jpg'),
      clickAction: () => {
        setVisibleDelete(true)
      }
    },
    {
      title: 'Резервная копия',
      icon: require('../../assets/copy.png'),
      clickAction: () => {
        RNSecureKeyStore.get("key1")
          .then((res) => {
            console.log(res);
          }, (err) => {
            console.log(err);
          });
        ReadFile();
      }
    },
    {
      title: 'Написать разработчикам',
      icon: require('../../assets/messege.png'),
      clickAction: () => {
        Linking.openURL('mailto:support@example.com')
      }
    },
    {
      title: 'Безопасность',
      icon: require('../../assets/secuirity.png'),
      clickAction: () => {
        setVisible(true)
      }
    },
    {
      title: 'Сканнер',
      icon: require('../../assets/secuirity.png'),
      clickAction: () => {
        navigation.navigate("SCANNER");
      }
    }
  ];

  const customData: IDocumentCategory[] = require('../../store/data.json');

  var lastDocumentId = customData.slice(-1)[0].listDocuments.slice(-1)[0].id;

  return (
    <View style={styles.container}>
      <FlatList
        data={settings}
        ItemSeparatorComponent={() =>
          (<View style={{ backgroundColor: "#F0F0F0", height: 1 }}></View>)}
        renderItem={({ item }) => <SettingItem {...item} />}
        keyExtractor={item => item.title}
      />
      <Modal
        style={{
          width: '100%',
          height: '100%'
        }}
        animationType="fade"
        visible={isVisible}
        transparent={true}
        onRequestClose={() => {
          console.log("Helloo");
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <BlurView
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              top: 0,
              right: 0
            }}
            blurType="light"
            blurAmount={2}
            reducedTransparencyFallbackColor="white"
          />
          <ModalView
            style={{
              width: 335,
              height: 460,
            }}
            titleStyle={{
              marginBottom: 25,
              marginTop: 15
            }}
            title={"Безопасность"}
            description={"d"}
            primaryAction={{
              title: "Политика конфиденциальности",
              action: () => { }
            }}
            secondaryAction={{
              title: "Закрыть",
              action: () => { setVisible(false) }
            }}
          />
        </View>
      </Modal>
      <Modal
        style={{
          width: '100%',
          height: '100%'
        }}
        animationType="fade"
        visible={isVisibleDelete}
        transparent={true}
        onRequestClose={() => {
          console.log("Helloo");
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <BlurView
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              top: 0,
              right: 0
            }}
            blurType="light"
            blurAmount={2}
            reducedTransparencyFallbackColor="white"
          />
          <ModalView
            style={{
              width: 335,
              height: 206
            }}
            titleStyle={{
              marginTop: 26,
              width: "50%",
              height: "30%"
            }}
            title={"Удалить вашу учетную запись?"}
            description={""}
            primaryAction={{
              title: "Удалить",
              action: () => {
                TouchID.authenticate('', optionalConfigObject)
                  .then(() => {
                    clear();
                    for (let index = 1; index <= lastDocumentId; index++) {
                      Remove(index.toString());
                    }
                    setVisibleDelete(false)
                    navigation.navigate("PHONE");
                  })
                  .catch(() => {
                    console.log("error,")
                  });
              }
            }}
            secondaryAction={{
              title: "Отмена",
              action: () => { setVisibleDelete(false) }
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default SettingsScreen;