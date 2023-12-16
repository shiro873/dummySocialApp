import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
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

import { addPost } from "../redux/reducers/postReducer";

const Post = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile?.profile);
    const [post, setPost] = useState('this is atest post');

    const onPress = () => {
        console.log()
        let username = user?.email?.split('@')[0];
        console.log('username ---', username);
        if(post !== '') {
            dispatch(addPost({
                post: post,
                username: username,
                date: new Date()
            }))
        } 
    }

    return (
        <View>
            <Text>
                Post
            </Text>
            <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                value={post}
                onChangeText={setPost}
            />
            <Button
                onPress={onPress}
                title="Login"
            />
        </View>
    )
}

export default Post;