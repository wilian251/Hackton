import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export  default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    contentTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#228B22',
        width: 360,
        paddingVertical: 12,
    },

    title: {
        paddingTop: Constants.statusBarHeight + 20,
        color: '#fff',
        fontSize: 20,
        marginLeft: 24,
    },

    toBack: {
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'row',
        marginRight: 24,
    },

    back: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 5,
    },

    content:{
        marginTop: 10,
        padding: 24,
    },

    valorMeta: {
        width: 300,
        backgroundColor: '#7372',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },

    valorAtual: {
        width: 300,
        backgroundColor: '#7372',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 10,
    },

    descricao: {
        width: 300,
        backgroundColor: '#7372',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 10, 
    },

    button: {
        width: 300,
        backgroundColor: '#228B22',
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
    },

    textCadastrar: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },

    listTitle: {
        fontSize: 20,
        marginLeft: 24,
        marginVertical: 10,
        fontWeight: 'bold',
    },

    list: {
        width: 330,
        height: 300,
        marginLeft: 20,
        marginRight: 25,
        backgroundColor: '#fff',
    },

    contentList: {
        backgroundColor: '#7372',
        borderRadius: 8,
        marginBottom: 8,
        marginRight: 10,
        padding: 20,
    },

    titleList: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    contentMissao: {
        flexDirection: 'row',
        marginLeft: 8,
        marginTop: 20,
    },

    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 5,
    },

    textValor: {
        fontSize: 15,

    },
});