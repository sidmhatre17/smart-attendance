import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import {otpv} from './otp';

export default function QR(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  

  //const otp = JSON.stringify(otpv);
  //const t =JSON.stringify(text)
  const state={
      subject_id: text,
      student_id: "2c09996d-9da7-4d31-8103-92dcd55aa0c7",
      attendance_result : "P",
      otp: otpv

}

const url ="http://192.168.137.1:8000/api/mark_attendance/"

// state = JSON.stringify(state)
  
  const Submit=(e)=> {
    console.log(otpv)
    axios.post(url,state)
      .then(response =>{
        if (response.status==200){
          props.navigation.navigate('Final')
        }
        else{
          props.navigation.navigate('Ic')
        }
        console.log(response)
        {<View>
           <Text style={styles.maintext}>{response.status}</Text>
        </View>}
     
      })
      .catch(error =>{
        props.navigation.navigate('Ic')
        console.log(error.response.data)
        
      })

  }

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }



  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {<Button title={'Submit'} onPress={Submit} color='tomato' />}
      <View style={{marginTop:10}}>
      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
      </View>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});
