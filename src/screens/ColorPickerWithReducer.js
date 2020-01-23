import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorPanel from './common/ColorPanel';

const COLOR_VALUE = 1;
const COLOR_VALUE_LARGE = 10;

const initialColorsState = {
  red: 0,
  green: 0,
  blue: 0
};

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.changeValue > 255 || state.red + action.changeValue < 0
        ? state
        : { ...state, red: state.red + action.changeValue };
    case 'green':
      return state.green + action.changeValue > 255 || state.green + action.changeValue < 0
        ? state
        : { ...state, green: state.green + action.changeValue };
    case 'blue':
      return state.blue + action.changeValue > 255 || state.blue + action.changeValue < 0
        ? state
        : { ...state, blue: state.blue + action.changeValue };
    default:
      return state;
  }
};

const renderColor = obj => {
  return `rgb(${obj.red}, ${obj.green}, ${obj.blue})`;
};

const ColorPicker = () => {
  const [state, dispatch] = useReducer(reducer, initialColorsState);

  const dispatcher = (colorToChange, amount) => {
    return {
      colorToChange: colorToChange,
      changeValue: amount
    };
  };

  return (
    <View>
      <ColorPanel
        color='Red'
        increaseComponent={() => dispatch(dispatcher('red', COLOR_VALUE))}
        decreaseComponent={() => dispatch(dispatcher('red', -1 * COLOR_VALUE))}
        increaseComponentLarge={() => dispatch(dispatcher('red', COLOR_VALUE_LARGE))}
        decreaseComponentLarge={() => dispatch(dispatcher('red', -1 * COLOR_VALUE_LARGE))}
        value={state.red}
      />
      <ColorPanel
        color='Green'
        increaseComponent={() => dispatch(dispatcher('green', COLOR_VALUE))}
        decreaseComponent={() => dispatch(dispatcher('green', -1 * COLOR_VALUE))}
        increaseComponentLarge={() => dispatch(dispatcher('green', COLOR_VALUE_LARGE))}
        decreaseComponentLarge={() => dispatch(dispatcher('green', -1 * COLOR_VALUE_LARGE))}
        value={state.green}
      />
      <ColorPanel
        color='Blue'
        increaseComponent={() => dispatch(dispatcher('blue', COLOR_VALUE))}
        decreaseComponent={() => dispatch(dispatcher('blue', -1 * COLOR_VALUE))}
        increaseComponentLarge={() => dispatch(dispatcher('blue', COLOR_VALUE_LARGE))}
        decreaseComponentLarge={() => dispatch(dispatcher('green', -1 * COLOR_VALUE_LARGE))}
        value={state.blue}
      />
      <View
        style={{
          ...styles.colorShow,
          backgroundColor: renderColor({ red: state.red, green: state.green, blue: state.blue })
        }}
      />
      {/* <Button
        title='RESET'
        onPress={() => {
          dispatch(dispatcher('red',))
        }}
      /> */}
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
