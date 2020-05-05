import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function navigateToRegister() {
        navigation.navigate('Register');
    }

    function navigateToEsqueceuSenha() {
        navigation.navigate('EsqueceuSenha');
    }

    function handleToHome() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.content}>                
                <TextInput 
                    placeholder="E-mail" 
                    placeholderTextColor="black" 
                    style={styles.inputEmail}
                    onChangeText={email => setEmail(email)}
                    defaultValue={email}>
                </TextInput>

                <TextInput 
                    secureTextEntry={true} 
                    placeholder="Senha" 
                    placeholderTextColor="black" 
                    style={styles.inputSenha}
                    onChangeText={senha => setSenha(senha)}
                    defaultValue={senha}>
                </TextInput>

                <TouchableOpacity style={styles.buttonEntrar} onPress={handleToHome}>
                    <Text style={styles.textEntrar}>Entrar</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity onPress={navigateToEsqueceuSenha}>
                    <Text style={styles.esqSenha}>Esqueceu sua senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={navigateToRegister}>
                    <Text style={styles.naoCadas}>Não tenho cadastro</Text>

                    <Feather name="arrow-right" size={16} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}