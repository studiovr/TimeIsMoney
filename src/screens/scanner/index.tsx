import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react"
import { RNCamera } from "react-native-camera";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RootStackParamList } from "../../navigation/rootStackParamList";

type ScannerScreenProps = NativeStackScreenProps<RootStackParamList, 'SCANNER'>;

const ScannerScreen: React.FC<ScannerScreenProps> = ({navigation}) => {

    return (
        <QRCodeScanner
            onRead={(e) => {
                console.log("Scanning result is ", e)
                navigation.goBack()
            }}
            flashMode={RNCamera.Constants.FlashMode.auto}
            showMarker
            cameraStyle= {{width: "100%", height: "100%", position: "absolute"}}
        />
    )
}

export default ScannerScreen;