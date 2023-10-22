import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={styles.container}>

            <View style={styles.searchBar}>

                <TouchableOpacity style={styles.iconsearch}>
                    <Icon name="search" size={20} color="#666" />
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
    },
    iconsearch: {
        paddingLeft: 10
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 10,
    },
    input: {
        flex: 1,
        backgroundColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 35
    }
});

export default SearchBar;