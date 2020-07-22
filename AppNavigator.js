import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './App/screens/Home'
import Details from './App/screens/Details';
import ImageDisplay from './App/screens/ImageDisplay';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Sidebar from './Sidebar';
import { Dimensions } from 'react-native';

const MainDrawer = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home Page'
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Details Page'
    }
  },
  ImageDisplay: {
    screen: ImageDisplay,
    navigationOptions: {
      title: 'Image Display Page'
    }
  }
},{
  initialRouteName: 'Home',
  drawerWidth: Dimensions.get('window').width *0.75,
  drawerPosition: 'left',
  hideStatusBar: false,
  contentOptions: {
    activeBackgroundColor: 'rgba(212,118,207,0.2)',
    activeTitnColor: '#531158',
    itemsContainerStyle: {
      marginTop: 10,
      marginHorizontal: 8
    },
    itemStyle: {
      borderRadius: 4
    }
  },
  contentComponent: props=>  <Sidebar {...props} />
})

const MainApp = createStackNavigator({
  Home: {
    screen: MainDrawer,
    navigationOptions: {
      headerShown: false
    },
    path: 'home'
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: 'Details'
    },
    path: 'details/:userId'
  },
  ImageDisplay: {
    screen: ImageDisplay,
    navigationOptions: {
      headerTitle: 'ImageDisplay'
    },
    path: 'imgDisplay'
  }
})
const AppContainer = createAppContainer(MainApp);
export default () => {
  const prefix = 'myapp://'
  return <AppContainer uriPrefix={prefix} />
}