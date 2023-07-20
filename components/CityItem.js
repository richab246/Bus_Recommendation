import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";

export default function CityItem(props) {
  
  const time1 = moment(props.start, 'HH:mm:ss').format('hh:mm A');
  const time2 = moment(props.reach, 'HH:mm:ss').format('hh:mm A');

  return (
    <TouchableOpacity
      style={{
        width: "95%",
        borderRadius: 5,
        alignSelf: "center",
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      onPress={() =>
        props.navigation.navigate("routelist", {
          id: props.id,
          name: props.busName,
        })
      }
    >
      <View>
        <Text style={styles.title}>{props.busName}</Text>
        <Text style={{ fontSize: 12, color: "#878888" }}>{props.busType}</Text>
        <Text style={{ marginTop: 10, fontSize: 12 }}>{props.seats}</Text>
        <Text>{`Distance: ${props.distance}`}</Text>
      </View>
      <View style={{ marginTop: 25 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#414F5F" }}>
          {time1}
        </Text>
        <Text style={{ fontSize: 15, color: "#878888", marginTop: 4 }}>
          {time2}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    color: "#414F5F",
    fontWeight: "700",
  },
});
