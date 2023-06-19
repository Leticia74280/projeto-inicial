import React, {useState} from "react"
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function AdicionarItem({funcao}) {
    const [texto, setTexto] = useState('');
    const pegarMudanca = (val) => {
        setTexto(val);
    }

    return (
        <View style={styles.header}>
            <TextInput
                style={styles.input}
                placeholder="Novo Item..."
                onChangeText={pegarMudanca}
            />

            <Button
                onPress={() => funcao(texto)}
                title="Adicionar item"
                color='lightgreen'
            />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

});
