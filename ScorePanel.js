import React from 'react';
import { Image, StyleSheet, Text, View, Alert, Button } from 'react-native';

export default class ScorePanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {score : 0};
        this.styles = this.createStyles(props.color);
    }
    
    createStyles(competitor) {
        let color = "black";
        let background = "white";
        if (competitor=="red" )
        {
            color ="white";
            background="red"
        }
    return StyleSheet.create({
        detail: {
            fontSize: 72,
            color: color,
            // textAlign: "center",
            // justifyContent: "center",
            // alignContent: "center",
            flex: 1
          },
        
        score: {
          borderWidth: 2,
          borderRadius: 4,
          flex: 1,
        //   width: 200,
          height: "100%",
          backgroundColor: background,
          padding: 1,
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center"
        },
        buttoncontainer: {
            flex:0.25,
            width: "50%",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center"
          },
        button: {
            flex: 1,
            width: "100%",
            height: "100%"
            // flexGrow: true,
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
                <Button  style={this.styles.button} title="+1" onPress={ this.addPoint} />
                <Button  style={this.styles.button} title="-1" onPress={ this.subPoint} />
                </View>
            </View>
        )
    }
}