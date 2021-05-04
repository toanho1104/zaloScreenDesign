/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import ItemSearch from '../components/ItmeListSearch';
import ItemFriend from '../components/ItemListFriend';
import { images } from '../styles/images';

export default class HomeScreen extends Component {
  renderListItemSearch = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ height: 137 }}
        horizontal
        data={dataUser}
        keyExtractor={item => `lis${item.id}`}
        renderItem={({ item, index }) => {
          return <ItemSearch item={item} />;
        }}
      />
    );
  };

  renderListItemFr = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 10 }}
        data={dataUser}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item, index }) => {
          return <ItemFriend item={item} />;
        }}
      />
    );
  };

  render() {
    const TitleList = ({ title, icon }) => {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginTop: 12,
          }}>
          <Image
            source={icon}
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginVertical: 10,
              marginLeft: 8,
            }}>
            {title}
          </Text>
        </View>
      );
    };
    return (
      <View style={styles.constainer}>
        <SafeAreaView />
        <TitleList title="Danh sách tìm kiếm gần đây" icon={images.search} />
        {this.renderListItemSearch()}
        <TitleList title="Gợi ý kết bạn" icon={images.friend} />
        {this.renderListItemFr()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    // alignItems: 'center',
  },
});

const dataUser = [
  {
    id: 1,
    name: 'Black Widdow',
    imageUrl: images.blackwidow,
    mutualFriends: 3,
  },
  {
    id: 2,
    name: 'Captain',
    imageUrl: images.captain,
    mutualFriends: 9,
  },
  {
    id: 3,
    name: 'Flash',
    imageUrl: images.flash,
    mutualFriends: 34,
  },
  {
    id: 4,
    name: 'Spiderman',
    imageUrl: images.spiderman,
    mutualFriends: 4,
  },
  {
    id: 5,
    name: 'WonderWoman',
    imageUrl: images.wonderwoman,
    mutualFriends: 4,
  },
  {
    id: 6,
    name: 'Spiderman',
    imageUrl: images.spiderman,
    mutualFriends: 4,
  },
  {
    id: 7,
    name: 'Flash',
    imageUrl: images.flash,
    mutualFriends: 34,
  },
];
