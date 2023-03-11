import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import { List } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import StepIndicator from "react-native-step-indicator";

export default function RouteList({ navigation }) {
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(1);
  const [loading, setLoading] = useState(false);

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: "#fe7013",
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: "#fe7013",
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#fe7013",
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: "#fe7013",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: "#fe7013",
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#292824",
    labelSize: 16,
    currentStepLabelColor: "#fe7013",
  };

  const getData = () => {
    setLoading(true);
    const startCount = ref(database, "stops/");
    onValue(startCount, (snapshot) => {
      const price = snapshot.val();
      const dat = price["A-1"].Stop;
      setData(dat);
      setLoading(false);
    });
  };

  const Item = ({ item }) => <List.Item title={item} />;

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
          <Text style={styles.heading}>A-1 City Bus</Text>
        </View>
      </View>
      {/* <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Item item={item} />;
        }}
      /> */}
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={data}
        direction="vertical"
        stepCount={data.length}
      />
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
