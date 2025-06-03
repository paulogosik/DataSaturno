# DataSaturno 🪐:
Este projeto é um aplicativo mobile desenvolvido com **React Native** e **Expo**, que implementa um sistema de autenticação simples com **armazenamento local de usuários** utilizando `AsyncStorage`. A autenticação protege as rotas e garante que apenas usuários válidos consigam acessar a área interna da aplicação.

## ✨ Funcionalidades

- :iphone: Tela de login com validação
- :lock: Verificação de senha com **bcrypt**
- :brain: Autenticação baseada em banco de dados local (simulado)
- :floppy_disk: Armazenamento seguro do usuário logado com `AsyncStorage`
- :white_check_mark: Redirecionamento para tela inicial após login
- :art: Layout moderno e responsivo

## 🛠️ Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/) *(opcional)*

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
   
2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto:
```bash
npx expo start
```
