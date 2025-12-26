import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Products() {
    return (
        < SafeAreaView style={{ flex: 1, backgroundColor: '#202B41' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    width: '90%',
                    height: '95%',
                    backgroundColor: 'white',
                    padding: 20,
                    borderRadius: 16,
                    alignItems: 'center'
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Pressable style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', alignItems: 'center', alignSelf: 'flex-start', justifyContent: 'center', width: '48%', height: 30, borderRadius: 12 }}>

                            <Text style={{ color: 'green', fontSize: 15, fontWeight: 'bold' }}>
                                add product
                            </Text>
                        </Pressable>
                        <Pressable style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', alignItems: 'center', alignSelf: 'flex-end', justifyContent: 'center', width: '48%', height: 30, borderRadius: 12 }}>

                            <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>
                                delete product
                            </Text>
                        </Pressable>
                    </View>
                    <Pressable style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', alignItems: 'center', alignSelf: 'center', justifyContent: 'center', width: '48%', height: 30, borderRadius: 12, marginTop: 10 }}>

                        <Text style={{ color: 'blue', fontSize: 15, fontWeight: 'bold' }}>
                            update product
                        </Text>
                    </Pressable>
                    <Text style={{ color: '#202B41', alignSelf: 'flex.start' }}>
                        Filter by..</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2, marginTop: 10 }}>
                        <Pressable style={{ backgroundColor: '#202B41', borderRadius: 12, width: 70, height: 30, alignItems: 'center', alignSelf: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Kategori</Text>
                        </Pressable>
                        <Pressable style={{ backgroundColor: '#202B41', borderRadius: 12, width: 70, height: 30, alignItems: 'center', alignSelf: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Kategori</Text>
                        </Pressable>
                        <Pressable style={{ backgroundColor: '#202B41', borderRadius: 12, width: 70, height: 30, alignItems: 'center', alignSelf: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Kategori</Text>
                        </Pressable>
                        <Pressable style={{ backgroundColor: '#202B41', borderRadius: 12, width: 70, height: 30, alignItems: 'center', alignSelf: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Kategori</Text>
                        </Pressable>
                        <Pressable style={{ backgroundColor: '#202B41', borderRadius: 12, width: 70, height: 30, alignItems: 'center', alignSelf: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Kategori</Text>
                        </Pressable>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2, marginTop:20}}>
                        <View style={{
                            width: '50%',
                            height: '200',
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 16,
                            alignItems: 'center',
                            borderWidth:1,
                            borderColor: 'gray',
                            alignSelf: 'flex-start'
                        }}>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}