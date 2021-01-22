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
  listContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 18,
  },
  buttonContainer: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCenter: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: 'green',
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
  card: {
    marginTop: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 16,
  },
});
