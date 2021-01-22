import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton/';
import {useTranslation} from 'react-i18next';
import styles from './style';
import i18next from 'i18next';

const CarItem = (props) => {
  const {t} = useTranslation();
  const {name, tagLine, tagLineCta, image} = props.car;

  const changeLanguage = () => {
    if (i18next.language === 'en') {
      i18next.changeLanguage('swe');
    } else {
      i18next.changeLanguage('en');
    }
  };

  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />

      <View style={styles.titlesContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine} <Text style={styles.subTitleCta}>{tagLineCta}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          title={t('general.custom')}
          onPress={() => console.warn('Custom order was pressed')}
        />
        <StyledButton
          type="secondary"
          title={'Existing Inventory'}
          onPress={() => changeLanguage()}
        />
      </View>
    </View>
  );
};

export default CarItem;
