import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'



export default class Details extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            name: '',
            image: '',
            queueTime: '',
            queue: [],

        }
    }

    render() {
        return (
            <View>
                <Text>hi</Text>
            </View>
        )
    }
}