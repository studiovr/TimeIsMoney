import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
/**
 * ? Local & Shared Imports
 */
// import { SCREENS } from "../shared/constants";
// ? Screens
import DocumentDetailScreen from "../screens/documentDetail";
import DocumentsScreen from "../screens/documents";
import MainScreen from "../screens/main";
import SettingsScreen from "../screens/settings";
import { RootStackParamList } from "./rootStackParamList";


// ? If you want to use stack or tab or both
// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {

  const defaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#002024',
    }
  };

  const RootStack = createStackNavigator<RootStackParamList>();

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={defaultTheme}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#91793A',
          },
          gestureEnabled: true,
          gestureVelocityImpact: 0.3,
          headerTintColor: '#91793A',
          headerTitleStyle: {
            color: "#D5D7D2",
          },
          headerTitleAlign: "center",
        }}
      >
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            name={"MAIN"}
            component={MainScreen}
          />
          <RootStack.Screen
            name={'DOCUMENTDETAIL'}
            component={DocumentDetailScreen}
          />
          <RootStack.Screen
            name={'DOCUMENTS'}
            component={DocumentsScreen}
          />
          <RootStack.Screen
            name={'SETTINGS'}
            component={SettingsScreen}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;