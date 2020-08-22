import React from 'react' 
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Fontisto'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ThemeContext } from './themeContext'





export default class Register extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            name: '',
            email: '',
            captcha: '',
            password: '',
            passwordCheck: ''
        }



        handleChange = (e) => {
            [e.target.name] = e.target.value
        }
    }
}