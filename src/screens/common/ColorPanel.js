import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ColorPanel = props => {
  return (
    <View style={styles.panel}>
      <TouchableOpacity style={styles.button} onPress={() => props.decreaseComponent()}>
        <Text style={{ color: '#ffffff' }}>-</Text>
      </TouchableOpacity>
      <Text style={{ color: '#222222', marginHorizontal: 50 }}>
        {props.color}: {props.value}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => props.increaseComponent()}>
        <Text style={{ color: '#ffffff' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    height: 100,
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: '#a2a2a2',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#222222',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
});

export default ColorPanel;
