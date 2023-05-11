import React,{useState,useEffect} from 'react';
import {TextInput,Dimensions} from 'react-native';
import {View, StyleSheet, Text,ImageBackground,Platform,TouchableOpacity,Pressable} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import DateTimePicker from '@react-native-community/datetimepicker';
import Field from './Field';
import axios from 'axios';
import { getAuth } from "firebase/auth";
import {db} from './firebase';
import {ref,onValue, Snapshot ,child,get,getDatabase} from 'firebase/database';

const useFetchData1 = () => {
  const [im, setIm] = useState([]);

  useEffect(() => {

   
    const imRef = ref(db, 'images/');
    onValue(imRef, (Snapshot) => {
      const data = Snapshot.val();
      const auth = getAuth();
      const user = auth.currentUser;
      // uidd = JSON.stringify(user.uid);
      const uidd=user.uid;
      // console.log(uidd,'uidd');
      const strg= data[uidd];;
      const arr = strg.split("++");
      setIm(arr[1]);
    });
  }, []);
  return im;
}

export default function Attendance_record(props) {

    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;
    const [sdate,setsdate] =useState(new Date());
    const [edate,setedate] =useState(new Date());
    const[ssdate,setssdate]=useState(new Date());
    const[eedate,seteedate]=useState(new Date());
    const [date,setdate] =useState(new Date());
    const [showpicker1,setshowpicker1] =useState(false);
    const [showpicker2,setshowpicker2] =useState(false);


    const sid=useFetchData1();

    


    const toggle1 = ()=>{
      setshowpicker1(!showpicker1)
    }

    const toggle2 = ()=>{
      setshowpicker2(!showpicker2)
    }

    const onChange1 =({type},selectedDate)=>{
      if (type=="set"){
        const currentDate =selectedDate;
        setdate(currentDate);
        if(Platform.OS=== "android"){
          toggle1();
          setssdate(currentDate.toISOString().split('T')[0]);
          setsdate(currentDate.toDateString());
        }
      }
      else{
        toggle1();
      }
    }


    const onChange2 =({type},selectedDate)=>{
      if (type=="set"){
        const currentDate =selectedDate;
        setdate(currentDate);
        if(Platform.OS=== "android"){
          toggle2();
          seteedate(currentDate.toISOString().split('T')[0]);
          setedate(currentDate.toDateString());
        }
      }
      else{
        toggle2();
      }
    }



    const Submit= () =>{

     

      const state={
          student_id:sid,
          start_date: ssdate,
          end_date: eedate,
    
    }

    const url ="https://96f9-117-205-11-137.ngrok-free.app/api/get_record/"

    console.log(state,'state')
    axios.post(url,state)
    .then(response =>{
      if (response.status==200){
        console.log(response.data[0],'response')
         props.navigation.navigate('Record')
       
      }
      else{
        props.navigation.navigate('Record')
        console.log(response.status,'res-status')
      }
   
    })
    .catch(error =>{
      props.navigation.navigate('Record')
      console.log('ee',error.response.data)
      
    })


    };
  return (
    // <Background>
    <View style={{alignItems: 'center', width: 460}}>
      <Text
        style={{
          color: 'black',
          fontSize: 34,
          fontWeight: 'bold',
          marginTop: 110,
          marginBottom :80,
          marginRight:windowWidth -290
        }}>
        Check Attendance
          
      </Text>
    
      <View
        style={{
          backgroundColor: 'grey',
          height: 300,
          width: 420,
        
          borderTopLeftRadius: 50,
          marginRight:windowWidth -350,
          paddingTop: 50,
          alignItems: 'center',
        }}>

       {showpicker1 && ( <DateTimePicker
          mode="date"
          display="calendar"
          value={date}
          onChange={onChange1}
        />)}


        {showpicker2 && ( <DateTimePicker
          mode="date"
          display="calendar"
          value={date}
          onChange={onChange2}
        />)}
     
        
        {!showpicker1 && ( <Pressable onPress={toggle1}>
        <Field 
            placeholder="start Date" 
            value={sdate}
            onChangeText={(D)=>setsdate(D)} 
            editable ={false}
          />
       </Pressable>)}

      
    
       {!showpicker2 && ( <Pressable onPress={toggle2}>
          <Field 
            placeholder="End Date"
            value={edate}
            onChangeText={(D)=>setedate(D)} 
            editable ={false}
          />
        </Pressable>)}
       
        <View style={{marginRight:windowWidth-290}}>
        <Btn
          textColor="white"
          bgColor={'#221f29'}
          btnLabel="Get Attendance Record"
          Press={() => Submit()}
        />
        </View>
       
  
      </View>
    </View>
  // </Background>
  );
};

