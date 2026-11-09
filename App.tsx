import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Páginas
import Home from "./src/pages/Home";
import AccelerometerScreen from "./src/pages/Accelerometer";
import Camera from "./src/pages/Camera";
import GPS from "./src/pages/GPS";

// Tipagem
import { RootStackParamList } from "./src/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Accelerometer" component={AccelerometerScreen} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="GPS" component={GPS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}