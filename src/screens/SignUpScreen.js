import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
}
 from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import colors from "../styles/colors";

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isValidEmail = /\S+@\S+\.\S+/.test(email);

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

          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>
            Enter your credentials to continue
          </Text>

          <Input
            label="Username"
            value={username}
            onChangeText={setUsername}
            placeholder="Enter username"
          />

          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            rightNode={
            isValidEmail ? <Text style={styles.check}>✓</Text> : null
  }
/>

          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
            showToggle
          />

          <Text style={styles.policy}>
            By continuing you agree to our{" "}
            <Text style={styles.green}>Terms of Service</Text> and{" "}
            <Text style={styles.green}>Privacy Policy.</Text>
          </Text>

          <Button title="Sign Up" onPress={() => {}} style={styles.button} />

          <TouchableOpacity
            style={styles.bottomWrap}
            onPress={() => navigation.navigate("LogIn")}
          >
            <Text style={styles.bottomText}>
              Already have an account?{" "}
              <Text style={styles.green}>Login</Text>
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

  check: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "700",
  },

  policy: {
    color: colors.subText,
    fontSize: 13,
    lineHeight: 20,
    marginTop: -6,
    marginBottom: 24,
  },

  green: {
    color: colors.primary,
  },

  button: {
    marginTop: 4,
  },

  bottomWrap: {
    marginTop: 28,
    alignItems: "center",
  },

  bottomText: {
    color: colors.text,
    fontSize: 14,
  },
});