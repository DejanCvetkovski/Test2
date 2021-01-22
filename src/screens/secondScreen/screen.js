import React, {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import styles from './style';
import ButtonMain from '../../components/Button';
import {useSelector} from 'react-redux';
import FloatingView from '../../components/FloatingView';

export default SecondScreen = ({navigation}) => {
  const state = useSelector((state) => state.user);

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Second Screen</Text>
      </View>
      <View style={styles.ContentContainer}>
        <Text style={styles.titleCenter}>name: {state.name}</Text>
        <Text style={styles.titleCenter}>street: {state.street}</Text>
        <Text style={styles.titleCenter}>email: {state.email}</Text>
      </View>
      <View style={[styles.buttonContainer, {justifyContent: 'space-evenly'}]}>
        <ButtonMain
          style={styles.button}
          title={'Go To Tesla'}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('TeslaOne')}
        />
        <ButtonMain
          style={styles.button}
          title={'Go Back'}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};
