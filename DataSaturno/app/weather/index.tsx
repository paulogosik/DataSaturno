import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HeaderBackHome } from '@/components/CardsWeather/HeaderWeatherBack';
import { CardWeatherSP } from '@/components/CardsWeather/CardWeatherSP';
import { CardWeatherPalmas } from '@/components/CardsWeather/CardWeatherPalmas';
import { CardWeatherLondon } from '@/components/CardsWeather/CardWeatherLondon';
import { CardWeatherNY } from '@/components/CardsWeather/CardWeatherNY';
import { CardWeatherTokyo } from '@/components/CardsWeather/CardWeatherTokyo';

export default function Weather() {
    return (
        <View style={styles.container}>
            <HeaderBackHome />
            <View style={styles.separator} />
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
    containerTitle: {
        backgroundColor: '#0f0f0f',
        padding: 15,
        marginBottom: 15,
    },
    title: {
        color: '#D3D3D3',
        fontSize: 30,
        fontWeight: '800',
        alignSelf: 'center',
    },
    separator: {
        width: '90%',
        height: 1,
        backgroundColor: '#333',
        marginVertical: 15,
        alignSelf: 'center',
    },
});