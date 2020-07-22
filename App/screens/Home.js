// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Appearance,
//   Image
//   ,Linking,Platform
// } from 'react-native';
// import ContentLoader from 'react-native-content-loader'
// import { Circle, Rect } from 'react-native-svg'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../const/DimensionConst';

// const colorScheme = Appearance.getColorScheme(); //dark, light

// class Home extends React.Component {

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', paddingTop: '5%', }}>
//         <TouchableOpacity onPress={() => this.props.navigation.navigate('ImageDisplay')}>
//           <Text>
//             Go To About
//               </Text>
//         </TouchableOpacity>
//         <View style={{ backgroundColor: 'cyan' }}>
//           <Text style={{}}>
//             Vigneshwaran
//             </Text>
//         </View>

//         {/* <ContentLoader
//             primaryColor="#e8f7ff"
//             secondaryColor="#4dadf7"
//             duration={700}
//             height={20}
//             >
//               <Rect x="260" y="10" rx="0" ry="0" width="40" height="10" />
//             </ContentLoader>
//         <FlatList
//           data={['1','2','3']}
//           horizontal={true}
//           contentContainerStyle={{marginLeft:'5%',marginTop:'10%',height:'30%'}}
//           renderItem={(item,index)=>(
//             <ContentLoader
//             primaryColor="#e8f7ff"
//             secondaryColor="#4dadf7"
//             duration={700}
//             height={150}
//             width={130}
//             >
//             <Circle x="20" y="0" cx="40" cy="40" r="40" />
//             <Rect x="0" y="100" rx="3" ry="3" width="120" height="10" />
//             <Rect x="0" y="120" rx="3" ry="3" width="50" height="10" />
//             <Rect x="70" y="120" rx="3" ry="3" width="50" height="10" />
//             <Rect x="0" y="140" rx="3" ry="3" width="120" height="10" />
//           </ContentLoader>
//           )}
//           keyExtractor={(item,index)=>index}
//           />

//            <ContentLoader
//             primaryColor="#e8f7ff"
//             secondaryColor="#4dadf7"
//             duration={700}
//             height={150}
//             width={130}
//             >
//               <Rect x="0" y="0" rx="3" ry="0" height="130" width="400" />
//             </ContentLoader> */}
//       </View>
//     );
//   }
// }

// export default Home;

// // import React, { useState, useEffect } from 'react'
// // import { View, Text, FlatList, TouchableOpacity } from 'react-native'

// // function Home() {
// //   const [data, setData] = useState([])

// //   useEffect(() => {
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //       .then(res => res.json())
// //       .then(res => {
// //         setData(res)
// //       })
// //       .catch(error => {
// //         console.log(error)
// //       })
// //   }, [])

// //   const Separator = () => (
// //     <View
// //       style={{
// //         borderBottomColor: '#d3d3d3',
// //         borderBottomWidth: 1,
// //         marginTop: 10,
// //         marginBottom: 10
// //       }}
// //     />
// //   )

// //   return (
// //     <View style={{ flex: 1 }}>
// //       <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
// //         <FlatList
// //           data={data}
// //           keyExtractor={item => item.id}
// //           ItemSeparatorComponent={Separator}
// //           renderItem={({ item }) => (
// //             <TouchableOpacity onPress={() => alert('Nav to details screen')}>
// //               <Text style={{ fontSize: 24 }}>{item.name}</Text>
// //             </TouchableOpacity>
// //           )}
// //         />
// //       </View>
// //     </View>
// //   )
// // }

// // export default Home

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import MaskedView from '@react-native-community/masked-view';

const twitter_logo = 'https://lh3.googleusercontent.com/proxy/H_Qzka4gGcKDiMvONdZVSKM6CR4L0zPmbQWLgh5U32sO6LAL5uM2XBe0dp3sNKrNObL5v3Es62O1x4xxo3aEyyvCJ1OYhsWEbFNgP9wEyltz49OHkaI'

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loadingProgress: new Animated.Value(0),
      animationDone: false,
      image: '',
    }
  }


  componentDidMount() {
    // throw new Error('testing ErrorBoundary');
    Animated.timing(this.state.loadingProgress, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      delay: 100
    }).start(() => this.setState({ animationDone: true }))
    console.log('props: ',this.props.image)
    if (this.props.image !== '') {
      this.setState({image: this.props.image});
    }
  }
  render() {
    const whiteLayer = this.state.animationDone ? null : <View style={[StyleSheet.absoluteFill, { backgroundColor: 'white', flex: 1 }]} />
    const blueLayer = this.state.animationDone ? null : <View style={[StyleSheet.absoluteFill, { backgroundColor: '#7F23D9', flex: 1 }]} />

    const imageScale = {
      transform: [
        {
          scale: this.state.loadingProgress.interpolate({
            inputRange: [0, 50, 100],
            outputRange: [0, 25, 40]
          })
        }
      ]
    }
    const opacity = {
      opacity: this.state.loadingProgress.interpolate({
        inputRange: [0, 25, 50],
        outputRange: [0, 0.15, 1],
        extrapolate: 'clamp'
      })
    }
    return (
      <View style={{ flex: 1 }}>
        {blueLayer}
        <MaskedView
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          maskElement={
            <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
              {/* <Animated.Image source={require('../assets/twitter_logo.png')} style={[{ width: 1000, resizeMode: 'cover',height: 1000 },imageScale]} /> */}
              <Animated.View style={[imageScale, { backgroundColor: 'greenyellow', borderWidth: 2, borderRadius: 20, width: 40, height: 40 }]} />
            </View>
          }
        >
          {whiteLayer}
          <View style={{ alignItems: 'flex-end', marginRight: '2%', width: '100%' }}>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
              <Text>Drawer</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[opacity, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
              <Text style={{fontSize:20,color:'green',borderWidth:1, borderColor: 'cyan',padding: '2%',
            backgroundColor:'lightblue'}}>
              Navigate To Device Info
            </Text>
            </Animated.View>
          </TouchableOpacity>
        </MaskedView>
      </View>
    );
  }
}