import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Stops(props) {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.verticalLine}></View>
        <Entypo name="circle" size={24} color="#EE9216" />
        <View style={styles.verticalLine}></View>
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    // borderWidth: 1,
    // padding: 10,
    alignItems: "center",
    // borderColor: "#E3DEDE",
    marginLeft: 15,
  },
  time: {
    fontSize: 15,
    backgroundColor: "#242323",
    padding: 5,
    color: "#fff",
    marginRight: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 20,
  },
  verticalLine: {
    height: 20,
    width: 1,
    backgroundColor: "#909090",
    alignSelf: "center",
    backgroundColor: "#EE9216",
  },
});
