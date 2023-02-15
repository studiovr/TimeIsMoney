import React, { useState } from "react";
import { StatusBar, LogBox, Modal } from "react-native";
import ModalView from "./src/screens/modal/view";
/**
 * ? Local Imports
 */
import Navigation from "./src/navigation";

LogBox.ignoreAllLogs();

const App = () => {
  var webSocket = new WebSocket("wss://socketsbay.com/wss/v2/1/demo/", ["ws", "wss"]);

  const [securityVisible, setSecurityVisible] = useState<boolean>(false);

  React.useEffect(() => {
    StatusBar.setBarStyle("dark-content");
  }, []);

  webSocket.onopen = () => {
    console.log("Web socket is open", webSocket)
  };

  webSocket.onclose = () => {
    console.log("Web socket is closed ", webSocket)
  }

  webSocket.onerror = (error) => {
    console.log("Error in websocket ", error, webSocket)
  }

  webSocket.onmessage = (message) => {
    console.log("new message %s in websocket %s", message, webSocket)
  }

  return (
    <>
      <Navigation />
      {/* <Text>Hello</Text> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={securityVisible}
        
        onRequestClose={() => {
          console.log("Helloo");
        }}>
        <ModalView
          title={"Безопасность"}
          description={""}
          primaryAction={{
            title: "Предоставить данные",
            action: () => { 
              console.log("Политика конфиденциальности");
              webSocket.send("hello from me");
            }
          }}
          secondaryAction={{
            title: "Отказать",
            action: () => { setSecurityVisible(false) }
          }}
        />
      </Modal>
    </>
  );
};

export default App;