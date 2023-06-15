import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import Home from "../screens/Home";
import Account from "../screens/Account";
import Help from "../screens/Help";
import CityBus from "../screens/CityBus";

const Tab = createBottomTabNavigator();

export default function Route() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#eec41b", height: 60},
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return <FontAwesome5 name="bus-alt" size={24} color="black" />;
          },
          title: "Private bus",
          tabBarLabelStyle: {
            color: "#000",
            fontSize: 13,
            marginBottom: 5
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
            fontSize: 13,
            marginBottom: 5
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
            fontSize: 13,
            marginBottom: 5
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
            fontSize: 13,
            marginBottom: 5
          },
        }}
        name="help"
        component={Help}
      />
    </Tab.Navigator>
  );
}
