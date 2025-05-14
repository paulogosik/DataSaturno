import { useState } from 'react'
import { View, TextInput, Button, Alert } from 'react-native'
import { cadastrarUsuario } from '../services/users'

export default function Cadastro() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleCadastro = async () => {
    const { error } = await cadastrarUsuario(email, senha)

    if (error) {
      Alert.alert('Erro', error.message)
    } else {
      Alert.alert('Sucesso', 'Verifique seu e-mail para confirmar o cadastro.')
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  )
}
