// import React from 'react';
// import { View, Text, Image } from 'react-native';

// export default class About extends React.Component {
//     render() {
//         return (
//             <Image source={{ uri: 'https://m.media-amazon.com/images/M/MV5BOTFjOTNlMWUtZTIwOS00OTI2LTg0YTMtOGFmMjVhNTMzZTNkXkEyXkFqcGdeQXVyODU2MDg1NzU@._V1_.jpg' }}
//                 style={{ width: '100%', height: '100%', position: 'absolute' }} blurRadius={2} />
//         );
//     }
// }

import React, { useState, useEffect } from 'react'
import { View, Text,StyleSheet, Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info';

const Details = () => {
 const [currentTime,updateTime] = useState(new Date().toLocaleTimeString())
 const [baseOs,updateBaseOs] = useState('')
  useEffect(()=>{
    console.log("Test props id: ",this.props.navigation.state.params.id);
    setTimeout(() => {
      updateTime(new Date().toLocaleTimeString())
    }, 1000);
    DeviceInfo.getBaseOs().then((value)=>{
      updateBaseOs(value)
    })
  },[currentTime])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.outerText}>Device Id         :   <Text style={styles.innerText}>{DeviceInfo.getDeviceId()}</Text></Text>
      <Text style={styles.outerText}>Brand Name   :   <Text style={styles.innerText}>{DeviceInfo.getBrand()}</Text></Text>
      <Text style={styles.outerText}>Build Number :   <Text style={styles.innerText}>{DeviceInfo.getBuildNumber()}</Text></Text>
      <Text style={styles.outerText}>Base OS          :   <Text style={styles.innerText}>{Platform.OS}</Text></Text>
      <Text style={styles.outerText}>Version            :   <Text style={styles.innerText}>{DeviceInfo.getVersion()}</Text></Text>
      <Text style={styles.outerText}>Current Time   :   <Text style={styles.innerText}>
        {currentTime}
      </Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
  outerText: {
    color: 'red',
    fontSize: 20,
    textAlign: 'left',
    width:'80%'
  },
  innerText: {
    color: 'blue',
    fontSize: 18
  }
});
export default Details