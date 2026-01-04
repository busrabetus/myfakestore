import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

export default function CartCard({ userId, products = [], onPress }) {
    const firstProduct = products[0];

    return (
        <TouchableOpacity onPress={onPress} style={styles.cardWrapper}>
            <View style={styles.card}>
                <Text style={styles.userId}>User ID: {userId}</Text>
                {products.length > 0 ? (
                    <>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {products.map((item, index) => (
                                <Image
                                    key={index}
                                    source={{ uri: item.image }}
                                    style={styles.resim}
                                />
                            ))}
                        </View>
                        {products.map((p, index) => (
                            <Text key={`${userId}-${index}`} style={styles.productName}>
                                {p.title}
                            </Text>
                        ))}
                    </>
                ) : (
                    <Text style={{ color: 'gray' }}>No products</Text>
                )}
            </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    cardWrapper: { width: '100%' },
    card: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 16,
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginTop: 1
    },
    resim: { 
        width: 60, 
        height: 60, 
        marginRight: 8, 
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        resizeMode: 'contain' 
    },
    userId: { fontWeight: 'bold', marginBottom: 5 },
    image: { width: '100%', height: 120, resizeMode: 'contain', marginBottom: 5 },
    productName: { fontSize: 14, color: '#333', marginBottom: 2 },
});