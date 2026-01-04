import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute} from '@react-navigation/native'


export default function PageTemplate({ children, title }) {
    const navigation = useNavigation();
    const route = useRoute();

    const handleRightPress = () => {
        if (route.name === 'Carts') {
            navigation.navigate('Users'); 
        } else {
            navigation.navigate('Carts'); 
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#202B41' }}>
            <View style={{ height: 56, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 ,justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={26} color="white" />
                </TouchableOpacity>
                <Text style={{
                    color: 'white',
                    fontSize: 25,
                    fontWeight: 'bold',
                    flex: 1,
                    textAlign: 'center'
                }}>
                    {title}
                </Text>

                <TouchableOpacity onPress={handleRightPress}>
                    <Ionicons name="cart" size={26} color="white" />
                </TouchableOpacity>

            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '90%', height: '95%', backgroundColor: 'white', padding: 20, borderRadius: 16 }}>
                    {children}
                </View>
            </View>
            
        </SafeAreaView>
    )
}
