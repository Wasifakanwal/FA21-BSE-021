import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component

const ContactDetailsScreen = ({ route }) => {
    const { contact } = route.params;

    return (
        <View style={styles.container}>
            <Image source={require('../assets/img.png')} style={styles.profileImage} />
            <Text style={styles.contactName}>{contact.name}</Text>
            
          
            <View style={styles.numberContainer}>
                <Text style={styles.contactNumber}>{contact.number}</Text>
           
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="phone" size={20} color="green" />
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="envelope" size={20} color="blue" />
                </TouchableOpacity>
            </View>

            <View style={styles.whatsappContainer}>
                <TouchableOpacity style={styles.whatsappButton}>
                    <Icon name="whatsapp" size={20} color="green" />
                    <Text>WhatsApp Message</Text>
                </TouchableOpacity>
                <Text style={styles.whatsappNumber}>{contact.number}</Text>
            </View>

            <View style={styles.voiceCallContainer}>
                <TouchableOpacity style={styles.voiceCallButton}>
                    <Icon name="phone" size={20} color="green" />
                    <Text>Voice Call</Text>
                </TouchableOpacity>
                <Text style={styles.voiceCallNumber}>{contact.number}</Text>
            </View>

          
            <View style={styles.defaultRingtoneContainer}>
                <Text style={styles.defaultRingtoneText}>Default Ringtone</Text>
                <Text style={styles.ringtoneText}>Ringtone</Text>
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
        marginBottom: 10,
    },
    numberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    contactNumber: {
        fontSize: 18,
        marginRight: 10,
    },
    iconButton: {
        marginLeft: 10,
    },
    whatsappContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    whatsappButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    whatsappNumber: {
        marginLeft: 10,
    },
    voiceCallContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    voiceCallButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    voiceCallNumber: {
        marginLeft: 10,
    },
    defaultRingtoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    defaultRingtoneText: {
        marginRight: 20,
    },
    ringtoneText: {
        fontSize: 12,
    },
});

export default ContactDetailsScreen;
