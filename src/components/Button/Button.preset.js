import {colors} from '../../theme/colors';
import {screenWidth} from '../../theme/dimensions';
import {sizes} from '../../theme/sizes';

const defaultPresets = {
  alignSelf: 'center',
};

export const presets = {
  default: {
    ...defaultPresets,
    width: '100%',
    maxWidth: 320
  },
  auth_Button: {
    ...defaultPresets,
    width: 298,
    paddingVertical: sizes.spacing.sm_2,
    backgroundColor: colors.black,
    borderRadius: sizes.radius.border_sm,
    marginBottom: sizes.spacing.sm_5,
  },
  auth_button_alt: {
    ...defaultPresets,
    width: 158,
    backgroundColor: colors.primary_dark,
    paddingVertical: sizes.spacing.sm_2,
    borderRadius: sizes.radius.border_sm,
    marginTop: sizes.spacing.med_2,
  },
  full_width_btn: {
    ...defaultPresets,
    width: screenWidth,
  },
  popup_no: {
    width: 60,
    padding: sizes.spacing.sm_2,
    backgroundColor: colors.primary_dark,
    borderRadius: sizes.radius.border_sm2,
  },
  popup_yes: {
    width: 60,
    padding: sizes.spacing.sm_2,
    backgroundColor: colors.white,
    borderRadius: sizes.radius.border_sm2,
    borderWidth: 1,
    borderColor: colors.blue_400,
  },
  success_btn: {
    paddingVertical: sizes.spacing.sm_2,
    backgroundColor: colors.success,
    borderRadius: sizes.radius.border_sm,
  },
  reject_btn: {
    paddingVertical: sizes.spacing.sm_2,
    backgroundColor: colors.warning,
    borderRadius: sizes.radius.border_sm,
  },
};

// export const disabledPresets = {
//   disabled: {
//     ...defaultPresets,
//     backgroundColor: colors.disabled,
//   },
// };

export const btnTextPresets = {
  default: {
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
    paddingVertical: sizes.spacing.sm_1,
    lineHeight: 23,
  },

  full_width_btn: {
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
    paddingVertical: sizes.spacing.sm_2,
    lineHeight: 24,
  },
};
