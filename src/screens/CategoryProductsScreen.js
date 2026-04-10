import { useCart } from "../context/CartContext";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../styles/colors";
import { beverages } from "../data/mockData";

function ProductCard({ item, onPress, onAdd }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={onPress}>
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSub}>{item.subtitle}</Text>

      <View style={styles.cardBottom}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.plusBtn}
          onPress={(e) => {
            e.stopPropagation?.();
            onAdd(item);
          }}
        >
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default function CategoryProductsScreen({ navigation }) {
  const { addToCart } = useCart();
  return (
    <View style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Beverages</Text>
        <Text style={styles.filter}>⚙</Text>
      </View>

      <FlatList
        data={beverages}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        
       renderItem={({ item }) => (
        <ProductCard
          item={item}
          onAdd={addToCart}
          onPress={() => navigation.navigate("ProductDetail", { product: item })}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  back: {
    fontSize: 34,
    color: colors.text,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
  },
  filter: {
    fontSize: 22,
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
});