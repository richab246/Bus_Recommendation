import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Help() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>How to use guide</Text>
      <Image source={require("../assets/pickup.jpg")} style={styles.image1} />
      <Text style={styles.guide}>
        Search your pickup location and destination location as shown above
      </Text>
      <Image source={require("../assets/stops.jpg")} style={styles.image1} />
      <Text style={styles.guide}>Find bus timings related to your search</Text>
      <Image source={require("../assets/route.jpg")} style={styles.image1} />
      <Text style={[styles.guide, { marginBottom: 30 }]}>
        Click on any bus and find the route
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  image1: {
    height: 400,
    width: 200,
    alignSelf: "center",
    marginVertical: 30,
  },
  heading: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 20,
    fontWeight: "700",
  },
  guide: {
    textAlign: "center",
    marginHorizontal: 20,
    fontWeight: "600",
    fontSize: 17,
    color: "#2A2929",
    lineHeight: 25,
  },
});
