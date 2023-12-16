import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    View,
    Text
} from 'react-native';
import {
    signOut
} from '../services/firebase-service';
import { logoutUser } from "../redux/reducers/profileReducer";


const Profile = () => {
    const user = useSelector(state => state.profile?.profile);

    return (
        <View>
            <Text>
                Profile
            </Text>
        </View>
    )
}

export default Profile;