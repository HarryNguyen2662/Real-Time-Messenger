import * as React from 'react';
import { useChatGpt } from 'react-native-chatgpt';
import ChatBot from './ChatBot';
import Login from './Login';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Navigator: React.FC = () => {
    const { status } = useChatGpt();

    if (status === 'initializing') return null;

    if (status === 'logged-out' || status === 'getting_auth_token') {
        return (
            <View style={styles.container}>
                <Login />
                {status === 'getting_auth_token' && (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="white" />
                    </View>
                )}
            </View>
        );
    }

    return <ChatBot />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loaderContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Navigator;
