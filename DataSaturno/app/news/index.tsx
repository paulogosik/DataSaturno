import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HeaderNewsHome } from '@/components/CardsNews/HeaderNewsBack';

export default function News() {
    return (
        <View style={styles.container}>
            <HeaderNewsHome />
            <View style={styles.separator} />
            <ScrollView contentContainerStyle={styles.content}>

            </ScrollView>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#D3D3D3',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        color: '#D3D3D3',
        fontSize: 30,
        fontWeight: '800',
        alignSelf: 'center',
        marginBottom: 15,
    },
    separator: {
        width: '90%',
        height: 1,
        backgroundColor: '#333',
        marginVertical: 15,
        alignSelf: 'center',
    },
});