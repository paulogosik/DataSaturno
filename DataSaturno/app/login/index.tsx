import { Input } from '@/components/Input';
import { useRouter, Link } from 'expo-router';
import { useUsersDatabase } from '@/database/useUsersDatabase';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { act, useState } from 'react';
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
    ActivityIndicator,
} from 'react-native';
import { supabase } from '@/services/supabase';

export default function Index() {
    const [user, setUser] = useState("")
    const [senha, setSenha] = useState("")
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (user: string, password: string) => {
        setLoading(true);
        try {
            const { data: actualUser, error } = await supabase
                .from('users')
                .select('*')
                .eq('user', user)
                .single();

            if (error || !user) {
                throw new Error("Usuário não cadastrado");
            }

            const isPasswordValid = await bcrypt.compare(password, actualUser.password);

            if (!isPasswordValid) {
                throw new Error("Senha incorreta");
            }

            await AsyncStorage.setItem('usuarioLogado', JSON.stringify({
                user: actualUser["user"],
                nome: actualUser["name"],
                email: actualUser["email"]
            }))

            router.push('/home')

        } catch (error: any) {
            Alert.alert("Erro", error.message);
            return null;
        } setLoading(false);
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
                            <Text style={styles.title}>Bem-vindo de volta!</Text>
                            <Text style={styles.subtitle}> Entre na sua conta e continue de onde parou! </Text>

                            <Input placeholderTextColor='#A9A9A9' placeholder="Usuário" onChangeText={setUser} value={user} />
                            <Input placeholderTextColor='#A9A9A9' placeholder="Senha" onChangeText={setSenha} value={senha} secureTextEntry={true} />

                            <Link href='./criarconta' asChild>
                                <TouchableOpacity style={styles.buttonLogin}>
                                    <Text style={styles.textButtonLogin}>Não tem conta? Criar conta</Text>
                                </TouchableOpacity>
                            </Link>
                            {loading ? (<ActivityIndicator size="small" color="#8A2BE2" />) : (
                                <TouchableOpacity style={styles.button} onPress={() => handleLogin(user, senha)}>
                                    <Text style={styles.textButton}>Fazer login</Text>
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
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
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
        width: '100%',
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