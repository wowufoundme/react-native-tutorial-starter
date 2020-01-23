import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorPanel from './common/ColorPanel';

const COLOR_VALUE = 1;
const COLOR_VALUE_LARGE = 10;

const renderColor = obj => {
  return `rgb(${obj.red}, ${obj.green}, ${obj.blue})`;
};

const ColorPicker = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(255);

  const setColor = (color, change) => {
    if (color === 'red') {
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        console.log(red, change);
        setRed(red + change);
      }
    }
    if (color === 'green') {
      if (green + change > 255 || green + change < 0) {
        return;
      } else {
        setGreen(green + change);
      }
    }
    if (color === 'blue') {
      if (blue + change > 255 || blue + change < 0) {
        return;
      } else {
        setBlue(blue + change);
      }
    }
  };

  return (
    <View>
      <ColorPanel
        color='Red'
        increaseComponent={() => setColor('red', COLOR_VALUE)}
        decreaseComponent={() => setColor('red', -1 * COLOR_VALUE)}
        increaseComponentLarge={() => setColor('red', COLOR_VALUE_LARGE)}
        decreaseComponentLarge={() => setColor('red', -1 * COLOR_VALUE_LARGE)}
        value={red}
      />
      <ColorPanel
        color='Green'
        increaseComponent={() => setColor('green', COLOR_VALUE)}
        decreaseComponent={() => setColor('green', -1 * COLOR_VALUE)}
        increaseComponentLarge={() => setColor('green', COLOR_VALUE_LARGE)}
        decreaseComponentLarge={() => setColor('green', -1 * COLOR_VALUE_LARGE)}
        value={green}
      />
      <ColorPanel
        color='Blue'
        increaseComponent={() => setColor('blue', COLOR_VALUE)}
        decreaseComponent={() => setColor('blue', -1 * COLOR_VALUE)}
        increaseComponentLarge={() => setColor('blue', COLOR_VALUE_LARGE)}
        decreaseComponentLarge={() => setColor('blue', -1 * COLOR_VALUE_LARGE)}
        value={blue}
      />
      <View style={{ ...styles.colorShow, backgroundColor: `${renderColor({ red, green, blue })}` }} />
      <Button
        title='RESET'
        onPress={() => {
          1;
          setRed(0);
          setBlue(0);
          setGreen(0);
        }}
      />
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
