import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
import colors from "../styles/colors";
import { filterCategories, filterBrands } from "../data/data";

function CheckItem({ label, checked, onPress, activeColor = colors.primary }) {
  return (
    <TouchableOpacity style={styles.checkRow} onPress={onPress} activeOpacity={0.8}>
      <View
        style={[
          styles.checkbox,
          checked && {
            backgroundColor: activeColor,
            borderColor: activeColor,
          },
        ]}
      >
        {checked && <Text style={styles.checkIcon}>✓</Text>}
      </View>
      <Text style={[styles.checkLabel, checked && { color: activeColor }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function FilterScreen({ navigation, route }) {
  const initialCategories = route?.params?.selectedCategories || [];
  const initialBrands = route?.params?.selectedBrands || [];

  const [selectedCategories, setSelectedCategories] = useState(initialCategories);
  const [selectedBrands, setSelectedBrands] = useState(initialBrands);

  const toggleArrayItem = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handleApplyFilter = () => {
    navigation.navigate("Search", {
      selectedCategories,
      selectedBrands,
    });
  };

  const handleClearFilter = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  return (
    <View style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.close}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <TouchableOpacity onPress={handleClearFilter}>
          <Text style={styles.clear}>Clear</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.panel}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>Categories</Text>

          {filterCategories.map((item) => (
            <CheckItem
              key={item}
              label={item}
              checked={selectedCategories.includes(item)}
              onPress={() =>
                toggleArrayItem(item, selectedCategories, setSelectedCategories)
              }
            />
          ))}

          <Text style={[styles.sectionTitle, { marginTop: 28 }]}>Brand</Text>

          {filterBrands.map((item) => (
            <CheckItem
              key={item}
              label={item}
              checked={selectedBrands.includes(item)}
              onPress={() =>
                toggleArrayItem(item, selectedBrands, setSelectedBrands)
              }
            />
          ))}
        </ScrollView>

        <Button
          title="Apply Filter"
          onPress={handleApplyFilter}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 26,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 18,
  },
  close: {
    fontSize: 28,
    color: colors.text,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
  },
  clear: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "600",
  },
  panel: {
    flex: 1,
    backgroundColor: "#F2F3F2",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 20,
  },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#CFCFCF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    backgroundColor: "#fff",
  },
  checkIcon: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  checkLabel: {
    fontSize: 17,
    color: colors.text,
  },
  button: {
    marginTop: 22,
  },
});