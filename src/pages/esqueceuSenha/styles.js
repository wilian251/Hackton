import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#228B22'
    },

    title: {
        paddingTop: Constants.statusBarHeight + 50,
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    description: {
        fontSize: 15,
        marginTop: 20,
        textAlign: 'left',
        fontWeight: 'bold'
    },

    inputEmail: {
        marginTop: 15,
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
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

    enviar: {
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 50,
        borderRadius: 20,
    },
    
    textEnviar: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});