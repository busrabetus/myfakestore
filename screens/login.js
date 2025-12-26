import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { login } from '../api/auth'


export default function Login() {
    const navigation = useNavigation()
    const userRef = useRef();
    const errRef = useRef();


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {
        setLoading(true)
        try {
            const data = await login(username, password)
            console.log('TOKEN:', data.token)
            navigation.navigate('Products')
        } catch (err) {
            if (err?.response?.status === 400) {
                setErrMsg('Username or password is incorrect')
            } else {
                setErrMsg('Something went wrong. Try again.')
            }
        } finally {
            setLoading(false)
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#202B41' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{

                    width: '85%',
                    height: '85%',
                    backgroundColor: 'white',
                    padding: 20,
                    borderRadius: 16,
                    alignItems: 'center'
                }}>
                    <Image source={require('../assets/login.png')} style={{ width: 100, height: 100, marginTop: 20, marginBottom: 30 }}>
                    </Image>
                    <View style={{ alignItems: 'center', marginBottom: 30 }} >
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            marginBottom: 4
                        }}>
                            Welcome!
                        </Text>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 'medium',
                            marginBottom: 10
                        }}>
                            Log in to your account.
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        <TextInput placeholder='Username' placeholderTextColor={'white'}
                            value={username} onChangeText={setUsername}
                            style={{ color: 'white', width: '100%', height: 45, backgroundColor: '#202B41', opacity: 0.5, borderRadius: 17, padding: 12, marginBottom: 20 }}>
                        </TextInput>
                        <TextInput placeholder='Password' placeholderTextColor={'white'}
                            value={password} onChangeText={setPassword} secureTextEntry
                            style={{ color: 'white', width: '100%', height: 45, backgroundColor: '#202B41', opacity: 0.5, borderRadius: 17, padding: 12, }}>
                        </TextInput>
                        <Text style={{ color: '#202B41', alignSelf: 'flex-end', marginTop: 10 }}>
                            Forgot password ?
                        </Text>

                        <Pressable onPress={handleLogin} style={{ backgroundColor: '#202B41', alignSelf: 'center', marginTop: 40, width: '50%', height: 40, borderRadius: 20, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
                                Log in
                            </Text>
                        </Pressable>
                        <Text style={{ color: '#202B41', marginTop: 30 }}>
                            Don't have an account ?
                        </Text>
                        <Text style={{ color: '#202B41', marginTop: 5, fontWeight: 'bold' }}>
                            Sign up
                        </Text>
                        {errMsg ? (
                            <Text style={{ color: 'red', marginTop: 50 }}>
                                {errMsg}
                            </Text>
                        ) : null}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
