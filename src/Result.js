import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from "react-native";
import React, { useEffect, useState } from "react";
import { BackwardIcon } from "react-native-heroicons/outline";
// import { TextInput } from "react-native-paper";

const Result = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f9f9" }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          //   backgroundColor: "green",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={{ padding: 2 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackwardIcon size={"25"} color={"black"} />
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: "center",
            // backgroundColor: "red",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Your Genrated Content
        </Text>
        <View></View>
      </View>
      <View style={{ padding: 10 }}>
        <TextInput
        multiline
        // numberOfLines={5}
        value={data}
          style={{
            backgroundColor: "#fff",
            borderRadius: 15,
            padding: 10,
            borderRadius: 15,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
            maxHeight:"100%"
          }} editable={false}
        />
          {/* <Text  style={{maxHeight: 100,}}>{data}</Text> */}
        {/* </View> */}
      </View>
      {/* <Text>Result</Text> */}
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({});
