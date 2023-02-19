import { Text } from "react-native-paper";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import createStyles from "../confirmationCode/style";
import { Ref, useEffect, useMemo, useRef, useState } from "react";
import { loadString, remove, saveString } from "../../store/keyStore/AsyncStorage";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/rootStackParamList";

type ConfirmationCodeScreenProps = NativeStackScreenProps<RootStackParamList, 'CONFIRMATIONCODE'>;

const ConfirmationCodeScreen: React.FC<ConfirmationCodeScreenProps> = ({ navigation, route }) => {
    const styles = useMemo(() => createStyles(), []);
    const styless = StyleSheet.create({
        root: {
            paddingBottom: 83,
            marginTop: 53
        },
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
            backgroundColor: '#828282',
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
        console.log("isf = ", isFirstLogin + "value = ", value)
        if (value === isFirstLogin){
            setTimer(0);
            navigation.navigate("AUTH");
        }
        else {
            setValue("");
        }
    }

    const ref = useBlurOnFulfill({ value, cellCount: 4 });
    const phone = route.params.phoneNumber;

    const [timerCount, setTimer] = useState(600)
    const [isTimer, setIsTimer] = useState(true)

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(lastTimerCount => {
                lastTimerCount <= 1 && clearInterval(interval)
                if (lastTimerCount <= 1) {
                    setIsTimer(false);
                    updateButtonTitle();
                }
                return lastTimerCount - 1
            })
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, []);

    saveString("codeApp", "1234");


    const updateButtonTitle = () => {
        if (value.length < 4 && isTimer)
            return ("Продолжить");
        else if (value.length < 4 && isTimer == false)
            return ("Получить новый код");
        else
            return ("Продолжить");

    }

    return (
        <View>
            <Text style={styles.title}>Теперь введите код</Text>
            <Text style={styles.description}>Код был выслан на телефон +7 {phone}</Text>
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
            {
                isTimer ? <Text style={styles.description}>Если код не придет, можно получить его через {timerCount} сек</Text> : <></>
            }
            <TouchableOpacity onPress={() => value.length == 4 ? checkCode(value) : createCode(value)} style={value.length != 4 && isTimer ? styles.button : styles.buttonClick}>
                <Text style={value.length != 4 && isTimer ? styles.buttonText : styles.buttonTextClick}>{updateButtonTitle()}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ConfirmationCodeScreen;