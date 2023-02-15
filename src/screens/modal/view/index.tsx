import { useMemo } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ModalModel } from "../modalModel";
import createStyles from "../view/style";

const modalView: React.FC<ModalModel> = ({ title, description, primaryAction, secondaryAction, style }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <View style={{
            ...style,
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 10,
            alignItems: "center",
            alignContent: "center",
            backgroundColor: 'white',
            borderRadius: 10,
        }}>
            <Text style={styles.title}>{title}</Text>
            {
               description ?? <Text style={styles.description}>{description}</Text>
            }
            <TouchableOpacity onPress={primaryAction.action} style={styles.button}>
                <Text style={{ color: "white" }}>{primaryAction.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={secondaryAction.action} >
                <Text style={{ color: "#F95C66", marginTop: 20, fontSize: 16 }}>{secondaryAction.title}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default modalView;
