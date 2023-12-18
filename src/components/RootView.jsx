import React, { useState, useEffect } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    View,
    StyleSheet,
    Pressable,
    ScrollView,
    StatusBar
} from "react-native";
import { sizes } from "../theme/sizes";

const RootView = ({
    children,
}) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
                styles.safeAreaContainer,
            ]}>
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                <Pressable onPress={Keyboard.dismiss} style={styles.screenTouchView}>
                    <StatusBar barStyle={'dark-content'} />
                    {children}
                </Pressable>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        width: '100%',
        // height: '100%',
        flexDirection: 'column'
    },
    scrollViewContainer: {
        flex: 1
    },
    screenTouchView: {
        flex: 1,
        width: '100%',
        // height: '100%',
        justifyContent: 'center',
    },
    childContainer: {
        flex: 1,
        // minHeight: '100%',
    },
    container: {
        flex: 1,
        width: '100%',
    },
    safeAreaContainer: {
        width: '100%',
        flexGrow: 1,
    },
});

export default RootView;