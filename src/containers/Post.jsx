import React, { useState, useEffect } from "react";
// UI components
import {
    View,
    StyleSheet
} from "react-native";
import Input from "../components/Input/Input";
import RootView from "../components/RootView";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";
// Style constants
import { sizes } from "../theme/sizes";
// redux
import { useSelector, useDispatch } from "react-redux";
// services
import { addPost } from "../redux/reducers/postReducer";

const Post = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile?.profile);
    const [post, setPost] = useState('');

    const onPress = () => {
        console.log()
        let username = user?.email?.split('@')[0];
        // console.log('username ---', username);
        if (post !== '') {
            dispatch(addPost({
                post: post,
                username: username,
                date: new Date()
            }))
        }
    }

    return (
        <View style={styles.container}>
            <Input
                label="Post"
                placeholder={`Share what's on you mind!!`}
                value={post}
                onChangeText={setPost}
                multiline={true}
                customInputContainerStyles={styles.post_conatiner_style}
                customInputStyles={styles.post_input_style}
            />
            <Button onPress={onPress}>
                Post
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: sizes.spacing.l,
        elevation: 5
    },
    post_conatiner_style: {
        height: 250,
    },
    post_input_style: {
        height: 220
    }
});

export default Post;