import React, {useState, useEffect} from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';

const Login = (props) => {

  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")

  const Submit= () =>{
    var nameRegex = /^[a-zA-Z\-]+$/;
    var validUsername = userName.match(nameRegex);
    if(validUsername == null){
        alert("username name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
    
    }
    else if(password==""){
      alert("Enter password");
    }
    else{
      props.navigation.navigate("H1")
    }

  }

  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color:'#221f29', fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            value={userName}
            onChangeText={(D)=>setUserName(D)}
          />
          <Field 
            placeholder="Password" 
            secureTextEntry={true} 
            value={password}
            onChangeText={(D)=>setPassword(D)}
          />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
            <Text style={{color: '#221f29', fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={'#221f29'} btnLabel="Login" Press={() => Submit()}/>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
