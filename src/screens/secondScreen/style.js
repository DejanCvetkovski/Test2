import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  },
  headerContainer: {
    backgroundColor: 'coral',
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  ContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  buttonContainer: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleCenter: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
