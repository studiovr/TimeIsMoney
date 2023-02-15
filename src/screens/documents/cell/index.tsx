import React, { useMemo, useState } from "react";
import { AppState, Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { loadString } from "../../../store/keyStore/AsyncStorage";
import { DocumentModel } from "../../main/typings";
import {useBackHandler} from '@react-native-community/hooks';


import createStyles from "./documentItem.style";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const documentItem: React.FC<DocumentModel> = ({ id, title, fields }) => {
    const styles = useMemo(() => createStyles(), []);
    const checkIcon = require('../../../assets/check.jpg');
    const plusIcon = require('../../../assets/pluss.jpg');

    const [isField, setIsField] = useState<boolean>(false);

    const getIsField = async () => {
        await loadString(id.toString()).then(v => {
            setIsField(v === 'true');
        })
    };

    useEffect(() => {
        getIsField();
    }, [isField])

    const navig = useNavigation();

    navig.addListener('state', () => {
        getIsField();
    })
    
    return (
        // <TouchableOpacity style={styles.container}>
        <View style={styles.container}>
            <Image
                style={{ ...styles.image }}
                resizeMode='center'
                source={isField ? checkIcon : plusIcon}
            />
            <Text style={styles.text}>{title}</Text>
            {
                isField ? (<Text style={styles.status}>Ред.</Text>) : (<></>)
            }
        </View>
        // </TouchableOpacity>
    );
};

export default documentItem;
