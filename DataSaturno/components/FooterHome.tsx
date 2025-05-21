import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export function FooterHome() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.footer}>
                <Text style={styles.footerText}>© 2025 Meu Aplicativo</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#0f0f0f',
    },
    footer: {
        paddingVertical: 6,
        alignItems: 'center',
        backgroundColor: '#0f0f0f',
    },
    footerText: {
        color: '#D3D3D3',
        fontSize: 14,
    },
});
