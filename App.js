import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QueueUp from './components/queueUp'
import Login from './components/Login'

export class App extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      isLoading: true,
      NewUser: false,
      LoggedIn: false
    }
  }


  componentDidMount = () => {

    this.setState({
      isLoading: false
    })
  }


  render() {


    const { isLoading, NewUser, LoggedIn } = this.state;

  return (
    <>
    {isLoading ? 
    {NewUser ? <Text>Please Wait while we load some information</Text> 
    :
    <Login/>    
    }
    </>
  );
}
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
