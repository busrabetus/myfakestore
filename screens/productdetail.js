import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import PageTemplate from '../components/PageTemplate';

export default function ProductDetail({ route, navigation }) {
    const { productId } = route.params;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })
        .catch(err => console.error('Fetch error:', err))
        .finally(() => setLoading(false));
}, [productId]);

    if (loading) {
        return (
            <PageTemplate>
                <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 50 }} />
            </PageTemplate>
        );
    }

    return (
        <PageTemplate title= "Product Detail">
            <View style={styles.container}>
                <Image source={{ uri: product.image }} style={styles.image} />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </View>
        </PageTemplate>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'left',
    },
    description: {
        fontSize: 16,
        textAlign: 'left',
        color: '#555',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 60,
        alignSelf: 'flex-end'
    },
});
