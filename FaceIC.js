import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native';
import {View, StyleSheet, Text,ImageBackground,Dimensions} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import Field from './Field';


const FaceIC = props => {

    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;

    const submit = ()=>{
        props.navigation.navigate("FaceScan")
    }
    
    
  return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground source={require("./assets/Screenshot_2.png")} style={{ height: 300 ,width :350 ,resizeMode: 'center',marginTop:210,marginBottom:30 }} />
            </View>
           
            <Text style={{fontSize: 20, color:'#221f29', fontWeight: 'bold'}}>
            Face Mismatch 
            </Text>
         
            
            <Btn textColor='white' bgColor={'#221f29'} btnLabel="Try again" Press={() =>props.navigation.navigate('FaceScan')}/>



          
           
        </View>
  );
};

export default FaceIC;