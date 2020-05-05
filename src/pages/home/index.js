import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather, Octicons} from '@expo/vector-icons';
import styles from './styles';

export default function Home() {
    const navigation = useNavigation();

    function navigateToMissao() {
        navigation.navigate('Missao');
    }

    function navigateToPremio() {
        navigation.navigate('Premio');
    }

    function navigateToConteudo() {
        navigation.navigate('Conteudo');
    }

    function navigateToLogout () {
        navigation.navigate('Login');
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.contentTitle}>
                    <Text style={styles.title}>Bem Vindo(a)</Text>

                    <Text style={styles.titleNome}>Josnel</Text>
                </View>
                <TouchableOpacity style={styles.logout} onPress={navigateToLogout}>
                    <Feather name="power" size={30} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                <View style={styles.controle}>
                    <View  style={styles.gastos}>
                        <Text>gastos</Text>
                    </View>

                    <View  style={styles.investimentos}>
                        <Text>investimentos</Text>
                    </View>

                    <View  style={styles.receita}>
                        <Text>receita</Text>
                    </View>
                </View>

                <View style={styles.gamification}>
                    <TouchableOpacity style={styles.missao} onPress={navigateToMissao}>
                        <Feather name="check-square" size={20} color="#228B22" />

                        <Text style={styles.text}>Missões</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity style={styles.premio} onPress={navigateToPremio}>
                            <Feather name="award" size={20} color="#228B22" />

                            <Text style={styles.text}>Prêmios</Text>
                    </TouchableOpacity>
                            
                    <TouchableOpacity style={styles.conteudo} onPress={navigateToConteudo}>
                        <Octicons name="book" size={20} color="#228B22" />

                        <Text style={styles.text}>Conteúdos</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.perfilGame}>
                    <Text style={styles.nomeContent}>Perfi Jogador</Text>
                    <View style={styles.perfil}>
                        <Text style={styles.textNome}>Josnel da Silva</Text>

                        <View style={styles.patente}>
                            <Text style={styles.textTitle}>Nível:</Text>
                            <Text style={styles.textValor}>123</Text>
                        </View>

                        <View style={styles.patente}>
                            <Text style={styles.textTitle}>Patente:</Text>
                            <Text style={styles.textValor}>123</Text>
                        </View>

                        <View style={styles.patente}>
                            <Text style={styles.textTitle}>Maturidade:</Text>
                            <Text style={styles.textValor}>Aprendiz</Text>
                        </View>
                        
                    </View>
                </View>   
            </View>
        </View>
    );
}