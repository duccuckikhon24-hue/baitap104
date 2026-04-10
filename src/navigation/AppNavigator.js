import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignInScreen from "../screens/SignInScreen";
import NumberScreen from "../screens/NumberScreen";
import VerificationScreen from "../screens/VerificationScreen";
import SelectLocationScreen from "../screens/SelectLocationScreen";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ExploreScreen from "../screens/ExploreScreen";
import CategoryProductsScreen from "../screens/CategoryProductsScreen";
import MainTabs from "./MainTabs";
import SearchScreen from "../screens/SearchScreen";
import FilterScreen from "../screens/FilterScreen";
import CartScreen from "../screens/CartScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import OrderAcceptedScreen from "../screens/OrderAcceptedScreen";
import OrderFailedScreen from "../screens/OrderFailedScreen";
import AccountScreen from "../screens/AccountScreen";
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Number" component={NumberScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="CategoryProducts" component={CategoryProductsScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="OrderAccepted" component={OrderAcceptedScreen} />
        <Stack.Screen name="OrderFailed" component={OrderFailedScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}