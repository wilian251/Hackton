import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export  default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#228B22',
        width: 360,
        paddingVertical: 12,
    },

    contentTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#228B22',
    },

    title: {
        paddingTop: Constants.statusBarHeight + 20,
        color: '#fff',
        fontSize: 20,
        marginLeft: 24,
    },

    titleNome: {
        paddingTop: Constants.statusBarHeight + 20,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 8,
    },

    logout: {
        paddingTop: Constants.statusBarHeight + 20,
        marginRight: 24,
    },

    body: {
        flex: 1,
        alignItems: 'center',
    },

    controle: {
        width: 330,
        borderRadius: 8,
        marginBottom: 24,
        marginTop: 15
    },

    gastos: {
        backgroundColor: '#7372',
        padding: 10,
        borderRadius: 20,
    },

    investimentos: {
        backgroundColor: '#7372',
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
    },

    receita: {
        backgroundColor: '#7372',
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
    },

    gamification: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    missao: {
        paddingHorizontal: 25,
        padding: 24,
        backgroundColor: '#7372',
        marginRight: 6,
        borderRadius: 8,
        alignItems: 'center',
    },

    premio: {
        paddingHorizontal: 26,
        padding: 24,
        backgroundColor: '#7372',
        marginRight: 6,
        borderRadius: 8,
        alignItems: 'center',
    },

    conteudo: {
        paddingHorizontal: 18,
        padding: 24,
        backgroundColor: '#7372',
        borderRadius: 8,
        alignItems: 'center',
    },

    text: {
        marginTop: 2,
        fontSize: 15,
    },

    perfilGame: {
        backgroundColor: '#7372',
        width: 330,
        padding: 24,
        borderRadius: 8,
        marginTop: 20,
    },

    nomeContent: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },  

    textNome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 8
    },

    patente: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 8,
    },


    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 5,
    },

    textValor: {
        fontSize: 15
    },
});