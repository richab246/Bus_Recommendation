import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/authentication/Login";
import SignUp from "../screens/authentication/SignUp";
import Route from "../routes/Route";
import { View, Text, Image } from "react-native";
import SearchResult from "../screens/SearchResult";
import { getAuth } from "firebase/auth";
import { auth } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CitySearch from "../screens/CitySearch";
import RouteList from "../screens/RouteList";

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
  React.useEffect(() => {
    checkAuthentication();
  }, []);

  const [routeName, setRouteName] = React.useState("Route");
  const [appLoading, isAppLoading] = React.useState(false);

  const checkAuthentication = async () => {
    isAppLoading(true);
    const user = AsyncStorage.getItem("user");
    if (user !== null) {
      setRouteName("Route");
      isAppLoading(false);
    } else {
      setRouteName("Login");
      isAppLoading(false);
    }
  };

  if (!appLoading) {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={routeName}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Route" component={Route} />
        <Stack.Screen name="search" component={SearchResult} />
        <Stack.Screen name="citysearch" component={CitySearch} />
        <Stack.Screen name="routelist" component={RouteList} />
      </Stack.Navigator>
    );
  } else {
    return (
      <View
        style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center" }}
      >
        <Image
          style={{
            alignSelf: "center",
            resizeMode: "cover",
            height: 250,
            width: 250,
          }}
          source={require("../assets/loader/loading.gif")}
        />
      </View>
    );
  }
};
