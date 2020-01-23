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
  switch (action.type) {
    case 'CHANGE_RED':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'CHANGE_GREEN':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'CHANGE_BLUE':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    case 'RESET':
      return initialColorsState;
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
      type: colorToChange,
      payload: amount
    };
  };

  return (
    <View>
      <ColorPanel
        color='Red'
        increaseComponent={() => dispatch(dispatcher('CHANGE_RED', COLOR_VALUE))}
        decreaseComponent={() => dispatch(dispatcher('CHANGE_RED', -1 * COLOR_VALUE))}
        increaseComponentLarge={() => dispatch(dispatcher('CHANGE_RED', COLOR_VALUE_LARGE))}
        decreaseComponentLarge={() => dispatch(dispatcher('CHANGE_RED', -1 * COLOR_VALUE_LARGE))}
        value={state.red}
      />
      <ColorPanel
        color='Green'
        increaseComponent={() => dispatch(dispatcher('CHANGE_GREEN', COLOR_VALUE))}
        decreaseComponent={() => dispatch(dispatcher('CHANGE_GREEN', -1 * COLOR_VALUE))}
        increaseComponentLarge={() => dispatch(dispatcher('CHANGE_GREEN', COLOR_VALUE_LARGE))}
        decreaseComponentLarge={() => dispatch(dispatcher('CHANGE_GREEN', -1 * COLOR_VALUE_LARGE))}
        value={state.green}
      />
      <ColorPanel
        color='Blue'
        increaseComponent={() => dispatch(dispatcher('CHANGE_BLUE', COLOR_VALUE))}
        decreaseComponent={() => dispatch(dispatcher('CHANGE_BLUE', -1 * COLOR_VALUE))}
        increaseComponentLarge={() => dispatch(dispatcher('CHANGE_BLUE', COLOR_VALUE_LARGE))}
        decreaseComponentLarge={() => dispatch(dispatcher('CHANGE_BLUE', -1 * COLOR_VALUE_LARGE))}
        value={state.blue}
      />
      <View
        style={{
          ...styles.colorShow,
          backgroundColor: renderColor({ red: state.red, green: state.green, blue: state.blue })
        }}
      />
      <Button title='RESET' onPress={() => dispatch(dispatcher('RESET'))} />
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
