import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    ActivityIndicator,
    Alert
} from 'react-native';
import { HeaderHome } from '@/components/HeaderHome'
import { FooterNavigation } from '@/components/FooterNavigation'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Input } from '@/components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bcrypt from 'bcryptjs';
import { supabase } from '@/services/supabase';

type Usuario = {
    user: string;
    nome: string;
    email: string;
};

export default function Configuracoes() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");
    const [loading, setLoading] = useState(false);
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    useEffect(() => {
        async function buscarUsuario() {
            const usuarioSalvo = await AsyncStorage.getItem('usuarioLogado');
            if (usuarioSalvo) {
                setUsuario(JSON.parse(usuarioSalvo));
                setEmail(usuario?.email || "");
                setNome(usuario?.nome || "");
            }
        }
        buscarUsuario();
    }, []);

    function validarCampos() {
        if (!nome || !email || !senha || !senha2) {
            Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos.");
            return;
        }
        if (senha !== senha2) {
            Alert.alert("Senhas diferentes", "As senhas digitadas não coincidem.");
            return;
        }
        handleUpate();
    }

    const handleUpate = async () => {
        setLoading(true);
        try {
            const salt = bcrypt.genSaltSync(10);
            const encryptedPassword = bcrypt.hashSync(senha, salt);

            const { data, error } = await supabase
                .from('users')
                .update({
                    name: nome,
                    email: email
                })
                .eq('user', usuario?.user)
                .select()
                .single();

            if (error) throw error;

            await AsyncStorage.setItem('usuarioLogado', JSON.stringify({
                user: usuario?.user,
                nome: nome,
                email: email
            }))

            console.log('Usuário atualizado com sucesso:', data);
            return data;
        }
        catch (error: any) {
            console.error('Erro ao criar conta:', error);
            Alert.alert("Erro", "Ocorreu um erro ao criar a conta.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderHome />
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Edite o seu perfil!</Text>
                </View>

                <KeyboardAvoidingView
                    style={styles.container2}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                            <View style={styles.formContainer}>
                                <Text style={styles.subtitle}>Crie sua conta para fazer parte desse projeto</Text>

                                <Input placeholderTextColor='#A9A9A9' placeholder={`Email: ${usuario?.email}`} onChangeText={setEmail} value={email} />
                                <Input placeholderTextColor='#A9A9A9' placeholder={`Nome: ${usuario?.nome}`} onChangeText={setNome} value={nome} />
                                <Input placeholderTextColor='#A9A9A9' placeholder="Nova senha" onChangeText={setSenha} value={senha} secureTextEntry={true} />
                                <Input placeholderTextColor='#A9A9A9' placeholder="Repita a senha" onChangeText={setSenha2} value={senha2} secureTextEntry={true} />

                                {loading ? (<ActivityIndicator size="small" color="#8A2BE2" />) : (
                                    <TouchableOpacity style={styles.button} onPress={validarCampos || setLoading(true)}>
                                        <Text style={styles.textButton}>Atualizar informações</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
            <FooterNavigation />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
    },
    container2: {},
    content: {
        flex: 1,
        padding: 12,
    },
    text: {
        color: '#D3D3D3',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerTitle: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    title: {
        color: '#D3D3D3',
        fontSize: 30,
        fontWeight: '800',
        alignSelf: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    formContainer: {
        width: '100%',
        backgroundColor: '#0f0f0f',
        borderRadius: 12,
        padding: 24,
        gap: 16,
        color: '#D3D3D3',
        alignItems: 'center'
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
        marginTop: 18,
    },
    textButton: {
        color: '#DCDCDC',
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitle: {
        color: '#D3D3D3',
        alignSelf: 'center',
        marginBottom: 18,
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        margin: 0,
    },
});