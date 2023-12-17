import { Text as CustomText, StyleSheet } from 'react-native';
import React from 'react';
import { presets } from './Text.preset';

export default function Text({
  children,
  customStyle,
  preset = 'body',
  centered,
  numberOfLines,
}) {
  const textStyle = presets[preset];
  return (
    <CustomText
      numberOfLines={numberOfLines}
      style={[textStyle, centered && styles.centered, customStyle]}>
      {children}
    </CustomText>
  );
}

const styles = StyleSheet.create({
  centered: {
    textAlign: 'center',
  },
});
