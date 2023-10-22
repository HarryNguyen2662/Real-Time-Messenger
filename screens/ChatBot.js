import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import Navigator from './components/Navigator';
import { ChatGptProvider } from 'react-native-chatgpt';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Chatbot() {
    return (
        <SafeAreaProvider>
            <PaperProvider>
                <ChatGptProvider>
                    <Navigator />
                </ChatGptProvider>
            </PaperProvider>
        </SafeAreaProvider>
    );
}