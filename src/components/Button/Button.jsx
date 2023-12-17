import {StyleSheet, View, Pressable as CustomButton} from 'react-native';
import React from 'react';

import Text from '../Text/Text';
import {presets, btnTextPresets} from './Button.preset';
import {colors} from '../../theme/colors';

const Button = ({
  children,
  preset,
  customStyle,
  customDisabledStyle,
  customBtnTextStyle,
  onPress,
  disabled = false,
}) => {
  const btnStyle = presets[preset];
  const btnTextStyle = btnTextPresets[preset];

  return (
    <CustomButton
      style={
        !disabled
          ? [btnStyle, customStyle]
          : [styles.disabledStyle, customDisabledStyle]
      }
      onPress={onPress}
      disabled={disabled}>
      <Text
        centered
        customStyle={[btnTextStyle, customBtnTextStyle]}
        preset="white">
        {children}
      </Text>
    </CustomButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  disabledStyle: {
    alignSelf: 'center',
    backgroundColor: colors.disabled,
  },
});
