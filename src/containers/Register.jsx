import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { navigate } from '../services/navigation-service';
import {
    createUserWithEmailAndPassword,
    subscribeAuthState
} from '../services/firebase-service';
import {
    loginUser
} from '../redux/reducers/profileReducer';

const Register = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordValidity, setPasswordValidity] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [user, setUser] = useState({});

    // Handle user state changes
    const onAuthStateChanged = (user) => {
        setUser(user);
        console.log('user called', user);
        dispatch(loginUser({
            email: email,
            username: username
        }));
        navigate('HomeStack');
    }

    useEffect(() => {
        let subscriber = subscribeAuthState(onAuthStateChanged);
        return subscriber;
    }, []);

    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    }

    const validatePassword = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordValidity('Please enter a valid password');
            setValidPassword(false);
        } else {
            setPasswordValidity('');
            setValidPassword(true);
        }
    }

    const validateReEnter = () => password === reEnterPassword ? setPasswordError(true) : setPasswordError(false);

    const onRegisterPress = () => {
        // if (
        //     passwordError === '' ||
        //     emailError === '' ||
        //     !validPassword
        // ) {
        //     return;
        // }

        const result = createUserWithEmailAndPassword(email, password); //'ridwanshuvro111@gmail.com', 'Asdf!@34'
    }

    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <Pressable onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.logoText}>Register</Text>
                        <TextInput
                            placeholder="Username"
                            placeholderColor="#c4c3cb"
                            value={username}
                            onChangeText={setUsername}
                            style={styles.loginFormTextInput}
                        />
                        <TextInput
                            placeholder="Email"
                            placeholderColor="#c4c3cb"
                            value={email}
                            onChangeText={setEmail}
                            onEndEditing={validateEmail}
                            style={styles.loginFormTextInput}
                        />
                        <Text>
                            {emailError}
                        </Text>
                        <TextInput
                            placeholder="Password"
                            placeholderColor="#c4c3cb"
                            value={password}
                            onChangeText={setPassword}
                            onEndEditing={validatePassword}
                            style={styles.loginFormTextInput}
                            secureTextEntry={true}
                        />
                        <Text>
                            {passwordValidity}
                        </Text>
                        <TextInput
                            placeholder="Re Enter Password"
                            placeholderColor="#c4c3cb"
                            value={reEnterPassword}
                            onChangeText={setReEnterPassword}
                            onEndEditing={validateReEnter}
                            style={styles.loginFormTextInput}
                            secureTextEntry={true}
                        />
                        <Text>
                            {passwordError}
                        </Text>
                        <Button
                            buttonStyle={styles.loginButton}
                            onPress={() => onRegisterPress()}
                            title="Login"
                        />
                        <Pressable onPress={() => navigate('Login')}>
                            <Text>Login</Text>
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
        alignItems: "center"
    },
    loginScreenContainer: {
        flex: 1,
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
    },
    loginFormTextInput: {
        height: 43,
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
        width: 350,
        alignItems: "center"
    }
});

export default Register;