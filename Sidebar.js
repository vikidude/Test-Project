import React from 'react';
import {View,Text,StyleSheet,ImageBackground,Image,Dimensions, ScrollView} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
const {height,width} = Dimensions.get('screen');
const bg_img = 'https://lh3.googleusercontent.com/proxy/fT2LGXy5g5gX8Pc-STQNTGG7B76Fo5mU0zOlWNnREGSQ7tiZ3JiUynEKIiX9Od7qIrkeUu0vDHou81-vUeP2KvtVVTCVP8e98BaQ68RlwD4GbOtkMZKOlyV7BwqpwQfIFSRuoBU4fHZGcJPMWPcZyVZV3H-veLat9AjHgaEV'
const img = 'https://images.edexlive.com/uploads/user/ckeditor_images/article/2019/12/18/IMG_20181202_132156.png'

const Sidebar = props =>{

        return(
            <View style={{flex:1}}>
                <ImageBackground source={require('./App/assets/blog_dp.jpg')} style={{width: undefined,padding:16, paddingTop: 48}}>
                    <Image source={require('./App/assets/pratap_drone_scientist.jpg')} style={{width: 80, height: 80, borderRadius: 40,borderWidth: 1}} />
                    <Text style={{color:'white',fontSize: 20,fontWeight:'bold',marginVertical: 8}}>Pratap</Text>
                </ImageBackground>
                <View style={{flex:1}}>
                    <DrawerNavigatorItems {...props} />
                </View>
            </View>
        );
}

export default Sidebar;