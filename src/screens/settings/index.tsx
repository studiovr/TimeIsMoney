import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import { FlatList, Image, Modal, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParamList";
import SettingItem from "./cell"
import createStyles from "./settings.style";
import { SettingItemModel } from "./typings";
import ModalView from '../modal/view';
import { BlurView } from "@react-native-community/blur";
import FS from "react-native-fs";
import { SaveFile, ReadFile } from "../../store/storage"
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";


type settingsScreenProps = NativeStackScreenProps<RootStackParamList, 'SETTINGS'>;

const settingsScreen: React.FC<settingsScreenProps> = ({ navigation, route }) => {
  const styles = useMemo(() => createStyles(), []);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isVisibleDelete, setVisibleDelete] = useState<boolean>(false);


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
        RNSecureKeyStore.set("key1", "value1", { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
          .then((res) => {
            console.log(res);
          }, (err) => {
            console.log(err);
          });
        SaveFile("asdsad");
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

  // const saveFile = (content: string) => {
  //   var path = FS.DocumentDirectoryPath + '/test.txt';

  //   FS.writeFile(path, 'Hello dear friends', 'utf8')
  //     .then((success) => {
  //       console.log('FILE WRITTEN!', success);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }

  // const readFile = () => {
  //   var path = FS.DocumentDirectoryPath + '/test.txt';

  //   FS.readFile(path)
  //     .then((success) => {
  //       console.log('FILE READ!', success);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }

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
            title={"Безопасность"}
            description={"Приложение использует Связку ключей для хранения данных. Связка ключей это надёжное системное хранилище, доступ к которому имеете только вы с подтвержденных вами устройств. Фотографии сохраняются без шифрования в папке приложения." +
              "Чтобы включить синхронизацию, пожалуйста, включите Связку ключей Cloud в Настройках устройства. Изменение или удаление документа на одном из устройств, будет синхронизировано со всеми вашими устройствами, использующими Связку ключей iCloud." +
              "Введённый десять раз неправильно пин-код, удалит все документы и сбросит пин-код. Более подробно модете прочитать в политике конфиденциальности, которая доступна по ссылке ниже."}
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
              height: 206,
            }}
            title={"Удалить вашу учетную запись?"}
            description={""}
            primaryAction={{
              title: "Удалить",
              action: () => { }
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

export default settingsScreen;