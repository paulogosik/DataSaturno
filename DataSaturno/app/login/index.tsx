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

export default function Index() {

    const [user, setUser] = useState("")
    const [senha, setSenha] = useState("")

    const usersDatabase = useUsersDatabase()

    async function login() {
        if (!user || !senha) {
            Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos.");
            return;
        }

        try {
            const validUser = await usersDatabase.verificarUser(user)

            if (!validUser) {
                Alert.alert("Erro", "Usuário não encontrado")
                return
            }

            const senhaConfere = await bcrypt.compare(senha, validUser.senha)

            if (!senhaConfere) {
                Alert.alert("Erro", "Senha incorreta")
                return
            }

            Alert.alert("Sucesso", `Bem-vindo, ${validUser.user}`)


        } catch (error) {
            console.log("Erro no login:", error)
            Alert.alert("Erro", "Não foi possível fazer login")
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
                            <Text style={styles.title}>Bem-vindo de volta!</Text>
                            <Text style={styles.subtitle}> Entre na sua conta e continue de onde parou! </Text>

                            <Input placeholderTextColor='#A9A9A9' placeholder="Usuário" onChangeText={setUser} value={user} />
                            <Input placeholderTextColor='#A9A9A9' placeholder="Senha" onChangeText={setSenha} value={senha} secureTextEntry={true} />

                            <Link href='./criarconta' asChild>
                                <TouchableOpacity style={styles.buttonLogin}>
                                    <Text style={styles.textButtonLogin}>Não tem conta? Criar conta</Text>
                                </TouchableOpacity>
                            </Link>
                            <TouchableOpacity style={styles.button} onPress={login}>
                                <Text style={styles.textButton}>Fazer login</Text>
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