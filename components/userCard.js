import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

export default function UserCard({ username, email, password }) {
    return (
        <View style={styles.card}>
            <Text style = {styles.username}>Username:   {username}</Text>
            <Text style={styles.email}>Email:   {email}</Text>
            <Text style={styles.password}>Password: {password}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: '25%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16,
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        marginBottom: 10,
        shadowColor: '#000',         
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'left',
        marginTop: 10
    },
    email: {
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'flex-start'
    },
    password: {
        width: '100%',
        fontWeight: 'bold',
        height: 35,
        fontSize: 14,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
