import React, { useMemo } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import InputField from "../../../shared/ui/InputField";
import { DocumentDetailItemModel, DocumentFieldModel } from "../typings";

import createStyles from "./documentDetailItem.style";

const documentDetailItem: React.FC<DocumentDetailItemModel> = ({ title, field }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <TouchableOpacity style={styles.container}>
            <Text>{title}</Text>
            <InputField {...field}/>
        </TouchableOpacity>
    );
};

export default documentDetailItem;