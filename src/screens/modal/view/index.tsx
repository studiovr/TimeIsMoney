import { useMemo } from "react";
import { Button, Text,TouchableOpacity, View } from "react-native";
import { ModalModel } from "../modalModel";
import createStyles from "../view/style";

const modalView: React.FC<ModalModel> = ({ title, description, primaryAction, secondaryAction }) => {
    const styles = useMemo(() => createStyles(), []);


    return (
        <View style={{
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 10,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            height:460,
            width: 335,
            backgroundColor: '#000000100',
        }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity onPress={primaryAction.action} style={styles.button}>
                <Text  style={{color: "white"}}>{primaryAction.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={secondaryAction.action} >
                <Text style={{color: "#F95C66", marginTop: 20}}>{secondaryAction.title}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default modalView;
