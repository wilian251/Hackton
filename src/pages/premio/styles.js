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

    list: {
        maxWidth: 320,
        height: 300,
        marginLeft: 24,
        marginTop: 20,
        backgroundColor: '#fff',
    },

    contentList: {
        backgroundColor: '#7372',
        borderRadius: 8,
        marginBottom: 8,
        marginRight: 10,
        padding: 20,
    },

    contentPremio: {
        height: 35,
        maxHeight: 50,
        marginLeft: 8,
    },

    textTipo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 5,
        marginTop: 5,
    },

    valorTipo: {
        marginTop: 3,
        fontSize: 15,
        textAlign: 'left',
        marginTop: 5,
    },

    textDescricao: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 5,
        marginTop: 5,
    },

    valorDescricao: {
        marginTop: 3,
        fontSize: 15,
        textAlign: 'left',
        marginTop: 5,
    },

    confirmar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginLeft: 70,
        backgroundColor: '#fff',
        width: 130,
        padding: 8,
        borderRadius: 20,
    },
    
    textConfirmar: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 5,
    },

});