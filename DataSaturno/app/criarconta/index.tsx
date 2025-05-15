import { Input } from '@/components/Input';
import { useUsersDatabase } from '@/database/useUsersDatabase';
import { useState } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

export default function Index() {

    const [user, setUser] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [usuario, setUsuarios] = useState([])

    const usersDatabase = useUsersDatabase()

    async function criarUser() {
        try {
            const response = await usersDatabase.create({ user, nome, email, senha })

            Alert.alert("Sucesso", "Usuário criado com êxito!")

        } catch (error: any) {

            if (error.message && error.message.includes('UNIQUE constraint failed: users.user')) {
                Alert.alert("Usuário existente", "Esse nome de usuário já está em uso.")
            } else {
                console.log(error)
            }

        }
    }

    async function listarUsers() {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Input placeholderTextColor='#D3D3D3' placeholder="Usuário" onChangeText={setUser} value={user} />
                <Input placeholderTextColor='#D3D3D3' placeholder="Nome" onChangeText={setNome} value={nome} />
                <Input placeholderTextColor='#D3D3D3' placeholder="Email" onChangeText={setEmail} value={email} />
                <Input placeholderTextColor='#D3D3D3' placeholder="Senha" onChangeText={setSenha} value={senha} />
                <Button title='Criar conta' onPress={criarUser} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5', // cor do fundo da tela
        padding: 24,
        color: '#D3D3D3',
    },
    formContainer: {
        width: '100%',
        backgroundColor: '#363636', // fundo do formulário
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#A9A9A9',
        padding: 24,
        gap: 16,
        color: '#D3D3D3',
    },
});