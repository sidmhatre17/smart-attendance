import React, { useEffect, useState } from 'react';
import {TextInput} from 'react-native';
import {View, StyleSheet, Text,ImageBackground,Dimensions} from 'react-native';
import Background from './Background';
import Btn from './Btn';

const Record = props => {

    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;

    const [Records,setRecords]= useState([]);


    useEffect(()=>{
      GetRecords();
    },[])

    const GetRecords = async()=>{
        const url='https://96f9-117-205-11-137.ngrok-free.app/api/get_record/';
        let result =await fetch(url)
        result= await result.json()
        console.log(result);
        setRecords(result);
    }

    console.log('records',Records);
  return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View>
        <Text
          style={{
            color: 'black',
            fontSize: 34,
            fontWeight: 'bold',
            marginTop: 60,
            marginRight:windowWidth -370
          }}>
          Attendance Record
        </Text>
        </View>
         
           
        </View>
  );
};

export default Record;