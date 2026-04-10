import { useCart } from "../context/CartContext";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
import colors from "../styles/colors";

export default function ProductDetailScreen({ navigation, route }) {
  const { addToCart } = useCart();

const handleAddToBasket = () => {
  for (let i = 0; i < qty; i++) {
    addToCart(product);
  }
};
  const product = route.params?.product;
  const [qty, setQty] = useState(1);

  return (
    <View style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageWrap}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>

          <Image source={product?.image} style={styles.productImage} resizeMode="contain" />
        </View>

        <View style={styles.content}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.title}>{product?.name || "Natural Red Apple"}</Text>
              <Text style={styles.sub}>{product?.subtitle || "1kg, Price"}</Text>
            </View>
            <Text style={styles.heart}>♡</Text>
          </View>

          <View style={styles.qtyRow}>
            <View style={styles.qtyControl}>
              <TouchableOpacity onPress={() => setQty(Math.max(1, qty - 1))}>
                <Text style={styles.qtyBtn}>−</Text>
              </TouchableOpacity>

              <View style={styles.qtyBox}>
                <Text style={styles.qtyText}>{qty}</Text>
              </View>

              <TouchableOpacity onPress={() => setQty(qty + 1)}>
                <Text style={[styles.qtyBtn, { color: colors.primary }]}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>${(product?.price || 4.99).toFixed(2)}</Text>
          </View>

          <View style={styles.line} />

          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Product Detail</Text>
            <Text style={styles.chev}>⌄</Text>
          </View>
          <Text style={styles.description}>
            Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples
            May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.
          </Text>

          <View style={styles.line} />

          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Nutritions</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>100gr</Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Review</Text>
            <Text style={styles.stars}>★★★★★</Text>
          </View>

          <Button
            title="Add To Basket"
            onPress={handleAddToBasket}
            style={styles.button}
          />
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
  imageWrap: {
    height: 360,
    backgroundColor: "#F2F3F2",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  backBtn: {
    position: "absolute",
    top: 52,
    left: 20,
    zIndex: 2,
  },
  back: {
    fontSize: 34,
    color: colors.text,
  },
  productImage: {
    width: 260,
    height: 220,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 30,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 4,
  },
  sub: {
    fontSize: 16,
    color: colors.subText,
  },
  heart: {
    fontSize: 28,
    color: "#999",
  },
  qtyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },
  qtyControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyBtn: {
    fontSize: 30,
    color: "#B3B3B3",
    paddingHorizontal: 8,
  },
  qtyBox: {
    width: 48,
    height: 46,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
  },
  qtyText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
  },
  price: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
  },
  line: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginVertical: 18,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
  },
  chev: {
    fontSize: 22,
    color: "#666",
  },
  description: {
    marginTop: 10,
    color: colors.subText,
    fontSize: 15,
    lineHeight: 24,
  },
  badge: {
    backgroundColor: "#EBEBEB",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 12,
    color: "#777",
  },
  stars: {
    fontSize: 18,
    color: "#F3603F",
  },
  button: {
    marginTop: 22,
  },
});