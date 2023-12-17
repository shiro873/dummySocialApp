import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// variables
import { colors } from '../../theme/colors';
import { sizes } from '../../theme/sizes';

const Card = ({ children, customCardStyle }) => {
  return (
    <View style={[styles.cardContainer, customCardStyle]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    elevation: 6,
    shadowColor: colors.gray_400,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: sizes.spacing.med_2,
    paddingVertical: sizes.spacing.sm_5,
    borderRadius: sizes.radius.border_sm3,
    maxWidth: 320,
    width: '100%'
  }
});
