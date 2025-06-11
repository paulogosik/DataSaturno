import { TextInput, TextInputProps, StyleSheet } from 'react-native'

export function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput
            style={styles.textInput}
            placeholderTextColor='#D3D3D3'
            {...rest}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 36,
        borderWidth: 0.2,
        borderColor: "#999",
        borderRadius: 7,
        paddingHorizontal: 16,
        color: '#D3D3D3',
        width: '90%'
    }
})