
import CheckoutScreen from "./CheckoutScreen";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Button from "../components/Button";
import colors from "../styles/colors";
import { useCart } from "../context/CartContext";

export default function CartScreen({ navigation }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalAmount,
  } = useCart();

  const renderItem = ({ item }) => (
    <View style={styles.itemWrap}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <View style={styles.infoWrap}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.sub}>{item.subtitle}</Text>
          </View>

          <TouchableOpacity onPress={() => removeFromCart(item.id)}>
            <Text style={styles.remove}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.qtyRow}>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => decreaseQty(item.id)}
            >
              <Text style={styles.qtyBtnText}>−</Text>
            </TouchableOpacity>

            <Text style={styles.qtyText}>{item.qty}</Text>

            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => increaseQty(item.id)}
            >
              <Text style={[styles.qtyBtnText, { color: colors.primary }]}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.safe}>
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Cart của bạn đang trống</Text>
        }
        ListFooterComponent={
          cartItems.length > 0 ? (
            <Button
              title={`Go to Checkout        $${totalAmount.toFixed(2)}`}
              onPress={() => setShowCheckout(true)}
              style={styles.checkoutButton}
            />
          ) : null
        }
      />
      <CheckoutScreen
        visible={showCheckout}
        onClose={() => setShowCheckout(false)}
        navigation={navigation}
/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 28,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 18,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  itemWrap: {
    flexDirection: "row",
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: "#E2E2E2",
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 16,
  },
  infoWrap: {
    flex: 1,
    justifyContent: "space-between",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 4,
  },
  sub: {
    fontSize: 14,
    color: colors.subText,
  },
  remove: {
    fontSize: 24,
    color: "#B3B3B3",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyBtn: {
    width: 42,
    height: 42,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  qtyBtnText: {
    fontSize: 24,
    color: "#B3B3B3",
  },
  qtyText: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginHorizontal: 18,
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
  },
  checkoutButton: {
    marginTop: 24,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    color: colors.subText,
    fontSize: 16,
  },
});