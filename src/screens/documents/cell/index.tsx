import React, { useMemo } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { DocumentModel } from "../../main/typings";

import createStyles from "./documentItem.style";

const documentItem: React.FC<DocumentModel> = ({ title, status, fields }) => {
    const styles = useMemo(() => createStyles(), []);
    const checkIcon = require('../../../assets/check-icon.png');
    const plusIcon = require('../../../assets/plus-icon.png');

    return (
        // <TouchableOpacity style={styles.container}>
        <View style={styles.container}>
            <Image
                style={{
                    ...styles.image,
                    borderColor: 'red',
                    borderWidth: 1,
                    borderRadius: 14,
                    backgroundColor: status ? 'red' : 'transparent',
                    padding: 5
                }}
                resizeMode='center'
                source={status ? checkIcon : plusIcon}
            />
            <Text style={styles.text}>{title}</Text>
            {
                status ? (<Text style={styles.status}>Ред.</Text>) : (<></>)
            }
        </View>
        // </TouchableOpacity>
    );
};

export default documentItem;