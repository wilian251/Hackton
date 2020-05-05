import React from 'react';
import { FlatList, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';

import styles from './styles';

export default function Missao() {
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentTitle}>
                <Text style={styles.title}>Cadastrar Missão</Text>

                <TouchableOpacity style={styles.toBack} onPress={navigateToHome}>
                    <Feather name="arrow-left" size={20} color="#fff" />
                    <Text style={styles.back}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <TextInput placeholder="Valor da meta" placeholderTextColor="black" style={styles.valorMeta}></TextInput>
                <TextInput placeholder="Valor Atual" placeholderTextColor="black" style={styles.valorAtual}></TextInput>
                <TextInput placeholder="Descrição" placeholderTextColor="black" style={styles.descricao}></TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textCadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.listTitle}>Missões</Text>

            <FlatList 
                style={styles.list}
                data={[1,2,3]}
                keyExtractor={list => String(list)}
                renderItem={() => (
                    <View style={styles.contentList}>
                        <Text style={styles.titleList}>Missão</Text>

                        <View style={styles.contentMissao}>
                            <Text style={styles.textTitle}>Descrição:</Text>
                            <Text style={styles.textValor}>Comprar meu carro</Text>
                        </View>
                            
                        <View style={styles.contentMissao}>
                            <Text style={styles.textTitle}>Valor da Meta:</Text>
                            <Text style={styles.textValor}>Comprar meu carro</Text>
                        </View>

                        <View style={styles.contentMissao}>
                            <Text style={styles.textTitle}>Valor Atual:</Text>
                            <Text style={styles.textValor}>Comprar meu carro</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}