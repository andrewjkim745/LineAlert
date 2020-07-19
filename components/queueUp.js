import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'




export class QueueUp extends React.Component {
    constructor(props) {
        super(props)
    this.state = {

    }
}


    render() {
        return (
        <View style={styles.container}>
            <Text>Queue up for the King Da Ka and we will alert you when you are next in line!</Text>
            <Button
            onPress={queue}
            style={styles.buttons}
            title="Queue Up"
            color='#841584'
            />
        </View>
    )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttons: {
        color: 'lightblue'
    }
})