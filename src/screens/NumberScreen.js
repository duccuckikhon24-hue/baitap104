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
import colors from "../styles/colors";

export default function NumberScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [showKeypad, setShowKeypad] = useState(false);

  const handlePress = (value) => {
    if (value === "delete") {
      setPhone((prev) => prev.slice(0, -1));
      return;
    }

    if (value === "*") return;
    if (phone.length >= 11) return;

    setPhone((prev) => prev + value);
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

          <Text style={styles.title}>Enter your mobile number</Text>

          <Text style={styles.label}>Mobile Number</Text>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setShowKeypad(true)}
            style={styles.inputWrap}
          >
            <View style={styles.inputRow}>
              <Image
                source={require("../../assets/images/flag.png")}
                style={styles.flag}
                resizeMode="contain"
              />
              <Text style={styles.code}>+880</Text>
              <Text style={styles.number}>{phone}</Text>
            </View>
            <View style={styles.line} />
          </TouchableOpacity>

          
          <TouchableOpacity
            style={[
              styles.nextButton,
              {
                opacity: phone.length >= 6 ? 1 : 0.5,
                bottom: showKeypad ? 320 : 80, 
              },
            ]}
            onPress={() =>
              phone.length >= 6 && navigation.navigate("Verification")
            }
          >
            <Text style={styles.nextText}>›</Text>
          </TouchableOpacity>

          {showKeypad && (
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
          )}
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
    color: "#ddd",
    fontSize: 15,
    marginBottom: 12,
  },

  inputWrap: {
    minHeight: 48,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 36,
  },

  flag: {
    width: 28,
    height: 20,
    marginRight: 8,
  },

  code: {
    fontSize: 18,
    color: colors.black,
    marginRight: 8,
  },

  number: {
    fontSize: 20,
    color: colors.black,
    flex: 1,
  },

  line: {
    height: 1,
    backgroundColor: "#aaa",
    marginTop: 12,
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