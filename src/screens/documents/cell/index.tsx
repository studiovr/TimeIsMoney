import React, { useMemo } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { DocumentModel } from "../typings";

import createStyles from "./documentItem.style";

const documentItem: React.FC<DocumentModel> = ({ title, isFilled }) => {
    const styles = useMemo(() => createStyles(), []);
    const checkIcon = require('../../../assets/check-icon.png');
    const plusIcon = require('../../../assets/plus-icon.png');

    return (
        <TouchableOpacity style={styles.container}>
            <Image 
                style={{
                    ...styles.image,
                    borderColor: 'red',
                    borderWidth: 1,
                    borderRadius: 14,
                    backgroundColor: isFilled ? 'red' : 'transparent',
                    padding: 5
                }}
                resizeMode='center'
                source={isFilled ? checkIcon : plusIcon} 
            />
            <Text style={styles.text}>{title}</Text>
            {
                isFilled ? (<Text style={styles.status}>Ред.</Text>) : (<></>)
            }
        </TouchableOpacity>
    );
};

export default documentItem;