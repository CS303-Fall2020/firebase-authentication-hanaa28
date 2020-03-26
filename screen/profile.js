import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import * as firebase from "firebase";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentUser: ""};
  }

  OnSignOut = () => {
    firebase.auth().signOut();
  }

  render() {
    const {currentUser} = firebase.auth()
    return (
        <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log("dismissed keyboard");
        }}
      >
      <View style={styles.container}>
          <Text style={{fontSize:20}}>Hello {currentUser.email} </Text>
          <View style={{paddingTop:50}} />
          <Button title="SignOut" color='black' onPress={this.OnSignOut} />
      </View>
      </TouchableWithoutFeedback>
    );
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
