import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={"#000"} />
      <Image source={require("../assets/about.jpg")} style={styles.image} />
      <Text style={styles.abou}>About Us.</Text>
      <Text style={styles.about}>
        Welcome! We appreciate your presence . We are AA GAYI BUS with the
        limitless demands of public and our hardwork we are finally here at your
        service.
      </Text>
      <Text style={styles.abou}>Our Purpose</Text>
      <Text style={styles.about}>
        AA GAYI BUS is India's first app which provides you schedules of local
        bus services and local city buses as well,Bus timings are tentative and
        we would like to inform that AA GAYI BUS is limited to Chhattisgarh for
        now. We're really proud to serve our user for their convenience to check
        timings of bus services with some taps and clicks from their home and
        offices. Kindly support us and thanks for yours visit.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // margin: 10,
  },
  about: {
    fontSize: 14,
    margin: 10,
    color: "#555555",
    // fontFamily: "BebasNeue-Regular",
    lineHeight: 25,
  },
  image: {
    width: Dimensions.get("window").width,
    height: 250,
  },
  abou: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
    marginTop: 20,
  },
});
