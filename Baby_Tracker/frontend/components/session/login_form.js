import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import redux from 'redux';


class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username : "Adam",
      password: ""
    };
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  onLogin(){

    console.log('hi');
  }

  render(){

    let info = this.state;
    return (
      <View>
        <Text> Username</Text>
        <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(username) => this.setState({username})}
           value={this.state.username}
        />
        <Text> {this.state.username}</Text>

        <Text> Password</Text>
        <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(password) => this.setState({password})}
           value={this.state.password}
        />

        <Button
          onPress={this.onLogin}
          title="Log In"
          color="#841584"
          Log In >
        </Button>
      </View>
    );
  }




  // end of class
}

export default SessionForm;
