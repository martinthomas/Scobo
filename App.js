import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ScorePanel from "./ScorePanel"
import Timer from "./Timer"

export default function App() {
  return (
    <View style={styles.container}>
      <Timer />
      <View style={styles.scorecontainer} >
        <ScorePanel />
        <ScorePanel color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // detail: {
  //   fontSize: 72,
  //   color: "white",
  //   textAlign: "center",
  //   justifyContent: "center"
  // },
  // detaildark: {
  //   fontSize: 48,
  //   color: "black",
  //   textAlign: "center",
  //   justifyContent: "center"
  // },
  container: {
    flex: 1,
    backgroundColor: '#444',
  },
  // timerbar: {
  //   borderWidth: 2,
  //   color: "#fff",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   textAlign: "center",
  //   flex: 0.45,
  //   backgroundColor: "grey",
  //   padding: 10,
  //   borderRadius: 2.5,
  //   fontSize: 50

  // },
  scorecontainer: {
    borderWidth: 4,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'black',
    borderRadius: 2
  },
  // score: {
  //   borderWidth: 2,
  //   borderRadius: 10,
  //   flex: 1,
  //   width: 200,
  //   height: "100%",
  //   backgroundColor: "#fff",
  //   padding: 2,
  //   alignContent: "center",
  //   justifyContent: "center",
  //   textAlign: "center"
  // },
  // scorered: {
  //   borderWidth: 2,
  //   borderRadius: 10,
  //   flex: 1,
  //   width: 200,
  //   height: "100%",
  //   backgroundColor: "#ff0000",
  //   padding: 2,
  //   alignContent: "center",
  //   justifyContent: "center",
  //   textAlign: "center"
  // },


});
