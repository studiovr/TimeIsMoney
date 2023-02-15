import { Text } from "react-native-paper";
import TextInputMask from "react-native-text-input-mask";
import { TextInput, TouchableOpacity, View } from "react-native";
import createStyles from "../phone/style";
import { Ref, useMemo, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/rootStackParamList";

type authScreenProps = NativeStackScreenProps<RootStackParamList, 'PHONE'>;

const phoneScreen: React.FC<authScreenProps> = ({navigation}) => {
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

    const checkPhone = (value:string) => {
        if(value.length === 10)
            navigation.navigate("AUTH");
        else{
            setValue("");
        }
    }

    return (
        <View style={{alignItems: "center"}}>
            <Text style={styles.title}>Укажите ваш номер телефона</Text>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                {/* <Text style={{fontSize: 18}}>+7 |</Text> */}
                {/* <TextInputMask ref={phoneInputRef} style={styles.input} placeholder={"Номер телефона"} mask={"+7 | [000] [000]-[00]-[00]"} autocomplete={true}></TextInputMask> */}
                {/* <View style={{ borderColor: "#828282", borderStyle: "solid", borderWidth: 1, height: 1}}></View> */}
                <PhoneInput
                 containerStyle={styles.input}
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="RU"
                    layout="first"
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                    placeholder="Номер телефона"
                    textInputProps={{maxLength: 10}}
                />
            </View>
            <Text style={styles.description}>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных</Text>
            <TouchableOpacity onPress={() => checkPhone(value)} style={styles.button}>
                <Text style={{ color: "white", fontSize: 16 }}>Продолжить</Text>
            </TouchableOpacity>
        </View>
    )
}

export default phoneScreen;