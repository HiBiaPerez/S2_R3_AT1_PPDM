import { StyleSheet, Text, View, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types/navigation";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>

      <View style={styles.buttons}>
        <Button
          title="Acessar Acelerômetro"
          onPress={() => navigation.navigate("Accelerometer")}
        />

        <Button
          title="Acessar Câmera"
          onPress={() => navigation.navigate("Camera")}
        />

        <Button
          title="Acessar GPS"
          onPress={() => navigation.navigate("GPS")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },

  buttons: {
    width: "100%",
    gap: 15,
  },
});