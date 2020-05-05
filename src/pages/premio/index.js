import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather, Octicons} from '@expo/vector-icons';

import styles from './styles';

export default function Premio() {
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentTitle}>
                <Text style={styles.title}>Prêmios</Text>

                <TouchableOpacity style={styles.toBack} onPress={navigateToHome}>
                    <Feather name="arrow-left" size={20} color="#fff" />
                    <Text style={styles.back}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                style={styles.list}
                data={[1,2,3,4,5,6]}
                keyExtractor={list => String(list)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                <View style={styles.contentList}>

                    <View style={styles.contentTipo}>
                        <Text style={styles.textTipo}>Tipo:</Text>
                        <Text style={styles.valorTipo}>20% de desconto</Text>
                    </View>
                                
                    <View style={styles.contentDescricao}>
                        <Text style={styles.textDescricao}>Descrição:</Text>
                        <Text style={styles.valorDescricao}>Desconto em toda a loja da Steam</Text>
                    </View>

                    <TouchableOpacity style={styles.confirmar}>
                        <Text style={styles.textConfirmar}>Confirmar</Text>
                        <Octicons name="check" size={20} color="#228B22" />
                    </TouchableOpacity>
                 </View>
                )}
            />
        </View>
    );
}