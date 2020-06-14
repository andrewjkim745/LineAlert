import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Fontisto'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



export const Login = ({ }) => {
    return (
        <View>
            <Text>Login to start queueing up for lines</Text>
            <Input
            placeholder='Email'
            leftIcon={
                <Icon
                    name='email'
                    size={24}
                    color='black'
                />
            }
            />
            <Input
            placeholder='Password'
            leftIcon={
                <Icon
                    name='onepassword'
                    size={24}
                    color='black'
                />
            }
            />     
        </View>
    )
}