/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Item from '../components/itemList';
export default class HomeScreen extends Component {
  randomColor = () => {
    let index = Math.floor(Math.random() * dataColor.length);

    return dataColor[index];
  };

  renderListItem = () => {
    return (
      <View
        style={
          {
            // width: '90%',
          }
        }>
        {dataItem.map((item, index) => {
          return <Item item={item} key={index} color={this.randomColor()} />;
        })}
      </View>
    );
  };
  render() {
    console.log(this.randomColor());
    return (
      <View style={styles.constainer}>
        <SafeAreaView />
        <ScrollView style={{ paddingHorizontal: 10 }}>
          {this.renderListItem()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    // flex: 1,
    // alignItems: 'center',
  },
});

const dataItem = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const dataColor = ['#ff0000', '#ffbf00', '#0040ff', '#00ff00', '#ff8000'];
