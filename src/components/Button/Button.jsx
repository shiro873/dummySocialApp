import { StyleSheet, View, Pressable as CustomButton } from 'react-native';
import React from 'react';

import Text from '../Text/Text';
import { colors } from '../../theme/colors';
import { sizes } from '../../theme/sizes';

const Button = ({
  children,
  preset,
  customStyle,
  customDisabledStyle,
  customBtnTextStyle,
  onPress,
  disabled = false,
}) => {
  return (
    <CustomButton
      style={
        !disabled
          ? [styles.defaultContainer, customStyle]
          : [styles.disabledContainer, customDisabledStyle]
      }
      onPress={onPress}
      disabled={disabled}>
      <Text
        centered
        customStyle={[styles.defaultText, customBtnTextStyle]}
        preset="white">
        {children}
      </Text>
    </CustomButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  disabledContainer: {
    alignSelf: 'center',
    backgroundColor: colors.disabled,
  },
  defaultContainer: {
    height: 40,
    width: '100%',
    maxWidth: 300,
    borderRadius: sizes.radius.border_sm3,
    backgroundColor: colors.dark_blue
  },
  defaultText: {
    fontFamily: 'DMSans-Bold',
    fontSize: 14,
    paddingVertical: sizes.spacing.sm_1,
    lineHeight: 23,
  },
});
