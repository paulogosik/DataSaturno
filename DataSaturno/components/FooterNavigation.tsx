import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

export function FooterNavigation() {
  const Icon = require('react-native-vector-icons/Feather').default;
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => router.push('/home')} style={styles.button}>
        <Icon name="home" size={24} color={isActive('/home') ? '#6E4EE3' : '#D3D3D3'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/')} style={styles.button}>
        <Icon name="settings" size={24} color={isActive('/configuracoes') ? '#6E4EE3' : '#D3D3D3'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')} style={styles.button}>
        <Icon name="log-out" size={24} color={isActive('/login') ? '#6E4EE3' : '#D3D3D3'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0f0f0f',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#222',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
