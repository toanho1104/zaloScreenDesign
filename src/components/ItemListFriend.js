/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default class itemList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.item.imageUrl} style={styles.image} />

        <View style={{ marginRight: 10, flex: 1 }}>
          <Text style={styles.textName}>{this.props.item.name}</Text>
          <Text>{this.props.item.mutualFriends} bạn chung</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.textButton}>Kết bạn</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#e4e5ed',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderRadius: 70,
    marginRight: 10,
  },
  textName: { fontWeight: 'bold', fontSize: 20 },
  button: {
    padding: 8,
    backgroundColor: '#285feb',
    borderRadius: 10,
  },
  textButton: { color: '#fff', fontSize: 15 },
});
