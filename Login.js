import React, {useState, useEffect} from 'react';
import {View, Text, Touchable, TouchableOpacity,Dimensions} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase"



const Login = (props,userNamee) => {
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("")



  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;



  
  

  const Submit= () =>{
    var nameRegex = /^[@a-zA-Z\-]+$/;
    const emailRegex = /^[\w-\.]+_[a-z]\d{5}@students.isquareit.edu.in$/;
    const validEmail = userName.match(emailRegex);
    var validUsername = userName.match(nameRegex);
    if (userName==""|| password==""){
      alert("Some of the fields are empty.Please fill all the fields");
    }
    else if (!validEmail) {
      alert(
        "Invalid email format. Please enter valid email issued by college"
      );
    } 

    // 
    else{
            signInWithEmailAndPassword(auth, userName, password)
            .then((userCredential) => {
              // Signed in 
            const user = userCredential.user;
            window.un =userName;
            props.navigation.navigate("H1")
            //props.navigation.navigate("Attendance_record")
            //props.navigation.navigate("qr")
            // props.navigation.navigate("Record")
            // ...
            })
              .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  alert(errorMessage)
             });
     
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
            marginRight:windowWidth -290
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
          <Text style={{fontSize: 40, color:'#221f29', fontWeight: 'bold', marginRight:windowWidth -290}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
              marginRight:windowWidth -290
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email"
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
         
          <View style={{marginRight:windowWidth -290}}> 
            <Btn textColor='white' bgColor={'#221f29'} btnLabel="Login" Press={() => Submit()}/>
          </View>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center",marginRight:windowWidth -290 }}>
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
