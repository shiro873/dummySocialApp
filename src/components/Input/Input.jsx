import { StyleSheet, Text, View } from 'react-native';
import { Input as RNInput } from '@rneui/base';
import React from 'react';
import {
    containerPresets,
    inputContainerPresets,
    inputStylePresets,
} from './Input.preset';
import { colors } from '../../theme/colors';
import { sizes } from '../../theme/sizes';

const Input = ({
    preset = 'default',
    disabled = false,
    onChangeText,
    onBlur,
    secureTextEntry = false,
    label,
    width,
    placeholder,
    customInputStyles,
    customContainerStyles,
    rightIcon,
    errorMessage,
    value,
    renderErrorMessage,
    customLabelStyles,
    customInputContainerStyles,
    customDisabledContainerStyle,
    keyboardType,
    multiline = false,
    editable,
    inputMode,
    onEndEditing,
}) => {
    const containerStyle = containerPresets[preset];
    const inputContainerStyle = inputContainerPresets[preset];
    const inputStyle = inputStylePresets[preset];

    return (
        <RNInput
            onChangeText={onChangeText}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
            containerStyle={[width, customContainerStyles, containerStyle]}
            label={label}
            labelStyle={[
                preset === 'auth'
                    ? containerPresets.label_auth
                    : containerPresets.label_default,
                ,
                customLabelStyles,
            ]}
            value={value}
            inputContainerStyle={[
                disabled === true
                    ? [styles.disabledInputContainer, customDisabledContainerStyle]
                    : inputContainerStyle,
                customInputContainerStyles,
            ]}
            inputStyle={[
                disabled === true ? styles.disabledInput : customInputStyles,
                inputStyle,
            ]}
            placeholder={placeholder ? placeholder : null}
            // labelProps={{}}
            rightIcon={rightIcon ? rightIcon : null}
            rightIconContainerStyle={{}}
            errorMessage={errorMessage}
            errorStyle={{ color: 'red' }}
            errorProps={{}}
            multiline={multiline}
            renderErrorMessage
            disabled={disabled}
            editable={editable}
            keyboardType={keyboardType}
            inputMode={inputMode}
            onEndEditing={onEndEditing}
        // disabledInputStyle={styles.disabledInput}
        />
    );
};

export default Input;

const styles = StyleSheet.create({
    disabledInput: {
        flex: 1,
        backgroundColor: 'rgba(238, 238, 238, 1)',
        color: 'rgba(123, 133, 143, 1)',
    },
    disabledInputContainer: {
        backgroundColor: 'rgba(238, 238, 238, 1)',
        borderWidth: 1,
        borderColor: colors.gray_200,
        borderRadius: sizes.radius.border_sm3,
        paddingLeft: sizes.spacing.sm_4,
    },
    disabledInput: {
        fontSize: 14,
        fontFamily: 'DMSans-Regular',
        lineHeight: 24,
        color: 'rgba(123, 133, 143, 1)',
        paddingVertical: 9,
    },
});
