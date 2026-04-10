import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import colors from "../styles/colors";

export default function LogInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/images/number-bg.png")}
      style={styles.bg}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/carrotc.png")}
            style={styles.carrot}
            resizeMode="contain"
          />

          <Text style={styles.title}>Loging</Text>
          <Text style={styles.subtitle}>Enter your emails and password</Text>

          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
            showToggle
          />

          <TouchableOpacity style={styles.forgotWrap}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <Button
          title="Log In"
          onPress={() => navigation.replace("MainTabs")}
          style={styles.button}
          />

          <TouchableOpacity
            style={styles.bottomWrap}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.bottomText}>
              Don’t have an account? <Text style={styles.signLink}>Singup</Text>
            </Text>
          </TouchableOpacity>
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
  },


  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 40,
  },

  carrot: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 40,
  },

  title: {
    fontSize: 30,
    color: colors.text,
    fontWeight: "700",
    marginBottom: 8,
  },

  subtitle: {
    color: colors.subText,
    fontSize: 16,
    marginBottom: 34,
  },

  forgotWrap: {
    alignItems: "flex-end",
    marginTop: -6,
    marginBottom: 28,
  },

  forgot: {
    color: colors.text,
    fontSize: 14,
  },

  button: {
    marginTop: 6,
  },

  bottomWrap: {
    marginTop: 28,
    alignItems: "center",
  },

  bottomText: {
    color: colors.text,
    fontSize: 14,
  },

  signLink: {
    color: colors.primary,
    fontWeight: "600",
  },
});