import React, { useMemo } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { DocumentCategoryModel } from "../typings";

import createStyles from "./documentCategoryItem.style";

const documentCategoryItem: React.FC<DocumentCategoryModel> = ({ title, description, icon, count }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <TouchableOpacity style={styles.container}>
            <View style = {styles.topView}>
                <Image style={styles.image} source={icon} />
                <Text style={styles.title}>{title}</Text>
                {
                count > 0 ? (<Text style={styles.countLabel}>{count}</Text>) : (<></>)
                }
            </View>
            <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
    );
};

export default documentCategoryItem;