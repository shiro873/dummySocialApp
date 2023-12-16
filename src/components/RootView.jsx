import React, { useState, useEffect } from "react";
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    StyleSheet,
    Button,
    Pressable
} from "react-native";

const RootView = ({ children }) => {
    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <Pressable onPress={Keyboard.dismiss} style={styles.screenTouchView}>
                <View style={styles.loginScreenContainer}>
                    {children}
                </View>
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        alignItems: "center",
        width: '100%',
        height: '100%',
    },
    screenTouchView: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    loginScreenContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: "center",
    },
    loginFormView: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignSelf: 'center'
    },
    loginFormTextInput: {
        height: 43,
        width: '100%',
        maxWidth: 320,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#eaeaea",
        backgroundColor: "#fafafa",
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    loginButton: {
        backgroundColor: "#3897f1",
        borderRadius: 5,
        height: 45,
        marginTop: 10,
        width: '100%',
        maxWidth: 320,
        alignItems: "center"
    }
});

export default RootView;