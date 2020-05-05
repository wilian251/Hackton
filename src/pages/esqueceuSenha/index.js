import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';

import styles from './styles';

export default function EsqueceuSenha() {
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Esqueceu sua senha?!</Text>

            <Text style={styles.description}>Digite seu e-mail.</Text>

            <TextInput style={styles.inputEmail} placeholder="E-mail" placeholderTextColor="black" ></TextInput>

            <View style={styles.content}>
                <TouchableOpacity style={styles.toBack} onPress={navigateToHome}>
                    <Feather name="arrow-left" size={20} color="#000" />

                    <Text style={styles.back}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.enviar} onPress={() => {}}>
                    <Text style={styles.textEnviar}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}