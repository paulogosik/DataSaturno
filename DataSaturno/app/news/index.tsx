import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { HeaderNewsBack } from '@/components/CardsNews/HeaderNewsBack';
import { CardNewsTech } from '@/components/CardsNews/CardNewsTech';
import { CardNewsHealth } from '@/components/CardsNews/CardNewsHealth';
import { CardNewsEconomy } from '@/components/CardsNews/CardNewsEconomy';
import { useState } from 'react';

function CategoryButton({ title, onPress, active }: { title: string; onPress: () => void; active: boolean }) {
    return (
        <TouchableOpacity style={[styles.categoryButton, active && styles.activeButton]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default function News() {
    const [category, setCategory] = useState<'tech' | 'economy' | 'health'>('tech');

    const renderCard = () => {
        switch (category) {
            case 'tech':
                return <CardNewsTech />;
            case 'economy':
                return <CardNewsEconomy />;
            case 'health':
                return <CardNewsHealth />;
            default:
                return <CardNewsTech />;
        }
    };


    return (
        <View style={styles.container}>
            <HeaderNewsBack />
            <View style={styles.separator} />

            <View style={styles.buttonGroup}>
                <CategoryButton title="Tecnologia" onPress={() => setCategory('tech')} active={category === 'tech'} />
                <CategoryButton title="Economia" onPress={() => setCategory('economy')} active={category === 'economy'} />
                <CategoryButton title="Saúde" onPress={() => setCategory('health')} active={category === 'health'} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {renderCard()}
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
    separator: {
        width: '90%',
        height: 1,
        backgroundColor: '#333',
        marginVertical: 15,
        alignSelf: 'center',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
        paddingHorizontal: 10,
    },
    categoryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#333',
        borderRadius: 20,
    },
    activeButton: {
        backgroundColor: '#6E4EE3',
    },
    buttonText: {
        color: '#d3d3d3',
        fontWeight: 'bold',
    },
});