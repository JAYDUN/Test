/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RouterComponent from './Router';
import {Actions} from 'react-native-router-flux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
              <RouterComponent/>
        <View style={styles.instructions}>
        <Text 
          style={styles.button}
          onPress={() => Actions.feed()}
          >Feed</Text>
          <Text 
          style={styles.button}
          onPress={() => Actions.profile()}
          >Profile</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    bottom:0,
    height:50,
    flexDirection:'row', 
    flexWrap:'wrap',
    borderTopWidth:1,
    borderRadius:5,
    borderColor:'#333' ,
  },
  button:{
    flex:0.5,
    textAlign:'center',
    lineHeight:50

  }
});
