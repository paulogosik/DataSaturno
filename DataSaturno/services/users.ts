import { supabase } from '../lib/supabase'

export const cadastrarUsuario = async (
    nome: string,
    email: string,
    senha: string
) => {

    const { data: emailData, error: emailError } = await supabase
        .from('users')
        .select('email')
        .eq('email', email)
        .single()

    if (emailError === null && emailData) {
        console.error('Já existe um usuário com este e-mail.')
        return { error: 'email', data: null }
    }
    

    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password: senha,
    })

    if (authError || !authData.user) {
        console.error('Erro ao criar conta:', authError?.message)
        return { error: authError, data: null }
    }


    const userId = authData.user.id // pega o id do usuário criado


    const { error: dbError } = await supabase
        .from('users')
        .insert([{ id: userId, nome, email }])

    if (dbError) {
        console.error('Erro ao salvar dados adicionais:', dbError.message)
        return { error: dbError, data: null }
    }

    return { error: null, data: authData.user }
}


export const listarTarefas = async () => {
    return await supabase.from('tarefas').select('*').order('id', { ascending: false })
}


export const deletarTarefa = async (id: number) => {
    return await supabase.from('tarefas').delete().eq('id', id)
}
