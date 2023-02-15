import { Text } from "react-native-paper";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import createStyles from "../auth/style";
import { Ref, useMemo, useRef, useState } from "react";
import { loadString, remove, saveString } from "../../store/keyStore/AsyncStorage";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/rootStackParamList";

type authScreenProps = NativeStackScreenProps<RootStackParamList, 'AUTH'>;

const authScreen: React.FC<authScreenProps> = ({navigation}) => {
    const styles = useMemo(() => createStyles(), []);
    const styless = StyleSheet.create({
        root: { paddingBottom: 83, },
        title: {  fontSize: 30 },
        codeFieldRoot: {  justifyContent: "center"},
        cell: {
            width: 11,
            height: 11,
            marginLeft: 10,
            marginRight:10,
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
            marginRight:10,
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

    const createCode = (value:string) => {
        saveString("codeApp", value);
        setValue("");
    }


    loadString("codeApp").then(x => {
        console.log("codeapp = ", x);
        setFValue(x)
    });

    const checkCode = (value:string) => {
        if(value === isFirstLogin)
            navigation.navigate("MAIN");
        else{
            setValue("");
        }
    }

    console.log("isFirstLogin = ", isFirstLogin)
    const title = isFirstLogin ? "Введите пароль для входа в приложение" : "Придумайте пароль для входа в приложение";
    const ref = useBlurOnFulfill({ value, cellCount: 4 });

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
                    {symbol || (isFocused )}
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

export default authScreen;