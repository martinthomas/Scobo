import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 90, seconds: 90, running: false };
    this.styles = this.createCss();
  }

  tick() {
    if (this.state.seconds && this.state.running) {
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
  createCss() {
    let h = Dimensions.get('window').height

    return StyleSheet.create({
      timerbar: {
        // borderWidth: 2,
        // color: "#fff",
        // alignContent: "center",
        // justifyContent: "flex-end",
        flex: 0.3,
        backgroundColor: "grey",
        // borderRadius: 1,
        flexDirection: "row",
      },
      timerexpire: {
        borderWidth: 2,
        // color: "#fff",
        alignContent: "center",
        justifyContent: "center",
        flex: 0.3,
        backgroundColor: "gold",
        borderRadius: 1,
      },
      detail: {
        fontSize: h * 0.15,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
      },
      timecontainer: {
        flex: 5,
        // borderWidth: 1,  
        // borderColor: "yellow",
      },
      buttoncontainer: {
        flex: 1,
        // width: "12%",
        // height:"100%",
        // padding: "30",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems:"center",
        alignContent: "space-around",
        // borderWidth: 1,
        // borderColor:"red",
        // borderStyle:"dashed"
      },
      button: {
        fontSize: h * 0.048,
        fontWeight: "bold",
        // flex: 1,
        // margin: "25",
        color: "black",
        // width: "50%",
        // height: "30%",
        // borderStyle:"solid",
        // borderWidth:1,
        // borderColor:"orange",
        textAlign: "center",
      }
    })
  };

  toggleClock = () => {
    if (this.state.running) {
      this.setState({ running: false })
    } else { this.setState({ running: true }) }
  }

  doReset = () => {
    if (this.state.running == false) this.setState({ seconds: this.state.total })
  }

  timeFormat = () => {
    let minutes, seconds = 0;
    minutes = Math.floor(this.state.seconds / 60)
    seconds = this.state.seconds % 60
    let minstr = "0" + minutes
    let secstr = seconds > 9 ? "" + seconds : "0" + seconds
    return minstr + ":" + secstr
  }

  render() {
    if (this.state.seconds > 0) {
      return (
        <View style={this.styles.timerbar}>
          <View style={this.styles.buttoncontainer}>
            <TouchableOpacity><Text style={this.styles.button}>Adjust</Text></TouchableOpacity>
          </View>
          <View style={this.styles.timecontainer}>
            <TouchableOpacity onPress={this.toggleClock}>
              <Text style={this.styles.detail}>
                {this.timeFormat()}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={this.styles.buttoncontainer}>
            <TouchableOpacity onPress={this.doReset}><Text style={this.styles.button}>Reset</Text></TouchableOpacity>
          </View>
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

