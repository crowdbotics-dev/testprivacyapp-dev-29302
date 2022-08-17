import { ActivityIndicator } from "react-native";
import { Slider } from "react-native-elements";
import { CheckBox } from "react-native-elements";
import { TextInput } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled5 = () => {
  return <View style={{
    backgroundColor: "#3a3ad0",
    padding: 10,
    position: "relative",
    height: "100%"
  }}>
      <TextInput style={{
      left: 125,
      top: 65,
      position: "absolute",
      backgroundColor: "#911818",
      borderColor: "#cccccc",
      width: 252,
      height: 30,
      transform: "rotate(180deg)"
    }}></TextInput><CheckBox title="correct box" style={{
      left: 93,
      top: 138,
      position: "absolute"
    }} size={80} checked={false}></CheckBox><Slider thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0} style={{
      left: 131,
      top: 241,
      position: "absolute",
      width: 150,
      height: 80
    }}></Slider><ActivityIndicator style={{
      left: 165,
      top: 304,
      position: "absolute",
      width: 50,
      height: 50,
      backgroundColor: "#12b219"
    }}></ActivityIndicator></View>;
};

export default Untitled5;