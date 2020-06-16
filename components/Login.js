import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Input } from 'react-native-elements'
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


    handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
    
}

    render() {


        const [text, setText] = useState('');


        return (
            <View>
                <Text>Login to start queueing up for lines</Text>
                {/* <Input
                    placeholder='Email'
                    leftIcon={
                        <Icon
                            name='email'
                            size={24}
                            color='black'
                        />
                    }
                /> */}
                <TextInput
                placeholder='Email'
                onChangeText={text => setText(text)}
                defaultValue={text}
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
}