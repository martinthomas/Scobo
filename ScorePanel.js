import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default class ScorePanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {score :0};
        this.styles = this.createStyles(props.color);
    }
    
    createStyles(competitor) {
        let h = Dimensions.get('window').height
        let color = "black";
        let background = "white";
        if (competitor=="red" )
        {
            color ="white";
            background="red"
        }
    return StyleSheet.create({
        score: {
            borderWidth: 1,
            // borderRadius: 2,
            // borderColor: "pink",
            flex: 1,
            // width: "50%",
            // height: "100%",
            backgroundColor: background,
            alignItems: "center",
            justifyContent: "center",
          },

        detail: {
            fontSize: h*0.4,
            fontWeight: "bold",
            color: color,
            // borderStyle: "dashed",
            // borderColor: "grey",
            // borderWidth: 1,
            textAlign: "center",
            // justifyContent: "space-evenly",
            flex: 3,
            // padding: 32,
            margin:48
          },
        
        buttoncontainer: {
            flex:1,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            borderWidth: 1,
            borderColor:"black",
          },
        button: {
            fontSize: h*0.1,
            fontWeight:"bold",
            flex: 1,
            color: "black",
            width: "100%",
            height: "100%",
            // borderStyle:"solid",
            // borderWidth:1,
            // borderColor:"orange",
            textAlign:"center",
        }
    }
    )
}
addPoint = () => {
    this.setState({ score: this.state.score +1})
}
subPoint = () => {
    if (this.state.score >0){
    this.setState({ score: this.state.score -1})
    }
}
    render() {
        return (
            <View style={this.styles.score}>
                <Text style={this.styles.detail} >{this.state.score}</Text>
                <View style={this.styles.buttoncontainer}>
                    <TouchableOpacity onPress={ this.addPoint} ><Text style={this.styles.button}>+1</Text></TouchableOpacity>
                    <TouchableOpacity onPress={ this.subPoint} ><Text style={this.styles.button}>-1</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}