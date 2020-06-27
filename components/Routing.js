
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'
import { QueueUp } from './queueUp';



const Stack = createStackNavigator();

function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home">
            {props => <Login {...props} onPress={onPress}/>}
        </Stack.Screen>
        <Stack.Screen name="Queue" component={QueueUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;