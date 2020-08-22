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
            onChangeText={name => setEmail(name)}
            defaultValue={name}
        />
        <TextInput
            placeholder="Password"
            onChangeText={password => setPassword(password)}
            defaultValue={password}
        />
        <TextInput
            placeholder="email"
            onChangeText={passwordCheck => setpasswordCheck(passwordCheck)}
            defaultValue={passwordCheck}
        />
        {/* <Image></Image> */}
        <TextInput
            placeholder='Name'
            onChangeText={captcha => setcaptcha(name)}
            defaultValue={captcha}
        />
        </>
        )
    }
}