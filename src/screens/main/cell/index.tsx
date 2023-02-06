import React, { useMemo } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { DocumentCategoryModel } from "../typings";

import createStyles from "./documentCategoryItem.style";
import { useNavigation } from '@react-navigation/native';


const documentCategoryItem: React.FC<DocumentCategoryModel> = ({ title, description, icon, count }) => {
    const styles = useMemo(() => createStyles(), []);
    const navigation = useNavigation();

    // const images = {
    //     profile: {
    //         profile: require('./profile/profile.png'),
    //         comments: require('./profile/comments.png'),
    //     },
    //     image1: require('./image1.jpg'),
    //     image2: require('./image2.jpg'),
    // };

    return (
        <>
            <View style = {styles.topView}>
                <Image style={styles.image} source={icon} />
                <Text style={styles.title}>{title}</Text>
                {
                count > 0 ? (<Text style={styles.countLabel}>{count}</Text>) : (<></>)
                }
            </View>
            <Text style={styles.description}>{description}</Text>
        </>
    );
};

export default documentCategoryItem;