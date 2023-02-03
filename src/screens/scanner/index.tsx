import React from "react"
import { RNCamera } from "react-native-camera";
import QRCodeScanner from "react-native-qrcode-scanner";

const scannerScreen: React.FC = () => {

    return (
        <QRCodeScanner
            onRead={(e) => {
                console.log("Scanning result is ", e)
            }}
            flashMode={RNCamera.Constants.FlashMode.auto}
        />
    )
}

export default scannerScreen;