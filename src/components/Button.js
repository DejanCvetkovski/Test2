import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default ButtonMain = ({onPress, style, title, titleStyle}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={style}>
        <Text style={titleStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
