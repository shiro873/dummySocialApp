import { colors } from '../theme/colors';

const fontSizes = {
  tiny: 10,
  small: 12,
  body: 14,
  header_1: 18,
  header_2: 16,
  header_xl: 24,
  btn: 18,
};

export const bodyText = {
  fontFamily: 'RobotoCondensed-VariableFont_wght',
  fontWeight: 400,
  fontSize: fontSizes.body,
  lineHeight: 18.5,
};
export const bodyText_500 = {
  fontFamily: 'RobotoCondensed-VariableFont_wght',
  fontWeight: 500,
  fontSize: fontSizes.body,
};

export const mediumText = {
  fontFamily: 'RobotoCondensed-VariableFont_wght',
};

export const boldText = {
  fontFamily: 'RobotoCondensed-VariableFont_wght',
};

export const presets = {
  header: {
    ...boldText,
    fontSize: fontSizes.header_1,
    lineHeight: 24,
    color: colors.gray_800,
  },
  body: {
    ...bodyText,
    color: colors.black,
  },
  small: {
    fontFamily: 'RobotoCondensed-VariableFont_wght',
    fontWeight: 400,
    fontSize: fontSizes.small,
  },
  tiny: {
    fontFamily: 'RobotoCondensed-VariableFont_wght',
    fontWeight: 400,
    fontSize: fontSizes.tiny,
  },
  btn_bold: {
    color: colors.white,
    fontFamily: 'RobotoCondensed-VariableFont_wght',
    fontSize: fontSizes.header_1,
  },
  white: {
    ...bodyText,
    color: colors.white,
  },
  blue_400: {
    ...bodyText,
    color: colors.blue_400,
  },
  underlined: {
    ...bodyText,
    color: colors.white,
    textDecorationLine: 'underline',
  },
  link: {
    ...bodyText,
    color: colors.blue_300,
  },
  powered_by: {
    ...bodyText_500,
    color: colors.disabled_alternate,
  },
  error_msg: {
    fontFamily: 'RobotoCondensed-VariableFont_wght',
    fontSize: fontSizes.tiny,
    color: colors.error,
  },

  hr_policy: {
    fontFamily: 'RobotoCondensed-VariableFont_wght',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 20,
    color: colors.black,
  },
  dashboard_icon_title: {
    ...mediumText,
    fontSize: fontSizes.tiny,
    lineHeight: 10,
    color: colors.black,
  },
};
