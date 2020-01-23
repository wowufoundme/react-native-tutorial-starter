import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import ImageDetail from './common/ImageDetail';

const friends = require('../../assets/data.json');

const ListScreen = () => (
  <View style={{ backgroundColor: '#199fb1' }}>
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => (
        <View>
          <ImageDetail item={item} />
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    marginHorizontal: 15
  }
});

export default ListScreen;
