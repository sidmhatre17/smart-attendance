import React from 'react';
import {TextInput} from 'react-native';
import {View, StyleSheet, Text,ImageBackground} from 'react-native';
import Background from './Background';
import Btn from './Btn';

const H1 = props => {
  return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground source={require("./assets/Screenshot_2.png")} style={{ height: 300 ,width :350 ,resizeMode: 'center',marginTop:210,marginBottom:30 }} />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Btn textColor='white' bgColor={'#221f29'} btnLabel="Mark Your Attendance" Press={() =>props.navigation.navigate('otp') } />
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Btn textColor='white' bgColor={'#221f29'} btnLabel="Check attendance Record"  />
            </View>
           
        </View>
  );
};

export default H1;
