import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render(){
    return(
      <View style = {styles.container}>
        <Text> Baby Tracker </Text>
          <Button
          title="Log In"
          onPress={() =>
            this.props.navigation.navigate('LoginForm')
          }
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Greeting;
