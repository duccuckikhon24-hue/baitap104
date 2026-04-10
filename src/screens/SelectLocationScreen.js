import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  FlatList,
} from "react-native";
import Button from "../components/Button";
import colors from "../styles/colors";

const ZONES = ["Banasree"];
const AREAS = ["Types of your area"];

export default function SelectLocationScreen({ navigation }) {
  const [zone, setZone] = useState("Banasree");
  const [area, setArea] = useState("Types of your area");

  const [zoneModalVisible, setZoneModalVisible] = useState(false);
  const [areaModalVisible, setAreaModalVisible] = useState(false);

  const renderOption = ({ item }, onSelect) => (
    <TouchableOpacity style={styles.optionItem} onPress={() => onSelect(item)}>
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

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

          <Image
            source={require("../../assets/images/map-icon.png")}
            style={styles.mapIcon}
            resizeMode="contain"
          />

          <Text style={styles.title}>Select Your Location</Text>

          <Text style={styles.subtitle}>
            Switch on your location to stay in tune with{"\n"}
            what’s happening in your area
          </Text>

          <View style={styles.field}>
            <Text style={styles.label}>Your Zone</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.selectBox}
              onPress={() => setZoneModalVisible(true)}
            >
              <Text style={styles.valueText}>{zone}</Text>
              <Text style={styles.arrow}>⌄</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Your Area</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.selectBox}
              onPress={() => setAreaModalVisible(true)}
            >
              <Text
                style={[
                  styles.valueText,
                  area === "Types of your area" && styles.placeholderText,
                ]}
              >
                {area}
              </Text>
              <Text style={styles.arrow}>⌄</Text>
            </TouchableOpacity>
          </View>

          <Button
            title="Submit"
            onPress={() => navigation.navigate("LogIn")}
            style={styles.button}
          />
        </View>

        <Modal
          visible={zoneModalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setZoneModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setZoneModalVisible(false)}
          >
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>Select Zone</Text>
              <FlatList
                data={ZONES}
                keyExtractor={(item) => item}
                renderItem={(props) =>
                  renderOption(props, (value) => {
                    setZone(value);
                    setZoneModalVisible(false);
                  })
                }
              />
            </View>
          </TouchableOpacity>
        </Modal>

        <Modal
          visible={areaModalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setAreaModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setAreaModalVisible(false)}
          >
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>Select Area</Text>
              <FlatList
                data={AREAS}
                keyExtractor={(item) => item}
                renderItem={(props) =>
                  renderOption(props, (value) => {
                    setArea(value);
                    setAreaModalVisible(false);
                  })
                }
              />
            </View>
          </TouchableOpacity>
        </Modal>
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
    paddingHorizontal: 25,
  },

  back: {
    alignSelf: "flex-start",
    fontSize: 34,
    color: colors.black,
    marginBottom: 14,
  },

  mapIcon: {
    width: 180,
    height: 140,
    marginBottom: 12,
  },

  title: {
    textAlign: "center",
    color: colors.black,
    fontSize: 30,
    fontWeight: "700",
  },

  subtitle: {
    textAlign: "center",
    color: colors.subText,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
    marginBottom: 30,
  },

  field: {
    width: 364,
    marginBottom: 20,
  },

  label: {
    color: "#9E9E9E",
    fontSize: 14,
    marginBottom: 6,
  },

  selectBox: {
    width: 364,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  valueText: {
    fontSize: 16,
    color: colors.text,
  },

  placeholderText: {
    color: "#B8B8B8",
  },

  arrow: {
    fontSize: 18,
    color: "#7C7C7C",
    paddingRight: 4,
  },

  button: {
    width: 364,
    marginTop: 26,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  modalCard: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: colors.white,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 8,
  },

  optionItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },

  optionText: {
    fontSize: 16,
    color: colors.text,
  },
});