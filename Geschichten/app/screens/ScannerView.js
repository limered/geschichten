import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { MessageHeader } from './../components/Header/index';
import { StartButton } from './../components/StartButton/index';
import StateContext from './../services/stateContext';

export default class ScannerView extends React.Component{
    stateContext;
    constructor(props){
        super(props);
        this.state = { context: new StateContext() };
        this.state.context.onStateChanged = ()=>{this.setState(this.state);}
    }

    render(){
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <MessageHeader state={ this.state.context.currentState }/>
                <StartButton/>
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