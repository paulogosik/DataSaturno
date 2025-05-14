import { useSQLiteContext } from "expo-sqlite"

export type typeUserDatabase = {
    user: string
    nome: string
    email: string
    senha: string
}

export function useUsersDatabase() {
    const database = useSQLiteContext()

    async function create(data: typeUserDatabase) {

        const statement = await database.prepareAsync(
            "INSERT INTO users (user, nome, email, senha) VALUES ($user, $nome, $email, $senha);"
        )

        try {
            const result = await statement.executeAsync({
                $user: data.user,
                $nome: data.nome,
                $email: data.email,
                $senha: data.senha
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()

            return { insertedRowId }

        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }

    }

    return { create }
}