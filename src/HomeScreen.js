import { ProgressDialog, Dialog } from "react-native-simple-dialogs";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { InformationCircleIcon } from "react-native-heroicons/outline";
const HomeScreen = ({ navigation }) => {
  const [textC, setTextC] = useState("");
  const [progressVisible, setProgressVisible] = useState(false);
  const [info, setInfo] = useState(false);
  const genrateContent = () => {
    setProgressVisible(true);
    let data = JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: textC,
        },
      ],
      temperature: 0.7,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.openai.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.APIKEY,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        setProgressVisible(false);
        console.log(response.data.choices[0].message.content);
        navigation.navigate("Result", {
          data: response.data.choices[0].message.content,
        });
      })
      .catch((error) => {
        setProgressVisible(false);
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f9f9" }}>
      <ProgressDialog
        visible={progressVisible}
        title="Progress Dialog"
        // message="Please, wait..."
      />
      <Dialog
        animationType="fade"
        // contentStyle={{padding:0,backgroundColor'}}
        // overlayStyle={{,}}
        dialogStyle={{
          borderRadius: 12,
          //   backgroundColor: theme.bgWhite(0.9),
          padding: 0,
        }}
        titleStyle={{ fontSize: 24, fontWeight: "700" }}
        visible={info}
        title="App Info"
        onRequestClose={() => setInfo(false)}
        onTouchOutside={() => setInfo(false)}
      >
        <View style={{ elevation: 10 }}>
          <Text>Created by: Vikas Phulriya</Text>
          <Text>Version No: 1.0.1</Text>
        </View>
      </Dialog>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          //   backgroundColor: "green",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity style={{ padding: 2 }} onPress={() => setInfo(true)}>
          <InformationCircleIcon size={"25"} color={"black"} />
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: "center",
            // backgroundColor: "red",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Ai Text Genrator
        </Text>
        <View></View>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <TextInput
          multiline
          //   numberOfLines={5}
          scrollEnabled={true}
          value={textC}
          onChangeText={(e) => {
            setTextC(e);
          }}
          style={{
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            elevation: 2,
            borderColor: "#fff",
            borderRadius: 15,
            marginTop: 10,
            height: 250,
            padding: 10,
            // maxHeight:150
          }}
          placeholder="Enter What Content you would like to Genrate"
          placeholderTextColor={"#c0c0c0"}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          genrateContent();
        }}
        style={{
          paddingHorizontal: 20,
          backgroundColor: "#33f269",
          borderRadius: 35,
          alignSelf: "center",
          marginTop: 20,
          padding: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Generate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
