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

const RootView = ({children}) => {
    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <Pressable onPress={Keyboard.dismiss} style={styles.screenTouchView}>
                {children}
            </Pressable>
        </KeyboardAvoidingView>
    )
}

export default RootView;