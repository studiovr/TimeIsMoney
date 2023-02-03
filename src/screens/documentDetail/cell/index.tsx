import React, { useMemo } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { DocumentDetailItemModel } from "../typings";

import createStyles from "./documentDetailItem.style";

const documentDetailItem: React.FC<DocumentDetailItemModel> = ({ title, field }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <TouchableOpacity style={styles.container}>
            <Text>{title}</Text>
            <Text>{field.value}</Text>
        </TouchableOpacity>
    );
};

export default documentDetailItem;