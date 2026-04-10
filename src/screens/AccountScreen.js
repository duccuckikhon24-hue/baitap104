import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "../styles/colors";

function MenuItem({ icon, title }) {
  return (
    <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
      <View style={styles.menuLeft}>
        <Text style={styles.menuIcon}>{icon}</Text>
        <Text style={styles.menuTitle}>{title}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

export default function AccountScreen() {
  return (
    <View style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileWrap}>
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avatar}
            resizeMode="cover"
          />

          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>Afsar Hossen</Text>
              <Text style={styles.edit}>✎</Text>
            </View>
            <Text style={styles.email}>imshuvo97@gmail.com</Text>
          </View>
        </View>

        <MenuItem icon="🛍" title="Orders" />
        <MenuItem icon="🪪" title="My Details" />
        <MenuItem icon="📍" title="Delivery Address" />
        <MenuItem icon="💳" title="Payment Methods" />
        <MenuItem icon="🏷" title="Promo Cord" />
        <MenuItem icon="🔔" title="Notifications" />
        <MenuItem icon="❓" title="Help" />
        <MenuItem icon="ⓘ" title="About" />

        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutIcon}>⇥</Text>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  profileWrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 14,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
    marginRight: 8,
  },
  edit: {
    fontSize: 14,
    color: colors.primary,
  },
  email: {
    fontSize: 14,
    color: colors.subText,
  },
  menuItem: {
    height: 64,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    fontSize: 18,
    width: 30,
  },
  menuTitle: {
    fontSize: 18,
    color: colors.text,
    fontWeight: "500",
  },
  arrow: {
    fontSize: 24,
    color: colors.text,
  },
  logoutBtn: {
    height: 68,
    marginHorizontal: 24,
    marginTop: 40,
    marginBottom: 30,
    borderRadius: 18,
    backgroundColor: "#F2F3F2",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutIcon: {
    fontSize: 18,
    color: colors.primary,
    marginRight: 10,
  },
  logoutText: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "600",
  },
});