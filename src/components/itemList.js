/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class itemList extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={[styles.itemCon, { backgroundColor: this.props.color }]}>
        <Text style={{ color: '#fff' }}>{this.props.item}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemCon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    marginVertical: 10,
    borderRadius: 12,
  },
});
