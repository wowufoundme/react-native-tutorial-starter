import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState('Length must be greater than 5 characters');
  const checkName = text => {
    if (text.length <= 5) {
      setErrors('Length must be greater than 5 characters');
    } else {
      setErrors('Good length');
    }
  };
  const renderError = () => {
    if (setLength) {
      return <Text>Length must be > 5</Text>;
    }
    return <Text>Good Length</Text>;
  };
  return (
    <View style={{ padding: 15 }}>
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
        value={name}
        onChangeText={text => {
          setName(text);
          checkName(text);
        }}
      />
      <Text>{errors}</Text>
      <Text>Your name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    borderColor: '#222222',
    borderWidth: 1
  }
});

export default TextScreen;
