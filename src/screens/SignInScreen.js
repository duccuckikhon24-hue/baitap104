import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
import colors from "../styles/colors";

export default function SignInScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <Image
          source={require("../../assets/images/signInhead.png")}
          style={styles.topImage}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>

          <TouchableOpacity
            style={styles.phoneRow}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Number")}
          >
            <Image
              source={require("../../assets/images/flag.png")}
              style={styles.flag}
              resizeMode="contain"
            />
            <Text style={styles.code}>+880</Text>
          </TouchableOpacity>

          <View style={styles.line} />

          <Text style={styles.orText}>Or connect with social media</Text>

          <Button
            title="Continue with Google"
            backgroundColor={colors.google}
            onPress={() => {}}
            style={styles.socialBtn}
          />

          <Button
            title="Continue with Facebook"
            backgroundColor={colors.facebook}
            onPress={() => {}}
            style={styles.socialBtn}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  container: {
    paddingBottom: 30,
  },
  topImage: {
    width: "100%",
    height: 260,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  content: {
    paddingHorizontal: 25,
    paddingTop: 36,
  },
  title: {
    fontSize: 30,
    lineHeight: 38,
    color: colors.text,
    fontWeight: "700",
    marginBottom: 35,
  },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 14,
  },
  flag: {
    width: 28,
    height: 20,
    marginRight: 10,
  },
  code: {
    fontSize: 18,
    color: colors.text,
  },
  line: {
    height: 1,
    backgroundColor: colors.border,
  },
  orText: {
    textAlign: "center",
    color: colors.subText,
    marginTop: 36,
    marginBottom: 28,
    fontSize: 14,
  },
  socialBtn: {
    marginBottom: 16,
  },
});