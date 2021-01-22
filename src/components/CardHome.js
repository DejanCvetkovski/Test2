import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Card = ({title, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
