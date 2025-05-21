import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Index() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function verificarLogin() {
            const usuario = await AsyncStorage.getItem('usuarioLogado');

            if (usuario) {
                router.replace('/home');
            } else {
                router.replace('/login');
            }

            setLoading(false);
        }

        verificarLogin();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#8A2BE2" />
            </View>
        );
    }

    return null;
}
