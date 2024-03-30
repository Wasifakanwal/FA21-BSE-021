import { Text, View, StyleSheet, Button, TextInput, FlatList, TouchableOpacity } from 'react-native'; 
import React, { useState } from 'react'; 


export default function StudentRecord() { 

    const [Name, setName] = useState('');
    const [Gpa, setGpa] = useState('');
    const [details, setDetails] = useState([]);

    // setting name and gpa
    const ChangeName = (input) => {
        setName(input);
    };

    const ChangeGpa = (input) => {
        setGpa(input);
    };


    // saving details method
    const saveDetails = () => {
        const newRecord = {
            id: Date.now().toString(), 
            name: Name,
            gpa: Gpa
        };
        setDetails([...details, newRecord]);
        setName('');
        setGpa('');
    };


    // del records methods
    const deleteRecord = (id) => {
        setDetails(details.filter(record => record.id !== id));
    };

    // serching record methods
    const searchRecord = () => {
        if (!Name.trim()) {
            setDetails([]);
        } else {
            const filtered = details.filter(record => record.name.toLowerCase() === Name.trim().toLowerCase());
            setDetails(filtered);
        }
    };

    // Clearing all records
    const clearAllRecords = () => {
        setDetails([]);
    };

    return ( 
        <View style={styles.container}>
            <Text style={styles.Heading}>Student Record</Text>
            <Text style={styles.label}>Name :</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter name"
                keyboardType='ascii-capable'
                onChangeText={ChangeName}
                value={Name}
            />
            <Text style={styles.label}>GPA : </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter GPA"
                onChangeText={ChangeGpa}
                keyboardType='numeric'
                value={Gpa}
            />
            <View style={styles.buttonContainer}>
                <Button 
                    title="Save"
                    color="green"
                    onPress={saveDetails}
                />
                <Button
                    title="Search"
                    color="green"
                    onPress={searchRecord}
                />
            </View>
            <View style={styles.lineBreak} />
            <FlatList
                data={details}
                renderItem={({ item }) => (
                    <View style={styles.recordItem}>
                        <Text>Name: {item.name}</Text>
                        <Text>GPA: {item.gpa}</Text>
                        <TouchableOpacity onPress={() => deleteRecord(item.id)}>
                            <Text style={styles.deleteButton}>&#10006;</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <Button 
                title="Clear All"
                color="green"
                onPress={clearAllRecords}
            />
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: '#fff', 
        marginTop: 100,
        paddingHorizontal: 20,
    }, 
    Heading: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    lineBreak: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    recordItem: {
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
