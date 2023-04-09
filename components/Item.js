import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";

export default function Item(props) {
  return (
    <View
      style={{
        width: "95%",
        borderRadius: 5,
        alignSelf: "center",
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={styles.title}>{props.busName}</Text>
        <Text style={{ fontSize: 12, color: "#878888" }}>{props.busType}</Text>
        <Text style={{ marginTop: 10, fontSize: 12 }}>{props.seats}</Text>
        <Text>{`Distance: ${props.distance}`}</Text>
      </View>
      <View style={{ marginTop: 25 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#414F5F" }}>
          {props.start}
        </Text>
        <Text style={{ fontSize: 15, color: "#878888", marginTop: 4 }}>
          {props.reach}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    color: "#414F5F",
    fontWeight: "700",
  },
});
