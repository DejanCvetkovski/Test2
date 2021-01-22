import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Card from '../../components/CardHome';
import styles from './style';
import api from '../../services/api';
import ButtonMain from '../../components/Button';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

export default HomeScreen = ({navigation}) => {
  const [userList, setUserList] = useState();
  const dispatch = useDispatch();

  const data = async () => {
    api
      .getData()
      .then((response) => {
        setUserList(response.data);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  useEffect(() => {
    data();
  }, []);

  const HandlePress = (item) => {
    dispatch({
      type: 'user',
      payload: {
        name: item.name,
        street: item.address.street,
        email: item.email,
      },
    });
    navigation.navigate(
      'SecondScreen',
      // {
      //   title: item.name,
      //   street: item.address.street,
      //   email: item.email,
      // }
    );
  };

  const renderItem = ({item}) => (
    <Card
      style={styles.card}
      onPress={() => HandlePress(item)}
      title={item.name}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>App Title</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={userList}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonMain
          style={styles.button}
          title={'Press me'}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('SecondScreen')}
        />
      </View>
    </View>
  );
};
