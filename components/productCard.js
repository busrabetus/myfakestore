import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

export default function ProductCard({ title, price, image, onPress }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 250,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        marginBottom: 10,
        shadowColor: '#000',         
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'left',
        marginBottom: 5,
    },
    price: {
        color: 'green',
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        textAlign:'right',
        fontSize: 18
    },
    button: {
        width: '100%',
        height: 35,
        backgroundColor: '#007bff',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
