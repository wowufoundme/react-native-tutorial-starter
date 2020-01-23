import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from './common/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text>This is the images screen</Text>
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  );
};

export default ImageScreen;
