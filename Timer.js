import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 8 };
    this.styles = this.createCss();
  }

  tick() {
    if (this.state.seconds){
      this.setState(state => ({
        seconds: state.seconds - 1
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  createCss(){
    return StyleSheet.create({
      timerbar: {
        borderWidth: 2,
        // color: "#fff",
        alignContent: "center",
        justifyContent: "center",
        flex: 0.45,
        backgroundColor: "grey",
        padding: 10,
        borderRadius: 2.5,
      },
      timerexpire: {
        borderWidth: 2,
        // color: "#fff",
        alignContent: "center",
        justifyContent: "center",
        flex: 0.45,
        backgroundColor: "yellow",
        padding: 10,
        borderRadius: 2.5,
      },
      detail: {
        fontSize: 72,
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        alignSelf:"center"
      },
  })};

  render() {
    if (this.state.seconds > 0){
      return (
        <View style={this.styles.timerbar}>
        <Text style={this.styles.detail}>
          Seconds: {this.state.seconds}
        </Text>
        </View>
      );
  
    } else {
      return (
        <View style={this.styles.timerexpire}>
        <Text style={this.styles.detail}>
          Seconds: {this.state.seconds}
        </Text>
        </View>
      );
    }
  } 
}

