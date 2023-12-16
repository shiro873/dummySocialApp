import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

export const subscribeAuthState = (onAuthStateChanged) => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
}

export const signInAnonymously = async () => {
    try {
        let authResult = await auth.signInAnonymously();
        return authResult;
    } catch (error) {
        return {
            error: error,
            success: false
        };
    }
}

export const signInWithEmailAndPassword = async (email, password) => {
    try {
        let authResult = await auth().signInWithEmailAndPassword(email, password);
        return authResult;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }

        console.error('error ----', error);
        return {
            error: error,
            success: false
        };
    }
}

export const createUserWithEmailAndPassword = async (email, password) => {
    try {
        let authResult = await auth().createUserWithEmailAndPassword(email, password);
        return authResult;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }

        console.error('error ----', error.code);
        return {
            error: error,
            success: false
        };
    }
}

export const signOut = async () => {
    try {
        authResult = await auth().signOut();
        return authResult;
    } catch (error) {
        return {
            error: error,
            success: false
        };
    }
}
