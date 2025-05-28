import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export function HeaderNewsHome() {
    const Icon = require('react-native-vector-icons/Feather').default;
    const router = useRouter();

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.contentHeader}>
                    <TouchableOpacity style={styles.headerBack} onPress={() => router.push('/home')}>
                        <Icon name="chevron-left" size={24} color='#d3d3d3' />
                    </TouchableOpacity>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Notícias</Text>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
    },
    contentHeader: {
        flexDirection: 'row',
        backgroundColor: '#0f0f0f',
        width: '60%',
        borderRadius: 36,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    headerBack: {
        paddingVertical: 12,
    },
    containerTitle: {
        justifyContent: 'center',
        paddingHorizontal: 18,
    },
    title: {
        color: '#d3d3d3',
        fontSize: 30,
        fontWeight: '800',
        alignSelf: 'center',
    },
});