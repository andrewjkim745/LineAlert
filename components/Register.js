import React from 'react' 
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Fontisto'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { RegisterContext } from './themeContext'





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
    }


    render() {


        const [name, email, captcha, password, passwordCheck] = useState('');


        return (
        <>
        <TextInput
            placeholder='Name'
            onChangeText={name => setname(name)}
            defaultValue={name}
        />
        <TextInput
            placeholder="Password"
            onChangeText={password => setPassword(password)}
            defaultValue={password}
        />
        <TextInput
            placeholder="Password Check"
            onChangeText={passwordCheck => setpasswordCheck(passwordCheck)}
            defaultValue={passwordCheck}
        />
        <TextInput
            placeholder='captcha'
            onChangeText={captcha => setcaptcha(captcha)}
            defaultValue={captcha}
        />
        </>
        )
    }
}