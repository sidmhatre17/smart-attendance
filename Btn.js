import {View, Text, TouchableOpacity,Dimensions} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press}) {

  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;
  
  return (
    <TouchableOpacity
  
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width:windowWidth -50,
        paddingVertical: 5,
        marginVertical: 10,
        justifyContent:'center'
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
