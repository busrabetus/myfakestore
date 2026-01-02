import { View, Text, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import ProductCard from '../components/productCard'; 
import { getProducts } from '../api/getproducts';

export default function Products({ navigation }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then(data => setProducts(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <PageTemplate>
                <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 50 }} />
            </PageTemplate>
        );
    }

    return (
        <PageTemplate title= "Products">
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Pressable style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center', width: '48%', height: 30, borderRadius: 12, shadowColor: '#000',shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4}}>
                    <Text style={{ color: 'green', fontSize: 15, fontWeight: 'bold' }}>Add Product</Text>
                </Pressable>
                <Pressable style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center', width: '48%', height: 30, borderRadius: 12, shadowColor: '#000',shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4}}>
                    <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>Delete Product</Text>
                </Pressable>
            </View>

            <Pressable style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center', width: '48%', height: 30, borderRadius: 12, marginTop: 10, shadowColor: '#000',shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4} }>
                <Text style={{ color: 'blue', fontSize: 15, fontWeight: 'bold' }}>Update Product</Text>
            </Pressable>

            <Text style={{ color: '#202B41', marginTop: 10 }}>Filter by..</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
                <Pressable style={{ backgroundColor: '#202B41', borderRadius: 12, width: 75, height: 30, alignItems: 'center', justifyContent: 'center', shadowColor: '#000',shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Kategori</Text>
                </Pressable>
                <Pressable style={{ backgroundColor: '#202B41', borderRadius: 12, width: 75, height: 30, alignItems: 'center', justifyContent: 'center' , shadowColor: '#000',shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4}}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Kategori</Text>
                </Pressable>
                <Pressable style={{ backgroundColor: '#202B41', borderRadius: 12, width: 75, height: 30, alignItems: 'center', justifyContent: 'center' , shadowColor: '#000',shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4}}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Kategori</Text>
                </Pressable>
                <Pressable style={{ backgroundColor: '#202B41', borderRadius: 12, width: 75, height: 30, alignItems: 'center', justifyContent: 'center' , shadowColor: '#000',shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4}}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Kategori</Text>
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, justifyContent: 'space-between' }}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </ScrollView>
        </PageTemplate>
    );
}
