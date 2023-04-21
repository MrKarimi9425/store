import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Guest_screens/Login';
import ForgetPass from '../screens/Guest_screens/ForgetPass';
import Signup from '../screens/Guest_screens/Signup';


const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Code" component={ForgetPass} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
};

export { AuthStack }