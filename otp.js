import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native';
import {View, StyleSheet, Text,ImageBackground} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import Field from './Field';

const H1 = props => {

    const submit = ()=>{
        if (otp==1234){
            props.navigation.navigate("qr")
        }
        else{
            alert("Invalid OTP");
        }
    }

    const [otp,SetOtp]= useState("")
  return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground source={require("./assets/Screenshot_2.png")} style={{ height: 300 ,width :350 ,resizeMode: 'center',marginTop:210,marginBottom:30 }} />
            </View>
            <Text style={{fontSize: 40, color:'#221f29', fontWeight: 'bold'}}>
            Enter the OTP
            </Text>
            <Field 
                placeholder="OTP" 
                keyboardType={'numeric'}
                value={otp}
                onChangeText={(D)=>SetOtp(D)}
                 
            />
            <Btn textColor='white' bgColor={'#221f29'} btnLabel="submit OTP" Press={() => submit()}/>



          
           
        </View>
  );
};

export default H1;
