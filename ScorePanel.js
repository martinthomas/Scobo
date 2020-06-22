import React from 'react';
import { Image, StyleSheet, Text, View, Alert } from 'react-native';

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
            textAlign: "center",
            justifyContent: "center"
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
    }
    )
}
    render() {
        return (
            <View style={this.styles.score}>
                <Text style={this.styles.detail} >{this.state.score}</Text>
            </View>
        )
    }
}