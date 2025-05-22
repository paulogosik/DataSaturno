import React from 'react';
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function FooterNavigation() {
  const Icon = require('react-native-vector-icons/Feather').default;
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  async function sairDaConta() {
        await AsyncStorage.removeItem('usuarioLogado')
        router.push('/login')
    }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push('/home')} style={styles.button}>
          <Icon name="home" size={24} color={isActive('/home') ? '#6E4EE3' : '#D3D3D3'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/configuracoes')} style={styles.button}>
          <Icon name="settings" size={24} color={isActive('/configuracoes') ? '#6E4EE3' : '#D3D3D3'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={sairDaConta} style={styles.button}>
          <Icon name="log-out" size={24} color={isActive('/login') ? '#6E4EE3' : '#D3D3D3'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0f0f0f',
    paddingVertical: 15,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 24,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
        backgroundColor: '#1c1c1c',
    },
});
