import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export function CardWeatherPalmas() {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch(
                    'https://api.openweathermap.org/data/2.5/weather?q=Palmas&appid=767190045fa5f85d2eb36cd53d69583e&units=metric&lang=pt_br'
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
            <Text style={styles.city}>{weather.name} - {weather.sys.country}</Text>

            <View style={styles.separator} />

            <View style={styles.lineContent}>
                <Text style={styles.temp}>Temperatura: </Text>
                <Text style={styles.descTemp}>{weather.main.temp.toFixed(1)}°C</Text>
            </View>

            <View style={styles.lineContent}>
                <Text style={styles.temp}>Sensação térmica: </Text>
                <Text style={styles.descTemp}>{weather.main.feels_like.toFixed(1)}°C</Text>
            </View>

            <View style={styles.lineContentMinMax}>
                <Text style={styles.desc}>Mínima: {weather.main.temp_min.toFixed(1)}°C</Text>
                <Text style={styles.desc}> | </Text>
                <Text style={styles.desc}>Máxima: {weather.main.temp_max.toFixed(1)}°C</Text>
            </View>

            <View style={styles.separator} />

            <Text style={styles.desc}>Velocidade do vento: {weather.wind.speed} m/sec</Text>
            <Text style={styles.desc}>Umidade do ar: {weather.main.humidity}%</Text>
            <Text style={styles.desc}>Nuvens: {weather.clouds.all}%</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#0f0f0f',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 15,
        width: '90%',
    },
    lineContentMinMax: {
        flexDirection: 'row',
        marginTop: 6,
    },
    lineContent: {
        flexDirection: 'row',
    },
    city: {
        color: '#D3D3D3',
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'center',
    },
    temp: {
        color: '#6E4EE3',
        fontSize: 18,
        fontWeight: '800',
    },
    descTemp: {
        color: '#d3d3d3',
        fontSize: 18,
        fontWeight: '800',
    },
    desc: {
        color: '#aaa',
        fontSize: 16,
    },
    text: {
        color: '#fff',
    },
    separator: {
        width: '80%',
        height: 1,
        backgroundColor: '#333',
        marginVertical: 8,
    },

});
