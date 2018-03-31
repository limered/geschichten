import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MessageHeader } from './app/components/Header/index';
import Content from './views/Content';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true}/>
        <MessageHeader/>
        <Content/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'stretch'
  }
});
