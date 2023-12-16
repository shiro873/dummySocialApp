import React from "react";
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
import * as NavigationService from '../navigator/navigation-service';

const Login = () => {
    const onLoginPress = () => {
        NavigationService.navigate('HomeStack')
    }
    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <Pressable onPress={Keyboard.dismiss} style={styles.screenTouchView}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.logoText}>Login</Text>
                        <TextInput
                            placeholder="Username"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <TextInput
                            placeholder="Password"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                            secureTextEntry={true}
                        />
                        <Button
                            buttonStyle={styles.loginButton}
                            onPress={() => onLoginPress()}
                            title="Login"
                        />
                        <Pressable onPress={() => NavigationService.navigate('Register')}>
                            <Text>Create Account!</Text>
                        </Pressable>
                    </View>

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

export default Login;