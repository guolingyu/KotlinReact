'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello, World</Text>
        <Text>Hello, React Native</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);