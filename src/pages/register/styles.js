import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#228B22'
    },

    title: {
        paddingTop: Constants.statusBarHeight + 30,
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    description: {
        fontSize: 15,
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    inputs: {
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
    },

    inputEmail: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },

    inputSenha: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },

    inputNome: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },

    inputCPF: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },

    inputDataNasc: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },

    inputsTelefone: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    inputCodPais: {
        width: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    
    inputTelefone: {
        width: 240,
        marginLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10,
    },

    toBack: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 20,
    },

    back: {
        fontSize: 15,
        marginLeft: 5,
        color: "#000",
        fontWeight: 'bold'
    },

    cadastrar: {
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 20,
    },
    
    textCadastrar: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});