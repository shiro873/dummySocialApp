import React from "react";

// UI components
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import Text from "../components/Text/Text";
import RootView from "../components/RootView";
import Card from "../components/Card/Card";
// Styled components
import { sizes } from "../theme/sizes";
import { colors } from "../theme/colors";
// redux
import { useDispatch, useSelector } from "react-redux";

// services
import { removePost } from "../redux/reducers/postReducer";

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post?.posts);
    console.log(posts[0]);

    const renderPosts = () => {
        return (
            posts?.map(post => (
                <View>
                    <Card customCardStyle={styles.card}>
                    <View style={styles.card_user_container}>
                        <Image source={require('../assets/images/profile.webp')} style={styles.image} />
                        <Text>
                            {post?.user}
                        </Text>
                    </View>
                    <Text customStyle={styles.post_style}>
                        {post?.post}
                    </Text>
                    <Text>
                        {post?.date?.toString()}
                    </Text>
                </Card>
                <Card customCardStyle={styles.card}>
                    <View style={styles.card_user_container}>
                        <Image source={require('../assets/images/profile.webp')} style={styles.image} />
                        <Text>
                            {post?.user}
                        </Text>
                    </View>
                    <Text customStyle={styles.post_style}>
                        {post?.post}
                    </Text>
                    <Text>
                        {post?.date?.toString()}
                    </Text>
                </Card>
                <Card customCardStyle={styles.card}>
                    <View style={styles.card_user_container}>
                        <Image source={require('../assets/images/profile.webp')} style={styles.image} />
                        <Text>
                            {post?.user}
                        </Text>
                    </View>
                    <Text customStyle={styles.post_style}>
                        {post?.post}
                    </Text>
                    <Text>
                        {post?.date?.toString()}
                    </Text>
                </Card>
                <Card customCardStyle={styles.card}>
                    <View style={styles.card_user_container}>
                        <Image source={require('../assets/images/profile.webp')} style={styles.image} />
                        <Text>
                            {post?.user}
                        </Text>
                    </View>
                    <Text customStyle={styles.post_style}>
                        {post?.post}
                    </Text>
                    <Text>
                        {post?.date?.toString()}
                    </Text>
                </Card>
                <Card customCardStyle={styles.card}>
                    <View style={styles.card_user_container}>
                        <Image source={require('../assets/images/profile.webp')} style={styles.image} />
                        <Text>
                            {post?.user}
                        </Text>
                    </View>
                    <Text customStyle={styles.post_style}>
                        {post?.post}
                    </Text>
                    <Text>
                        {post?.date?.toString()}
                    </Text>
                </Card>
                <Card customCardStyle={styles.card}>
                    <View style={styles.card_user_container}>
                        <Image source={require('../assets/images/profile.webp')} style={styles.image} />
                        <Text>
                            {post?.user}
                        </Text>
                    </View>
                    <Text customStyle={styles.post_style}>
                        {post?.post}
                    </Text>
                    <Text>
                        {post?.date?.toString()}
                    </Text>
                </Card>
                </View>
            )));
    }

    return (
        <RootView style={{flex: 1}}>
            <View style={styles.home_container}>
                {renderPosts()}
            </View>
        </RootView>
    )
}


const styles = StyleSheet.create({
    home_container: {
        flex: 1,
        width: '100%',
        // height: '100%',
        alignItems: 'center',
        paddingTop: sizes.spacing.med_3,
        marginBottom: 200,
        flexGrow: 1
    },
    card: {
        marginTop: sizes.spacing.sm_6
    },
    card_user_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: sizes.spacing.sm_2
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.dark_blue,
        resizeMode: 'center',
        marginRight: sizes.spacing.sm_2
    },
    username_style: {
        alignSelf: 'center'
    },
    post_style: {
        marginBottom: sizes.spacing.sm_2
    }
});


export default Home;