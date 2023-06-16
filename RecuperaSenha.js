import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import TelaLogin from './TelaLogin';

const RecuperaSenha = () => {
    const [email, setEmail] = useState('');
    const [emailEhValido, setEmailEhValido] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recuperação de Senha</Text>
            <TextInput
                style={[styles.input, !emailEhValido && styles.inputError]}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            {!emailEhValido && <Text style={styles.errorText}>Por favor, insira um email válido.</Text>}
            <Button title="Enviar"
                onPress={() => {
                    if (email.trim() === '') {
                        Alert.alert('Campo vazio', 'Por favor, preencha o campo de e-mail.');
                    } else {
                        Alert.alert('Recuperação de Senha', `Um e-mail de recuperação foi enviado para ${email}.`);
                    }
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
    },
});

export default RecuperaSenha;
