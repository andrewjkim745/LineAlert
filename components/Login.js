import React from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Fontisto'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'




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


        const [email, setEmail, password, setPassword ] = useState('');


        return (
            <>
            <View>
                <Text>Login to start queueing up for lines</Text>
                <TextInput
                placeholder='Email'
                onChangeText={email => setEmail(email)}
                defaultValue={email}
                />
                <TextInput
                placeholder="Password"
                onChangeText={password =>setPassword(password)}
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
            </>

        )
    }
}