import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HeaderBackHome } from '@/components/HeaderBackHome';
import { CardWeatherSP } from '@/components/CardWeatherSP';
import { CardWeatherPalmas } from '@/components/CardWeatherPalmas';
import { CardWeatherLondon } from '@/components/CardWeatherLondon';
import { CardWeatherNY } from '@/components/CardWeatherNY';
import { CardWeatherTokyo } from '@/components/CardWeatherTokyo';

export default function Weather() {
    return (
        <View style={styles.container}>
            <HeaderBackHome />
            <Text style={styles.title}>Previsão do Tempo</Text>

            <ScrollView contentContainerStyle={styles.content}>

                <CardWeatherPalmas />
                <CardWeatherSP />
                <CardWeatherLondon />
                <CardWeatherNY />
                <CardWeatherTokyo />

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