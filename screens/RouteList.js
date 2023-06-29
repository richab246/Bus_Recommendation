import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import { List } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import StepIndicator from "react-native-step-indicator";
import Stops from "../components/Stops";
import Card from "react-native-paper";

export default function RouteList({ navigation, route }) {
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(1);
  const [loading, setLoading] = useState(false);

  const { id, name } = route.params;

  const getData = () => {
    setLoading(true);
    const startCount = ref(database, "stops/");
    onValue(startCount, (snapshot) => {
      const price = snapshot.val();
      const dat = price[id].STOP;
      const noEmptyStrings = dat.filter((str) => str !== '');
      setData(noEmptyStrings);
      setLoading(false);
    });
  };

  return loading === false ? (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#eec41b" />
      <View style={styles.head}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5
            name="arrow-left"
            size={22}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.heading}>{name}</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Stops title={item} />}
        keyExtractor={({ index, item }) => index}
      />
      {/* keyExtractor={({ index, item }) => index} */}
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      <Text>Data is loading</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  head: {
    backgroundColor: "#eec41b",
    justifyContent: "center",
    padding: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 20,
  },
});
