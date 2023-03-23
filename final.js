import React from 'react';
import {TextInput,Dimensions} from 'react-native';
import {View, StyleSheet, Text,ImageBackground} from 'react-native';
import Background from './Background';
import Btn from './Btn';


const Final = props => {

    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;
  return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                    style={{
                    color: '#61c4b2',
                    fontSize: windowWidth- 300,
                    fontWeight: 'bold',
                    marginTop: windowHeight- 700,
                    marginHorizontal: windowWidth -380
                    }}>
                Attendance marked successfully
                {console.log('SUCCESS')}
                </Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground source={require("./assets/c.png")} style={{ height: 300 ,width :350 ,resizeMode: 'center',marginTop:30, marginBottom:30 }} />
            </View>

           
        </View>
  );
};

export default Final;