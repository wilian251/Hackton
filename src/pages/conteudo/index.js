import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather, Octicons} from '@expo/vector-icons';

import styles from './styles';

export default function Conteudo() {
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentTitle}>
                <Text style={styles.title}>Conteúdos</Text>

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

                    <View style={styles.contentVisibility}>
                        <Text style={styles.textVisibility}>Visibility:</Text>
                        <Text style={styles.valorVisibility}>20% de desconto</Text>
                    </View>
                                
                    <View style={styles.contentTitleList}>
                        <Text style={styles.textTitle}>Título:</Text>
                        <Text style={styles.valorTitle}>Desconto em toda a loja da Steam</Text>
                    </View>

                    <View style={styles.contentConteudo}>
                        <Text style={styles.textConteudo}>Conteúdo:</Text>
                        <Text style={styles.valorConteudo}>Desconto em toda a loja da Steam</Text>
                    </View>

                    <View style={styles.contentAuthor}>
                        <Text style={styles.textAuthor}>Author:</Text>
                        <Text style={styles.valorAuthor}>Santader</Text>
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