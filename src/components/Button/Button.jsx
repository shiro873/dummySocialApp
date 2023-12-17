import {StyleSheet, Text, View, Pressable as SAButton} from 'react-native';
import React from 'react';

import SAText from '../Text';
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
    <SAButton
      style={
        !disabled
          ? [btnStyle, customStyle]
          : [styles.disabledStyle, customDisabledStyle]
      }
      onPress={onPress}
      disabled={disabled}>
      <SAText
        centered
        customStyle={[btnTextStyle, customBtnTextStyle]}
        preset="white">
        {children}
      </SAText>
    </SAButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  disabledStyle: {
    alignSelf: 'center',
    backgroundColor: colors.disabled,
  },
});
