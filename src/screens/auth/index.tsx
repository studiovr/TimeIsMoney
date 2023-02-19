import { Text } from "react-native-paper";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import createStyles from "../auth/style";
import { Ref, useMemo, useRef, useState } from "react";
import { loadString, remove, saveString } from "../../store/keyStore/AsyncStorage";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/rootStackParamList";
import TouchID from 'react-native-touch-id';

type AuthScreenProps = NativeStackScreenProps<RootStackParamList, 'AUTH'>;

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);
    const styless = StyleSheet.create({
        root: { paddingBottom: 83, },
        title: { fontSize: 30 },
        codeFieldRoot: { justifyContent: "center" },
        cell: {
            width: 11,
            height: 11,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            fontSize: 32,
            borderRadius: 6,
            backgroundColor: '#C4C4C4',
        },
        focusCell: {
            borderColor: '#000',
            fontSize: 30,
            fontFamily: "Inter",
            fontStyle: "normal",
            color: "#828282",
            alignItems: "flex-end",
            textAlign: "center",
            display: "flex",
            marginLeft: 10,
            marginRight: 10,
            lineHeight: 34,
            marginBottom: -14

        },
    });
    const [isFirstLogin, setFValue] = useState<string | null>();
    const [value, setValue] = useState('');
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const createCode = (value: string) => {
        saveString("codeApp", value);
        setValue("");
    }


    loadString("codeApp").then(x => {
        console.log("codeapp = ", x);
        setFValue(x)
    });

    const checkCode = (value: string) => {
        if (value === isFirstLogin)
            navigation.navigate("MAIN");
        else {
            setValue("");
        }
    }

    console.log("isFirstLogin = ", isFirstLogin)
    const title = isFirstLogin ? "Введите пароль для входа в приложение" : "Придумайте пароль для входа в приложение";
    const ref = useBlurOnFulfill({ value, cellCount: 4 });
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

    TouchID.authenticate('', optionalConfigObject)
        .then(() => {
            navigation.navigate("MAIN");
        })
        .catch(() => {
            console.log("error,")
        });

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styless.root}>
                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={4}
                    rootStyle={styless.codeFieldRoot}
                    keyboardType="number-pad"
                    // textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[symbol == "" ? styless.cell : styless.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused)}
                        </Text>
                    )}
                />
            </View>
            <TouchableOpacity onPress={() => isFirstLogin ? checkCode(value) : createCode(value)} style={styles.button}>
                <Text style={{ color: "white", fontSize: 16 }}>Продолжить</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AuthScreen;