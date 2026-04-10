import { useCart } from "../context/CartContext";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../styles/colors";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import ExploreScreen from "../screens/ExploreScreen";
import AccountScreen from "../screens/AccountScreen";
const Tab = createBottomTabNavigator();

function TabIcon({ icon, label, focused }) {
  return (
    <View style={styles.tabItem}>
      <Text style={[styles.tabIcon, focused && styles.tabIconActive]}>
        {icon}
      </Text>
      <Text style={[styles.tabLabel, focused && styles.tabLabelActive]}>
        {label}
      </Text>
    </View>
  );
}

export default function MainTabs() {
  const { totalItems } = useCart();
  return (
    <Tab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="ShopTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="⌂" label="Shop" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="ExploreTab"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="⌕" label="Explore" focused={focused} />
          ),
        }}
      />

     <Tab.Screen
  name="CartTab"
  component={CartScreen}
  options={{
    tabBarBadge: totalItems > 0 ? totalItems : undefined,
    tabBarIcon: ({ focused }) => (
      <TabIcon icon="🛒" label="Cart" focused={focused} />
    ),
  }}
/>

<Tab.Screen
  name="FavouriteTab"
  component={FavouriteScreen}
  options={{
    tabBarIcon: ({ focused }) => (
      <TabIcon icon="♡" label="Favourite" focused={focused} />
    ),
  }}
/>

<Tab.Screen
  name="AccountTab"
  component={AccountScreen}
  options={{
    tabBarIcon: ({ focused }) => (
      <TabIcon icon="◔" label="Account" focused={focused} />
    ),
  }}
/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 78,
    paddingTop: 8,
    paddingBottom: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0,
    elevation: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -2 },
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    position: "absolute",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 58,
  },
  tabIcon: {
    fontSize: 18,
    color: "#181725",
    marginBottom: 2,
  },
  tabIconActive: {
    color: colors.primary,
  },
  tabLabel: {
    fontSize: 12,
    color: "#181725",
    fontWeight: "500",
  },
  tabLabelActive: {
    color: colors.primary,
  },
});