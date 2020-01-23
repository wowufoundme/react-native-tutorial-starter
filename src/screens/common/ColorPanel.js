import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ColorPanel = props => {
  return (
    <View style={styles.panel}>
      <TouchableOpacity style={styles.button} onPress={() => props.decreaseComponentLarge()}>
        <Text style={{ color: '#ffffff' }}>-10</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.decreaseComponent()}>
        <Text style={{ color: '#ffffff' }}>-1</Text>
      </TouchableOpacity>
      <Text style={{ color: '#222222', marginHorizontal: 20 }}>
        {props.color}: {props.value}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => props.increaseComponent()}>
        <Text style={{ color: '#ffffff' }}>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.increaseComponentLarge()}>
        <Text style={{ color: '#ffffff' }}>+10</Text>
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
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 12
  }
});

export default ColorPanel;
