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
import SearchResult from "../screens/SearchResult";
import CityBus from "../screens/CityBus";

const Tab = createBottomTabNavigator();

export default function Route() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#eec41b" },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return <Octicons name="home" size={24} color="black" />;
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
        }}
        name="account"
        component={Account}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return <Entypo name="help" size={24} color="black" />;
          },
        }}
        name="help"
        component={Help}
      />
    </Tab.Navigator>
  );
}
