import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class StartButton extends React.Component{
    press(){}
    render(){
        return (
            <TouchableOpacity style={styles.button} onPress={this.press} activeOpacity={0.8}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Start</Text>
                </View>    
            </TouchableOpacity>
        );
    }
}