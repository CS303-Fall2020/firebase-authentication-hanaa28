import React from 'react';
import{StyleSheet,View, Text,TextInput,Button, Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import * as firebase from 'firebase'; 

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            email:"",
            password:"",
        };}
onLoginPress =()=>{
firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
.then(()=>{

},(error)=>{
    Alert.alert(error.message)
});
}
onCreateAccountPress=()=>{
 this.props.navigation.navigate("SignUp")
}
onForgetPasswordPress=()=>{
    this.props.navigation.navigate("ForgetPassword")
}

    render(){
        return(
            <TouchableWithoutFeedback
            onPress={()=>{
                Keyboard.dismiss();
                console.log("dismissed keyboard");
            }}>
       <View style={{paddingTop:50,alignItems:"center"}}>
                <Text>Login</Text>
    <TextInput style={{width:200,height:40,borderWidth:1}}
    value={this.state.email}
    placeholder="Email" keyboardType="email-address"
    autoCapitalize="none" autoCorrect={false}
    onChangeText={(text) => {this.setState({email:text})}}
    />
    <View style={{paddingTop:20}}/>
    <TextInput style={{width:200,height:40,borderWidth:1}}
        value={this.state.password} placeholder="Password"
        secureTextEntry={true} autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => {this.setState({password:text})}}
        />
        <View style={{paddingTop:20}}/>
        <Button title="Login" onPress={this.onLoginPress}color='black' />
        <View style={{paddingTop:20}}/>
      <Button title="create account" onPress={this.onCreateAccountPress} color='black' />
      <View style={{paddingTop:20}}/>
      <Button title="ForgetPassword" onPress={this.onForgetPasswordPress} color='black' />
        </View>
        </TouchableWithoutFeedback>
   ) }
}
const style=StyleSheet.create({

});