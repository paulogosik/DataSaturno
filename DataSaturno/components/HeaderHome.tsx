import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

export function HeaderHome() {
    type Usuario = {
        user: string;
        nome: string;
        email: string;
    };
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    useEffect(() => {
        async function buscarUsuario() {
            const usuarioSalvo = await AsyncStorage.getItem('usuarioLogado');
            if (usuarioSalvo) {
                setUsuario(JSON.parse(usuarioSalvo));
            }
        }

        buscarUsuario();
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <View style={styles.content}>
                    <Image
                        source={{uri: 'https://i.imgur.com/H8Z6kHx.png'}} //icon2
                        style={styles.avatar}
                    />
                    <Text style={styles.headerText}>Olá,</Text>
                    <Text style={styles.headerName}>{usuario?.nome || 'Visitante'}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'transparent',
    },
    header: {
        marginTop: 6,
        paddingVertical: 12,
        backgroundColor: '#0f0f0f',
        alignSelf: 'center',
        borderRadius: 36,
        width: '60%',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    headerText: {
        color: '#d3d3d3',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: -6,
    },
    headerName: {
        color: '#6E4EE3',
        fontSize: 20,
        fontWeight: 'bold',
    },
    avatar: {
        width: 24,
        height: 32,
        borderRadius: 16,
        marginRight: 6,
    },
});