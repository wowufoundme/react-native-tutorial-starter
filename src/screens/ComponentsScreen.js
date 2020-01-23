import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => (
  <View>
    <Text style={styles.textStyle}>This is the components screen</Text>
  </View>
);

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
