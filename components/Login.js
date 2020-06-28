import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Fontisto'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ThemeContext } from './themeContext'




export default class Login extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            email: '',
            password: '',
            username: ''
        }
    }

    render() {


        const [email, setEmail, password, setPassword] = useState('');


        return (
            <>
            <ThemeContext.Consumer>
                {({theme}) => (
                <View style={{ backgroundColor: theme.background}}>
                    <Text>Login to start queueing up for lines</Text>
                    <TextInput
                        placeholder='Email'
                        onChangeText={email => setEmail(email)}
                        defaultValue={email}
                    />
                    <TextInput
                        placeholder="Password"
                        onChangeText={password => setPassword(password)}
                        defaultValue={password}
                    />
                </View>
                <Button
                    title='Continue as Guest'
                    onPress={this.props.onPress}

                />
                <Button
                    title='Login'
                />
                )}
            </ThemeContext.Consumer>
            </>
        )
    }
}