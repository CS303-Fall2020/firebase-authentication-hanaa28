import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Firebase from './config/Firebase';
import * as firebase from 'firebase';
import Navigator from './route/homeStack';
export default class App extends React.Component {
 
 constructor(props){
   super(props);
   this.state = {
   };
  // Initialize firebase...
  if (!firebase.apps.length) {
    firebase.initializeApp(Firebase.FirebaseConfig);}
 }
 
 
  render(){
  return (
<Navigator/>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
});
