import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        backgroundColor: '#228B22',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 100,
    },

    content: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 300,
    },

    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    },

    inputEmail: {
        marginTop: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 20
    },

    inputSenha: {
        marginTop: -10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 20
    },

    buttonEntrar: {
        borderRadius: 25,
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 120,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textEntrar: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },

    esqSenha: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    action: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    naoCadas: {
        fontSize: 14,
        marginRight: 5,
        fontWeight: 'bold',
    },
});