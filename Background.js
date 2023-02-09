import React from 'react';
import {View, ImageBackground,Dimensions} from 'react-native';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;


const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground source={require("./assets/leaves.jpg")} style={{ height: windowHeight -45,width: windowWidth }} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}

export default Background;
