import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
import colors from "../styles/colors";

export default function OrderFailedScreen({ visible, onClose, navigation }) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <TouchableOpacity style={styles.closeWrap} onPress={onClose}>
            <Text style={styles.close}>✕</Text>
          </TouchableOpacity>

          <Image
            source={require("../../assets/images/order-failed.png")}
            style={styles.icon}
            resizeMode="contain"
          />

          <Text style={styles.title}>Oops! Order Failed</Text>
          <Text style={styles.subtitle}>Something went tembly wrong.</Text>

          <Button
            title="Please Try Again"
            onPress={onClose}
            style={styles.button}
          />

          <TouchableOpacity onPress={() => navigation.replace("MainTabs")}>
            <Text style={styles.backHome}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.22)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 24,
    alignItems: "center",
  },
  closeWrap: {
    alignSelf: "flex-start",
  },
  close: {
    fontSize: 24,
    color: colors.text,
  },
  icon: {
    width: 180,
    height: 180,
    marginTop: 10,
    marginBottom: 22,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "700",
    color: colors.text,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.subText,
    textAlign: "center",
    marginBottom: 34,
  },
  button: {
    width: "100%",
    marginBottom: 20,
  },
  backHome: {
    fontSize: 17,
    color: colors.text,
    fontWeight: "500",
  },
});