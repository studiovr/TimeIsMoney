import { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ModalModel } from "../modalModel";
import createStyles from "../view/style";

const modalView: React.FC<ModalModel> = ({ title, description, primaryAction, secondaryAction, style, titleStyle }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <View style={{
            ...style,
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 10,
            alignItems: "center",
            alignContent: "center",
            backgroundColor: 'white',
            borderRadius: 10,
        }}>
            <Text style={{
                ...titleStyle,
                fontSize: 18,
                fontFamily: "inter",
                justifyContent: "center",
                color: "#000000",
                textAlign: "center",
                fontStyle: "normal",
            }}>{title}</Text>
            {
                 description != "" ?  
                <View style={{ flexDirection: 'column', marginLeft: 22, marginRight: 28, marginBottom: 33,}}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.description}>1. </Text>
                        <Text style={styles.description}>Приложение использует Связку ключей для хранения данных. Связка ключей это надёжное системное хранилище, доступ к которому имеете только вы с подтвержденных вами устройств. Фотографии сохраняются без шифрования в папке приложения.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.description}>2. </Text>
                        <Text style={styles.description}>Чтобы включить синхронизацию, пожалуйста, включите Связку ключей Cloud в Настройках устройства. Изменение или удаление документа на одном из устройств, будет синхронизировано со всеми вашими устройствами, использующими Связку ключей iCloud.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.description}>3. </Text>
                        <Text style={styles.description}>Введённый десять раз неправильно пин-код, удалит все документы и сбросит пин-код. Более подробно модете прочитать в политике конфиденциальности, которая доступна по ссылке ниже.</Text>
                    </View>
                </View>
                : <></>
            }
            <TouchableOpacity onPress={primaryAction.action} style={styles.button}>
                <Text style={{ color: "white", fontSize: 16 }}>{primaryAction.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={secondaryAction.action} >
                <Text style={{ color: "#F95C66", marginTop: 20, fontSize: 16 }}>{secondaryAction.title}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default modalView;
