import React from "react";
import {
    View,
    Text
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../redux/reducers/postReducer";

const Home = () =>{
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post?.posts);
    console.log(posts);
    return(
        <View>
            <Text>
                Home
            </Text>
        </View>
    )
}

export default Home;