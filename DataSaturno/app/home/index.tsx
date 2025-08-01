import { View, StyleSheet, ScrollView } from 'react-native';
import { HeaderHome } from '@/components/HeaderHome';
import { FooterNavigation } from '@/components/FooterNavigation';
import { CardWeather } from '@/components/CardsWeather/CardWeather';
import { CardNews } from '@/components/CardsNews/CardNews';

export default function Home() {
    return (
        <View style={styles.container}>
            <HeaderHome />
            <ScrollView contentContainerStyle={styles.content}>

                <CardWeather />
                <CardNews />
                
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
        justifyContent: 'center',
        alignItems: 'center',
    },
});