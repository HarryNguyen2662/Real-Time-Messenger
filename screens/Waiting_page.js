import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
const backImage = require("../assets/backImage2.png");

export default function Login({ navigation }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <View style={styles.container}>
            <Image source={backImage} style={styles.backImage} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    backImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        resizeMode: 'cover',
    },
});
