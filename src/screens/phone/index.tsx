import { Text } from "react-native-paper";
import TextInputMask from "react-native-text-input-mask";
import { TextInput, TouchableOpacity, View } from "react-native";
import createStyles from "../phone/style";
import { Ref, useMemo, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/rootStackParamList";
import WelcomePager from "../splash";
import SplashScreen from "react-native-splash-screen";
import { loadString, saveString } from "../../store/keyStore/AsyncStorage";

type PhoneScreenProps = NativeStackScreenProps<RootStackParamList, 'PHONE'>;

const PhoneScreen: React.FC<PhoneScreenProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);
    const phoneInputRef = useRef<{
        focus: () => void;
        blur: () => void;
    }>(null);

    useNavigation().addListener('focus', () => phoneInputRef.current?.focus())
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);
    const [styleInput, setStyleInput] = useState(styles.input)
    const [isValid, setIsValid] = useState(true);

    const checkPhone = (value: string) => {
        if (value.length === 10)
            navigation.navigate("CONFIRMATIONCODE", { phoneNumber: value });
        else {
            console.log(value);
            setIsValid(false);
            setValue("");
            setStyleInput(styles.inputWrong)
        }
    }

    loadString("phoneNumber").then((x) => {
        setValid(x !== null)
    });

    if (valid == true) {
        navigation.navigate("AUTH");
    }

    setTimeout(() => SplashScreen.hide(),
        1
    )

    return (
        <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>Укажите ваш номер телефона</Text>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
               <PhoneInput
                    containerStyle={styleInput}
                    ref={phoneInput}
                    defaultCode="RU"
                    value={value}
                    defaultValue={value}
                    layout="first"
                    onChangeText={(text) => {
                        setStyleInput(styles.input);
                        setIsValid(true)
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                    placeholder="Номер телефона"
                    textInputProps={{ maxLength: 10 }}
                />
            </View>
            {
                !isValid ? <Text style={{color: "red", marginTop: 10}}>Неверный номер телефона</Text> : <></>
            }
            <Text style={styles.description}>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных</Text>
            <TouchableOpacity onPress={() => checkPhone(value)} style={styles.button}>
                <Text style={{ color: "white", fontSize: 16 }}>Продолжить</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PhoneScreen