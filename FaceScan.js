import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Button,TouchableOpacity,Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';
import tejas from './assets/tejas.jpeg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 const FaceScan = props => {
  const [hasPermission, setHasPermission] = useState(null);
  const [faceDetected, setFaceDetected] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [buttonPressed, setButtonPressed] = useState(false);
  const cameraRef = useRef(null);

   useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

 

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ quality: 0.5 });
      setCapturedImage(photo);
      setButtonPressed(true);
  
      const url2 = "/face_match";
      const tejasuri=Image.resolveAssetSource(tejas).uri

      const myuri=Image.resolveAssetSource(photo).uri

      const dataa = new FormData();
      dataa.append("file1", {
        uri: myuri,
        name: "face.jpg",
        type: "image/jpeg",
      });
      dataa.append("file2", {
        uri: tejasuri,
        name: "tejas.jpeg",
        type: "image/jpeg",
      });

      console.log(dataa);
      console.log(cameraRef);

      axios.post(url2, dataa, {
        headers: {
          "content-type": "multipart/form-data",
          "Accept": 'application/json',
        },
      })
        .then((response) => {
          console.log(response.data);
          setHasPermission(null);
          props.navigation.navigate('qr');
          // Handle response
        })
        .catch((error) => {
          console.log(error);
          console.log('err');
          setHasPermission(null);
          props.navigation.navigate('qr');
          // Handle error
        });
            
      
    }
  };

  const handleFacesDetected = (face) => {
    if (face.faces.length > 0) {
      setFaceDetected(true);
    }
  };

  const renderCamera = () => (
    <Camera
      style={styles.camera}
      type={Camera.Constants.Type.front}
      onFacesDetected={faceDetected ? null : handleFacesDetected}
      faceDetectorSettings={{
        mode: 'fast',
        detectLandmarks: 'none',
        runClassifications: 'none',
        minDetectionInterval: 1000,
        tracking: false,
      }}
      ref={cameraRef}
    >
   <TouchableOpacity style={[styles.button, buttonPressed && styles.buttonPressed]} onPress={takePicture}>
        <Text style={styles.buttonText}>Scan Face</Text>
      </TouchableOpacity>
    </Camera>
  );

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (renderCamera());
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // camera: {
  //   flex: 1,
  //   width: '100%',
  //   height: '100%',
  // },
    camera: {
    alignSelf: 'center',
    marginTop: windowHeight - 580,
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
    width: 300,
    overflow: 'hidden',
    borderRadius: 60,
    backgroundColor: 'tomato',
    shadowColor: "tomato",
    shadowOffset: {
	    width: 0,
	    height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    padding: 16,
    borderRadius: 50,
    backgroundColor: '#fff',
    elevation: 5,
  },
  buttonPressed: {
    transform: [{ scale: 0.9 }],
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FaceScan;
