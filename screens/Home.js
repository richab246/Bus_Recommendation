import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Button,
  Card,
  Divider,
  Searchbar,
  TextInput,
} from "react-native-paper";
import { Octicons, MaterialCommunityIcons, Feather, AntDesign } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment, { months } from "moment";
import moment from "moment/moment";
import * as Localization from "expo-localization";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const Months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["da", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default Home = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [time, setTime] = useState('00:00')
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [date, setDate] = useState(
    days[new Date().getDay()] +
      ", " +
      new Date().getDate() +
      " " +
      Months[new Date().getMonth()]
  );
  const [selected, setSelected] = useState("today");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const currentDate = () => {
    const d =
      days[new Date().getDay()] +
      ", " +
      new Date().getDate() +
      " " +
      Months[new Date().getMonth()];
    setDate(d);
    setSelected("today");
  };

  const tommorrowDate = () => {
    let d = moment().add(1, "days");
    const da = d.format(`ddd, DD`);
    const month = d.format("M");

    const dat = da + " " + Months[month - 1];
    setDate(dat);
    setSelected("tommorrow");
  };

  const showDatePicker = () => {
    setSelected("none");
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    // setSelected("none");
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };


  const handleConfirm = (date) => {
    const d = Moment(date).format(`ddd, DD`);
    const month = Moment(date).format("M");
    const day = d + " " + Months[month - 1];
    setDate(day);
    hideDatePicker();
  };

  const handleConfirmTime = (time) => {
    const format = moment(time).format('HH:mm');
    setTime(format);
    hideTimePicker();
  };

  const ReverseButton = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <StatusBar backgroundColor="#eec41b" />
          <View style={styles.head}>
            <Image
              source={require("../assets/logo2.png")}
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#fff",
                borderRadius: 20,
              }}
            />
            <Text style={styles.heading}>Aa Gayi Bus</Text>
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
          <Image source={require("../assets/bus.png")} style={styles.image} />
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
            <View style={{ marginHorizontal: 8 }}>
              <Text style={{ marginLeft: 10 }}>From</Text>
              <TextInput
                placeholder="Origin"
                style={{ width: "100%", backgroundColor: "#fff", height: 40 }}
                value={from}
                onChangeText={(from) => {
                  setFrom(from);
                }}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                marginHorizontal: 8,
                marginTop: 20,
              }}
            >
              <Octicons
                style={{ transform: [{ rotate: "90deg" }], marginRight: 30 }}
                name="arrow-switch"
                size={28}
                color="black"
                onPress={ReverseButton}
              />
            </View>
            <View style={{ marginHorizontal: 8 }}>
              <Text style={{ marginLeft: 10 }}>To</Text>
              <TextInput
                placeholder="Destination"
                style={{ width: "100%", backgroundColor: "#fff", height: 40 }}
                value={to}
                onChangeText={(to) => {
                  setTo(to);
                }}
              />
            </View>
          </Card>
          <TouchableOpacity onPress={showTimePicker} style={styles.timeBox}>
          <Feather name="clock" size={18} color="#787A78" />
           
            <View
            
            style={{marginRight: 170}}
            >
              <Text style={styles.set}>Set Time</Text>
              <Text style={styles.time}>{time}</Text>
            </View>
            <AntDesign name="down" size={24} color="black"/>
          <DateTimePickerModal
            date={selectedDate}
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
/>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <View style={{ marginRight: 25 }}>
              <Text style={styles.departure}>DEPARTURE DATE</Text>
              <Text style={{ fontWeight: "600" }}>{date}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "50%",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={24}
                color="black"
                onPress={showDatePicker}
              />
              <Text
                onPress={currentDate}
                style={
                  selected == "today"
                    ? { color: "#eec41b", fontWeight: "700" }
                    : { color: "#000", fontWeight: "700" }
                }
              >
                TODAY
              </Text>
              <Text>|</Text>
              <Text
                onPress={tommorrowDate}
                style={
                  selected == "tommorrow"
                    ? { color: "#eec41b", fontWeight: "700" }
                    : { color: "#000", fontWeight: "700" }
                }
              >
                TOMMORROW
              </Text>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
          </View>
          <Button
            mode="contained"
            style={
              from.length > 0 && to.length > 0
                ? [styles.button, { backgroundColor: "#eec41b" }]
                : [styles.button, { backgroundColor: "#F5E7A1" }]
            }
            onPress={() =>
              navigation.navigate("search", {
                origin: from,
                destination: to,
                date: date,
                time: time
              })
            }
          >
            <Text style={styles.buttonText}>Search Buses</Text>
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    // paddingBottom: 50
  },
  head: {
    backgroundColor: "#eec41b",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginLeft: 10,
  },
  image: {
    resizeMode: "cover",
    height: 180,
    width: 300,
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
    marginBottom: 50
  },
  buttonText: {
    fontSize: 18,
  },
  time: {
    fontSize: 16,
    fontWeight: '500',
  },
  timeBox: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#B7B8BA',
    marginTop: 20,
    justifyContent: 'space-between'
  },
  set: {
   fontSize: 12,
   color: '#eec41b',
   fontWeight: '600'
  }
});
