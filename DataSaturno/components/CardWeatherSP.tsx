import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export function CardWeatherSP() {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch(
                    'https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&appid=767190045fa5f85d2eb36cd53d69583e&units=metric&lang=pt_br'
                );
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error('Erro ao buscar clima:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchWeather();
    }, []);

    if (loading) {
        return <ActivityIndicator size="small" color="#8A2BE2" />;
    }

    if (!weather || weather.cod !== 200) {
        return <Text style={styles.text}>Erro ao carregar clima</Text>;
    }

    return (
        <View style={styles.card}>
            <Text style={styles.city}>{weather.name}</Text>
            <Text style={styles.city}>{weather.main.humidity}%</Text>
            <Text style={styles.temp}>{weather.main.temp.toFixed(1)}°C</Text>
            <Text style={styles.temp}>{weather.main.feels_like.toFixed(1)}°C</Text>
            <Text style={styles.desc}>{weather.weather[0].description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#0f0f0f',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 16,
        width: '90%',
    },
    city: {
        color: '#D3D3D3',
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'center',
    },
    temp: {
        color: '#6E4EE3',
        fontSize: 24,
        // marginVertical: 4,
        fontWeight: '800',
    },
    desc: {
        color: '#aaa',
        fontSize: 16,
        fontStyle: 'italic',
    },
    text: {
        color: '#fff',
    },
});
