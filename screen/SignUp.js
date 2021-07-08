import React from 'react';
import{StyleSheet,View, TextInput,Text,Button,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import * as firebase from 'firebase';

export default class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            passwordConfirm:"",
          }; }
onSignUpPress=()=>{
    if(this.state.password !== this.state.passwordConfirm){
        Alert.alert("passwords do not match");
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then(()=>{
    
    },(error)=>{
        Alert.alert(error.message)
    });
}
onBackToLoginPress=()=>{
    this.props.navigation.navigate("Login")
}


    render(){
        return ( 
            <TouchableWithoutFeedback
            onPress={()=>{
                Keyboard.dismiss();
                console.log("dismissed keyboard");
            }}>
             <View style={{paddingTop:50,alignItems:"center"}}>
                          <Text>SignUp</Text>
           {/* <TextInput style={{width:200,height:40,borderWidth:1}}
        placeholder="name" value={this.state.name}
    autoCapitalize="none" autoCorrect={false}
        onChangeText={( text) => {this.setState({name:text})}}
        />  */}
        <View style={{paddingTop:10}}/>
        <TextInput style={{width:200,height:40,borderWidth:1}}
        placeholder="email" value={this.state.email}
        keyboardType="email-address"
    autoCapitalize="none" autoCorrect={false}
        onChangeText={(text) => {this.setState({email:text})}}
        />
        <View style={{paddingTop:10}}/>
        <TextInput style={{width:200,height:40,borderWidth:1}}
            placeholder="password" value={this.state.password}
            secureTextEntry={true} autoCapitalize="none"
        autoCorrect={false}
            onChangeText={(text) => {this.setState({password:text})}}
            />
            <View style={{paddingTop:10}}/>
             <TextInput style={{width:200,height:40,borderWidth:1}}
              placeholder="passwordConfirm" 
              secureTextEntry={true} autoCapitalize="none"
        autoCorrect={false}
              value={this.state.passwordConfirm}
            onChangeText={(text) => {this.setState({passwordConfirm:text})}}
            />
            <View style={{paddingTop:20}}/>
            <Button title="SignUp" onPress={this.onSignUpPress} color='black'/>
            <View style={{paddingTop:20}}/>
            <Button title="back to Login" onPress={this.onBackToLoginPress} color='black' />
            </View>
            </TouchableWithoutFeedback> )
    }
}
const style=StyleSheet.create({

});