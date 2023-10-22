import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, FlatList, unstable_batchedUpdates, ScrollView } from "react-native";
import { Svg, Path, Defs, Pattern, Use } from 'react-native-svg';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import SearchBar from '../components/search_bar.js'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { auth, database } from '../config/firebase';

const catImageUrl = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d";

const Home = () => {

    const navigation = useNavigation();
    const [names, setNames] = useState([]);
    // Lấy dữ liệu từ Firestore
    useLayoutEffect(() => {
        const collectionRef = collection(database, 'User_names');
        const q = query(collectionRef, orderBy('username', 'desc'));

        const unsubscribe = onSnapshot(q, querySnapshot => {
            console.log('querySnapshot unsusbscribe user');
            setNames(
                querySnapshot.docs.map(doc => ({
                    username: doc.data().username
                }))
            );
        });
        console.log(names)
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <SearchBar style={styles.searchbar} />
            <ScrollView>
                {names.map((name, index) => (
                    <View style={styles.chat}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/300' }}
                            style={{ width: 50, height: 50, borderRadius: 40, }}
                        />

                        <Text key={index} style={styles.usertitle}>{name.username}</Text>
                        <Text style={styles.MESSAGEtitle}>
                            {`Let start a chat \n`}
                        </Text>
                        <Svg style={styles.read} width="16" height="16" viewBox="0 0 16 16" fill="none" >
                            <Path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z" fill="#C2C6CC" />
                        </Svg>
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5D6D7E",
    },
    chatButton: {
        position: 'absolute',
        bottom: '0%',
        right: '0%',
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,
    },

    chat: {
        flexShrink: 0,
        height: 76,
        width: "100%",
        alignItems: "flex-start",
        rowGap: 0
    },
    rectangle: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#fffff"
    },
    oval: {
        position: "absolute",
        flexShrink: 0,
        top: 8,
        right: 299,
        bottom: 8,
        left: 16,
        overflow: "visible"
    },
    usertitle: {
        fontSize: 15,
        fontWeight: '600',
        position: "absolute",
        flexShrink: 0,
        right: 52,
        left: 68,
        textAlign: "left",
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Arial",
        //letterSpacing: -0.15000000596046448,
        lineHeight: 40
    },
    MESSAGEtitle: {
        position: "absolute",
        flexShrink: 0,
        top: 30,
        right: 52,
        bottom: 17,
        left: 68,
        textAlign: "left",
        color: "rgba(0, 0, 0, 0.5)",
        fontFamily: "Arial",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: -0.15000000596046448,
        lineHeight: 20
    },
    read: {
        position: "absolute",
        flexShrink: 0,
        top: 30,
        height: 16,
        left: 343,
        width: 16
    }
});