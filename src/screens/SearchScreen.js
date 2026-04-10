import { useCart } from "../context/CartContext";
import React, { useMemo, useState } from "react";
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
import { products } from "../data/data";

function ProductCard({ item, onAdd }) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSub}>{item.subtitle}</Text>

      <View style={styles.cardBottom}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.plusBtn} onPress={() => onAdd(item)}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function SearchScreen({ navigation, route }) {
  const { addToCart } = useCart();
  const [keyword, setKeyword] = useState("Egg");

  const selectedCategories = route?.params?.selectedCategories || [];
  const selectedBrands = route?.params?.selectedBrands || [];

  const filteredProducts = useMemo(() => {
    const text = keyword.trim().toLowerCase();

    return products.filter((item) => {
      const matchKeyword =
        !text ||
        item.name.toLowerCase().includes(text) ||
        item.category.toLowerCase().includes(text) ||
        item.brand.toLowerCase().includes(text);

      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category);

      const matchBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(item.brand);

      return matchKeyword && matchCategory && matchBrand;
    });
  }, [keyword, selectedCategories, selectedBrands]);

  return (
    <View style={styles.safe}>
      <View style={styles.searchRow}>
        <View style={styles.searchWrap}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            value={keyword}
            onChangeText={setKeyword}
            placeholder="Search Store"
            placeholderTextColor="#7C7C7C"
            style={styles.searchInput}
          />
          {keyword.length > 0 && (
            <TouchableOpacity onPress={() => setKeyword("")}>
              <Text style={styles.clearText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Filter", {
              selectedCategories,
              selectedBrands,
            })
          }
        >
          <Text style={styles.filterIcon}>⚙</Text>
        </TouchableOpacity>
      </View>

      {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
        <View style={styles.filterInfo}>
          <Text style={styles.filterInfoText}>
            Filter:
            {selectedCategories.length > 0
              ? ` Category (${selectedCategories.join(", ")})`
              : ""}
            {selectedBrands.length > 0
              ? ` Brand (${selectedBrands.join(", ")})`
              : ""}
          </Text>
        </View>
      )}

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Không có sản phẩm phù hợp</Text>
        }
        renderItem={({ item }) => (
        <ProductCard item={item} onAdd={addToCart} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 18,
    paddingHorizontal: 20,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 26,
    marginBottom: 18,
  },
  searchWrap: {
    flex: 1,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#F2F3F2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  searchIcon: {
    fontSize: 18,
    color: "#7C7C7C",
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
  },
  clearText: {
    fontSize: 16,
    color: "#A0A0A0",
    marginLeft: 8,
  },
  filterIcon: {
    fontSize: 22,
    color: colors.text,
    marginLeft: 14,
  },
  filterInfo: {
    marginBottom: 14,
  },
  filterInfoText: {
    fontSize: 13,
    color: colors.subText,
  },
  list: {
    paddingBottom: 110,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    padding: 14,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  cardImage: {
    width: "100%",
    height: 90,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 14,
    color: colors.subText,
    marginBottom: 18,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
  },
  plusBtn: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  plusText: {
    color: "#fff",
    fontSize: 28,
    lineHeight: 30,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    color: colors.subText,
    fontSize: 16,
  },
});