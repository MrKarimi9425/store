import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { LogBox } from "react-native";
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { AppNavigator } from "./src/Navigation";
LogBox.ignoreAllLogs(true)

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default React.memo(App);