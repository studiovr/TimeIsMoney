import React, { useMemo } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { SettingItemModel } from "../typings";

import createStyles from "./settingItem.style";

const settingItem: React.FC<SettingItemModel> = ({ title, icon, clickAction }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <TouchableOpacity onPress={clickAction} style={styles.container}>
            <Image style = {styles.image} source={icon} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default settingItem;