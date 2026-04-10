import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../styles/colors";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      
      <Image
        source={require("../../assets/images/carrot.png")}
        style={styles.carrot}
        resizeMode="contain"
      />

      <View>
        <Text style={styles.logo}>nectar</Text>
        <Text style={styles.sub}>online groceriet</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  carrot: {
    width: 42,
    height: 42,
    marginRight: 10,
  },

  logo: {
    color: colors.white,
    fontSize: 48,
    fontWeight: "300",
    letterSpacing: 1,
  },
  sub: {
    color: colors.white,
    fontSize: 12,
    letterSpacing: 5,
    marginTop: -4,
  },
});
