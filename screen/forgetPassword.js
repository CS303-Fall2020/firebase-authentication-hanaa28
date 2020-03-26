import React from 'react';
import{StyleSheet,View, TextInput,Button,Text, Alert} from 'react-native';
import * as firebase from 'firebase';

export default class ForgetPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            email:"",
            errormessage:null
        };
    }
    onResetPasswordPress=()=>{
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(()=>{
            this.setState({ errormessage: "password reset email has been sent.."})
        },(error)=>{
            Alert.alert(error.message)
        })
    }
    onBackToSignUpPress=()=>{
        this.props.navigation.navigate("SignUp")
    }
    onBackToLoginPress=()=>{
        this.props.navigation.navigate("Login")
    }

    render(){
        return(
            <View style={{paddingTop:50,alignItems:"center"}}>
       <Text>{this.state.errormessage}</Text>
        <TextInput style={{width:200,height:40,borderWidth:1}}
        value={this.state.email} placeholder="Email" keyboardType="email-address"
        autoCapitalize="none" autoCorrect={false}
        onChangeText={(text) => {this.setState({email:text})}}
        />
        <View style={{paddingTop:20}}/>
         <Button title="Reset Password" onPress={this.onResetPasswordPress}color='black' />
         <View style={{paddingTop:20}}/>
          <Button title="Back to Login" onPress={this.onBackToLoginPress} color='black' />
          <View style={{paddingTop:20}}/>
          <Button title="Back to SignUp" onPress={this.onBackToSignUpPress} color='black' />
          
            </View>
       )
    }
}
const style=StyleSheet.create({

});