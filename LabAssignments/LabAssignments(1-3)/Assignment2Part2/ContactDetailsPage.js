import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ContactDetailsScreen = ({ route }) => {
    const { contact } = route.params;

    return (
        <View style={styles.container}>
            <Image source={require('D:\MAD24\FA21-BSE-021\LabAssignments\assets\img.png')} style={styles.profileImage} />
            <Text style={styles.contactName}>{contact.name}</Text>
            <Text style={styles.contactNumber}>{contact.number}</Text>
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionButton}>
                    {/* Call icon */}
                    <Text>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    {/* Message icon */}
                    <Text>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    {/* WhatsApp icon */}
                    <Text>WhatsApp</Text>
                </TouchableOpacity>
                <Text style={styles.ringtoneText}>Default Ringtone</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    contactName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    contactNumber: {
        fontSize: 18,
        marginBottom: 10,
    },
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    actionButton: {
        marginHorizontal: 10,
    },
    ringtoneText: {
        fontSize: 16,
        color: 'grey',
    },
});

export default ContactDetailsScreen;
