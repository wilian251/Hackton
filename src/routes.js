import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/login';
import Register from './pages/register';
import EsqueceuSenha from './pages/esqueceuSenha';

import Home from './pages/home';
import Missao from './pages/Missao';
import Premio from './pages/premio';
import Conteudo from './pages/conteudo';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Register" component={Register}/>
                <AppStack.Screen name="EsqueceuSenha" component={EsqueceuSenha}/>

                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Missao" component={Missao}/>
                <AppStack.Screen name="Premio" component={Premio}/>
                <AppStack.Screen name="Conteudo" component={Conteudo}/>
            </AppStack.Navigator>
        </NavigationContainer>

    );
}