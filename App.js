
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome </Text>
        <Text style={styles.hello}>hello world !!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    color:'#000'
  },
  hello: {
    fontSize: 30,

  }
  
});
