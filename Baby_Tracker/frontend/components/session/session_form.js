import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import redux from 'redux';


class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username : "Adam615",
      password: "password",
      email: "",
      user: props.session
    };
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  onSubmit(){
    const user = Object.assign({}, this.state);
    this.props.dispatchForm(user);
  }

  logOut(){
    this.props.SignOut();
  }

  render(){
    let info = this.state;
    debugger
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
          onPress={this.onSubmit.bind(this)}
          title={this.props.formType}
          color="#841584"
          Log In >
        </Button>
        <Button
          onPress={this.onSubmit.bind(this)}
          title= 'Sign Out'
          color="#841584"
          SignOut >
        </Button>
      </View>
    );
  }




  // end of class
}

export default SessionForm;
