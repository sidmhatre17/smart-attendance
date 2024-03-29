import * as React from 'react';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import qr from './qr'
import H1 from './H1'
import otp from './otp'
import Final from './final'
import Ic from './Ic'
import FaceScan from './FaceScan'
import Attendance_record from './attendance_record'
import Record from './Record'
import FaceIC from './FaceIC';






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Attendance_record" component={Attendance_record} />
        {/* <Stack.Screen name="Record" component={Record} /> */}
        <Stack.Screen name="Record">{(props) => <Record {...props} />}</Stack.Screen>
        <Stack.Screen name="FaceIC" component={FaceIC} />
        <Stack.Screen name="Ic" component={Ic} />
        <Stack.Screen name="Final" component={Final} />
        <Stack.Screen name="H1" component={H1} />
        <Stack.Screen name="otp" component={otp} />
        <Stack.Screen name="FaceScan" component={FaceScan} />
        <Stack.Screen name="qr" component={qr} />
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;












