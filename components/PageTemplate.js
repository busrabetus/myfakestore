import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function PageTemplate({ children, title }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#202B41' }}>
            <View style={{ height: 56, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={26} color="white" />
                </TouchableOpacity>
                <Text style={{
                    color: 'white',
                    fontSize: 25,
                    fontWeight: 'bold',
                    marginLeft: 100
                }}>
                    {title}
                </Text>

            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '90%', height: '95%', backgroundColor: 'white', padding: 20, borderRadius: 16 }}>
                    {children}
                </View>
            </View>
        </SafeAreaView>
    )
}
