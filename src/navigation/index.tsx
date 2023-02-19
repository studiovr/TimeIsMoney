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
import ScannerScreen from "../screens/scanner";
import PhoneScreen from "../screens/phone"
import { RootStackParamList } from "./rootStackParamList";
import { HeaderBackButton } from "react-navigation-stack";
import AuthScreen from "../screens/auth";
import ConfirmationCodeScreen from "../screens/confirmationCode";


// ? If you want to use stack or tab or both
// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {

  const defaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
      border: 0
    },
  };


  const RootStack = createStackNavigator<RootStackParamList>();

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={defaultTheme as any}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white'
          },
          gestureEnabled: true,
          gestureVelocityImpact: 0.3,
          headerTintColor: '#141415',
          headerTitleStyle: {
            color: "#000000"
          },
          headerTitleAlign: "center",
          cardStyle: {
            paddingLeft: 20,
            paddingRight: 20
          }
        }}
      >
        <RootStack.Group
          screenOptions={({ navigation, route }) => ({
            headerLeft: (props) => {
              return props.canGoBack ? (
                <HeaderBackButton
                  {...props}
                  style={{
                    marginLeft: -4
                  }}
                  onPress={() => {
                    if (props.canGoBack) {
                      navigation.goBack()
                    }
                  }}
                />
              ) : (<></>)
            }
          })}
        >
          <RootStack.Screen
            name={"PHONE"}
            component={PhoneScreen}
            options={{ title: "" }}
          />
          <RootStack.Screen
            name={"CONFIRMATIONCODE"}
            component={ConfirmationCodeScreen}
            options={{ title: "" }}
          />
          <RootStack.Screen
            name={"AUTH"}
            component={AuthScreen}
            options={{ title: '' }}
          />
          <RootStack.Screen
            name={'DOCUMENTDETAIL'}
            component={DocumentDetailScreen}
            options={{ title: "", 
           headerTitleStyle: {textAlign: "center"},
        headerTitleContainerStyle: { width: "75%"}

      }}
          />
          <RootStack.Screen
            name={'DOCUMENTS'}
            component={DocumentsScreen}
            options={{ title: 'Удостоверения' }}
          />
          <RootStack.Screen
            name={'SETTINGS'}
            component={SettingsScreen}
            options={{ title: 'Настройки' }}
          />
          <RootStack.Screen
            name={'SCANNER'}
            component={ScannerScreen}
            options={{ title: '' }}
          />
        </RootStack.Group>
        <RootStack.Group
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (<></>)
          }
        })}>
          <RootStack.Screen
            name={"MAIN"}
            component={MainScreen}
            options={{ title: 'Документы'}}
          />
          
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;