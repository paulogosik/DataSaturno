import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export function HeaderBackHome() {
    const Icon = require('react-native-vector-icons/Feather').default;
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                    <TouchableOpacity style={styles.headerBack} onPress={() => router.push('/home')}>
                        <Icon name="chevron-left" size={24} color='#d3d3d3'/>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#1c1c1c',
    },
    container: {
        flexDirection: 'row',
        paddingHorizontal: 18,
        paddingTop: 6,
        paddingBottom: 12,
    },
    headerBack: {
        paddingVertical: 12,
        backgroundColor: '#0f0f0f',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 36,
        width: '25%',
        height: 48,
    },
});