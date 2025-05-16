import { Input } from '@/components/Input';
import { useUsersDatabase } from '@/database/useUsersDatabase';
import { Background } from '@react-navigation/elements';
import { useState } from 'react';
import bcrypt from 'bcryptjs';
import {
    View,
    StyleSheet,
    Alert,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { Link } from 'expo-router';

export default function CriarConta() {

    const [user, setUser] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senha2, setSenha2] = useState("")
    const [usuario, setUsuarios] = useState([])

    const usersDatabase = useUsersDatabase()

    function validarCampos() {
        if (!user || !nome || !email || !senha || !senha2) {
            Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos.");
            return;
        }
        if (senha !== senha2) {
            Alert.alert("Senhas diferentes", "As senhas digitadas não coincidem.");
            return;
        }

        criarUser()
    }

    async function criarUser() {
        try {
            const salt = await bcrypt.genSalt(10);
            const senhaCriptografada = await bcrypt.hash(senha, salt);

            const response = await usersDatabase.create({ user, nome, email, senha: senhaCriptografada })
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
        <ImageBackground
            source={require('@/assets/images/bg.png')}
            style={styles.background}
            resizeMode='cover'
        >
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                        <View style={styles.formContainer}>
                            <Image
                                source={require('@/assets/images/iconapp2.png')}
                                resizeMode='contain'
                                style={styles.logo}
                            />
                            <Text style={styles.title}>Bem-vindo ao DataSaturno!</Text>
                            <Text style={styles.subtitle}>Crie sua conta para fazer parte desse projeto</Text>

                            <Input placeholderTextColor='#A9A9A9' placeholder="Usuário" onChangeText={setUser} value={user} />
                            <Input placeholderTextColor='#A9A9A9' placeholder="Email" onChangeText={setEmail} value={email} />
                            <Input placeholderTextColor='#A9A9A9' placeholder="Nome" onChangeText={setNome} value={nome} />
                            <Input placeholderTextColor='#A9A9A9' placeholder="Senha" onChangeText={setSenha} value={senha} secureTextEntry={true} />
                            <Input placeholderTextColor='#A9A9A9' placeholder="Repita a senha" onChangeText={setSenha2} value={senha2} secureTextEntry={true} />

                            <Link href='./login' asChild>
                                <TouchableOpacity style={styles.buttonLogin} onPress={criarUser}>
                                    <Text style={styles.textButtonLogin}>Já tem conta? Fazer login</Text>
                                </TouchableOpacity>
                            </Link>
                            <TouchableOpacity style={styles.button} onPress={validarCampos}>
                                <Text style={styles.textButton}>Criar conta</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
        color: '#D3D3D3',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    formContainer: {
        width: '100%',
        backgroundColor: '#1C1C1C',
        borderRadius: 12,
        padding: 24,
        gap: 16,
        color: '#D3D3D3',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLogin: {
        alignItems: 'center',
        marginTop: 24,
    },
    textButtonLogin: {
        color: '#9370DB',
        fontSize: 16,
        marginBottom: -5,
        textDecorationLine: 'underline',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#8A2BE2',
        borderRadius: 7,
        paddingVertical: 10,
    },
    textButton: {
        color: '#DCDCDC',
        fontWeight: 'bold',
        fontSize: 16,
    },
    title: {
        color: '#D3D3D3',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#D3D3D3',
        alignSelf: 'center',
        marginTop: -10,
        marginBottom: 24,
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        margin: 0,
    },
});