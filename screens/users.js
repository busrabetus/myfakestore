import { View, Text, Pressable, ScrollView,ActivityIndicator ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageTemplate from '../components/PageTemplate'
import { useEffect, useState } from 'react'
import { getUsers } from '../api/userapi'
import UserCard from '../components/userCard'

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers()
            .then(data => setUsers(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);
    return (
        <PageTemplate title={'Users'}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Pressable style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center', width: '48%', height: 30, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 }}>
                    <Text style={{ color: 'green', fontSize: 15, fontWeight: 'bold' }}>Add User</Text>
                </Pressable>
                <Pressable style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center', width: '48%', height: 30, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 }}>
                    <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>Delete User</Text>
                </Pressable>
            </View>

            <Pressable style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center', width: '48%', height: 30, borderRadius: 12, marginTop: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 }}>
                <Text style={{ color: 'blue', fontSize: 15, fontWeight: 'bold' }}>Update User</Text>
            </Pressable>

            <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, justifyContent: 'space-between' }}>
                {users.map(user => (
                    <TouchableOpacity
                        key={user.id}
                        style={{ width: '100%' }}
                    >
                        <UserCard
                            username={user.username}
                            email={user.email}
                            password={user.password}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </PageTemplate>
    )
}