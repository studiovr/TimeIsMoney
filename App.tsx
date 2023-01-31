import React from "react";
import { StatusBar, LogBox, View, Text } from "react-native";
/**
 * ? Local Imports
 */
import Navigation from "./src/navigation";

LogBox.ignoreAllLogs();

const App = () => {

  React.useEffect(() => {
    StatusBar.setBarStyle("dark-content");
  }, []);

  return (
    <>
      <Navigation />
      {/* <Text>Hello</Text> */}
    </>
  );
};

export default App;