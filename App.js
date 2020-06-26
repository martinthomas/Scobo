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
  
  container: {
    flex: 1,
    backgroundColor: '#444',
  },
 
  scorecontainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'black',
    borderRadius: 2,
    borderWidth: 2,
    borderColor:"green"
  },

});
