import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    chatHeader: {
        height: 60,
        backgroundColor: '#5BC0EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatHeaderText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    sendButton: {
        backgroundColor: '#5BC0EB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        height: 50,
        width: 50,
    },
    sendIcon: {
        color: '#fff',
        fontSize: 24,
    },
});