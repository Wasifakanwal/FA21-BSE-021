import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component

const ContactListScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [contacts, setContacts] = useState([
        { id: 1, name: 'John ', number: '03005689822' },
        { id: 2, name: 'Baba Jan', number: '03356898152' },
        { id: 3, name: 'Amir Khan', number: '01458932451' },
        { id: 4, name: 'Saba Ali', number: '01459632555' },
        { id: 5, name: 'Saima Khan', number: '01258963552' },
        { id: 6, name: 'Lila Malik', number: '02205566258' },
        { id: 7, name: 'Muhammad Ali', number: '01459933688' },
        
    ]);

    const handleContactPress = (contact) => {
        navigation.navigate('ContactDetails', { contact });
    };

    const renderContactItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleContactPress(item)} style={styles.contactItem}>
            <View style={styles.contactTextContainer}>
                <Text style={styles.contactName}>{item.name}</Text>
               
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Contacts</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="plus" size={20} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="edit" size={20} color="blue" />
                    </TouchableOpacity>
                </View>
            </View>
            <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <FlatList
                data={contacts}
                renderItem={renderContactItem}
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
    },
    contactTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    contactName: {
        fontSize: 18,
        color: 'grey',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        marginLeft: 10,
    },
});

export default ContactListScreen;
