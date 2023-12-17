import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// UI Components
import {
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
// services
import { navigate } from '../services/navigation-service';
import {
    signInWithEmailAndPassword,
    subscribeAuthState,
    signOut
} from '../services/firebase-service';
// redux
import {
    loginUser
} from '../redux/reducers/profileReducer';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});

    // Handle user state changes
    const onAuthStateChanged = (user) => {
        setUser(user);
        console.log('user called', user);
        if (user) {
            dispatch(loginUser({
                email: user?.email,
                uid: user?.uid
            }));
            setEmail('');
            setPassword('');
            navigate('HomeStack');
        }
    }

    useEffect(() => {
        let subscriber = subscribeAuthState(onAuthStateChanged);
        return subscriber;
    }, []);


    const onLoginPress = () => signInWithEmailAndPassword(email, password);
    return (
        <RootView>
            <View style={styles.loginFormView}>
                <Input
                    label={'Email'}
                    onChangeText={setEmail}
                    value={email}
                    keyboardType={'email-address'}
                />
                <Input
                    label={'Password'}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button preset={'auth_button'} onPress={onLoginPress}>
                    Login
                </Button>
                <Text preset="body" customStyle={styles.signup_link}>Don't have an account?</Text>
                <Pressable onPress={() => navigate('Register')}>
                    <Text preset="link" >Create Account!</Text>
                </Pressable>
            </View>
        </RootView>
    )
}

const styles = StyleSheet.create({
    loginFormView: {
        flex: 1,
        width: '100%',
        height: '100%',
        // backgroundColor: '#045',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: sizes.spacing.l
    },
    signup_link: {
        marginTop: sizes.spacing.sm_4
    }
});

export default Login;