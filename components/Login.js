import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'




export const Login = ({ }) => {
    return (
        <View>
            <Text>Login to start queueing up for lines</Text>
            <Input
            placeholder='Email'
            />
            <Input
            placeholder='Password'
            />     
        </View>
    )
}