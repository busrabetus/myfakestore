import { View, Text, Pressable, ScrollView, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import PageTemplate from '../components/PageTemplate'
import CartCard from '../components/cartCard'
import { getCarts } from '../api/cartapi'
import { getProducts } from '../api/productapi';
import { useState, useEffect } from 'react'


export default function Carts({ navigation }) {
    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(true);

    const mergedata = (carts, products) => {
    let newcarts = [];
    for (let i = 0; i < carts.length; i++) {
        let cart = carts[i];
        let updatedproducts = [];

        for (let j = 0; j < cart.products.length; j++) {
            let cartitem = cart.products[j];
            let detail = null;

            for (let k = 0; k < products.length; k++) {
                if (products[k].id === cartitem.productId) {
                    detail = products[k];
                    break; 
                }
            }
            let productinfo = {
                productId: cartitem.productId,
                quantity: cartitem.quantity,
                title: detail.title,
                price: detail.price,
                image: detail.image
            };

            updatedproducts.push(productinfo);
        }
        cart.products = updatedproducts;
        newcarts.push(cart);
    }

    return newcarts;
};
    useEffect(() => {
        async function getdata() {
            try {
                const cartlist = await getCarts();
                const prodlist = await getProducts();
                const res = mergedata(cartlist, prodlist);
                setCarts(res);
            } catch (error) {
                console.log("Hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        }
        getdata();
    }, []);

    return (
        <PageTemplate title={'Carts'}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Pressable style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center', width: '48%', height: 30, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 }}>
                    <Text style={{ color: 'green', fontSize: 15, fontWeight: 'bold' }}>Add Cart</Text>
                </Pressable>
                <Pressable style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center', width: '48%', height: 30, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 }}>
                    <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>Delete Cart</Text>
                </Pressable>
            </View>

            <Pressable style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center', width: '48%', height: 30, borderRadius: 12, marginTop: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 }}>
                <Text style={{ color: 'blue', fontSize: 15, fontWeight: 'bold' }}>Update Cart</Text>
            </Pressable>

            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                {carts.map((item) => (
                    <CartCard
                        key={item.id}
                        userId={item.userId}
                        products={item.products}
                        onPress={() => navigation.navigate('CartDetail', { selectedCart: item })}
                    />
                ))}
            </ScrollView>

        </PageTemplate>
    )
}