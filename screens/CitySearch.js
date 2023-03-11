import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import { Divider } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import CityItem from "../components/CityItem";

export default function CitySearch({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  let newPosts = [];

  const { origin, destination, date } = route.params;

  const getData = () => {
    setLoading(true);
    const startCount = ref(database, "PrivateBuses/");
    onValue(startCount, (snapshot) => {
      const price = snapshot.val();
      Object.keys(price).map((key) => {
        if (
          price[key].ORIGIN.toLowerCase() === origin.toLowerCase() &&
          price[key].DESTINATON.toLowerCase() === destination.toLowerCase()
        ) {
          newPosts.push({
            id: key,
            ...price[key],
          });
        }
      });
      setData(newPosts);
      setLoading(false);
    });
  };

  if (!loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#eec41b" />
        <View style={styles.head}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5
              name="angle-left"
              size={28}
              color="#fff"
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.heading}>BUS</Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#fff",
              marginTop: 10,
            }}
          >
            Hello,
          </Text>
          <Text style={{ color: "#fff" }}>Search bus for your journey</Text>
        </View>
        {/* <View style={styles.carde}> */}
        <View style={styles.carde}>
          <Text
            style={{ fontSize: 16, fontWeight: "bold" }}
          >{`${origin.toLowerCase()}-${destination.toLowerCase()}`}</Text>
          <Text style={{ fontSize: 14, color: "#878888", marginTop: 5 }}>
            {date}
          </Text>
        </View>
        {
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <>
                <Divider style={{ width: "95%", alignSelf: "center" }} />
                <CityItem
                  busName={item["BUS NAME"]}
                  busType={item["BUS TYPE"]}
                  distance={item.DISTANCE}
                  seats={item["SEATING CAPACITY"]}
                  reach={item.TIME[1]}
                  start={item.TIME[0]}
                  navigation={navigation}
                  origin={origin}
                  destination={destination}
                />
              </>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        }
      </SafeAreaView>
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 150,
  },
  carde: {
    width: "95%",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 2,
    padding: 10,
    justifyContent: "space-between",
    borderWidth: 0.2,
    borderColor: "#DADADA",
  },
});
