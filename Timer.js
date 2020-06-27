import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 90, running: false };
    this.styles = this.createCss();
  }

  tick() {
    if (this.state.seconds && this.state.running){
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
    let w = Dimensions.get('window').width

    return StyleSheet.create({
      timerbar: {
        // borderWidth: 2,
        // color: "#fff",
        // alignContent: "center",
        // justifyContent: "flex-end",
        flex: 0.3,
        backgroundColor: "grey",
        // borderRadius: 1,
        flexDirection:"row",
      },
      timerexpire: {
        borderWidth: 2,
        // color: "#fff",
        alignContent: "center",
        justifyContent: "center",
        flex: 0.3,
        backgroundColor: "yellow",
        borderRadius: 1,
      },
      detail: {
        fontSize: w*0.09,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
      },
      timecontainer: {
        flex: 5,
        // borderWidth: 1,  
        borderColor:"yellow",
      },
      buttoncontainer: {
        // flex:1,
        width: "10%",
        // height:"100%",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems:"center",
        alignContent:"space-around",
        borderWidth: 1,
        // borderColor:"red",
        // borderStyle:"dashed"
      },
      button: {
        fontSize: w*0.025,
        fontWeight:"bold",
        // flex: 1,
        color: "black",
        // width: "50%",
        // height: "30%",
        // borderStyle:"solid",
        borderWidth:1,
        // borderColor:"orange",
        textAlign:"center",
    }
  })};

startClock = () => {
    this.setState({ running: true})
}
stopClock = () => {
  this.setState({ running: false})
}

  render() {
    if (this.state.seconds > 0){
      return (
        <View style={this.styles.timerbar}>
          <View style={this.styles.buttoncontainer}>
            <TouchableOpacity><Text style={this.styles.button} onPress={this.startClock}>Start</Text></TouchableOpacity>
          </View>
          <View style={this.styles.timecontainer}>
            <Text style={this.styles.detail}>
              Seconds: {this.state.seconds}
            </Text>
          </View>
          <View style={this.styles.buttoncontainer}>
          <TouchableOpacity><Text style={this.styles.button} onPress={this.stopClock} >Stop</Text></TouchableOpacity>
          </View>
        </View>
      );
  
    } else {
      return (
        <View style={this.styles.timerexpire}>
        <Text style={this.styles.detail }>
          Seconds: {this.state.seconds}
        </Text>
        </View>
      );
    }
  } 
}

