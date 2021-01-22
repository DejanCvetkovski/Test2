import React from 'react';
import {View} from 'react-native';

export default FloatingView = ({style}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        ...style,
      }}></View>
  );
};
