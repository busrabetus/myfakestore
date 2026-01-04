import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import PageTemplate from '../components/PageTemplate';

export default function CartDetail({ route }) {
    const { selectedCart } = route.params;
    let prodcard = [];
    let genelToplam = 0;

    for (let i = 0; i < selectedCart.products.length; i++) {
        let urun = selectedCart.products[i];
        let aratoplam = urun.price * urun.quantity;
        genelToplam = genelToplam + aratoplam;

        prodcard.push(
            <View key={i} style={styles.productCard}>
                <Image source={{ uri: urun.image }} style={styles.productImage} />
                <View style={styles.productInfo}>
                    <Text style={styles.productTitle}>{urun.title}</Text>
                    <Text style={styles.productDetails}>
                        {urun.quantity} Adet x ${urun.price}
                    </Text>
                    <Text style={styles.itemTotal}>
                        Total: ${aratoplam.toFixed(2)}
                    </Text>
                </View>
            </View>
        );
    }

    return (
        <PageTemplate title={'Cart Details'}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.header}>User ID: {selectedCart.userId}</Text>
                
                {prodcard}

                <View style={styles.footer}>
                    <Text style={styles.totalLabel}>Genel Toplam:</Text>
                    <Text style={styles.totalPrice}>${genelToplam.toFixed(2)}</Text>
                </View>
            </ScrollView>
        </PageTemplate>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subHeader: {
        fontSize: 16,
        color: '#666',
        marginBottom: 15,
    },
    productCard: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#eee',
        alignItems: 'center',
    },
    productImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    productInfo: {
        flex: 1,
        marginLeft: 15,
    },
    productTitle: {
        fontSize: 14,
        fontWeight: '600',
    },
    productDetails: {
        fontSize: 13,
        color: '#777',
        marginTop: 4,
    },
    itemTotal: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 2,
    },
    footer: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#f8f8f8',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'green',
    },
});