import React from 'react';
import AppNavigator from './AppNavigator';
import { AppState, Text, StyleSheet,View } from 'react-native';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      image: '',
      page: 0,
      items: [],
    }
  }

  componentWillUnmount() {
   AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    // console.log('Appstate: ', nextAppState);
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      // console.log('App has come to the foreground!');
    }
    this.setState({ appState: nextAppState });
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    if (this.props.image !== '') {
      this.setState({image: this.props.image});
    }
  }
  
  render() {
    return (
      <ErrorBoundary>
      <View style={{ flex: 1 }}>
        {/* {this.state.appState == 'active' ? ( */}
          <AppNavigator />
        {/* ) : (
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={{ fontSize: 30, textAlign: 'center', color: 'white' }}>Current state is: {this.state.appState}</Text>
            </View>
          )} */}
      </View>
      </ErrorBoundary>
    //   <View style={styles.container}>
    //   {this.state.image !== '' && (
    //     <Image source={{uri: this.state.image}} style={styles.image} />
    //   )}
    //   {this.state.image === '' && <Text>Try Sharing Image from Gallery</Text>}
    // </View>
      // <MaskedView
      //   style={{ flex: 1, flexDirection: 'row', height: '100%' }}
      //   maskElement={
      //     <View
      //       style={{
      //         // Transparent background because mask is based off alpha channel.
      //         backgroundColor: 'transparent',
      //         flex: 1,
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       }}
      //     >
      //       <Text
      //         style={{
      //           fontSize: 60,
      //           color: 'black',
      //           fontWeight: 'bold'
      //         }}
      //       >
      //         Basic Mask
      //       </Text>
      //     </View>
      //   }
      // >
        
      //   <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
      //   <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
      //   <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
      //   <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
      // </MaskedView>
    );
  }
}



export default App;
