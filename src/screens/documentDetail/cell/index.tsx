import React, { forwardRef, useMemo } from "react";
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import InputField from "../../../shared/ui/InputField";
import { DocumentDetailItemModel, DocumentFieldModel, InputTypeEnum } from "../typings";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Set, Get } from "../../../store/keyStore/keyStrore"


import createStyles from "./documentDetailItem.style";

const documentDetailItem: React.FC<DocumentDetailItemModel> = ({ id, title, field, value, validTextChange }) => {
    const styles = useMemo(() => createStyles(), []);
    console.log('value in documentDetailItem', value);
    var _value = value;
    console.log("field is ", field);

    const onChangeText = (valid: boolean, v: any) => {
        if(validTextChange && v != _value) {
            _value = v;
            validTextChange(id, _value);
        }
        console.log("newValue = ", _value )
    }

    return (
        <KeyboardAwareScrollView enableOnAndroid={true}
            enableAutomaticScroll={(Platform.OS === 'ios')}>
            <TouchableOpacity style={styles.container} >
                <InputField {...field} title={title} value={_value} isValid={onChangeText} />
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
};

export default documentDetailItem;