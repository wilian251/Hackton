import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';

export default function Register() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const [Nome, setNome] = useState('');
    const [CPF, setCpf] = useState('');
    const [DataNascimento, setDataNascimento] = useState('');
    const [CodPaís, setCodPais] = useState('');
    const [Telefone, setTelefone] = useState('');

    function navigateToLogin() {
        navigation.navigate('Login');
    }

    function handleToHome() {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
           
            <Text style={styles.title}>Cadastre-se</Text>          

            <Text style={styles.description}>Faça seu cadatro, entre na plataforma e começe a economizar. Pordendo até ganhar prêmios!!</Text>
            
            <ScrollView>
                <View style={styles.inputs}>
                    <TextInput 
                        textContentType="emailAddress" 
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

                    <TextInput 
                        secureTextEntry={true} 
                        placeholder="Confirmar senha" 
                        placeholderTextColor="black" 
                        style={styles.inputSenha}
                        onChangeText={confSenha => setConfSenha(confSenha)}
                        defaultValue={confSenha}>
                    </TextInput>

                    <TextInput 
                        placeholder="Nome" 
                        placeholderTextColor="black" 
                        style={styles.inputNome}
                        onChangeText={Nome => setNome(Nome)}
                        defaultValue={Nome}>
                    </TextInput>

                    <TextInput 
                        placeholder="XXX.XXX.XXX-XX" 
                        placeholderTextColor="black" 
                        style={styles.inputCPF}
                        onChangeText={CPF => setCpf(CPF)}
                        defaultValue={CPF}>
                    </TextInput>

                    <TextInput 
                        placeholder="XX/XX/XXXX" 
                        placeholderTextColor="black" 
                        style={styles.inputDataNasc}
                        onChangeText={DataNascimento => setDataNascimento(DataNascimento)}
                        defaultValue={DataNascimento}>
                    </TextInput>
                    
                    <View style={styles.inputsTelefone}>
                        <TextInput 
                            placeholder="+55" 
                            placeholderTextColor="black" 
                            style={styles.inputCodPais}
                            onChangeText={CodPaís => setCodPais(CodPaís)}
                            defaultValue={CodPaís}>
                        </TextInput>

                        <TextInput 
                            placeholder="(99) 9 9999-9999" 
                            placeholderTextColor="black" 
                            style={styles.inputTelefone}
                            onChangeText={Telefone => setTelefone(Telefone)}
                            defaultValue={Telefone}>
                        </TextInput>
                    </View>
                </View>
                <View style={styles.content}>

                    <TouchableOpacity style={styles.toBack} onPress={navigateToLogin}>
                        <Feather name="arrow-left" size={20} color="#000" />
                        <Text style={styles.back}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cadastrar} onPress={handleToHome}>
                        <Text style={styles.textCadastrar}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}