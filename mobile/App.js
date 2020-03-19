import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { StatusBar, YellowBox } from 'react-native';


YellowBox.ignoreWarnings([
  'unrecognized WebSocket'
])

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor='#161426' />  
      <Routes />
    </>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#161426',
//     alignItems: 'center',
//     justifyContent: 'center',
//     //borderRadius: '2px',
//     borderColor: '#06050D',
//   },
//   text:{
//     color: '#F24C27',
//     textShadowColor: '#F22222',
//     textShadowOffset: { width: 0, height: 0 }, 
//     textShadowRadius: 9,
//     fontWeight: 'bold',
//     fontSize: 32,
//   },
//   text2:{
//     color: '#BF0436',
//     textShadowColor: '#F22222',
//     textShadowOffset: { width: 0.5, height: 0.5 }, 
//     textShadowRadius: 15,
//     fontWeight: 'bold',
//     fontSize: 32,
//   },
// });
//
//#F25CA2; }
//#0433BF; }
//#032CA6; }
//#021859; }
//#0B9ED9; }//


//#BF0436; }
//#06050D; }
//#161426; }
//#F24C27; }
//#F22222; }