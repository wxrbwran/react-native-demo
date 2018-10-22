/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import BaseComponent from './BaseComponent';
import {StyleSheet, Text, View, Button} from 'react-native';


const styles = StyleSheet.create({
  });
export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        path: 'hello',
    }
  }
  changeButton = () => {
      this.props.onChange('React!!!');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.props.name }</Text>
        <Text>{ this.state.path }</Text>
        <Button
            onPress={this.changeButton}
            title="修改"
        />
      </View>
    );
  }
}


