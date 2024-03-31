import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ContactListScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [contacts, setContacts] = useState([
        { id: 1, name: 'John Doe', number: '+1234567890' },
        { id: 2, name: 'Jane Smith', number: '+9876543210' },
        // Add more contacts as needed
    ]);

    const handleContactPress = (contact) => {
        navigation.navigate('ContactDetails', { contact });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleContactPress(item)} style={styles.contactItem}>
            <Text style={styles.contactName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <FlatList
                data={contacts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    contactItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    contactName: {
        fontSize: 18,
        color: 'grey',
    },
});

export default ContactListScreen;
