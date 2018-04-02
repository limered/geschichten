import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { MessageHeader } from './../components/Header/index';
import { Scanner } from './../components/Scanner/index';
import { StartButton } from './../components/StartButton/index';
import { StopButton } from './../components/StopButton/index';
import StateContext from './../services/stateContext';

import scannerController from "./../services/scanner/ScannerController";
import bookRepository from './../services/data/booksRepo';

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
    scannedQR(){
        this.state.context.goToPlaying();
    }
    render(){
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <MessageHeader state={ this.state.context.currentState }/>
                <Scanner 
                    state={ this.state.context.currentState } 
                    onScanned={this.scannedQR.bind(this)}/>
                <StartButton activate={ this.startPressed.bind(this) }/> 
                <StopButton activate={ this.stopPressed.bind(this) }/> 
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