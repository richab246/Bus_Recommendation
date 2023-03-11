import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  Keyboard,
  Image,
} from "react-native";
import { Button, Card, TextInput } from "react-native-paper";

export default function CityBus({ navigation }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor="#eec41b" />
          <View style={styles.head}>
            <Text style={styles.heading}>BUS</Text>
          </View>
          <View style={{ padding: 15 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Hello,
            </Text>
            <Text style={{ color: "#000" }}>Search bus for your journey</Text>
          </View>
          <Image source={require("../assets/88994.jpg")} style={styles.image} />
          <Card
            mode="elevated"
            elevation={0}
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              borderRadius: 0,
              backgroundColor: "#fff",
            }}
          >
            <View>
              <TextInput
                mode="outlined"
                placeholder="Orign"
                style={{ width: "100%", backgroundColor: "#fff", height: 40 }}
                value={from}
                onChangeText={(from) => {
                  setFrom(from);
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <TextInput
                mode="outlined"
                placeholder="Destination"
                style={{ width: "100%", backgroundColor: "#fff", height: 40 }}
                value={to}
                onChangeText={(to) => {
                  setTo(to);
                }}
              />
            </View>
          </Card>
          <Button
            mode="contained"
            style={
              from.length > 0 && to.length > 0
                ? [styles.button, { backgroundColor: "#eec41b" }]
                : [styles.button, { backgroundColor: "#F5E7A1" }]
            }
            onPress={() =>
              navigation.navigate("citysearch", {
                origin: from,
                destination: to,
              })
            }
          >
            <Text style={styles.buttonText}>Search Buses</Text>
          </Button>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    resizeMode: "cover",
    height: "30%",
    width: "91%",
    alignSelf: "center",
  },
  dropdown: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 8,
    width: "100%",
    backgroundColor: "white",
    marginTop: 10,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 12,
    color: "#00000080",
    lineHeight: 18,
    fontWeight: "400",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  departure: {
    fontSize: 11,
    color: "#787A78",
    fontWeight: "600",
  },
  button: {
    padding: 8,
    // backgroundColor: '#eec41b',
    borderRadius: 16,
    marginTop: 40,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
  },
});
