import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { HeaderHome } from '@/components/HeaderHome'
import { FooterNavigation } from '@/components/FooterNavigation'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Configuracoes() {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderHome />
            <ScrollView contentContainerStyle={styles.content}>

                <Text style={styles.text}>Teste</Text>

            </ScrollView>
            <FooterNavigation />
        </SafeAreaView>
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
});