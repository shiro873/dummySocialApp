import React, { useEffect, useState } from "react";

// UI components
import {
    Keyboard,
    KeyboardAvoidingView,
    TextInput,
    View,
    StyleSheet,
    Pressable
} from "react-native";
import Input from "../components/Input/Input";
import RootView from "../components/RootView";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";

// Style constants
import { sizes } from "../theme/sizes";

// redux
import { useDispatch, useSelector } from "react-redux";

// service
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
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordValidity, setPasswordValidity] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [user, setUser] = useState({});

    // Handle user state changes
    const onAuthStateChanged = (user) => {
        setUser(user);
        console.log('user called', user);
        if(user) {
            dispatch(loginUser({
                email: email,
                // refreshToken: user?.refreshToken,
                uid: user?.uid

            }));
            navigate('HomeStack');
        }
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
        if (
            passwordError === '' ||
            emailError === '' ||
            !validPassword
        ) {
            return;
        }

        createUserWithEmailAndPassword(email, password); //'ridwanshuvro111@gmail.com', 'Asdf!@34'
    }

    return (
        <RootView>
            <View style={styles.registerFormView}>
                <Input
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    onEndEditing={validateEmail}
                    errorMessage={emailError}
                    style={styles.loginFormTextInput}
                />
                <Input
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    onEndEditing={validatePassword}
                    secureTextEntry={true}
                />
                {
                    passwordValidity &&
                    <Text>
                        {passwordValidity}
                    </Text>
                }
                <Input
                    label="Re Enter Password"
                    value={reEnterPassword}
                    errorMessage={passwordError}
                    onChangeText={setReEnterPassword}
                    onEndEditing={validateReEnter}
                    secureTextEntry={true}
                />
                <Button preset={'auth_button'} onPress={onRegisterPress}>
                    Register
                </Button>
                <Text preset="body" customStyle={styles.signin_link}>Already have an account?</Text>
                <Pressable onPress={() => navigate('Login')}>
                    <Text preset="link">Login</Text>
                </Pressable>
            </View>
        </RootView>
    )
}

const styles = StyleSheet.create({
    registerFormView: {
        flex: 1,
        width: '100%',
        height: '100%',
        // backgroundColor: '#045',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: sizes.spacing.l
    },
    signin_link: {
        marginTop: sizes.spacing.sm_4
    }
});

export default Register;