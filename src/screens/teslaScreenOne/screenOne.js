import React from 'react';
import {View, StyleSheet} from 'react-native';
import CarList from '../../components/CarsList';
import Header from '../../components/Header';

const TeslaOne = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default TeslaOne;
