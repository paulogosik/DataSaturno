import { useEffect, useState } from 'react';
import { ActivityIndicator, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Index() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function carregarRecursos() {
            const imagens = [
                'https://i.imgur.com/apk98SY.png',
                'https://i.imgur.com/xyG16Yr.png',
                'https://i.imgur.com/H8Z6kHx.png',
            ];
            await Promise.all(imagens.map((url) => Image.prefetch(url)));

            const usuario = await AsyncStorage.getItem('usuarioLogado');

            if (usuario) {
                router.replace('/home');
            } else {
                router.replace('/login');
            }

            setLoading(false);
        }

        carregarRecursos();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1c1c1c' }}>
                <ActivityIndicator size="large" color="#8A2BE2" />
            </View>
        );
    }

    return null;
}
