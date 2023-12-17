import React, { useState, useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";

// UI components
import {
    View,
    StyleSheet,
    Image,
    Pressable
} from 'react-native';
import Text from "../components/Text/Text";
import RootView from "../components/RootView";
import Card from "../components/Card/Card";

// Styled components
import { sizes } from "../theme/sizes";
import { colors } from "../theme/colors";

// services
import { navigate } from "../services/navigation-service";
import {
    signOut
} from '../services/firebase-service';
import { logoutUser } from "../redux/reducers/profileReducer";


const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile?.profile);

    const onLogoutPress = () => {
        signOut();
        dispatch(logoutUser());
        navigate('Login');
    }

    return (
        <RootView>
            <View style={styles.container}>
                <Card customCardStyle={styles.card_style}>
                    <View>
                        <Image
                            source={require('../assets/images/profile.webp')}
                            style={styles.profile_image} />
                        <Text preset="bold_text">
                            {user?.email?.split('@')[0]}
                        </Text>
                    </View>
                </Card>

                <Pressable onPress={onLogoutPress} style={styles.logout_container}>
                    <Image
                        source={require('../assets/images/shutdown.png')}
                        style={styles.logout_image} />
                    <Text preset="bold_text">
                        Logout
                    </Text>
                </Pressable>
            </View>
        </RootView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: sizes.spacing.xl,
        alignItems: 'center',
    },
    card_style: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    user_info_container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    profile_image: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        marginBottom: sizes.spacing.sm_4
    },
    logout_image: {
        marginBottom: sizes.spacing.sm_5,
        height: 30,
        width: 30,
    },
    logout_container: {
        marginTop: sizes.spacing.l,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    }
});

export default Profile;