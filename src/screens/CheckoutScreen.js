import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import Button from "../components/Button";
import colors from "../styles/colors";

export default function CheckoutScreen({ visible, onClose, navigation }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.header}>
            <Text style={styles.title}>Checkout</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.close}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Delivery</Text>
            <View style={styles.rightRow}>
              <Text style={styles.value}>Select Method</Text>
              <Text style={styles.arrow}>›</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Pament</Text>
            <View style={styles.rightRow}>
              <Text style={styles.card}>💳</Text>
              <Text style={styles.arrow}>›</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Promo Code</Text>
            <View style={styles.rightRow}>
              <Text style={styles.value}>Pick discount</Text>
              <Text style={styles.arrow}>›</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Total Cost</Text>
            <View style={styles.rightRow}>
              <Text style={styles.value}>$13.97</Text>
              <Text style={styles.arrow}>›</Text>
            </View>
          </View>

          <Text style={styles.note}>
            By placing an order you agree to our{"\n"}
            <Text style={styles.noteBold}>Terms</Text> And{" "}
            <Text style={styles.noteBold}>Conditions</Text>
          </Text>

          <Button
            title="Place Order"
            onPress={() => {
              onClose();
              navigation.navigate("OrderAccepted");
            }}
            style={styles.button}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.18)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
  },
  close: {
    fontSize: 24,
    color: colors.text,
  },
  row: {
    height: 58,
    borderTopWidth: 1,
    borderTopColor: "#E2E2E2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: colors.subText,
  },
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "600",
  },
  arrow: {
    fontSize: 22,
    color: colors.text,
    marginLeft: 10,
  },
  card: {
    fontSize: 18,
  },
  note: {
    marginTop: 18,
    color: colors.subText,
    fontSize: 14,
    lineHeight: 22,
  },
  noteBold: {
    color: colors.text,
    fontWeight: "600",
  },
  button: {
    marginTop: 26,
  },
});