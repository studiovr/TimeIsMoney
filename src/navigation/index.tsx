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
import { RootStackParamList } from "./rootStackParamList";
import { Image, Pressable } from "react-native";
import { HeaderBackButton } from "react-navigation-stack";


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

  const profileButton = ({navigation}: {navigation: any}) => {
    console.log("navigation in button, ", navigation);
    return (
      <Pressable onPress={() => navigation.navigate("SETTINGS")}>
        <Image source={require('../assets/Vector.png')} />
      </Pressable>
    );
  }


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
            backgroundColor: 'white',
          },
          gestureEnabled: true,
          gestureVelocityImpact: 0.3,
          headerTintColor: '#91793A',
          headerTitleStyle: {
            color: "#000000",
          },
          headerTitleAlign: "center",
          cardStyle: {
            paddingLeft: 20,
            paddingRight: 20
          }
        }}
      >
        <RootStack.Group
          screenOptions={({navigation, route}) => ({
            headerRight: () => {
              console.log("ROUTE is", route);
              console.log("Navigation is", navigation);
              return profileButton({navigation});
            },
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
            name={"MAIN"}
            component={MainScreen}
            options={{ title: 'Документы' }}
          />
          <RootStack.Screen
            name={'DOCUMENTDETAIL'}
            component={DocumentDetailScreen}
            options={{ title: "Как вытащить название из прошлого окна" }}
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
            options={{ title: 'Настройки' }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;