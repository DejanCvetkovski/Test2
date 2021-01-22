import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    height: Dimensions.get('window').height,
    width: '100%',
  },
  titlesContainer: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  subTitleCta: {
    textDecorationLine: 'underline',
  },
});
export default styles;
