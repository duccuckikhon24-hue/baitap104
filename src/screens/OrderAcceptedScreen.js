import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
import colors from "../styles/colors";

export default function OrderAcceptedScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/images/number-bg.png")}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/order-success.png")}
          style={styles.icon}
          resizeMode="contain"
        />

        <Text style={styles.title}>Your Order has been{"\n"}accepted</Text>

        <Text style={styles.subtitle}>
          Your items has been plced and is on{"\n"}
          it&apos;s way to being processed
        </Text>

        <Button title="Track Order" onPress={() => {}} style={styles.button} />

        <TouchableOpacity onPress={() => navigation.replace("MainTabs")}>
          <Text style={styles.backHome}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 260,
    height: 220,
    marginBottom: 40,
  },
  title: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "700",
    color: colors.text,
    textAlign: "center",
    marginBottom: 18,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.subText,
    textAlign: "center",
    marginBottom: 80,
  },
  button: {
    width: "100%",
    marginBottom: 26,
  },
  backHome: {
    fontSize: 18,
    color: colors.text,
    fontWeight: "500",
  },
});