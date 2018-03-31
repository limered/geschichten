import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './views/Header';
import Content from './views/Content';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Header/>
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
