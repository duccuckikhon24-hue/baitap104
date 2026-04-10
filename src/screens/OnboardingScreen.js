import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import Button from "../components/Button";
import colors from "../styles/colors";

export default function OnboardingScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/images/welcome-bg.png")}
      style={styles.bg}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>
        <View style={styles.content}>
          
          <Image
            source={require("../../assets/images/carrot.png")}
            style={styles.carrot}
            resizeMode="contain"
          />

          <Text style={styles.title}>Welcome{"\n"}to our store</Text>

          <Text style={styles.subtitle}>
            Ger your groceries in as fast as one hour
          </Text>

          <Button
            title="Get Started"
            onPress={() => navigation.navigate("SignIn")}
            style={styles.button}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 26,
    paddingBottom: 50,
  },

  carrot: {
    width: 48,
    height: 48,
    marginBottom: 14,
  },

  title: {
    color: colors.white,
    fontSize: 46,
    lineHeight: 52,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 12,
    color: "#FCFCFCCC",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    width: "100%",
    marginTop: 34,
  },
});