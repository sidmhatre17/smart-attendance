import React from 'react';
import {View, StyleSheet, Text,Dimensions} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';

const {dheight,dwidth}=Dimensions.get('window')
const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 64, marginBottom: 400 }}> </Text>
      <View >
        <Btn   bgColor={'#c4ceab'} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
        <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;
