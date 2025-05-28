import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function CardNews() {
    const Icon = require('react-native-vector-icons/Feather').default;
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>

                <Text style={styles.title}>Notícias</Text>

            </View>
            <View style={styles.content}>
                <View style={styles.containerText}>

                    <Text style={styles.text}>
                        NewsAPI, uma página repleta de notícias variadas. Separadas por tópicos e contendo informações importantes das notícias. Imagens e link redirecionaveis também estão nas notícias.
                    </Text>
                    <Text style={styles.boldText}>Clique para ver mais!</Text>

                </View>
                <View style={styles.containerButton}>

                    <TouchableOpacity style={styles.button} onPress={() => router.push('/news')}>
                        <Icon name="file-text" size={24} color={'#d3d3d3'} />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 24,
    },
    content: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#0f0f0f',
        borderRadius: 18,
        padding: 18,
    },
    containerText: {
        width: '60%',
    },
    text: {
        color: '#D3D3D3',
        fontSize: 15,
    },
    boldText: {
        color: '#D3D3D3',
        fontSize: 15,
        fontWeight: '800',
        fontStyle: 'italic',
        marginTop: 12,
    },
    containerButton: {
    },
    button: {
        backgroundColor: '#6E4EE3',
        alignItems: 'center',
        justifyContent: 'center',
        width: 54,
        height: 54,
        borderRadius: 8,

    },
    containerTitle: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    title: {
        color: '#D3D3D3',
        fontSize: 30,
        fontWeight: '800',
        alignSelf: 'center',
    },
});
