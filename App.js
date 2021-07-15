import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DailyMapScreen from "./DailyMap";
import SpaceCraftScreen from "./SpaceCrafts";
import StartMapScreen from "./StarMap";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCraftScreen" component={SpaceCraftScreen} />
        <Stack.Screen name="DailyPic" component={DailyMapScreen} />
        <Stack.Screen name="StartMapScreen" component={StartMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
