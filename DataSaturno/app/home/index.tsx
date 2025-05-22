import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HeaderHome } from '@/components/HeaderHome'
import { FooterNavigation } from '@/components/FooterNavigation'
import { CardWeather } from '@/components/CardWeather'

export default function Home() {
    return (
        <View style={styles.container}>
            <HeaderHome />
            <ScrollView contentContainerStyle={styles.content}>

                <CardWeather />

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
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 24,
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