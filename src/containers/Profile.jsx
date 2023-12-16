import React, {useState, useEffect} from "react";
import {
    View,
    Text
} from 'react-native';
import auth from '@react-native-firebase/auth';

const Profile = () => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        <View>
            <Text>
                Profile
            </Text>
        </View>
    )
}

export default Profile;