import React, {useState, useEffect} from 'react';
import {View, Text, Touchable, TouchableOpacity,Dimensions} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import {auth} from "./firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const Signup = props => {


  // const auth = getAuth();
  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;

  const [firstname,setfirstname] = useState("")
  const [lastname,setlastname] = useState("")
  const [username,setusername] = useState("")
  const [password,setPassword] = useState("")
  const [cpassword,setcpassword] = useState("")
  const [phone,setPhone] = useState("")


 


  const Signup= () =>{

    var nameRegex = /^[a-zA-Z\-]+$/;
    var validUsername = username.match(nameRegex);
    if (firstname=="" || lastname=="" || username=="" || phone=="" || password=="" || cpassword==""){
      alert("Some of the fields are empty.Please fill all the fields");
    }
  
    // else if(validUsername == null){
    //     alert("username name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
    
    // }
    else if(password==""){
      alert("Enter the password");
    }

    else if(password!=cpassword){
      alert('The password and confirmation password do not match.')
    }
    else{

      createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
         props.navigation.navigate("Login")
        // ...
        })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
      
    
      // 
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
            marginTop: 20,
            marginRight:windowWidth -290
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
            marginRight:windowWidth -270
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            marginRight:windowWidth -350,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field 
            placeholder="First Name" 
            value={firstname}
            onChangeText={(D)=>setfirstname(D)} 
          />
          <Field 
            placeholder="Last Name"
            value={lastname}
            onChangeText={(D)=>setlastname(D)} 
          />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            value={username}
            onChangeText={(D)=>setusername(D)}
          />
          <Field 
            placeholder="Contact Number" 
            keyboardType={'numeric'}
            value={phone}
            onChangeText={(D)=>setPhone(D)} 
          />
          <Field 
            placeholder="Password" 
            secureTextEntry={true} 
            value={password}
            onChangeText={(D)=>setPassword(D)}
          />
          <Field 
            placeholder="Confirm Password" 
            secureTextEntry={true}
            value={cpassword}
            onChangeText={(D)=>setcpassword(D)} 
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
              marginTop:10,
              marginRight:windowWidth-290
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: '#221f29', fontWeight: 'bold', fontSize: 16}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10,
              marginRight:windowWidth-290
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: '#221f29', fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>
          <View style={{marginRight:windowWidth-290}}>
          <Btn
            textColor="white"
            bgColor={'#221f29'}
            btnLabel="Signup"
            Press={() => Signup()}
          />
          </View>
         
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginRight:windowWidth-290
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: 'grey', fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
