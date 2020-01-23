import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorPanel from './common/ColorPanel';

const renderColor = obj => {
  console.log(`rgb(${obj.red}, ${obj.green}, ${obj.blue})`);
  return `rgb(${obj.red}, ${obj.green}, ${obj.blue})`;
};

const COLOR_VALUE = 10;

const ColorPicker = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(255);
  return (
    <View>
      <ColorPanel
        color='Red'
        increaseComponent={() => setRed(red + COLOR_VALUE)}
        decreaseComponent={() => setRed(red - COLOR_VALUE)}
        value={red}
      />
      <ColorPanel
        color='Green'
        increaseComponent={() => setGreen(green + COLOR_VALUE)}
        decreaseComponent={() => setGreen(green - COLOR_VALUE)}
        value={green}
      />
      <ColorPanel
        color='Blue'
        increaseComponent={() => setBlue(blue + COLOR_VALUE)}
        decreaseComponent={() => setBlue(blue - COLOR_VALUE)}
        value={blue}
      />
      <View style={{ ...styles.colorShow, backgroundColor: `${renderColor({ red, green, blue })}` }} />
    </View>
  );
};

const styles = StyleSheet.create({
  colorShow: {
    backgroundColor: '#000000',
    height: 100,
    marginHorizontal: 10
  }
});

export default ColorPicker;
