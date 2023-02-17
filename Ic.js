import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native';
import {View, StyleSheet, Text,ImageBackground,Dimensions} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import Field from './Field';

let otpv;

const Ic = props => {

    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;

    const submit = ()=>{
        otpv=otp;
        props.navigation.navigate("qr")
        // if (otp==1234){
          
            
           
        // }
        // else{
        //     alert("Invalid OTP");
        // }
    }
        
    const [otp,SetOtp]= useState("");
    
  return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground source={require("./assets/Screenshot_2.png")} style={{ height: 300 ,width :350 ,resizeMode: 'center',marginTop:210,marginBottom:30 }} />
            </View>
           
            <Text style={{fontSize: 20, color:'#221f29', fontWeight: 'bold'}}>
            Invalid OTP or QR code 
            </Text>
         
            
            <Btn textColor='white' bgColor={'#221f29'} btnLabel="Try again" Press={() =>props.navigation.navigate('otp')}/>



          
           
        </View>
  );
};

export {otpv};
export default Ic;
