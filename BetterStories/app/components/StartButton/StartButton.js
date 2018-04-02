import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class StartButton extends React.Component{
    render(){
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={this.props.activate} style={styles.button}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Start</Text>
                </View>
            </TouchableOpacity>
        );
    }
}