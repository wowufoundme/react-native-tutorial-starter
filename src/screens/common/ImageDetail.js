import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ImageScreen = props => {
  const { item } = props;
  const [workhrs, modifyWork] = useState(item.work_hours);
  const changeWork = modify => {
    if (modify === 'increment') {
      modifyWork(workhrs + 1);
    } else {
      modifyWork(workhrs - 1);
    }
  };
  return (
    <View style={styles.block}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: item.avatar }} style={styles.personIcon} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.personInfo}>
          {item.first_name} {item.last_name}
        </Text>
        <Text style={styles.emailInfo}>{item.email}</Text>
        <View style={styles.workContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => changeWork('decrement')}>
            <Text style={styles.buttonTitle}>-</Text>
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 8 }}>{workhrs}</Text>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => changeWork('increment')}>
            <Text style={styles.buttonTitle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#ffffff',
    marginVertical: 10,
    marginHorizontal: 15,
    height: 90,
    flexDirection: 'row',
    padding: 15,
    borderRadius: 6,
    elevation: 10
  },
  personIcon: {
    height: 60,
    width: 60
  },
  infoContainer: {
    justifyContent: 'center',
    paddingLeft: 10
  },
  personInfo: {
    color: '#121212',
    fontSize: 16
  },
  emailInfo: {
    color: '#888888',
    fontSize: 12
  },
  buttonStyle: {
    backgroundColor: '#0d5c75',
    marginTop: 4,
    alignItems: 'center',
    paddingVertical: 4,
    width: 30,
    borderRadius: 2
  },
  buttonTitle: {
    color: '#ffffff'
  },
  workContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default ImageScreen;
