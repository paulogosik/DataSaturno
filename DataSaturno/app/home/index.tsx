import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

import { HeaderHome } from '@/components/HeaderHome'
import { FooterHome } from '@/components/FooterHome'

export default function Home() {
    type Usuario = {
        user: string;
        nome: string;
        email: string;
    };
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function buscarUsuario() {
            const usuarioSalvo = await AsyncStorage.getItem('usuarioLogado');
            if (usuarioSalvo) {
                setUsuario(JSON.parse(usuarioSalvo));
            }
        }

        buscarUsuario();
    }, []);

    async function sairDaConta() {
        await AsyncStorage.removeItem('usuarioLogado')
        router.push('/login')
    }

    return (
        <View style={styles.container}>
            <HeaderHome />

            <View style={styles.content}>
                <Text style={styles.text}>Teste</Text>
            </View>

            <FooterHome />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    text: {
        color: '#D3D3D3',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#8A2BE2',
        borderRadius: 7,
        paddingVertical: 10,
    },
    textButton: {
        color: '#DCDCDC',
        fontWeight: 'bold',
        fontSize: 16,
    },
});