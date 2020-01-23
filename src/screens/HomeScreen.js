import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = props => {
  const { navigate } = props.navigation;

  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button title='Go to components screen' onPress={() => navigate('Components')} />
      <Button title='Go to Lists screen' onPress={() => navigate('List')} />
      <Button title='Go to Image screen' onPress={() => navigate('Images')} />
      {/* <TouchableOpacity onPress={() => navigate('List')}>
        <Text>Go to List Screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default HomeScreen;
