import { Input } from '@/components/Input';
import { useUsersDatabase } from '@/database/useUsersDatabase';
import { useState } from 'react';
import bcrypt from 'react-native-bcrypt';
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
    ActivityIndicator,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '@/services/supabase';

export default function CriarConta() {
    const [user, setUser] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    function validarCampos() {
        if (!user || !nome || !email || !senha || !senha2) {
            Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos.");
            return;
        }
        if (senha !== senha2) {
            Alert.alert("Senhas diferentes", "As senhas digitadas não coincidem.");
            return;
        }
        handleCreateAccount(user, nome, email, senha);
    }

    const handleCreateAccount = async (user: string, name: string, email: string, password: string) => {
        setLoading(true);
        try {
            const salt = bcrypt.genSaltSync(10);
            const encryptedPassword = bcrypt.hashSync(password, salt);
            const { data, error } = await supabase
                .from("users")
                .insert({
                    user: user,
                    name: name,
                    email: email,
                    password: encryptedPassword
                })
                .select();

            if (error) {
                throw error;
            }

            await AsyncStorage.setItem('usuarioLogado', JSON.stringify({
                user: user,
                nome: nome,
                email: email
            }))
            router.push('/home')

            console.log('Usuário criado com sucesso:', data);
            return data;
        }
        catch (error: any) {
            if (error.message && error.message.includes('duplicate key value violates unique constraint')) {
                Alert.alert("Usuário existente", "Esse nome de usuário já está em uso.");
            } else {
                console.error('Erro ao criar conta:', error);
                Alert.alert("Erro", "Ocorreu um erro ao criar a conta.");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <ImageBackground
            source={{ uri: 'https://i.imgur.com/apk98SY.png' }}
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
                                source={{ uri: 'https://i.imgur.com/xyG16Yr.png' }}
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
                                <TouchableOpacity style={styles.buttonLogin}>
                                    <Text style={styles.textButtonLogin}>Já tem conta? Fazer login</Text>
                                </TouchableOpacity>
                            </Link>
                            {loading ? (<ActivityIndicator size="small" color="#8A2BE2" />) : (
                                <TouchableOpacity style={styles.button} onPress={validarCampos || setLoading(true)}>
                                    <Text style={styles.textButton}>Criar conta</Text>
                                </TouchableOpacity>
                            )}
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