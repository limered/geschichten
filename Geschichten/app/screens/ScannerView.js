import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { MessageHeader } from './../components/Header/index';
import { StartButton } from './../components/StartButton/index';
import StateContext from './../services/stateContext';

export default class ScannerView extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            context: new StateContext()
        };
        this.state.context.onStateChanged = this.setState.bind(this, this.state);
    }
    startPressed(){
        this.state.context.goToScanning();
    }
    stopPressed(){
        this.state.context.goToDefault();
    }

    render(){
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <MessageHeader state={ this.state.context.currentState }/>
                <StartButton activate={ this.startPressed.bind(this) }/> 
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
    alignContent: 'stretch',
    alignItems:'center'
  }
});