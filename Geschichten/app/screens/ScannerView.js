import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { MessageHeader } from './../components/Header/index';

export default class ScannerView extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <MessageHeader/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'stretch'
  }
});