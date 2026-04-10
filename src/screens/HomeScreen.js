import { useCart } from "../context/CartContext";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import colors from "../styles/colors";
import {
  exclusiveOffers,
  bestSelling,
  groceries,
} from "../data/mockData";

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

function Section({ title, data, navigation, onAdd }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            onAdd={onAdd}
            onPress={() => navigation.navigate("ProductDetail", { product: item })}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  const { addToCart } = useCart();
  return (
    <View style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.locationRow}>
            <Image
            source={require("../../assets/images/carrotc.png")}
            style={styles.carrot}
            resizeMode="contain"
          />

          <Text style={styles.location}>Dhaka, Banassre</Text>
        </View>

        <View style={styles.searchWrap}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            placeholder="Search Store"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.banner}>
          <Image
            source={require("../../assets/images/banner-vegetable.png")}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <Section
          title="Exclusive Offer"
          data={exclusiveOffers}
          navigation={navigation}
          onAdd={addToCart}
        />

        <Section
          title="Best Selling"
          data={bestSelling}
          navigation={navigation}
          onAdd={addToCart}
        />

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Groceries</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.groceryTagRow}>
            <View style={[styles.groceryTag, { backgroundColor: "#F9EFD9" }]}>
              <Text style={styles.groceryTagText}>Pulses</Text>
            </View>
            <View style={[styles.groceryTag, { backgroundColor: "#EAF4E8" }]}>
              <Text style={styles.groceryTagText}>Rice</Text>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {groceries.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onPress={() => navigation.navigate("ProductDetail", { product: item })}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 30,
  },
  locationRow: {
    alignItems: "center",
    marginBottom: 18,
  },
  location: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
  },
  carrot: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginBottom: 30,
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
  banner: {
    width: "100%",
    height: 115,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 24,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
  },
  seeAll: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  card: {
    width: 175,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    padding: 14,
    marginRight: 14,
    backgroundColor: "#fff",
  },
  cardImage: {
    width: "100%",
    height: 95,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 17,
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
    fontSize: 22,
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
  groceryTagRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  groceryTag: {
    height: 90,
    flex: 1,
    borderRadius: 18,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginRight: 12,
  },
  groceryTagText: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
  },
});