import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default class ItmeListSearch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.item.imageUrl} style={styles.image} />
        <Text style={styles.text} numberOfLines={1}>
          {this.props.item.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    alignItems: 'center',
    width: 80,
    marginLeft: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
    borderWidth: 2,
  },
  text: { marginTop: 10, fontWeight: 'bold' },
});
