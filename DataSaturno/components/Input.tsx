import { TextInput, TextInputProps, StyleSheet } from 'react-native'

export function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput style={styles.textInput} {...rest}></TextInput>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 36,
        borderWidth: 1,
        borderColor: "#999",
        borderRadius: 7,
        paddingHorizontal: 16
    }
})