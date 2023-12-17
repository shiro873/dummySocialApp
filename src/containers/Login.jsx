import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// UI Components
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Button,
    Pressable
} from "react-native";
import Input from "../components/Input/Input";
import RootView from "../components/RootView";
// Style constans
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
    // const onAuthStateChanged = (user) => {
    //     setUser(user);
    //     console.log('user called', user);
    //     if (user) {
    //         dispatch(loginUser({
    //             email: user?.email,
    //             uid: user?.uid
    //         }));
    //         navigate('HomeStack');
    //     }
    // }

    // useEffect(() => {
    //     // signOut();
    //     let subscriber = subscribeAuthState(onAuthStateChanged);
    //     return subscriber;
    // }, []);


    const onLoginPress = () => signInWithEmailAndPassword('ridwanshuvro111@gmail.com', 'Asdf!@34');
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
                <Button
                    buttonStyle={styles.loginButton}
                    onPress={() => onLoginPress()}
                    title="Login"
                />
                <Pressable onPress={() => navigate('Register')}>
                    <Text>Create Account!</Text>
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
        alignSelf: 'center'
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