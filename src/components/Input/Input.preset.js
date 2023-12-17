import {colors} from '../../theme/colors';
import {sizes} from '../../theme/sizes';

const labelStylesDefault = {
  // marginBottom: 12,

  color: colors.white,
  fontWeight: 400,
};

export const containerPresets = {
  label_default: {
    ...labelStylesDefault,
    // fontFamily: 'DMSans-Regular',
    color: colors.gray_label,
    fontSize: 10,
    lineHeight: 20,
  },
  label_auth: {
    ...labelStylesDefault,
    color: colors.white,
    fontSize: 12,
    lineHeight: 20,
  },
  auth: {
    width: 300,
    paddingHorizontal: 0,
    marginBottom: sizes.spacing.sm_2,
    lineHeight: 20,
  },
  large: {
    // ...labelStylesDefault,
  },
  default:{
    width: '100%',
    maxWidth: 320
  }
};

export const inputContainerPresets = {
  default: {
    borderWidth: 1,
    borderColor: colors.gray_200,
    borderRadius: sizes.radius.border_sm2,
    paddingLeft: sizes.spacing.sm_3,
    backgroundColor: colors.white,
    height: 40,
    maxWidth: 320,
    justifyContent: 'center',
    alignItems: 'center',
    alignContents: 'center'
  },
  auth: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    maxHeight: 35,
    minHeight: 10,
  },
  large: {
    borderWidth: 1,
    borderColor: colors.gray_200,
    borderRadius: sizes.radius.border_m,
    paddingLeft: sizes.spacing.sm_4,
    backgroundColor: colors.white,
    height: 48,
  },
};

export const inputStylePresets = {
  default: {
    fontSize: 14,
    // fontFamily: 'DMSans-Regular',
    lineHeight: 24,
    color: colors.black,
    marginBottom: 10,
    alignSelf: 'center'
  },
  auth: {
    fontSize: 12,
    paddingLeft: 0,
    alignSelf: 'center',
    marginBottom: 10,
  },
  large: {
    fontSize: 14,
    // fontFamily: 'DMSans-Regular',
    paddingLeft: 0,
    marginBottom: 10,
  },
};
