import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HeaderBackHome } from '@/components/HeaderBackHome';

export default function News() {
    return (
        <View style={styles.container}>
            <HeaderBackHome />
            <Text style={styles.title}>Notícias</Text>

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
});