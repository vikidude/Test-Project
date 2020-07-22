import React from 'react';
import {View,Text,StyleSheet,SafeAreaView, TouchableOpacity, NativeModules} from 'react-native'
import RNRestart from 'react-native-restart';

export class ErrorBoundary extends React.Component {

    state = {
      error: false,
      errorMsg: '',
    }

    static getDerivedStateFromError (error) {
      return { error: true };
    }
  
    componentDidCatch (error, errorInfo) {
      // deal with errorInfo if needed
      console.log("Error: ",error);
    this.setState({errorMsg: error})
      console.log("Info: ",errorInfo);
    }
  
  
    handleBackToSignIn = async () => {
      RNRestart.Restart();
    }
  
    render () {
  
      const { theme } = this.context;
  
      if (this.state.error) {
        return (
          <SafeAreaView
            style={styles.safeAreaView}
          >
            <View style={styles.container}>
              <View style={styles.content}>
                <Text style={{ fontSize: 32,color:'red' }}>Oops, Something Went Wrong</Text>
                <Text style={{ marginVertical: 10, lineHeight: 23, fontWeight: '500',color: 'blue' }}>
                {this.state.errorMsg.toString()}
                </Text>
                <TouchableOpacity onPress={() => this.handleBackToSignIn()} style={{ 
                    marginVertical: 15,marginHorizontal: '25%',borderWidth:2,padding: 2, borderRadius: 6,backgroundColor: 'rgba(112,121,122,0.5)'
                  }}>
                      <Text style={{textAlign:'center'}}>
                      Back to Sign In Screen
                      </Text>
                  </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        )
      } else {
        return this.props.children;
      }
    }
  }
  
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        margin: '3%'
    }
})
  export default ErrorBoundary;