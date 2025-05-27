import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HeaderBackHome } from '@/components/HeaderBackHome'
import { CardWeatherSP } from '@/components/CardWeatherSP';

export default function Weather() {
    return (
        <View style={styles.container}>
            <HeaderBackHome />
            <ScrollView contentContainerStyle={styles.content}>

                <Text style={styles.title}>Previsão do Tempo</Text>
                <CardWeatherSP />

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
    },
});