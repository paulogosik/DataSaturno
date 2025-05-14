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
      <Input placeholder="Usuário" onChangeText={setUser} value={user}></Input>
      <Input placeholder="Nome" onChangeText={setNome} value={nome}></Input>
      <Input placeholder="Email" onChangeText={setEmail} value={email}></Input>
      <Input placeholder="Senha" onChangeText={setSenha} value={senha}></Input>
      <Button title='Criar conta' onPress={criarUser} />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 48,
    gap: 16
  }
})