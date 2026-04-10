import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import colors from "../styles/colors";
import { exploreCategories } from "../data/mockData";

function CategoryCard({ item, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.bg }]}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardTitle}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.safe}>
      <Text style={styles.title}>Find Products</Text>

      <View style={styles.searchWrap}>
        <Text style={styles.searchIcon}>⌕</Text>
        <TextInput
          placeholder="Search Store"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={exploreCategories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <CategoryCard
            item={item}
            onPress={() =>
              item.name === "Beverages"
                ? navigation.navigate("CategoryProducts")
                : null
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 55,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: colors.text,
    marginBottom: 20,
  },
  searchWrap: {
    height: 52,
    borderRadius: 16,
    backgroundColor: "#F2F3F2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 18,
  },
  searchIcon: {
    fontSize: 18,
    color: "#888",
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(83,177,117,0.15)",
  },
  cardImage: {
    width: 110,
    height: 80,
    marginBottom: 16,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    lineHeight: 24,
  },
});