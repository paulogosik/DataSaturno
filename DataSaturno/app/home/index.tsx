import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HeaderHome } from '@/components/HeaderHome'
import { FooterNavigation } from '@/components/FooterNavigation'

export default function Home() {
    return (
        <View style={styles.container}>
            <HeaderHome />
            <ScrollView contentContainerStyle={styles.content}>

                <Text style={styles.text}>Tela de Home</Text>

            </ScrollView>
            <FooterNavigation />
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
    textButton: {
        color: '#DCDCDC',
        fontWeight: 'bold',
        fontSize: 16,
    },
});