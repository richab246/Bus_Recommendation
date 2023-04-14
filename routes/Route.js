import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Octicons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import Home from "../screens/Home";
import Account from "../screens/Account";
import Help from "../screens/Help";
import CityBus from "../screens/CityBus";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function Route() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#eec41b" },
        // tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../assets/logoblack1.png")}
                resizeMode="contain"
                style={{ width: 60, height: 60, marginTop: 5 }}
              />
            );
          },
          title: "Private bus",
          tabBarLabelStyle: {
            color: "#000",
          },
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return <FontAwesome5 name="bus" size={24} color="black" />;
          },
          title: "City Bus",
          tabBarLabelStyle: {
            color: "#000",
          },
        }}
        name="citybus"
        component={CityBus}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="account-outline"
                size={30}
                color="black"
              />
            );
          },
          title: "Account",
          tabBarLabelStyle: {
            color: "#000",
          },
        }}
        name="account"
        component={Account}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return <Entypo name="help" size={24} color="black" />;
          },
          title: "Help",
          tabBarLabelStyle: {
            color: "#000",
          },
        }}
        name="help"
        component={Help}
      />
    </Tab.Navigator>
  );
}
