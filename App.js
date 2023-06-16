import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './TelaLogin';
import MainTela from './MainTela';
import RecuperaSenha from './RecuperaSenha';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Hildr Store" component={MainTela} />
        <Stack.Screen name="Recuperar Senha" component={RecuperaSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
