import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import NewsScreen from '../screens/NewsScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="News" component={NewsScreen} />
                {/* <Stack.Screen name="Login" component={LoginScreen} />  */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}