import React from 'react';
import {TextInput,Dimensions} from 'react-native';
import {darkGreen} from './Constants';

const Field = props => {

  
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;


  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: darkGreen, paddingHorizontal: 10,marginRight: windowWidth -300, width: windowWidth -50, backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor={darkGreen}></TextInput>
  );
};

export default Field;
