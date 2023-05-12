import React, { useEffect, useState } from 'react';
import {TextInput} from 'react-native';
import {View, StyleSheet, Text,ImageBackground,Dimensions} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { FlatList } from 'react-native-gesture-handler';



export default function Record(props) {

    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;

    const [Records,setRecords]= useState([]);

    
    useEffect(()=>{
    setRecords(props.route.params.attendanceData)
    },[])
    

    console.log(props,'sss')
    const item =({item})=>{
      return(
        <View style={{flexDirection:'row'}}>
          <View style={{width:79,backgroundColor:'rgb(220,220, 220)'}}>
            <Text>{item.date}</Text>
          </View>
          <View style={{width:80,backgroundColor:'rgb(220,220, 220)'}}>
            <Text>{item.time}</Text>
          </View>
          <View style={{width:78,backgroundColor:'rgb(220,220, 220)'}}>
            <Text>{item.subject_id}</Text>
          </View>
          <View style={{width:80,backgroundColor:'rgb(220,220, 220)'}}>
            <Text>{item.teacher_id}</Text>
          </View>
          <View style={{width:80,backgroundColor:'rgb(220,220, 220)'}}>
            <Text>{item.attendance_result}</Text>
          </View>
        </View>
      )
    }
    
  return (
        <View style={{justifyContent: 'center', alignItems: 'center',marginTop:'5%'}}>
        <View>
        <Text
          style={{
            color: 'black',
            fontSize: 34,
            fontWeight: 'bold',
            marginTop: 100,
            marginRight:windowWidth -370
          }}>
          Attendance Record
        </Text>
        </View>

        
         <View style={{justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
         <View style={{flexDirection:'row'}}>
          <View style={{width:75, backgroundColor:'grey',alignItems:'center'}}>
            <Text>Date</Text>
          </View>
          <View style={{width:75,backgroundColor:'grey',alignItems:'center'}}>
            <Text>Time</Text>
          </View>
          <View style={{width:75,backgroundColor:'grey',alignItems:'center'}}>
            <Text>Subject</Text>
          </View >
          <View style={{width:75,backgroundColor:'grey',alignItems:'center'}}>
            <Text>Teacher</Text>
          </View>
          <View style={{width:80,backgroundColor:'grey'}}>
            <Text>Attendance</Text>
          </View>
        </View>
          <FlatList
             data={Records}
             //data={st}
              //data={Records}
              renderItem={item}
              keyExtractor={(item,index)=>index.toString()}
          />
         </View>
           
         </View>
        
  );
};

