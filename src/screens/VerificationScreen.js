import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import colors from "../styles/colors";

export default function VerificationScreen({ navigation }) {
  const [code, setCode] = useState("");

  const handlePress = (value) => {
    if (value === "delete") {
      setCode((prev) => prev.slice(0, -1));
      return;
    }

    if (value === "*") return;
    if (code.length >= 4) return;

    setCode((prev) => prev + value);
  };

  const keys = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "*", "0", "delete",
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/number-bg.png")}
      style={styles.bg}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Enter your 4-digit code</Text>

          <Text style={styles.label}>Code</Text>

          <View style={styles.inputWrap}>
            <View style={styles.codeRow}>
              {[0, 1, 2, 3].map((i) => (
                <Text key={i} style={styles.codeText}>
                  {code[i] ? code[i] : "_"}
                </Text>
              ))}
            </View>
            <View style={styles.line} />
          </View>

          <TouchableOpacity>
            <Text style={styles.resend}>Resend Code</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextButton,
              {
                opacity: code.length === 4 ? 1 : 0.5,
                bottom: 320,
              },
            ]}
            onPress={() =>
              code.length === 4 && navigation.navigate("SelectLocation")
            }
          >
            <Text style={styles.nextText}>›</Text>
          </TouchableOpacity>

          <View style={styles.keypad}>
            {keys.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.key}
                onPress={() => handlePress(item)}
              >
                <Text style={styles.keyText}>
                  {item === "delete" ? "⌫" : item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
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
    paddingTop: 18,
    paddingHorizontal: 20,
  },

  back: {
    fontSize: 34,
    color: colors.black,
    marginBottom: 38,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.black,
    marginBottom: 30,
  },

  label: {
    color: "#777",
    fontSize: 15,
    marginBottom: 12,
  },

  inputWrap: {
    minHeight: 48,
  },

  codeRow: {
    flexDirection: "row",
    width: 140,
    justifyContent: "space-between",
    alignItems: "center",
  },

  codeText: {
    fontSize: 24,
    color: colors.black,
    width: 24,
    textAlign: "center",
  },

  line: {
    height: 1,
    backgroundColor: "#aaa",
    marginTop: 12,
  },

  resend: {
    color: colors.primary,
    marginTop: 36,
    fontSize: 15,
    fontWeight: "500",
  },

  nextButton: {
    position: "absolute",
    right: 20,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },

  nextText: {
    color: colors.white,
    fontSize: 34,
  },

  keypad: {
    marginTop: "auto",
    paddingBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  key: {
    width: "31%",
    height: 62,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  keyText: {
    fontSize: 28,
    color: colors.text,
  },
});